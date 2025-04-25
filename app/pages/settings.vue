<template>
    <h2 class="">Настройки</h2>

    <div class="row">
        <div class="row p-3 align-items-center">
            <div class="col-md-6">
                <app-alert v-model="settings.messages.success" type="success">{{settings.messages.success}}</app-alert>
                <app-alert v-model="settings.messages.danger" type="danger">{{settings.messages.success}}</app-alert>

                <form @submit.prevent.stop="settings.save">
                    <div class="row g-3">
                        <div class="col-sm-4">
                            <label for="currency-select">Валюта</label>
                            <select v-model="settings.currency" class="form-control" id="currency-select">
                                <option value="rub" selected><currency-icon currency="rub"/> (рубль)</option>
                                <option value="usd"><currency-icon currency="usd"/> (доллар)</option>
                            </select>
                            <small id="currentHelp" class="form-text text-muted">Валюта расчёта для новых задач.</small>
                        </div>

                        <div class="col-sm-6">
                            <label for="costPerHour">Стоимость в час</label>
                            <input v-model="settings.costPerHour" type="number" min="1" class="form-control" id="costPerHour">
                        </div>
                    </div>
                    <button type="submit" class="btn btn-primary mt-3">Сохранить</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script setup>

import {useSettingsStore} from "~/stores/settings.js";
import AppAlert from "~/components/dashboard/molecules/AppAlert.vue";
import {onMounted} from "vue";
import CurrencyIcon from "~/components/dashboard/atoms/CurrencyIcon.vue";

const settings = useSettingsStore()

onMounted(settings.fetch)

</script>

<style scoped>

</style>