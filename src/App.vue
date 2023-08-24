<template>
    <div class="flex">
        <Sidebar @tab-selected="updateSelectedTab" />
        <div v-if="selectedTab === 'models'" class="flex-1 p-4">
            <ModelGallery />
        </div>
        <div v-if="selectedTab === 'settings'" class="flex-1 p-4">
            <!--  -->
        </div>

<!--        <ModalsContainer />-->
    </div>
</template>

<script setup lang="ts">
import {ref, defineAsyncComponent, defineComponent} from 'vue';
import Sidebar from './components/Sidebar.vue';

import ModelGallery from './components/ModelGallery.vue';

import { watch } from "vue";

  // // no need to import defineEmits
  // const emit = defineEmits(["update:modelValue"]);
  //
  // // when someVar changes, it will update the reference passed via v-model
  // watch(someVar, (value) => {
  //   emit("update:modelValue", value);
  // });
const selectedTab = ref('models'); // Default to 'models'

const updateSelectedTab = (tabName: string) => {
    selectedTab.value = tabName;
};
</script>
