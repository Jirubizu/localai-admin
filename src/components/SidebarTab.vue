<template>
    <li @click="selectTab(props.tabName)" class="rounded-sm main-color-hover">
        <a href="#" class="flex items-center p-2 space-x-3 rounded-md">
            <!-- <slot name="icon"></slot> -->
            <v-icon :name="props.displayIcon"/>
            <span>{{ props.tabName.toLocaleUpperCase() }}</span>
        </a>
    </li>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
interface Props {
    tabName: string;
    displayIcon: string;
}

const emits = defineEmits(['selected']);
const selectedTab = ref('models');
const props = defineProps<Props>();

const icon = props.displayIcon;
let displayName = props.tabName;

const selectTab = (tabName: string) => {
    selectedTab.value = tabName;
    emits('selected', tabName);
}
</script>