<template>
    <div class="flex flex-wrap flex-col justify-center p-4 m-4 border h-auto">
        <h1 class="main-color">Settings</h1>
        <Select v-model="selected" :options="colors" :underline="true" class="rounded-sm"/>
        <label data-te-select-label-ref>Example label</label>
    </div>
</template>

<script setup lang="ts">
import { Select } from 'flowbite-vue';
import { ref, watch } from 'vue';

let selected = ref('eca480')
const colors = [
    { value: 'eca480', name: 'eca480' },
    { value: '80eca4', name: '80eca4' },
    { value: '80ecda', name: '80ecda' },
];

watch(selected, (newColor) => {
    console.log(newColor);
  document.documentElement.style.setProperty('--main-color', `#${newColor}`);
  document.documentElement.style.setProperty('--main-color-hover', `#${newColor}81`);
});
</script>

<style scoped></style>