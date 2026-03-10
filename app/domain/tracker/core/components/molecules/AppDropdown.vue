<script setup>

import {ref} from "vue";

const props = defineProps({
    items: {
        required: true
    }
})

const isOpen = ref(false)

function open() {
    isOpen.value = true
}

function close() {
    isOpen.value = false
}

defineEmits(['itemSelected'])

defineExpose({ open, close })
</script>

<template>
    <div v-show="isOpen" class="dropdown">
        <div v-for="(item, index) in props.items"
             :key="typeof item == 'object' && item.id ? item.id : index"
             class="dropdown-item"
             @click.stop="$emit('itemSelected', item)"
        >
            <slot :item="item" :index="index">
            </slot>

        </div>
    </div>
</template>

<style scoped>

</style>