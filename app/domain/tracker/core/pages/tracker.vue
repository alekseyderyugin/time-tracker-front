<template>
    <AppTimer/>
    <!-- Stats Section - Variant C (Minimalism) -->
    <section class="stats-section">
        <div class="stats-grid">
            <!-- Today Card -->
            <div class="stat-card">
                <div class="stat-header">
                    <svg class="stat-icon" viewBox="0 0 24 24">
                        <path
                            d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"></path>
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
                        <path
                            d="M20 3h-1V1h-2v2H7V1H5v2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 18H4V8h16v13z"></path>
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
                        <path
                            d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.1 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"></path>
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
</template>

<script setup>
import {onMounted, ref} from "vue";
import AppTimer from "../components/organisms/AppTimer.vue";
import AppHistory from "../components/organisms/AppHistory.vue";
import NavMenuItem from "../components/atoms/NavMenuItem.vue";
import TrackerIcon from "../../../core/atoms/Icons/TrackerIcon.vue";

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