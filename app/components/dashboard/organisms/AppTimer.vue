<template>
    <div class="d-flex bd-highlight">
        <div class="col-md-4 ps-2" >
            <span class="block-title" :class="{'filled': tasks.currentTask.name}" v-show="!editTaskTitle" @click="onTaskTitleClick">
                {{tasks.currentTask.name ? tasks.currentTask.name : 'What are you working on?'}}
            </span>
            <input
                v-show="editTaskTitle"
                v-model="tasks.currentTask.name"
                ref="task-input"
                @blur="disableEditTaskTitle"
                class="form-control form-control-lg task-input"
                :class="{'shake': warn}"
                type="text"
            >
        </div>
        <div class="col-md-4 d-flex justify-content-end align-items-center pe-5">
            <span class="block-title" :class="{'filled': timerStarted}">{{ formattedTime() }}</span>

            <start-stop-control
                @started="startTimer($event)"
                @stopped="stopTimer"
                class="timer-control-button me-2"
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
import StartStopControl from "~/components/dashboard/molecules/StartStopControl.vue";
const editTaskTitle = ref(false);
const tasks = useTasksStore();


async function onTaskTitleClick() {
    editTaskTitle.value = true
    await nextTick();
    taskInput.value.focus()
}

function disableEditTaskTitle() {
    editTaskTitle.value = false
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
    tasks.saveTask()
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
    .task-input {
        font-weight: 600;
        border: none;
    }

    .block-title {
        font-size: 14px;
        line-height: 1.6;
        font-weight: 600;
        color: #505050;
        padding: 10px;
        display: block;
        cursor: pointer;
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

    .task-input:focus {
        box-shadow: none;
        color: #2e2e2e;
    }
</style>