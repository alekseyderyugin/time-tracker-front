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
    <!-- Top Navigation Bar (Mobile/Tablet) -->
    <div class="top-navbar">
        <div class="top-navbar-left">
            <button class="mobile-menu-toggle" id="mobileMenuToggle">
                <div class="hamburger">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </button>
            <div class="top-navbar-brand">TimeTracker</div>
        </div>
        <div class="top-navbar">
            <div class="top-navbar-left">
                <button class="mobile-menu-toggle" id="mobileMenuToggle">
                    <div class="hamburger">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </button>
                <div class="top-navbar-brand">TimeTracker</div>
            </div>
        </div></div>

    <!-- Desktop Toggle -->
    <button class="desktop-toggle sidebar-visible" id="desktopToggle">☰</button>

    <!-- Sidebar Overlay (Mobile) -->
    <div class="sidebar-overlay" id="sidebarOverlay"></div>

    <!-- Sidebar -->
    <aside class="sidebar" id="sidebar">
        <div class="logo">TimeTracker</div>
        <nav>
            <NuxtLink class="menu-item" activeClass="active" to="/tracker">
                <TrackerIcon/>
                <span>Трекер</span>
            </NuxtLink>
            <NuxtLink class="menu-item" activeClass="active" to="/projects">
                <TrackerIcon/>
                <span>Проекты</span>
            </NuxtLink>
<!--            <a href="#" class="menu-item" :class="['menu-item', {'active': props.active}]">
                <slot name="icon"></slot>
                <span></span>
            </a>

            <NavMenuItem :active="true">
                <slot name="icon"><TrackerIcon/></slot>
                <slot>Трекер</slot>
            </NavMenuItem>
            <NavMenuItem>
                <slot name="icon"><TrackerIcon/></slot>
                <slot>Проекты</slot>
            </NavMenuItem>-->
        </nav>
    </aside>

    <main class="main-wrapper" id="mainWrapper">
        <div class="content-container">
            <NuxtPage />
        </div>
    </main>

</template>

<script setup>
import {useHead, useRouter} from "nuxt/app";
import NavMenuItem from "./domain/tracker/core/components/atoms/NavMenuItem.vue";
import TrackerIcon from "./domain/core/atoms/Icons/TrackerIcon.vue";

const router = useRouter()
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