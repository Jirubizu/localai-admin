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
    <div class="flex flex-col h-auto p-2 border rounded">
        <RecycleScroller
        class="scroller"
        :items="chunks"
        :key-field="'id'"
        :itemSize="280"
    >
        <template #default="{ item, index }">
            <div :key="index" class="grid grid-cols-3">
                <ModelCard v-for="(model) in item.data" :key="model.name" :model="model"/>
            </div>
        </template>
    </RecycleScroller>
    </div>
    
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { RecycleScroller } from 'vue-virtual-scroller'
import 'vue-virtual-scroller/dist/vue-virtual-scroller.css'
import ModelCard from './ModelCard.vue';
import { Model } from "../interfaces/model.ts";

const models = ref<Model[]>([]);
const searchQuery = ref("");
const filteredList = computed(() => {
    const loweredSearchQuery = searchQuery.value.toLowerCase();

    return models.value.filter((model: Model) => {
        return model.name.toLowerCase().includes(loweredSearchQuery);
    });
});

const chunks = computed(() => {
  const chunkSize = 3;
  return filteredList.value.reduce((resultArray, item, index) => { 
    const chunkIndex = Math.floor(index/chunkSize)
        if(!resultArray[chunkIndex]) {
            resultArray[chunkIndex] = { id: chunkIndex, data: [], height: 0 } 
        }
        resultArray[chunkIndex].data.push(item)

        // Calculate the height of the item here.
        // This is just an example, you would need to calculate the actual height.
        resultArray[chunkIndex].height = resultArray[chunkIndex].data.length * 100;

        return resultArray
  }, [])
});

console.log

onMounted(async () => {
    const response = await fetch(`${import.meta.env.VITE_API_BASE}/models/available`);
    let responseJson = await response.json();
    for (let i = 0; i < responseJson.length; i++) {
        responseJson[i].filename = responseJson[i].name;
        responseJson[i].name = responseJson[i].name
            .replace(/\.bin|-|_|__/g, " ");
    }

    models.value = responseJson;
});

</script>

<style>
.scroller {
  height: 80vh;
  overflow-y: auto;
}
</style>
