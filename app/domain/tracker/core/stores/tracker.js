import {defineStore} from "pinia";
import {reactive, ref} from "vue";
import {useProjectsStore} from "./projects.js";

export const useTrackerStore = defineStore('tracker', () => {
    const API_BASE_URI = 'http://0.0.0.0:5175'

    const createEmptyTask = () => ({
        title: '',
        projectId: '',
    })

    const newTask = reactive(createEmptyTask())
    const currentTask = ref(null);

    const create = async () => {
        // temp start

        const project = useProjectsStore().getProjects().value.filter((project) => {
            return project.id == newTask.projectId
        })[0]

        const created = {
            title: newTask.title,
            createdAt: Date.now(),
            project: null,
            id: 1
        }

        if (project) {
            created.project = {
                id: project.id,
                title: project.name,
                color: project.accentColor
            }
        }

        // temp end


        Object.assign(newTask, createEmptyTask())
        currentTask.value = created
        return created
    }

    const finish = async () => {
        console.log('finished ', currentTask.value.id)
        currentTask.value = null
        return true
    }

    return {
        currentTask,
        newTask,
        create,
        finish
    }
});