<template>
    <div id="app" class="app d-flex">
        <div class="panel">
            <div class="panel-elements-top">
                <slot name="panel-elements-top"></slot>
            </div>
            <div class="panel-elements-center">
                <panel-item @click="toggle">
                    <menu-expand class="panel-icon sidebar-toggle" v-if="isCollapsed"/>
                    <menu-collapse class="panel-icon sidebar-toggle" v-if="!isCollapsed"/>
                </panel-item>
                <slot name="panel-elements-center"></slot>
            </div>
            <div class="panel-elements-bottom">
                <slot name="panel-elements-bottom"></slot>
            </div>
        </div>
        <div ref="sidebar" class="sidebar">
            <slot name="menu"></slot>
        </div>
        <div ref="content" class="content">
            <slot name="content"></slot>
        </div>
    </div>
</template>

<script setup>
import {ref, useTemplateRef} from 'vue';
import PanelItem from "~/components/common/components/atoms/PanelItem.vue";
import MenuExpand from '~/assets/icons/menu-expand.svg';
import MenuCollapse from '~/assets/icons/menu-collapse.svg'
import {gsap} from "gsap";

const sidebar = useTemplateRef('sidebar');
const content = useTemplateRef('content');

const isCollapsed = ref(false);

const toggle = () => {
    const complete = () => {
        isCollapsed.value = !isCollapsed.value
    }

    const sidebarConfig = {
        duration: 0.3,
        ease: 'power1.out',
        css: {
            left: isCollapsed.value ? '50px' : '-180px',
        },
        onComplete: complete
    }

    const tl = gsap.timeline();
    tl
      .add('start')
      .to(sidebar.value, sidebarConfig, 'start')
};
</script>

<style scoped>

#app {
    height: 100%;
}

.panel {
    width: 50px;
    background: rgb(31, 15, 41);
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    display: flex;
    height: 100vh;
    flex-direction: column;
    z-index: 1;
}

.panel-icon {
    width: 24px;
    height: 24px;
    color: #FEF9F7;
}

.panel-elements-top {
    margin-top: 20px;
    text-align: center;
}

.panel-elements-center {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-grow: 1; /* Занимает всё доступное пространство между top и bottom */
}

.panel-elements-bottom {
    margin-top: auto; /* Прижимается вниз */
    margin-bottom: 50px;
}

.sidebar {
    width: 180px;
    background: rgb(44, 19, 56);
    position: absolute;
    top: 0;
    left: 50px;
    bottom: 0;
    color: white;
    z-index: 0;
}

.sidebar .btn {
    margin: 10px;
}

.content {
    width: 100%;
    margin-left: 50px
}

.app {
    background-color: #FEF9F7;
}

@media screen and (max-width: 768px) {
    .content {
        margin-left: 50px;
    }
}
</style>
