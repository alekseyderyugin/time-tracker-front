import {defineStore} from "pinia";
import {ref} from "vue";
import {useTrackerStore} from "./tracker.js";

export const useTasksHistory = defineStore('history', () => {

    const tasks = ref([]);

    function load() {
        tasks.value = [
            {
                id: 1,
                name: 'Разработка 1',
                createdAt: 1772480308,
                startedAt: 1772480308,
                closedAt: 1772483908,
                projectColor: '#1976d2',
                projectName: 'ski',
                currency: 'rub',
                total: 1000,
                parentId: null
            }, {
                id: 2,
                name: 'Разработка 2',
                createdAt: 1772480200,
                startedAt: 1772480200,
                closedAt: 1772482000,
                projectColor: '#ffe26d',
                projectName: 'Other',
                currency: 'rub',
                total: 2020.65,
                parentId: null
            }, {
                id: 3,
                name: 'Разработка 3',
                createdAt: 1772480300,
                startedAt: 1772480300,
                closedAt: 1772482000,
                projectColor: '#d2191f',
                projectName: 'Other 2',
                currency: 'rub',
                total: 1250,
                parentId: null
            }, {
                id: 4,
                name: 'Разработка 3',
                createdAt: 1772480000,
                startedAt: 1772480000,
                closedAt: 1772482000,
                projectColor: '#d2191f',
                projectName: 'Other 2',
                currency: 'rub',
                total: 1250,
                parentId: 3
            },{
                id: 5,
                name: 'Разработка 3',
                createdAt: 1772480100,
                startedAt: 1772480100,
                closedAt: 1772482000,
                projectColor: '#d2191f',
                projectName: 'Other 2',
                currency: 'rub',
                total: 1250,
                parentId: 3
            }
        ]
    }

    function getById(id) {
        return tasks.value.filter((task, key) => task.id === id)[0]
    }

    function getGroup(id) {
        return tasks.value.filter((task, key) => task.parentId === id)
    }

    function getTasks() {
        return tasks.value.filter((task, key) => task.parentId == null)
    }

    function deleteTask(id) {
        for (const key in tasks.value) {
            let task = tasks.value[key]
            if (task.id === id || task.parentId === id) {
                tasks.value.splice(key, 1)
            }
        }
    }

    function continueTask(id) {
        useTrackerStore().continueTask(id);
    }

    return {
        getById, getGroup, getTasks, load, deleteTask, continueTask
    }
});