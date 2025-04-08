<script setup lang="ts">

import {useTasksStore} from "~/stores/tasks";
import {onMounted, ref} from "vue";

const tasks = useTasksStore()


/*function formatDate(date) {
    const addZero = (value) => value < 10 ? `0${value}` : value
    return `${addZero(date.getHours())}:${addZero(date.getMinutes())}:${addZero(date.getSeconds())}`
}*/

const formatTime = (timestamp) => {
    return new Intl.DateTimeFormat('ru-RU', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    }).format(new Date(timestamp));
};

const formatDate = (dateStr) => {
    const date = new Date(dateStr);

    const options = {
        weekday: "long",
        month: "long",
        day: "numeric",
    };

    if (date.getFullYear() < new Date().getFullYear()) {
        options['year'] = 'numeric'
    }

    return new Intl.DateTimeFormat('ru-RU', options).format(date)
}

const checkedTasks = ref([])

onMounted(() => {
    tasks.getTasks()
})
</script>

<template>
    <div v-for="[date, dayTasks] in tasks.tasksByDay" class="bg-body" :key="date">
        <div class="row ps-3">
            <div class="col-md-5">
                <h4>{{ formatDate(date) }}</h4>
            </div>
            <div class="col-md-5 justify-content-end">
                <strong>
                    {{ tasks.timerFormattedTime(tasks.tasksDaysSumSeconds[date]) }}
                </strong>
            </div>
        </div>
        
        <div v-for="(task, idx) in dayTasks" :key="task.start" class="task-row row ps-3">
            <div class="col-md-5">
                <input
                    v-model="checkedTasks"
                    :value="idx"
                    type="checkbox"
                    class="form-check-input me-2 check-history-task"
                    :class="{visible: checkedTasks.indexOf(idx) !== -1}"
                >

                <span class="ps-1">{{ task.name }}</span>
            </div>
            <div class="col-md-2">
                {{ formatTime(task.start) }} - {{ formatTime(task.start + (task.seconds * 1000)) }}
            </div>

            <div class="col-md-2">
                {{ tasks.timerFormattedTime(task.seconds) }}

            </div>
        </div>
    </div>
</template>

<style scoped>

.task-row:hover .check-history-task {
    visibility: visible;
}

.check-history-task {
    visibility: hidden;
}

.tasks-group-date {
    font-weight: 600;
    text-transform: capitalize;
}

</style>