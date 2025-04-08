
<template>
    <div v-show="model" @click="model = ''" class="alert" :class="['alert-' + props.type]" role="alert">{{model}}</div>
</template>

<script setup>
const props = defineProps({
    type: {
        default: 'warning'
    }
})

const model = defineModel({ type: String })
</script>

<style scoped>
.alert {
    cursor: pointer;
}
</style>