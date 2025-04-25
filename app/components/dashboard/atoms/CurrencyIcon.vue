<script setup>

const props = defineProps({
    currency: {
        type: String,
        required: true
    }
})

const types = {
    'rub': '₽',
    'usd': '$'
}
</script>

<template>
    <span>{{ types[props.currency] }}</span>
</template>

<style scoped>

</style>