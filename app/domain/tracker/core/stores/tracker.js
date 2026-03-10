import {defineStore} from "pinia";
import {reactive, ref} from "vue";
import {useProjectsStore} from "./projects.js";
import {useTasksHistory} from "./tasksHistory.js";
import useTicker from "../use/useTicker.js";

export const useTrackerStore = defineStore('tracker', () => {
    const API_BASE_URI = 'http://0.0.0.0:5175'

    const createEmptyTask = () => ({
        name: '',
        projectId: '',
        projectName: '',
        projectColor: ''
    })

    const newTask = reactive(createEmptyTask())
    const currentTask = ref(null);
    const ticker = useTicker()

    const create = () => {
        // temp start
        const project = useProjectsStore().getProjects().value.filter((project) => {
            return project.id == newTask.projectId
        })[0]

        const created = {
            name: newTask.name,
            createdAt: Date.now(),
            startedAt: Date.now(),
            project: null,
            id: 1
        }

        if (project) {
            created.project = {
                id: project.id,
                name: project.name,
                color: project.color
            }
        }

        // temp end

        Object.assign(newTask, createEmptyTask())
        currentTask.value = created
        ticker.start(created.startedAt)
    }

    const finish = async () => {
        console.log('finished ', currentTask.value.id)
        currentTask.value = null
        ticker.stop()
        return true
    }

    const seconds = ticker.seconds

    function continueTask(id) {
        const _continue = () => {
            const history = useTasksHistory()
            const taskToContinue = history.getById(id)
            const created = {
                name: taskToContinue.name,
                createdAt: Date.now(),
                startedAt: Date.now(),
                project: {
                    name: taskToContinue.projectName,
                    color: taskToContinue.projectColor,
                },
                id: 38182
            }

            // temp end
            currentTask.value = created
            Object.assign(newTask, createEmptyTask())
            ticker.start(created.startedAt)
        }

        if (ticker.isEnabled()) {
            finish().then(() => {
                _continue();
            });
            return
        }

        _continue()
        // temp start
    }

    return {
        currentTask,
        newTask,
        create,
        finish,
        continueTask,
        seconds
    }
});