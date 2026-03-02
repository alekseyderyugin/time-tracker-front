<template>
    <ContentBlock class="history-section">
        <div class="history-header">
            <h2 class="section-title">История задач</h2>
            <button class="delete-selected-btn" id="deleteSelectedBtn">Удалить выбранные</button>
        </div>

        <div class="task-item">
            <input type="checkbox" class="task-checkbox">
            <div class="task-info">
                <div class="task-name-wrapper">
                            <span class="task-group-icon expanded" onclick="toggleGroup(this)">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M7 10l5 5 5-5z"></path>
                                </svg>
                            </span>
                    <div style="flex: 1;">
                        <div class="task-name">Разработка интерфейса <span class="task-group-count">3</span></div>
                        <div class="task-name-edit">
                            <input type="text" value="Разработка интерфейса">
                            <div class="task-name-edit-actions">
                                <button class="btn-save" onclick="saveTaskEdit(this)">✓</button>
                                <button class="btn-cancel" onclick="cancelTaskEdit(this)">✕</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="task-meta">
                    <span class="task-date">Сегодня, 14:30 - 17:20</span>
                    <a href="#" class="project-badge">
                        <span class="project-dot" style="background: #1976d2;"></span>
                        <span>Веб-приложение</span>
                    </a>
                </div>
            </div>
            <div class="task-metrics">
                <span class="task-time">6:45:30</span>
                <span class="task-cost">$202.65</span>
                <button class="continue-btn">Продолжить</button>
                <button class="edit-task-btn" onclick="editTask(this)">
                    <svg viewBox="0 0 24 24">
                        <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"></path>
                    </svg>
                </button>
                <button class="delete-task-btn">
                    <svg viewBox="0 0 24 24">
                        <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path>
                    </svg>
                </button>
            </div>
        </div>

        <div class="task-group-children visible" id="group-1">
            <div class="task-item task-group-child">
                <input type="checkbox" class="task-checkbox">
                <div class="task-info">
                    <div class="task-name">Разработка интерфейса</div>
                    <div class="task-meta">
                        <span class="task-date">Сегодня, 14:30 - 16:15</span>
                    </div>
                </div>
                <div class="task-metrics">
                    <span class="task-time">2:15:30</span>
                    <span class="task-cost">$67.75</span>
                    <button class="continue-btn">Продолжить</button>
                    <button class="delete-task-btn">
                        <svg viewBox="0 0 24 24">
                            <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path>
                        </svg>
                    </button>
                </div>
            </div>

            <div class="task-item task-group-child">
                <input type="checkbox" class="task-checkbox">
                <div class="task-info">
                    <div class="task-name">Разработка интерфейса</div>
                    <div class="task-meta">
                        <span class="task-date">Сегодня, 16:20 - 17:00</span>
                    </div>
                </div>
                <div class="task-metrics">
                    <span class="task-time">1:40:00</span>
                    <span class="task-cost">$50.00</span>
                    <button class="continue-btn">Продолжить</button>
                    <button class="delete-task-btn">
                        <svg viewBox="0 0 24 24">
                            <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path>
                        </svg>
                    </button>
                </div>
            </div>

            <div class="task-item task-group-child">
                <input type="checkbox" class="task-checkbox">
                <div class="task-info">
                    <div class="task-name">Разработка интерфейса</div>
                    <div class="task-meta">
                        <span class="task-date">Сегодня, 17:05 - 17:20</span>
                    </div>
                </div>
                <div class="task-metrics">
                    <span class="task-time">2:50:00</span>
                    <span class="task-cost">$84.90</span>
                    <button class="continue-btn">Продолжить</button>
                    <button class="delete-task-btn">
                        <svg viewBox="0 0 24 24">
                            <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </div>

        <div class="task-item">
            <input type="checkbox" class="task-checkbox">
            <div class="task-info">
                <div class="task-name-wrapper">
                            <span class="task-group-icon" onclick="toggleGroup(this)">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M7 10l5 5 5-5z"></path>
                                </svg>
                            </span>
                    <div>
                        <div class="task-name">
                            Code review
                            <span class="task-group-count">2</span>
                        </div>
                    </div>
                </div>
                <div class="task-meta">
                    <span class="task-date">Сегодня, 11:00</span>
                    <a href="#" class="project-badge">
                        <span class="project-dot" style="background: #f39c12;"></span>
                        <span>Backend API</span>
                    </a>
                </div>
            </div>
            <div class="task-metrics">
                <span class="task-time">1:45:00</span>
                <span class="task-cost">$52.50</span>
                <button class="continue-btn">Продолжить</button>
                <button class="delete-task-btn">
                    <svg viewBox="0 0 24 24">
                        <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path>
                    </svg>
                </button>
            </div>
        </div>

        <div class="task-item">
            <input type="checkbox" class="task-checkbox">
            <div class="task-info" style="margin-left: 0;">
                <div class="task-name">Встреча с командой</div>
                <div class="task-meta">
                    <span class="task-date">Сегодня, 09:00</span>
                    <a href="#" class="project-badge">
                        <span class="project-dot" style="background: #9b59b6;"></span>
                        <span>Менеджмент</span>
                    </a>
                </div>
            </div>
            <div class="task-metrics">
                <span class="task-time">1:23:45</span>
                <span class="task-cost">$41.75</span>
                <button class="continue-btn">Продолжить</button>
                <button class="delete-task-btn">
                    <svg viewBox="0 0 24 24">
                        <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path>
                    </svg>
                </button>
            </div>
        </div>

        <div class="task-item">
            <input type="checkbox" class="task-checkbox">
            <div class="task-info" style="margin-left: 0;">
                <div class="task-name">Написание документации</div>
                <div class="task-meta">
                    <span class="task-date">Вчера, 16:20</span>
                    <a href="#" class="project-badge">
                        <span class="project-dot" style="background: #27ae60;"></span>
                        <span>Open Source</span>
                    </a>
                </div>
            </div>
            <div class="task-metrics">
                <span class="task-time">3:10:15</span>
                <span class="task-cost">$95.25</span>
                <button class="continue-btn">Продолжить</button>
                <button class="delete-task-btn">
                    <svg viewBox="0 0 24 24">
                        <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path>
                    </svg>
                </button>
            </div>
        </div>
    </ContentBlock>
</template>

<script setup>
import ContentBlock from "../molecules/ContentBlock.vue";
</script>

<style scoped>
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
}

.task-info {
    flex: 1;
}

.task-name {
    font-size: 16px;
    margin-bottom: 5px;
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

.project-dot {
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
    display: none;
    flex: 1;
}

.task-name-edit input {
    width: 100%;
    padding: 6px 10px;
    border: 1px solid #1976d2;
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

.task-group-children {
    display: none;
}

.task-group-children.visible {
    display: block;
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