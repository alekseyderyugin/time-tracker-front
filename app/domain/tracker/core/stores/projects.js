import {defineStore} from "pinia";
import {ref} from "vue";

export const useProjectsStore = defineStore('projects', () => {

    const projects = ref([]);

    const getProjects = () => {
        if (!projects.value.length) {
            projects.value = [
                {
                    id: 1,
                    name: 'ski',
                    accentColor: '#1976d2',
                }, {
                    id: 2,
                    name: 'widget',
                    accentColor: '#f39c12'
                }
            ];
        }

        return projects;
    }

    const getAccentColorById = (id) => {
        for (const project of projects.value) {
            if (project.id === id) {
                return project.accentColor;
            }
        }

        return '#ffffff'
    }

    return {
        getProjects, getAccentColorById
    }
})
