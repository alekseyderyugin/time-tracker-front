<template>
    <!-- Top Navigation Bar (Mobile/Tablet) -->
    <div class="top-navbar">
        <div class="top-navbar-left">
            <button @click="toggleMenu" class="mobile-menu-toggle" :class="{'active': isSidebarActive}" id="mobileMenuToggle">
                <div class="hamburger">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </button>
            <div class="top-navbar-brand">TimeTracker</div>
        </div>
    </div>

    <!-- Sidebar Overlay (Mobile) -->
    <div class="sidebar-overlay" id="sidebarOverlay"></div>

    <!-- Sidebar -->
    <aside class="sidebar" :class="{'show': isSidebarActive}" id="sidebar">
        <div class="logo">TimeTracker</div>
        <nav>
            <a href="#" class="menu-item active">
                <svg class="menu-icon" viewBox="0 0 24 24">
                    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.2 3.2.8-1.3-4.5-2.7V7z"/>
                </svg>
                <span>Трекер</span>
            </a>
        </nav>
    </aside>

    <!-- Main Content -->
    <main class="main-wrapper" id="mainWrapper">
        <div class="content-container">
            <!-- Running Timer -->
            <AppTimer/>
        </div>
    </main>
</template>

<script setup>
import {onMounted, ref} from "vue";
import AppTimer from "../components/organisms/AppTimer.vue";

onMounted(() => {
    /*const sidebar = document.getElementById('sidebar');
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const sidebarOverlay = document.getElementById('sidebarOverlay');

    // Mobile menu toggle
    mobileMenuToggle.addEventListener('click', function() {
        sidebar.classList.toggle('show');
        sidebarOverlay.classList.toggle('show');
        this.classList.toggle('active');
    });

    // Overlay click (mobile)
    sidebarOverlay.addEventListener('click', function() {
        sidebar.classList.remove('show');
        sidebarOverlay.classList.remove('show');
        mobileMenuToggle.classList.remove('active');
    });

    // Handle window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth > 991) {
            sidebar.classList.remove('show');
            sidebarOverlay.classList.remove('show');
            mobileMenuToggle.classList.remove('active');
        }
    });*/
})

const isSidebarActive = ref(false)

function toggleMenu() {
    isSidebarActive.value = !isSidebarActive.value
}
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
    background: #f5f5f5;
    color: #333;
    overflow-x: hidden;
}

/* Sidebar */
.sidebar {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 260px;
    background: #fff;
    border-right: 1px solid #e0e0e0;
    padding: 20px 0;
    transition: transform 0.3s ease;
    z-index: 1040;
}

.sidebar.hidden {
    transform: translateX(-260px);
}

.logo {
    padding: 0 20px 30px;
    font-size: 20px;
    font-weight: 600;
    color: #2c3e50;
}

.menu-item {
    display: flex;
    align-items: center;
    padding: 12px 20px;
    cursor: pointer;
    transition: background 0.2s;
    color: #666;
    text-decoration: none;
}

.menu-item:hover {
    background: #f8f9fa;
}

.menu-item.active {
    background: #e3f2fd;
    color: #1976d2;
    border-left: 3px solid #1976d2;
}

.menu-icon {
    width: 20px;
    height: 20px;
    margin-right: 12px;
    transition: transform 0.2s ease;
    fill: currentColor;
}

.menu-item:hover .menu-icon {
    transform: scale(1.1);
}

/* Main Content Area */
.main-wrapper {
    min-height: 100vh;
    transition: margin-left 0.3s ease;
    margin-left: 260px;
    padding: 20px;
    padding-top: 80px;
}

.main-wrapper.sidebar-hidden {
    margin-left: 0;
}

.content-container {
    max-width: 100%;
    margin: 0 auto;
}

/* Top Navigation Bar (Mobile/Tablet) */
.top-navbar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 60px;
    background: #fff;
    border-bottom: 1px solid #e0e0e0;
    display: none;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    z-index: 1045;
    box-shadow: 0 2px 4px rgba(0,0,0,0.05);
}

.top-navbar-left {
    display: flex;
    align-items: center;
    gap: 15px;
}

.top-navbar-brand {
    font-size: 18px;
    font-weight: 600;
    color: #2c3e50;
}

/* Mobile Menu Toggle */
.mobile-menu-toggle {
    width: 40px;
    height: 40px;
    background: transparent;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
}

.mobile-menu-toggle:hover {
    background: #f8f9fa;
    border-radius: 4px;
}

.hamburger {
    width: 24px;
    height: 18px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.hamburger span {
    display: block;
    height: 2px;
    width: 100%;
    background: #666;
    border-radius: 2px;
    transition: 0.3s;
}

.mobile-menu-toggle.active .hamburger span:nth-child(1) {
    transform: rotate(45deg) translate(5px, 5px);
}

.mobile-menu-toggle.active .hamburger span:nth-child(2) {
    opacity: 0;
}

.mobile-menu-toggle.active .hamburger span:nth-child(3) {
    transform: rotate(-45deg) translate(6px, -6px);
}

/* Overlay for mobile */
.sidebar-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1030;
    display: none;
}

