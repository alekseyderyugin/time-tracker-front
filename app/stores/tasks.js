import {defineStore} from "pinia";
import {computed, reactive, ref} from "vue";
/*
import axios from "axios";
*/

export const useTasksStore = defineStore('tasks', () => {
    const currentTask = reactive({
        name: '',
        start: {},
        seconds: 0
    });

    const today = ref(null)
    const weekTotal = ref(null)

    function clear() {
        for (let key in currentTask) {
            currentTask[key] = null
        }
    }

    const tasks = ref([]);

    const getTasks = async () => {
        tasks.value = await $fetch('http://0.0.0.0:5175/tasks')
    }

    const tasksByDay = computed(() => {
        const grouped = {};

        tasks.value.forEach(task => {
            const day = new Date(task.start).toISOString().split('T')[0]; // YYYY-MM-DD

            if (!grouped[day]) {
                grouped[day] = [];
            }

            grouped[day].push(task);
        });

        return Object.entries(grouped).sort(([a], [b]) => new Date(b) - new Date(a));
    });

    const tasksDaysSumSeconds = computed(() => {
        const grouped = {};

        for (let index in tasksByDay.value) {
            let [day, tasks] = tasksByDay.value[index]

            let sum = null;

            for (let j in tasks) {
                sum += tasks[j].seconds
            }

            grouped[day] = sum;
        }

        return grouped;
    })

    function saveInterval() {

        const newTask = {
            name: currentTask.name,
            start: currentTask.start,
            seconds: currentTask.seconds,
        }

        tasks.value.push(newTask)

        console.log(newTask)

        clear();
    }

    function timerFormattedTime(time) {
        const hours = Math.floor(time / 3600);
        const minutes = Math.floor((time % 3600) / 60);
        const seconds = time % 60;
        return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
    }

    return {
        saveInterval, tasks, currentTask, timerFormattedTime, tasksByDay, tasksDaysSumSeconds, getTasks
    }
});