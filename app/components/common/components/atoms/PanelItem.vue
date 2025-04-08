<script setup>

</script>

<template>
    <a href="#" class="panel-item">
        <slot></slot>
    </a>
</template>

<style scoped>
.panel-item {
    padding: 10px 0;
    width: 100%;
    display: flex;
    justify-content: center;
}

.panel-item:hover {
    background-color: rgb(65, 42, 76)
}

a {
    text-decoration: none;
}
</style>