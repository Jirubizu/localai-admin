<template>
    <div class="flex">
        <Sidebar @tab-selected="updateSelectedTab" />
        <div v-if="selectedTab === 'models'" class="flex-1 p-4">
            <ModelGallery />
        </div>
        <div v-if="selectedTab === 'jobs'" class="flex-1 p-4">
            <JobsGallery/>
        </div>
        <div v-if="selectedTab === 'settings'" class="flex-1 p-4">
            <Settings/>
        </div>

    </div>
    <DialogsWrapper />
</template>

<script setup lang="ts">
import {ref, defineAsyncComponent, defineComponent} from 'vue';
import Sidebar from './components/Sidebar.vue';

import ModelGallery from './components/ModelGallery.vue';
import Settings from "./components/Settings.vue";
import JobsGallery from "./components/JobsGallery.vue";

const selectedTab = ref('models'); // Default to 'models'

const updateSelectedTab = (tabName: string) => {
    selectedTab.value = tabName;
};
</script>
