<script setup>

const props = defineProps({
    color: {
        required: true,
        type: String
    }
})
</script>

<template>
    <span class="color-dot" :style="`background: ${props.color}`"></span>
</template>

<style scoped>

</style>