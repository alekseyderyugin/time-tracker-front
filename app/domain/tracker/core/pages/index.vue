<template>

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
            <a href="#" class="menu-item active">
                <svg class="menu-icon" viewBox="0 0 24 24">
                    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.2 3.2.8-1.3-4.5-2.7V7z"></path>
                </svg>
                <span>Трекер</span>
            </a>
        </nav>
    </aside>

    <!-- Main Content -->
    <main class="main-wrapper" id="mainWrapper">
        <div class="content-container">
            <AppTimer/>
            <!-- Stats Section - Variant C (Minimalism) -->
            <section class="stats-section">
                <div class="stats-grid">
                    <!-- Today Card -->
                    <div class="stat-card">
                        <div class="stat-header">
                            <svg class="stat-icon" viewBox="0 0 24 24">
                                <path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"></path>
                            </svg>
                            <span class="stat-label">Сегодня</span>
                        </div>
                        <div class="stat-main">
                            <div class="stat-primary">5:24</div>
                            <div class="stat-secondary">$162.00</div>
                        </div>
                        <div class="stat-divider"></div>
                        <div class="stat-progress">
                            <span class="stat-progress-text">+1:15</span>
                        </div>
                    </div>

                    <!-- This Week Card -->
                    <div class="stat-card">
                        <div class="stat-header">
                            <svg class="stat-icon" viewBox="0 0 24 24">
                                <path d="M20 3h-1V1h-2v2H7V1H5v2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 18H4V8h16v13z"></path>
                            </svg>
                            <span class="stat-label">Эта неделя</span>
                        </div>
                        <div class="stat-main">
                            <div class="stat-primary">32:15</div>
                            <div class="stat-secondary">$967.50</div>
                        </div>
                        <div class="stat-divider"></div>
                        <div class="stat-progress">
                            <span class="stat-progress-text">+4:30</span>
                        </div>
                    </div>

                    <!-- This Month Card -->
                    <div class="stat-card">
                        <div class="stat-header">
                            <svg class="stat-icon" viewBox="0 0 24 24">
                                <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.1 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"></path>
                            </svg>
                            <span class="stat-label">Этот месяц</span>
                        </div>
                        <div class="stat-main">
                            <div class="stat-primary">127:48</div>
                            <div class="stat-secondary">$3,834.00</div>
                        </div>
                        <div class="stat-divider"></div>
                        <div class="stat-progress neutral">
                            <span class="stat-progress-text">0:00</span>
                        </div>
                    </div>
                </div>
            </section>

            <AppHistory/>
        </div>
    </main>


</template>

<script setup>
import {onMounted, ref} from "vue";
import AppTimer from "../components/organisms/AppTimer.vue";
import AppHistory from "../components/organisms/AppHistory.vue";

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

<style></style>