<script setup>


import {ref} from "vue";

const started = ref(false)
const emit = defineEmits(['started', 'stopped'])


const start = () => {
    emit('started')
    started.value = true
}

const stop = () => {
    emit('stopped')
    started.value = false
}

</script>

<template>
    <button v-if="!started" @click="start" class="btn btn-primary">Старт</button>
    <button v-else @click="stop" class="btn btn-danger">Стоп</button>
</template>

<style scoped>
</style>