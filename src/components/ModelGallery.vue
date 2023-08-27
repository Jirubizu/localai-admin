<template>
    <div class="flex justify-center">
        <div class="align-middle w-fit">
            <input type="search" v-model="searchQuery" id="search"
                   class="border rounded-lg p-4 shadow-lg w-[400px] m-4 block z-20 text-2xl text-gray-900 bg-gray-50
                   border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700
                   dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                   placeholder="Search...">
        </div>
    </div>
    <div class="flex flex-wrap">
        <div v-for="item in filteredList" :key="item">
            <ModelCard :model="item"/>
        </div>
    </div>
</template>

<script setup lang="ts">
import {computed, inject, onMounted, ref} from 'vue';
import ModelCard from './ModelCard.vue';

const api_host = inject('api_host')
const models = ref<object[]>([]);
const searchQuery = ref("");

const filteredList = computed(() => {
    const loweredSearchQuery = searchQuery.value.toLowerCase();

    let filtered = models.value.filter((model: object) => {
        return model.name.includes(loweredSearchQuery);
    });
    return filtered;
});

onMounted(async () => {

    const response = await fetch(`${api_host}/models/available`);
    models.value = await response.json();
});

// defineExpose({models, searchQuery})
</script>
<style>

</style>