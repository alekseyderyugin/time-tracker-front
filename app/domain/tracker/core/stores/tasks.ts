import {defineStore} from "pinia";
import {computed, reactive, type Ref, ref} from "vue";
import {useFetch} from "#app";
import type ITask from "~/domain/tracker/core/types/ITask";
import {useSettingsStore} from "~/stores/settings.js";

interface Task {
    name: string | null;
    seconds: number | null;
    start: number | null;
    [key: string]: string | number | null;
}

export const useTasksStore = defineStore('tasks', () => {
    const API_BASE_URI = 'http://0.0.0.0:5175'

    const currentTask: Task = reactive({
        name: '',
        start: 0,
        seconds: 0
    });

    const settings = useSettingsStore()


    function clear() {
        for (const key in currentTask) {
            currentTask[key] = null
        }
    }

    const tasks: Ref<ITask[]> = ref([]);

    const fetch = async () => {
        tasks.value = await $fetch<ITask[]>(API_BASE_URI + '/tasks')
        settings.fetch()
    }

    const tasksByDay = computed(() => {
        const grouped: Record<string, ITask[]> = {}; // 👈 добавили тип

        tasks.value.forEach((task: ITask) => {
            const day: string = new Date(task.start).toISOString().split('T')[0]; // YYYY-MM-DD

            if (!grouped[day]) {
                grouped[day] = [];
            }

            grouped[day].push(task);
        });

        return Object.entries(grouped).sort(([a], [b]) => {
            return new Date(b).getTime() - new Date(a).getTime();
        });
    });

    const currencyTotalByDay = computed(() => {
        const grouped: Record<string, Record<string, number>> = {};

        for (const index in tasksByDay.value) {
            const [day, tasks] = tasksByDay.value[index]

            for (const task of tasks) {
                if (!grouped[day]) {
                    grouped[day] = {}
                }

                if (!grouped[day][task.currency]) {
                    grouped[day][task.currency] = 0
                }

                grouped[day][task.currency] += task.total
            }
        }

        return grouped;
    })

    const tasksDaysSumSeconds = computed(() => {
        const grouped: Record<string, number> = {};

        for (const index in tasksByDay.value) {
            const [day, tasks] = tasksByDay.value[index]

            let sum = 0;

            for (const j in tasks) {
                sum += tasks[j].seconds
            }

            grouped[day] = sum;
        }

        return grouped;
    })

    async function saveTask() {
        const newTask: Partial<ITask> = {
            name: currentTask.name ?? '',
            start: currentTask.start ?? 0,
            seconds: currentTask.seconds ?? 0,
            total: Math.ceil((<number><unknown>currentTask.seconds as unknown as number / 3600) * <number><unknown>settings.costPerHour),// for demo only
            currency: <string><unknown>settings.currency // for demo only
        }

        const { data: responseData } = await useFetch<ITask>(API_BASE_URI + '/tasks', {
            method: 'post',
            body: newTask
        })

        if (!responseData.value) {
            throw new Error('')
        }

        tasks.value.push(responseData.value)
        clear();
    }

    function timerFormattedTime(time: number) {
        const hours = Math.floor(time / 3600);
        const minutes = Math.floor((time % 3600) / 60);
        const seconds = time % 60;
        return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
    }

    return {
        saveTask,
        tasks,
        currentTask,
        timerFormattedTime,
        currencyTotalByDay,
        tasksByDay,
        fetch,
        tasksDaysSumSeconds
    }
});