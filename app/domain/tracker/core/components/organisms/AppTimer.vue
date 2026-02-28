<template>
    <section v-if="tracker.currentTask" class="timer-running">
        <div class="timer-running-content">
            <div class="timer-running-info">
                <div class="timer-running-task">{{tracker.currentTask.title}}</div>
                <div class="timer-running-meta">
                    <span class="timer-pulse"></span>
                    <span class="timer-running-time">{{defaultFormat(ticker.seconds.value)}}</span>
                    <a v-if="tracker.currentTask.project" href="#" class="project-badge">
                        <AppProjectDot :color="tracker.currentTask.project.color"></AppProjectDot>
                        <span>{{tracker.currentTask.project.title}}</span>
                    </a>
                </div>
            </div>
            <div class="timer-running-actions">
                <button @click="stopTimer" class="btn-stop">Стоп</button>
            </div>
        </div>
    </section>

    <section v-if="!tracker.currentTask" class="timer-section">
        <div class="task-input-row">
            <input type="text" class="task-input" v-model="tracker.newTask.title" placeholder="Над чем вы работаете?">


            <div @click="displayProjectDropdown = !displayProjectDropdown" class="project-select" id="projectSelect" title="Выбрать проект">
                <svg class="project-select-icon" viewBox="0 0 24 24">
                    <path d="M20 6h-2.18c.11-.31.18-.65.18-1 0-1.66-1.34-3-3-3-1.05 0-1.96.54-2.5 1.35l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm11 15H4v-2h16v2zm0-5H4V8h5.08L7 10.83 8.62 12 11 8.76l1-1.36 1 1.36L15.38 12 17 10.83 14.92 8H20v6z"></path>
                </svg>
                <span v-if="tracker.newTask.projectId" class="project-select-dot" :style="{
                    background: projects.getAccentColorById(tracker.newTask.projectId)
                }"></span>

                <div v-if="displayProjectDropdown" class="project-dropdown" id="projectDropdown">
                    <div v-for="(project, index) in projects.getProjects().value"
                         :key="project.id"
                         class="project-dropdown-item"
                         @click.stop="selectProject(project.id)"
                    >
                        <span class="project-dropdown-dot" :style="`background: ${project.accentColor}`"></span>
                        <span class="project-dropdown-name">{{project.name}}</span>
                    </div>
                </div>
            </div>
            <button @click="startTimer" class="btn-start pulsing">Старт</button>
        </div>
    </section>
</template>

<script setup>
import useTicker from "../../use/useTicker.js";
import {useTrackerStore} from "../../stores/tracker.js";
import {defaultFormat} from "../../use/useTimeFormatter.js";
import {useProjectsStore} from "../../stores/projects.js";
import {ref} from "vue";
import AppProjectDot from "./AppProjectDot.vue";

const ticker = useTicker()
const tracker = useTrackerStore()
const startTimer = (event) => {
    tracker.create().then((task) => {
        ticker.start(task.createdAt)
    })
};

const stopTimer = () => {
    ticker.stop()
    tracker.finish()
};

const projects = useProjectsStore();

const displayProjectDropdown = ref(false)


const selectProject = (projectId) => {
    tracker.newTask.projectId = projectId

    displayProjectDropdown.value = false
}



</script>



<style scoped>
</style>