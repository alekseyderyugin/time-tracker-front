<template>
    <div>
        <AppTracker />
        <TasksHistory />
    </div>
</template>

<script setup lang="ts">
import AppTracker from '~/components/dashboard/organisms/AppTracker.vue';
import TasksHistory from '~/domain/tracker/history/components/TasksHistory.vue';
</script>

<style scoped></style>
