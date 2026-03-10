<script setup>
import {useTrackerStore} from "../../stores/tracker.js";
import {useProjectsStore} from "../../stores/projects.js";
import {ref} from "vue";
import AppProjectDot from "./AppProjectDot.vue";
import ContentBlock from "../molecules/ContentBlock.vue";
import useTimeFormatter from "../../use/useTimeFormatter.js";
import AppDropdown from "../molecules/AppDropdown.vue";
import ColorDot from "../atoms/ColorDot.vue";
import AppDropdownItem from "../atoms/AppDropdownItem.vue";

const {formatDefault} = useTimeFormatter()
const tracker = useTrackerStore()
const startTimer = () => {
    tracker.create()
};

const stopTimer = () => {
    tracker.finish()
};

const projects = useProjectsStore();
const projectDropdown = ref(null)

const selectProject = (item) => {
    const id = item.id
    const project = projects.getById(id)
    tracker.newTask.projectId = id
    tracker.newTask.projectName = project.name
    tracker.newTask.projectColor = project.color
    projectDropdown.value.close()
}

</script>

<template>
    <ContentBlock v-if="tracker.currentTask" class="timer-running left-border">
        <div class="timer-running-content">
            <div class="timer-running-info">
                <div class="timer-running-task">{{ tracker.currentTask.name }}</div>
                <div class="timer-running-meta">
                    <span class="timer-pulse"></span>
                    <span class="timer-running-time">{{ formatDefault(tracker.seconds) }}</span>
                    <a v-if="tracker.currentTask.project" href="#" class="project-badge">
                        <AppProjectDot :color="tracker.currentTask.project.color"></AppProjectDot>
                        <span>{{ tracker.currentTask.project.name }}</span>
                    </a>
                </div>
            </div>
            <div class="timer-running-actions">
                <button @click="stopTimer" class="btn-stop">Стоп</button>
            </div>
        </div>
    </ContentBlock>

    <!-- New Task Form -->
    <ContentBlock v-if="!tracker.currentTask" class="task-form left-border">
        <div class="task-form-content">
            <div class="task-form-main">
                <input type="text" class="task-input" v-model="tracker.newTask.name"
                       placeholder="Над чем вы работаете?">
                <div @click="projectDropdown.open()" class="project-selector">
                    <button class="project-selector-btn" id="projectBtn">
                        <span v-if="tracker.newTask.projectColor" class="color-dot" :style="{
                            background: tracker.newTask.projectColor
                        }"></span>
                        <span class="project-name">{{ tracker.newTask.projectName ? tracker.newTask.projectName : 'Выбрать проект' }}</span>
                        <svg class="chevron-icon" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M7 10l5 5 5-5z"></path>
                        </svg>
                    </button>

                    <AppDropdown ref="projectDropdown" @item-selected="selectProject" :items="projects.getProjects().value">
                        <template #default="{ item }">
                            <ColorDot :color="item.color"/>
                            <AppDropdownItem>{{item.name}}</AppDropdownItem>
                        </template>
                    </AppDropdown>
                </div>
            </div>
            <div class="task-form-actions">
                <button @click="startTimer" class="btn-start">Старт</button>
            </div>
        </div>
    </ContentBlock>
</template>

<style scoped>
</style>