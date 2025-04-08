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
    <button v-if="!started">
        <svg class="start"
             xmlns="http://www.w3.org/2000/svg"
             width="36"
             height="36"
             viewBox="0 0 36 36"
             @click="start"
        >
            <g fill="none" fill-rule="evenodd">
                <rect class="body" width="36" height="36" fill="#C95EBE" rx="18"></rect>
                <path fill="#FCFCFC"
                      d="M13 11.994c0-1.101.773-1.553 1.745-.997l10.51 6.005c.964.55.972 1.439 0 1.994l-10.51 6.007c-.964.55-1.745.102-1.745-.997V11.994z"></path>
            </g>
        </svg>
    </button>
    <button
        v-else
        @click="stop"
    >
        <svg class="stop" xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36">
            <g fill="none" fill-rule="evenodd">
                <rect width="36" height="36" fill="#E87161" rx="18"></rect>
                <rect width="14" height="14" x="11" y="11" fill="#FCFCFC" rx="1.5"></rect>
            </g>
        </svg>
    </button>
</template>

<style scoped>
button:hover .start .body {
    fill: rgb(181, 85, 172);
}

button {
    background:none;
    width: 42px;
    height: 42px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    border: 3px solid transparent;
    position: relative;
    padding: 0;
}

button:before {
    display: block;
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
    content: " ";
    pointer-events: none;
    border-radius: inherit;
    background: rgb(212, 100, 200);
    opacity: 0.4;
    transform-origin: center center;
    transform: scale(1.3);
    transition: all 0.25s linear;
}

button:hover::before {
    transform: scale(1);
    transition-duration: 0.2s;
}

svg {
    z-index: 1;
}
</style>