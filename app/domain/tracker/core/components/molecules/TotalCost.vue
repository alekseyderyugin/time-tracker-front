<script setup lang="ts">

import CurrencyIcon from "~/domain/core/atoms/CurrencyIcon.vue";

const props = defineProps({
    total: {
        required: true,
        type: Number,
    },
    currency: {
        required: true,
        type: String
    }
})
</script>

<template>
    <strong>{{ props.total }}</strong> <currency-icon :currency="props.currency"/>
</template>

<style scoped>

</style>