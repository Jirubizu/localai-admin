<template>
    <NotificationGroup group="install">
        <div
            class="fixed inset-0 flex items-start justify-end p-6 px-4 py-6 pointer-events-none"
        >
            <div class="w-full max-w-sm">
                <Notification
                    v-slot="{ notifications }"
                    enter="transform ease-out duration-300 transition"
                    enter-from="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-4"
                    enter-to="translate-y-0 opacity-100 sm:translate-x-0"
                    leave="transition ease-in duration-500"
                    leave-from="opacity-100"
                    leave-to="opacity-0"
                    move="transition duration-500"
                    move-delay="delay-300"
                >
                    <div
                        class="flex w-full max-w-sm mx-auto mt-4 overflow-hidden bg-white rounded-lg shadow-md"
                        v-for="notification in notifications"
                        :key="notification.id"
                    >
                        <div class="flex items-center justify-center w-12 bg-green-500">
                            <svg class="w-6 h-6 text-white fill-current" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM16.6667 28.3333L8.33337 20L10.6834 17.65L16.6667 23.6166L29.3167 10.9666L31.6667 13.3333L16.6667 28.3333Z" />
                            </svg>
                        </div>

                        <div class="px-4 py-2 -mx-3">
                            <div class="mx-3">
                                <span class="font-semibold text-green-500">{{ notification.title }}</span>
                                <p class="text-sm text-gray-600">{{ notification.text }}</p>
                            </div>
                        </div>
                    </div>
                </Notification>
            </div>
        </div>
    </NotificationGroup>
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
import {Notification, NotificationGroup} from "notiwind";

const selectedTab = ref('models'); // Default to 'models'

const updateSelectedTab = (tabName: string) => {
    selectedTab.value = tabName;
};
</script>
