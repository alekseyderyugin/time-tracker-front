<script setup>
const props = defineProps({
    color: {
        type: String,
        required: true
    },
})
</script>

<template>
    <span class="project-dot" :style="{
        background: props.color
    }"></span>
</template>

<style scoped>

</style>