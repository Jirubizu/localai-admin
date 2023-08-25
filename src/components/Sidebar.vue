<!--<template>-->
<!--    <div class="w-64 h-screen bg-gray-800 text-white">-->
<!--        <ul>-->
<!--            <li @click="selectTab('models')" id="models">Models</li>-->
<!--            <li @click="selectTab('settings')" id="settings">Settings</li>-->
<!--        </ul>-->
<!--    </div>-->

<!--</template>-->

<template>
    <div class="flex">
        <div class="flex flex-col h-screen p-3 bg-white shadow w-60">
            <div class="space-y-3">
                <div class="flex items-center">
                    <h2 class="text-xl font-bold">Dashboard</h2>
                </div>
                <div class="flex-1">
                    <ul class="pt-2 pb-4 space-y-1 text-sm">
                        <li @click="selectTab('models')" class="rounded-sm">
                            <a
                                href="#"
                                class="flex items-center p-2 space-x-3 rounded-md"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    class="w-6 h-6"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                                    />
                                </svg>

                                <span>Models</span>
                            </a>
                        </li>
                        <li @click="selectTab('settings')" class="rounded-sm">
                            <a
                                href="#"
                                class="flex items-center p-2 space-x-3 rounded-md"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    class="w-6 h-6"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H6.911a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661z"
                                    />
                                </svg>

                                <span>Settings</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
const emits = defineEmits(['tab-selected']);

const selectTab = (tabName: string) => {
    emits('tab-selected', tabName);
}
</script>
