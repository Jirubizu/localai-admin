<template>
    <div class="w-64 h-screen bg-gray-800 text-white">
        <ul>
            <li @click="selectTab('models')">Models</li>
            <li @click="selectTab('settings')">Settings</li>
        </ul>
    </div>
</template>

<script lang="ts" setup>
const emits = defineEmits(['tab-selected']);

const selectTab = (tabName: string) => {
    emits('tab-selected', tabName);
}
</script>
