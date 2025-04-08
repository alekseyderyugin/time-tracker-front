<template>
    <h2 class="p-3">Трекер</h2>

    <AppTracker/>

    <h2 class="p-3">История</h2>
    <TasksHistory/>
</template>

<script setup>
import AppTracker from "~/components/dashboard/organisms/AppTracker.vue";
import TasksHistory from "~/components/dashboard/organisms/TasksHistory.vue";
</script>

<style scoped>

</style>