<template>
    <div class="border rounded-lg p-4 shadow-lg m-2 w-[530px] h-64 flex flex-col main-color-border-hover" id="model_card">
        <div class="h-modal">
            <h2 class="text-xl font-bold wrap overflow-hidden">{{ model.name }}</h2>
            <p class="text-gray-600 text-sm">Filename: {{ model.filename }}</p>
            <p v-if="model.gallery" class="text-gray-600 text-sm">Gallery: {{ model.gallery.name }}</p>
            <p>Installed: <a v-if="model.installed">✅</a><a v-else>❌</a></p>
            <p>License: {{ model.license }}</p>
        </div>

        <div>
            <button @click="basicInstall(model)" class="mt-4 mr-4 bg-blue-500 text-white px-4 py-2 rounded">Install</button>
            <button @click="openModel" class="mt-4 mr-4 bg-blue-500 text-white px-4 py-2 rounded right">View Debug</button>
            <button @click="openAdvInstall" class="mt-4 mr-4 bg-blue-500 text-white px-4 py-2 rounded right">Adv Install</button>
            <button v-if="model.gallery.name === 'huggingface'" @click="navigateToUrl(model.urls[0])" class="mt-4 bg-blue-500 text-white px-4 py-2 rounded right">Open in HF</button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { PropType } from 'vue';
import { createConfirmDialog } from "vuejs-confirm-dialog";
import DataModal from "./DataModal.vue";
import InstallModal from "./InstallModal.vue";
import { basicInstall } from "../utils/models.ts";
import { Model } from "../interfaces/model.ts";

interface Props {
    model: PropType<Model>;
}

const props = defineProps<Props>();

const model = ref(props.model);

const openModel = () => {
    const { reveal } = createConfirmDialog(DataModal, { json_data: model });
    reveal();
}

const openAdvInstall = () => {
    const { reveal } = createConfirmDialog(InstallModal, { json_data: model });
    reveal();
}

const navigateToUrl = (url: string) => {
    window.open(url, '_blank');
}

</script>

<style scoped>
.child {}
</style>
