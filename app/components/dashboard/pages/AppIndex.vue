<template>
    <app-index-template :sidebar-menu="sidebarMenu">
        <template #panel-elements-top></template>
        <template #panel-elements-bottom>
        </template>
        <template #content>
            <div class="timer-panel shadow-sm p-2 mb-3 bg-body rounded">
                <app-timer></app-timer>
            </div>

            <TasksHistory></TasksHistory>
        </template>
    </app-index-template>
</template>

<script setup>
import AppIndexTemplate from "~/components/dashboard/templates/AppIndexTemplate.vue";
import AppTimer from "~/components/dashboard/organisms/AppTimer.vue";
import TasksHistory from "~/components/dashboard/organisms/TasksHistory.vue";
import {ref} from "vue";
import IconClock from "~/components/dashboard/molecules/icons/IconClock.vue";

const sidebarMenu = ref({
    header: {
        title: 'Aleksey D.',
        description: 'Ozone company inc.'
    },
    groups: [
        {
            title: 'Трекер',
            items: [
                {
                    title: 'Таймер',
                    icon: IconClock,
                    href: '#'
                }
            ],
        },
        {
            title: 'Аналитика',
            items: [
                {
                    title: 'Отчёты',
                    icon: IconClock,
                    href: '#'
                }
            ],
        },
        {
            title: 'Управление',
            items: [{
                title: 'Проекты',
                icon: IconClock,
                href: '#'
            }]
        },{
            title: 'Администрирование',
            items: [{
                title: 'Настройки',
                icon: IconClock,
                href: '#'
            }]
        }
    ]
})

</script>

<style scoped>

/*.tasks-history {
    overflow: auto;
    height: 90%
}*/
</style>