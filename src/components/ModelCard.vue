<template>
    <div class="border rounded-lg p-4 shadow-lg w-64 m-4" id="model_card">
        <h2 class="text-xl font-bold">{{ props.model.name }}</h2>
        <p class="text-gray-600">Gallery: {{ props.model.gallery.name }}</p>
        <!--        <JsonViewer :value="model" copyable boxed sort theme="jv-dark"/>-->
        <button @click="" class="mt-4 bg-blue-500 text-white px-4 py-2 rounded">View Debug</button>
        <button @click="installModel" class="mt-4 bg-blue-500 text-white px-4 py-2 rounded">Install</button>
    </div>
</template>

<script setup lang="ts">
import {defineComponent, PropType} from 'vue';

import {useModal} from '../store/modal';
import DebugModal from './DebugModal.vue';
const modal = useModal();

interface Model {
    name: string;
    size: string;
    license: string;
    gallery: object;
}
interface Props {
    model: PropType<Model>;
}

const props = defineProps<Props>();

async function installModel() {
    const response = await fetch('http://0.0.0.0:8080/models/apply', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({id: `${props.model.gallery.name}@${props.model.name}`})
    });
    const data = await response.json();
    console.log(data);
}
</script>

<style scoped>
/* You can add additional styles for the card here */
</style>