.sidebar-overlay.show {
    display: block;
}

/* Stats Section - Variant B (Bold) */
.stats-section {
    margin-bottom: 30px;
}

.stats-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 20px;
}

.stat-card {
    background: #fff;
    border-radius: 8px;
    padding: 25px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.1);
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
}

.stat-card:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
}

.stat-card.today {
    border: 2px solid #1976d2;
    background: linear-gradient(135deg, #ffffff 0%, #f8fcff 100%);
}

.stat-label {
    font-size: 13px;
    color: #999;
    margin-bottom: 12px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    font-weight: 500;
}

.stat-main {
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-bottom: 12px;
}

.stat-currency {
    font-size: 32px;
    color: #27ae60;
    font-weight: 600;
    line-height: 1;
}

.stat-time {
    font-size: 24px;
    font-weight: 500;
    color: #2c3e50;
    line-height: 1;
}

.stat-progress {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-top: 12px;
}

.stat-progress-icon {
    width: 16px;
    height: 16px;
    fill: #27ae60;
}

.stat-progress-text {
    font-size: 14px;
    color: #27ae60;
    font-weight: 600;
}

.stat-progress.negative .stat-progress-icon,
.stat-progress.negative .stat-progress-text {
    fill: #e74c3c;
    color: #e74c3c;
}

.stat-progress-percent {
    font-size: 13px;
    color: #27ae60;
    font-weight: 500;
    margin-left: auto;
}

.stat-progress.negative .stat-progress-percent {
    color: #e74c3c;
}

/* Mini Trend Chart */
.mini-chart {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 40px;
    opacity: 0.1;
}

.mini-chart svg {
    width: 100%;
    height: 100%;
}
.timer-running {
    background: #fff;
    border-radius: 8px;
    padding: 30px 40px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.1);
    border-left: 4px solid #27ae60;
}

.timer-running-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    flex-wrap: wrap;
}

.timer-running-info {
    flex: 1;
    min-width: 250px;
}

.timer-running-task {
    font-size: 18px;
    font-weight: 500;
    color: #2c3e50;
    margin-bottom: 8px;
}

.timer-running-meta {
    display: flex;
    align-items: center;
    gap: 12px;
    flex-wrap: wrap;
}

.timer-running-time {
    font-size: 24px;
    font-weight: 300;
    color: #27ae60;
    font-variant-numeric: tabular-nums;
}

.timer-pulse {
    width: 8px;
    height: 8px;
    background: #27ae60;
    border-radius: 50%;
    animation: pulse 2s infinite;
}

@keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.3; }
}

.project-badge {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 3px 10px;
    background: #f8f9fa;
    border-radius: 12px;
    font-size: 12px;
    color: #666;
    text-decoration: none;
}

.project-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
}

.timer-running-actions {
    display: flex;
    gap: 10px;
}

.btn-stop {
    padding: 12px 24px;
    background: #e74c3c;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 14px;
    transition: all 0.2s;
}

.btn-stop:hover {
    background: #c0392b;
    transform: translateY(-1px);
    box-shadow: 0 4px 8px rgba(231, 76, 60, 0.3);
}

.btn-stop:active {
    transform: translateY(0);
}

/* Desktop Toggle Button */
.desktop-toggle {
    position: fixed;
    top: 20px;
    left: 20px;
    width: 40px;
    height: 40px;
    background: #fff;
    border: 1px solid #e0e0e0;
    border-radius: 4px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1050;
    transition: left 0.3s ease;
}

.desktop-toggle.sidebar-visible {
    left: 270px;
}

/* Responsive */
@media (max-width: 991px) {
    .sidebar {
        transform: translateX(-260px);
        top: 60px;
        height: calc(100vh - 60px);
    }

    .sidebar.show {
        transform: translateX(0);
    }

    .main-wrapper {
        margin-left: 0;
        padding-top: 80px;
    }

    .top-navbar {
        display: flex;
    }

    .desktop-toggle {
        display: none;
    }

    .timer-running {
        padding: 20px;
    }

    .timer-running-task {
        font-size: 16px;
    }

    .timer-running-time {
        font-size: 20px;
    }
}

@media (max-width: 576px) {
    .timer-running-content {
        flex-direction: column;
        align-items: stretch;
    }

    .timer-running-actions {
        justify-content: stretch;
    }

    .btn-stop {
        width: 100%;
    }

    .main-wrapper {
        padding: 15px;
        padding-top: 75px;
    }

    .top-navbar-brand {
        font-size: 16px;
    }
}

@media (min-width: 992px) {
    .main-wrapper {
        padding-top: 20px;
    }

    .sidebar {
        top: 0;
        height: 100vh;
    }
}
</style>