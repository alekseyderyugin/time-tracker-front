<script setup>

const props = defineProps({
    active: {
        type: Boolean,
        required: false,
        default: false
    }
})
</script>

<template>
    <a href="#" class="menu-item" :class="['menu-item', {'active': props.active}]">
        <slot name="icon"></slot>
        <span>
            <slot name="default"></slot>
        </span>
    </a>
</template>

<style scoped>

</style>