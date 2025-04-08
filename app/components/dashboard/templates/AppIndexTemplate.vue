<template>
    <collapsible-sidebar>
        <template #panel-elements-top>
            <slot name="panel-elements-top"/>
        </template>
        <template #panel-elements-center>
            <slot name="panel-elements-center"/>
        </template>
        <template #panel-elements-bottom>
            <slot name="panel-elements-bottom"/>
        </template>
        <template #menu>
            <div class="menu">
                <div class="menu-item menu-item-header">
                    <div class="header">
                        <h5>{{ props.sidebarMenu.header.title }}</h5>
                        <h6>{{ props.sidebarMenu.header.description}}</h6>
                    </div>
                </div>
                <div
                    class="menu-item menu-item-group"
                    v-for="group in props.sidebarMenu.groups"
                >
                    <div class="menu-item-group-title">{{group.title}}</div>

                    <div v-for="groupItem in group.items" class="menu-item-group-item">
                        <div class="icon d-inline">
                            <component :is="groupItem.icon"/>
                        </div>
                        <div class="d-inline">
                            <a class="menu-item-link" :href="groupItem.href">{{groupItem.title}}</a>
                        </div>
                    </div>
                </div>
            </div>
        </template>
        <template #content>
            <slot name="content"></slot>
        </template>
    </collapsible-sidebar>
</template>

<script setup>
import CollapsibleSidebar from "~/components/common/templates/CollapsibleSidebar.vue";

const props = defineProps({
    sidebarMenu: {
        type: Object,
        required: true
    },
});
</script>

<style scoped>
.menu {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
}

.menu-item {
    padding: 12px;
}

.menu-item-header {
    text-transform: uppercase;
    border-bottom: 2px solid #000000;
}


.menu-item-group-item .icon {
    height: 16px;
}

.menu-item-group {
    padding-top: 20px;
    padding-bottom: 20px;
}
.menu-item-link {
    text-decoration: none;
    color: white;
    margin-left: 10px;
}

.menu-item-group-title {
    margin-bottom: 10px;
    color: #9a9a9a;
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 600;
}

</style>