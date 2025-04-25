<script setup>

import {useTasksStore} from "~/domain/tracker/core/stores/tasks";
import {onMounted, ref} from "vue";
import TotalCost from "~/components/dashboard/molecules/TotalCost.vue";

const tasks = useTasksStore()

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
    tasks.fetch()
})
</script>

<template>
    <div v-for="[date, dayTasks] in tasks.tasksByDay" :key="date" class="bg-body">

        <div class="row pt-3">
            <div class="col-md-8">
                <div class="row ps-3">
                    <div class="col-8">
                        <h4>{{ formatDate(date) }}</h4>
                    </div>
                    <div class="col-2">
                        <strong>
                            {{ tasks.timerFormattedTime(tasks.tasksDaysSumSeconds[date]) }}
                        </strong>
                    </div>
                    <div class="col-2">
                        <span
                            v-for="(total, currency) in tasks.currencyTotalByDay[date]"
                            :key="currency"
                        >
                            <total-cost
                                :currency="currency"
                                :total="total"
                            />
                        </span>
                    </div>
                </div>

                <div v-for="(task, idx) in dayTasks" :key="task.start" class="task-row row ps-3">
                    <div class="col-6">
                        <input
                            v-model="checkedTasks"
                            :value="idx"
                            type="checkbox"
                            class="form-check-input me-2 check-history-task"
                            :class="{visible: checkedTasks.indexOf(idx) !== -1}"
                        >

                        <span class="ps-1">{{ task.name }}</span>
                    </div>
                    <div class="col">
                        {{ formatTime(task.start) }} - {{ formatTime(task.start + (task.seconds * 1000)) }}
                    </div>

                    <div class="col">
                        {{ tasks.timerFormattedTime(task.seconds) }}
                    </div>
                    <div class="col">
                        <total-cost :currency="task.currency" :total="task.total"/>
                    </div>
                </div>
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