import {defineStore} from "pinia";
import {reactive, ref} from "vue";
import {useFetch} from "#app";

export const useSettingsStore = defineStore('settings', () => {
    const currency = ref(null);
    const costPerHour = ref(null)
    const messages = reactive({
        success: '',
        danger: ''
    })

    const API_BASE_URI = 'http://0.0.0.0:5175'

    const fetch = async () => {
        const response = await $fetch(API_BASE_URI + '/settings')
        currency.value = response.currency
        costPerHour.value = response.cost_per_hour
    }

    const save = async () => {
        useFetch(API_BASE_URI + '/settings', {
            method: 'PUT',
            body: {
                currency: currency,
                cost_per_hour: costPerHour
            },
            onRequestError({ request, options, error }) {
                messages.danger = `Произошла ошибка при отправке запроса: ${error}`
            },
            onResponse({ request, response, options }) {
                messages.success = 'Настройки сохранены'
            },
            onResponseError({ request, response, options }) {
                messages.danger = 'Произошла ошибка при отправке'
            }
        })
    }

    return {
        currency, costPerHour, save, fetch, messages
    }
})