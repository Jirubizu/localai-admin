<template>
    <div class="border rounded-lg p-4 shadow-lg m-2 w-[390px]" id="model_card">
        <h2 class="text-xl font-bold wrap overflow-hidden">{{ props.model.name }}</h2>
        <p class="text-gray-600">Gallery: {{ props.model.gallery.name }}</p>
        <p>Installed: <a v-if="props.model.installed">✅</a><a v-else>❌</a></p>
        <p>License: {{ props.model.license }}</p>

        <button @click="installModel" class="mt-4 mr-4 bg-blue-500 text-white px-4 py-2 rounded">Install</button>
        <button @click="openModel" class="mt-4 mr-4 bg-blue-500 text-white px-4 py-2 rounded right">View Debug</button>
        <button @click="openAdvInstall" class="mt-4 bg-blue-500 text-white px-4 py-2 rounded right">Adv Install</button>
    </div>
</template>

<script setup lang="ts">
import {inject, PropType} from 'vue';
import {createConfirmDialog} from "vuejs-confirm-dialog";
import DataModal from "./DataModal.vue";
import InstallModal from "./InstallModal.vue";
import { notify } from "notiwind"

const api_host = inject('api_host')

interface Model {
    name: string;
    size: string;
    license: string;
    installed: boolean;
    gallery: object;
}

interface Props {
    model: PropType<Model>;
}

const props = defineProps<Props>();

async function installModel() {
    console.log(`${props.model.gallery.name}@${props.model.name}`)
    const response = await fetch(`${api_host}/models/apply`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({id: `${props.model.gallery.name}@${props.model.name}`})
    });
    const data = await response.json();
    console.log(data);



    notify({
        group: "install",
        title: "Installing...",
        text: "Check jobs tab to see progress",
    }, 4000) // 4s
}


const openModel = () => {
    const {reveal} = createConfirmDialog(DataModal, {json_data: props.model});
    reveal();
}

const openAdvInstall = () => {
    const {reveal} = createConfirmDialog(InstallModal, {json_data: props.model});
    reveal();
}

</script>

<style scoped>
.child {
}
</style>
