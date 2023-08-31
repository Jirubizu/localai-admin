<template>
    <div class="flex">
        <div class="flex flex-col h-screen p-3 bg-white shadow w-60">
            <div class="space-y-3">
                <div class="flex items-center">
                    <h2 class="text-xl font-bold">Local AI Admin</h2>
                </div>
                <div class="flex-1">
                    <ul class="pt-2 pb-4 space-y-1 text-md">
                        <SidebarTab @selected="selectTab('models')" tabName="models" displayIcon="vi-folder-type-model" :class="{'main-color': selectedTab === 'models'}"/>
                        <SidebarTab @selected="selectTab('jobs')" tabName="jobs" displayIcon="vi-file-type-robots" :class="{'main-color': selectedTab === 'jobs'}"/>
                        <SidebarTab @selected="selectTab('settings')" tabName="settings" displayIcon="vi-file-type-config" :class="{'main-color': selectedTab === 'settings'}"/>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import SidebarTab from './SidebarTab.vue';
const emits = defineEmits(['tab-selected']);
const selectedTab = ref('models');

const selectTab = (tabName: string) => {
    selectedTab.value = tabName;
    emits('tab-selected', tabName);
}
</script>

<style>
</style>
