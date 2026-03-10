<script setup>
const props = defineProps({
    color: {
        type: String,
        required: true
    },
})
</script>

<template>
    <span class="color-dot" :style="{
        background: props.color
    }"></span>
</template>

<style scoped>

</style>