<template>
    <div class="flex justify-center">

      <h1 class="text-5xl font-extrabold dark:text-white">Jobs</h1>
    </div>
    <div class="flex justify-center flex-wrap">
        <div v-for="uuid in job_uuids" :key="uuid">
            <JobCard :uuid="uuid"/>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import JobCard from "./JobCard.vue";

const job_uuids = ref<string[]>([]);

onMounted(async () => {
    let response:Response = new Response();
    try {
        response = await fetch(`${import.meta.env.VITE_API_BASE}/models/jobs`);
    } catch (e:unknown) {
        // error.value = "Network error. Ensure that the API is running and reachable."
    }
    
    let responseJson = await response.json();

    for (let key in responseJson) {
        job_uuids.value.push(key);
    }
})
</script>

<style scoped>

</style>