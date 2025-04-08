
<template>
    <panel-item>
        <slot>
            <button class="panel-button btn btn-primary">1</button>
        </slot>
    </panel-item>
</template>

<script setup>
import PanelItem from "~/components/common/components/atoms/PanelItem.vue";
</script>

<style scoped>
    .panel-button {
        width: 25px;
        height: 25px;
        border-radius: 50px;
    }
</style>