<template>
    <div class="border rounded-lg pd-4 shadow-lg m-2 w-[530px] p-4">
        <div v-if="job.error" class="rounded-lg border p-2 bg-red-300">
            <p>Error</p>
            <h2 class="text-xl font-bold">{{ job.error.message }}</h2>
        </div>
        <p>Job ID: {{ props.uuid }}%</p>
        <p>Processed: <a v-if="job.processed">✅</a><a v-else>❌</a></p>
        <p v-if="job.message">Message: {{ job.message }}</p>

        <div v-if="!job.processed && !job.error" class="flex justify-center">
            <p v-if="job.downloaded_size" class="pr-4">{{ job.downloaded_size }}</p>
            <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div class="bg-green-400 h-2.5 rounded-full" :style="{width: job.progress+'%    '}"></div>
            </div>
            <p v-if="job.file_size" class="pl-4">{{ job.file_size }}</p>
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
    uuid: string;
}

const props = defineProps<Props>();

function sleep(milliseconds: number) {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
}

onMounted(async () => {
    console.log("Fetching job")
    const url = import.meta.env.VITE_API_BASE + "/models/jobs/" + props.uuid;
    const response = await fetch(url);
    console.log(response)
    try {
        job.value = await response.json();
    } catch (e) {
        job.value.error = "Error fetching job, is the server live?";
    }
    if (job.value.processed) {
        console.log("Job is processed")
    } else {
        while (!job.value.processed && !job.value.error) {
            const response = await fetch(url);
            job.value = await response.json();
            console.log("Job is not processed")
            await sleep(1000);
        }
        console.log("Job is not processed")
    }

})


</script>

<style scoped>

</style>