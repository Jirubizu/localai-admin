<template>
    <div class="flex justify-center">
        <div class="align-middle w-fit">
            <input type="search" v-model="searchQuery" id="search"
                   class="border rounded-lg p-4 shadow-lg w-[400px] m-4 block z-20 text-2xl text-gray-900 bg-gray-50
                   border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700
                   dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                   placeholder="">
        </div>
    </div>
    <div class="flex flex-wrap ">
        <div v-for="item in filteredList" :key="item">
            <ModelCard :model="item"/>
        </div>
    </div>
</template>

<script setup lang="ts">
import {ref, onMounted, computed} from 'vue';
import ModelCard from './ModelCard.vue';

const models = ref<object[]>([]);
const searchQuery = ref("");

const filteredList = computed(() => {
    const loweredSearchQuery = searchQuery.value.toLowerCase();

    let filterd = models.value.filter((model: object) => {
        return model.name.includes(loweredSearchQuery);
    });
    return filterd;
});

onMounted(async () => {

    const response = await fetch('http://0.0.0.0:8080/models/available');
    const items = await response.json();
    models.value = items;
});

// defineExpose({models, searchQuery})
</script>
<style>

</style>