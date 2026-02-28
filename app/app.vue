<template>
<!--    <!DOCTYPE html>
    <html lang="ru">
    <head>
&lt;!&ndash;
        <meta charset="UTF-8">
&ndash;&gt;
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Time Tracker - Responsive Layout</title>
        <link href="/assets/bootstrap/bootstrap.min.css" rel="stylesheet">
    </head>
    <body></body>
    </html>-->
    <NuxtPage />
</template>

<script setup>
import {useHead} from "nuxt/app";

useHead({
    script: [
        { src: '/assets/bootstrap/bootstrap.bundle.min.js', defer: true }
    ],
    link: [
        {
            href: '/assets/bootstrap/bootstrap.min.css',
            rel: 'stylesheet'
        }
    ],
    meta: [
        {
            name: 'viewport',
            content: 'width=device-width, initial-scale=1.0'
        }
    ],
})
</script>

<style>
</style>