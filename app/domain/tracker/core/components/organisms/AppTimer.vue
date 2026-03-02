<template>

    <ContentBlock v-if="tracker.currentTask" class="timer-running">
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
    </ContentBlock>

    <!-- New Task Form -->
    <ContentBlock v-if="!tracker.currentTask" class="task-form">
        <div class="task-form-content">
            <div class="task-form-main">
                <input type="text" class="task-input" v-model="tracker.newTask.title" placeholder="Над чем вы работаете?">
                <div @click="displayProjectDropdown = !displayProjectDropdown"  class="project-selector">
                    <button class="project-selector-btn" id="projectBtn">
                        <span v-if="tracker.newTask.projectColor" class="project-dot" :style="{
                            background: tracker.newTask.projectColor
                        }"></span>
                        <span class="project-name">{{tracker.newTask.projectName ? tracker.newTask.projectName : 'Выбрать проект'}}</span>
                        <svg class="chevron-icon" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M7 10l5 5 5-5z"></path>
                        </svg>
                    </button>
                    <div v-show="displayProjectDropdown" class="project-dropdown" id="projectDropdownNew">
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
            </div>
            <div class="task-form-actions">
                <button @click="startTimer" class="btn-start">Старт</button>
            </div>
        </div>
    </ContentBlock>
</template>

<script setup>
import useTicker from "../../use/useTicker.js";
import {useTrackerStore} from "../../stores/tracker.js";
import {defaultFormat} from "../../use/useTimeFormatter.js";
import {useProjectsStore} from "../../stores/projects.js";
import {ref} from "vue";
import AppProjectDot from "./AppProjectDot.vue";
import ContentBlock from "../molecules/ContentBlock.vue";

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
    const project = projects.getById(projectId)
    tracker.newTask.projectId = projectId
    tracker.newTask.projectName = project.name
    tracker.newTask.projectColor = project.accentColor
    displayProjectDropdown.value = false
}



</script>



<style scoped>
</style>