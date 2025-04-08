<template>
    <div class="row p-3 align-items-center">
        <div class="col-md-4 ps-2" >
            <h2 v-if="tasks.currentTask.name && !editTaskTitle">{{ tasks.currentTask.name }}</h2>

            <input
                v-if="editTaskTitle"
                v-model="tasks.currentTask.name"
                ref="task-input"
                class="form-control form-control-lg"
                placeholder="Задача"
                :class="{'shake': warn}"
                type="text"
            >
        </div>

        <div class="col-md-2">
            <span class="time pe-3" :class="{'filled': timerStarted}">{{ formattedTime() }}</span>
            <StartStopControl
                @started="startTimer($event);"
                @stopped="stopTimer"
            />
        </div>
    </div>
</template>

<script setup>
import {nextTick, ref, useTemplateRef} from "vue";
/*
import { useGsap } from '#gsap'
*/
import {useTasksStore} from "~/stores/tasks.js";
import StartStopControl from "~/components/dashboard/organisms/StartStopControl.vue";
const editTaskTitle = ref(true);
const tasks = useTasksStore();


async function onTaskTitleClick() {
    editTaskTitle.value = true
    await nextTick();
    taskInput.value.focus()
}

const taskInput = useTemplateRef('task-input')

let ticker = null;
const timerStarted = ref(false)
const formattedTime = () => {
    return tasks.timerFormattedTime(tasks.currentTask.seconds)
};

const startTimer = (event) => {
    if (!tasks.currentTask.name) {
        warnNoTask()
        event.stopImmediatePropagation()
        return;
    }

    if (ticker) return; // Уже идет

    timerStarted.value = true

    const startTime = Date.now() - tasks.currentTask.seconds * 1000; // Учитываем прошедшее время

    ticker = setInterval(() => {
        tasks.currentTask.seconds = Math.floor((Date.now() - startTime) / 1000);
    }, 1000)

    tasks.currentTask.start = startTime;
};

const stopTimer = () => {
    if (ticker) {
        clearInterval(ticker)
        ticker = null
    }

    timerStarted.value = false
    tasks.saveInterval()
};

const warn = ref(false)

async function warnNoTask() {
    await onTaskTitleClick()
    warn.value = true
    setTimeout(() => {
        warn.value = false
    }, 1500)
}
</script>



<style scoped>
/*.task-input {
    font-weight: 600;
    border: none;
}*/

.time {
    font-size: 32px;
    font-weight: 600;
    color: #505050;
    display: inline-block;
    vertical-align: middle;
}

.filled {
    color: #6c6c6c;
}

.shake {
    animation: shake 0.62s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
    transform: translate3d(0, 0, 0);
}

@keyframes shake {
    10%,
    90% {
        transform: translate3d(-1px, 0, 0);
    }

    20%,
    80% {
        transform: translate3d(2px, 0, 0);
    }

    30%,
    50%,
    70% {
        transform: translate3d(-3px, 0, 0);
    }

    40%,
    60% {
        transform: translate3d(3px, 0, 0);
    }
}

/*.task-input:focus {
    box-shadow: none;
    color: #2e2e2e;
}*/
</style>