<template>
<div>
    
</div>
    <div class="border rounded-lg pd-4 shadow-lg m-2 w-[530px] p-4">
        <div v-if="job.error">
            <h2 class="text-xl font-bold">Error: {{ job.error }}</h2>
        </div>
        <p>Processed: <a v-if="job.processed">✅</a><a v-else>❌</a></p>
        <p>Message: {{ job.message }}</p>
        <p>Progress: {{ job.progress }}</p>


        <div v-if="!job.processed" class="flex justify-center">
            <p class="pr-4">{{ job.downloaded_size }}</p>
            <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div class="bg-green-400 h-2.5 rounded-full" :style="{width: job.progress+'%    '}"></div>
            </div>
            <p class="pl-4">{{ job.file_size }}</p>
        </div>

    </div>
</template>

<script setup lang="ts">

import {onMounted, ref} from "vue";

interface Job {
    error: string;
    processed: false;
    message: string;
    progress: number;
    file_size: string;
    downloaded_size: string;
}

const job = ref<Job>({
    error: "",
    processed: false,
    message: "",
    progress: 0,
    file_size: "",
    downloaded_size: ""
})


interface Props {
    url: string;
}

const props = defineProps<Props>();

function sleep(milliseconds: number) {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
}

onMounted(async () => {
    const response = await fetch(`${props.url}`);
    job.value    = await response.json();
    if (job.value.processed) {
        console.log("Job is processed")
    } else {
        while (!job.value.processed) {
            const response = await fetch(`${props.url}`);
            job.value    = await response.json();
            console.log("Job is not processed")
            await sleep(1000);
        }
        console.log("Job is not processed")
    }

})



</script>

<style scoped>

</style>