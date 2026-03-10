<script setup>
// @ts-check

import {useTasksHistory} from "../../stores/tasksHistory.js";
import useTimeFormatter from "../../use/useTimeFormatter.js";
import EditIcon from "../../../../core/atoms/Icons/EditIcon.vue";
import TrashIcon from "../../../../core/atoms/Icons/TrashIcon.vue";
import ContinueIcon from "../../../../core/atoms/Icons/ContinueIcon.vue";
import {ref, useAttrs} from "vue";
import ColorDot from "../atoms/ColorDot.vue";

const {formatDailyTimeIntervalLabel, formatDurationHMS} = useTimeFormatter()
const props = defineProps({
    taskId: {
        type: Number,
        required: true
    },
    isChild: {
        type: Boolean,
        default: false
    }
})

const attrs = useAttrs();
const history = useTasksHistory()
const task = history.getById(props.taskId)
const groupExpanded = ref(false)

/**
 * @typedef {{ id: number, total: number, createdAt: number, startedAt: number, closedAt: number }} Task
 */

/** @type {import('vue').Ref<Task[]>} */
const group = ref(props.isChild ? [] : history.getGroup(task.id))
const editEnabled = ref(false)
const newTaskName = ref(task.name)

const toggleGroup = () => {
    groupExpanded.value = !groupExpanded.value
}

const saveTaskEdit = () => {
    task.name = newTaskName.value
    editEnabled.value = null
}

const cancelTaskEdit = () => {
    newTaskName.value = task.name
    editEnabled.value = false
}

const editTask = () => {
    editEnabled.value = true
}

const deleteTask = () => {
    history.deleteTask(task.id)
}

const continueTask = () => {
    history.continueTask(task.id)
}

const durationHMS = ref(group.value.length ? formatDurationHMS(group.value) : formatDurationHMS([task]));

/**
 * @param {{ total: number }[]} totals
 * @returns {number}
 */
function calculateTotal(totals) {
    let result = 0;


    for (const object of totals) {
        result += object.total
    }

    return result
}

const total = ref(group.value.length ? calculateTotal(group.value) : calculateTotal([task]))

</script>

<template>
    <div class="task-item" v-bind="attrs">
        <input type="checkbox" class="task-checkbox">
        <div class="task-info">
            <div class="task-name-wrapper">
<!--                <span v-if="group.length" class="task-group-icon" :class="{ expanded: groupExpanded }" @click="toggleGroup">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M7 10l5 5 5-5z"></path>
                    </svg>
                </span>-->
                <div style="display: flex">
                    <div v-if="!editEnabled"
                         @click="editTask"
                         class="task-name">{{task.name}}<span v-if="group.length" @click.stop="toggleGroup" class="task-group-count">{{group.length}}</span>
                    </div>
                    <div v-if="editEnabled" class="task-name-edit">
                        <input v-model="newTaskName" type="text" :placeholder="task.name">
                    </div>
                    <div v-if="editEnabled" class="task-name-edit-actions">
                        <button class="btn-save" @click="saveTaskEdit()">✓</button>
                        <button class="btn-cancel" @click="cancelTaskEdit()">✕</button>
                    </div>
                </div>
            </div>
            <div class="task-meta">
                <span class="task-date">{{ formatDailyTimeIntervalLabel(task.startedAt, task.closedAt) }}</span>
                <a href="#" class="project-badge">
                    <ColorDot :color="task.projectColor"/>
                    <span>{{task.projectName}}</span>
                </a>
            </div>
        </div>
        <div class="task-metrics">
            <span class="task-time">{{durationHMS}}</span>
            <span class="task-cost">{{task.currency}} {{ total }}</span>
            <button @click="continueTask" class="continue-btn">
                <ContinueIcon/>
            </button>
            <button class="edit-task-btn" @click="editTask()">
                <EditIcon/>
            </button>
            <button @click="deleteTask" class="delete-task-btn">
                <TrashIcon/>
            </button>
        </div>
    </div>

    <div v-if="group.length" v-show="groupExpanded">
        <TaskItem
            v-for="(childTask, index) in group"
            :key="childTask.id"
            :task-id="childTask.id"
            :is-child="true"
            class="task-group-child"
        />
    </div>
</template>

<style>

</style>