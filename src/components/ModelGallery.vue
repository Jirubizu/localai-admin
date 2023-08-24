<template>
    <div class="flex justify-center">
        <div class="relative w-full">
            <input type="search" v-model="searchQuery" id="search"
                   class="block p-2.5 z-20 text-sm text-gray-900 bg-gray-50 rounded-lg  border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                   placeholder="">
        </div>
    </div>
    <div class="flex flex-wrap justify-center">
        <DynamicScroller
            ref="scroller"
            :items="filteredList"
            :min-item-size="54"
            class="scroller"
        >
            <template #before>
                <div class="notice">
                    The message heights are unknown.
                </div>
            </template>

            <template #default="{ item, index, active }">
                <DynamicScrollerItem
                    :item="item"
                    :active="active"
                    :data-active="active"
                    :title="`Click to change message ${index}`"
                    class="message"
                >
                    <div class="text">
                        {{ item.target }}
                    </div>
                    <div class="index">
<!--                        <span>{{ item.id }} (id)</span>-->
                        <span>{{ index }} (index)</span>
                    </div>
                </DynamicScrollerItem>
            </template>
        </DynamicScroller>
    </div>
</template>

<script setup lang="ts">
import {ref, onMounted, computed} from 'vue';
import ModelCard from './ModelCard.vue';
import { DynamicScroller } from 'vue-virtual-scroller'
import { DynamicScrollerItem } from 'vue-virtual-scroller'

interface Model {
    name: string;
    size: string;
}

const models = ref<Model[]>([]);
const searchQuery = ref("");

// const emits = defineEmits(['tab-selected'])
//
//
// const selectTab = (tabName: string) => {
//     emits('tab-selected', tabName)
// }
const filteredList = computed(() => {
    const loweredSearchQuery = searchQuery.value.toLowerCase();

    let filterd = models.value.filter((model: Model) => {
        return model.name.includes(loweredSearchQuery);
    });
    return filterd;
});

onMounted(async () => {

    const response = await fetch('http://aipoc:8080/models/available');
    const items = await response.json();
    let tmp:Array<Map<number, object>> = [];
    let count = 0;
    console.log(items)
    for (const item in items) {
        // console.log(item)
        tmp.push({})
    }
    console.log(tmp);
    // models.value = await response.json();

});

// defineExpose({models, searchQuery})
</script>
<style>
[v-cloak] {
    display: none;
}
</style>