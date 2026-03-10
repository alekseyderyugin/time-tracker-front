<script setup>
import ContentBlock from "../molecules/ContentBlock.vue";
import {onMounted} from "vue";
import {useTasksHistory} from "../../stores/tasksHistory.js";
import TaskItem from "./TaskItem.vue";

const history = useTasksHistory()

onMounted(() => {
    history.load()
})
</script>

<template>
    <ContentBlock class="history-section">
        <div class="history-header">
            <h2 class="section-title">История задач</h2>
            <button class="delete-selected-btn" id="deleteSelectedBtn">Удалить выбранные</button>
        </div>

        <TaskItem v-for="(task, index) in history.getTasks()" :key="task.id" :task-id="task.id"/>
    </ContentBlock>
</template>

<style>
.history-section {
    background: #fff;
    border-radius: 8px;
    padding: 30px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.1);
}

.section-title {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 20px;
    color: #2c3e50;
}

.history-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
}

.delete-selected-btn {
    display: none;
    padding: 8px 16px;
    background: #e74c3c;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 14px;
    transition: background 0.2s;
}

.delete-selected-btn.visible {
    display: block;
}

.delete-selected-btn:hover {
    background: #c0392b;
}

.task-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px;
    border-bottom: 1px solid #f0f0f0;
    transition: background 0.2s;
    position: relative;
}

.task-item:hover {
    background: #f8f9fa;
}

.task-item:hover .task-checkbox {
    opacity: 1;
}

.task-item:hover .delete-task-btn {
    opacity: 1;
}

.task-checkbox {
    opacity: 0;
    margin-right: 12px;
    cursor: pointer;
    width: 18px;
    height: 18px;
    transition: opacity 0.2s;
}

.task-checkbox:checked {
    opacity: 1;
}

.task-group-icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 20px;
    margin-right: 8px;
    color: #999;
    font-size: 14px;
    cursor: pointer;
    transition: all 0.2s;
    flex-shrink: 0;
}

.task-group-icon:hover {
    color: #666;
}

.task-group-icon.expanded {
    transform: rotate(180deg);
}

.task-name-wrapper {
    display: flex;
    align-items: center;
}

.task-group-count {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 20px;
    height: 20px;
    padding: 0 6px;
    background: #e9ecef;
    border-radius: 10px;
    font-size: 11px;
    color: #666;
    margin-left: 8px;
    cursor: pointer;
}

.task-info {
    flex: 1;
}

.task-name {
    font-size: 16px;
    margin-bottom: 10px;
    color: #2c3e50;
}

.task-meta {
    display: flex;
    align-items: center;
    gap: 10px;
}

.task-date {
    font-size: 13px;
    color: #999;
}

.project-badge {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 3px 10px;
    background: #f8f9fa;
    border-radius: 12px;
    font-size: 12px;
    color: #666;
    text-decoration: none;
    transition: background 0.2s;
}

.project-badge:hover {
    background: #e9ecef;
}

.color-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
}

.task-metrics {
    display: flex;
    align-items: center;
    gap: 20px;
}

.task-time {
    font-size: 16px;
    font-weight: 500;
    color: #666;
}

.task-cost {
    font-size: 16px;
    font-weight: 500;
    color: #27ae60;
}

.continue-btn {
    padding: 8px 16px;
    background: #e3f2fd;
    color: #1976d2;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 14px;
    transition: background 0.2s;
}

.continue-btn:hover {
    background: #bbdefb;
}

.edit-task-btn {
    padding: 8px;
    background: transparent;
    border: none;
    cursor: pointer;
    color: #999;
    transition: all 0.2s;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
}

.edit-task-btn:hover {
    color: #1976d2;
    transform: scale(1.1);
}

.edit-task-btn svg {
    width: 18px;
    height: 18px;
    fill: currentColor;
}

.task-item:hover .edit-task-btn {
    opacity: 1;
}

.task-name-edit {
    flex: 1;
}

.task-name-edit input {
    width: 100%;
    padding: 6px 10px;
    border: 1px solid #e0e0e0;
    border-radius: 4px;
    font-size: 16px;
    outline: none;
}

.task-name-edit-actions {
    display: flex;
    gap: 8px;
    margin-left: 8px;
}

.task-name-edit-actions button {
    padding: 6px 12px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 13px;
    transition: background 0.2s;
}

.btn-save {
    background: #27ae60;
    color: #fff;
}

.btn-save:hover {
    background: #229954;
}

.btn-cancel {
    background: #e0e0e0;
    color: #666;
}

.btn-cancel:hover {
    background: #d5d5d5;
}

.task-item.editing .task-name {
    display: none;
}

.task-item.editing .task-name-edit {
    display: flex;
    align-items: center;
}

.delete-task-btn {
    padding: 8px;
    background: transparent;
    border: none;
    cursor: pointer;
    color: #999;
    transition: all 0.2s;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
}

.delete-task-btn:hover {
    color: #e74c3c;
}

.delete-task-btn:hover svg {
    transform: scale(1.1);
}

.delete-task-btn svg {
    width: 18px;
    height: 18px;
    fill: currentColor;
    transition: transform 0.2s ease;
}

.task-group-child {
    margin-left: 40px;
    padding-left: 12px;
    border-left: 2px solid #e9ecef;
}

.load-more-section {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 0;
    margin-top: 20px;
}

.load-more-btn {
    padding: 10px 24px;
    background: #fff;
    border: 1px solid #e0e0e0;
    border-radius: 4px;
    cursor: pointer;
    font-size: 14px;
    color: #666;
    transition: all 0.2s;
}

.load-more-btn:hover {
    background: #f8f9fa;
    border-color: #1976d2;
    color: #1976d2;
}

.load-more-info {
    font-size: 13px;
    color: #999;
}
</style>