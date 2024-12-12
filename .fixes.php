#!/usr/bin/env php
<?php

function clean(string $file): void
{
    // echo '-> ' . $file . "\n";

    if (
        strpos($file, '/tmp/') ||
        strpos($file, '/dist/')
    ) {
        return;
    }

    $content = file_get_contents($file);

    $from = [];
    $to = [];

    // Unused spaces and CR
    $from[] = '/^[ \t]+$/m';
    $to[] = '';
    $from[] = '/\n\n\n\n/';
    $to[] = "\n\n";
    $from[] = '/\n\n\n/';
    $to[] = "\n\n";
    $from[] = '/\n\n\n\n/';
    $to[] = "\n\n";
    $from[] = '/\n\n\n/';
    $to[] = "\n\n";
    $from[] = '/\n    }[ \t]*\n[\n \t]*\n}/';
    $to[] = "\n    }\n}";
    $from[] = '/\n        }[ \t]*\n[\n \t]*\n    }/';
    $to[] = "\n        }\n    }";

    // Ponctuations doubles
    $from[] = '/^([^:]+)[ \t]+([:;?!]) *$/m';
    $to[] = '$1&nbsp;$2';
    $from[] = '/^([^:]+)[ \t]+([:;?!] +)(.+)$/m';
    $to[] = '$1&nbsp;$2 $3';

    // Blanc en fin de ligne
    $from[] = '/[ \t]+$/m';
    $to[] = '';

    $content = preg_replace($from, $to, $content);
    file_put_contents($file, trim($content) . "\n");
}

function parse(string $dir): void
{
    // Files to blacklist
    $blackList = [];
    $dirLen = strlen(dirname(__DIR__)) + 1;

    foreach (glob($dir . '/*') as $file) {
        if (is_dir($file)) {
            parse($file);
        } elseif (preg_match('/^.*\.md.?$/', $file) && !in_array(substr($file, $dirLen), $blackList, true)) {
            clean($file);
        }
    }
}

parse(__DIR__ . '/src/content/docs');
