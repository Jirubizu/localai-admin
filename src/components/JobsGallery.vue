<template>
    <div class="flex justify-center">

      <h1 class="text-5xl font-extrabold dark:text-white">Jobs</h1>
    </div>
    <div class="flex justify-center flex-wrap">
        <div v-for="url in job_urls" :key="url">
            <JobCard :url="url"/>
        </div>
    </div>
</template>

<script setup lang="ts">
import {inject, onMounted, ref} from "vue";
import JobCard from "./JobCard.vue";
const api_host = inject('api_host')

const job_urls = ref<object[]>([]);

job_urls.value.push("http://0.0.0.0:8080/models/jobs/6d0ddd5a-44dc-11ee-ae11-0242ac130002")
job_urls.value.push("http://0.0.0.0:8080/models/jobs/cda2cfe9-44e1-11ee-ae11-0242ac130002")
job_urls.value.push("http://0.0.0.0:8080/models/jobs/cda2cfe9-44e1-11ee-ae11-0242ac130002")
job_urls.value.push("http://0.0.0.0:8080/models/jobs/cda2cfe9-44e1-11ee-ae11-0242ac130002")
job_urls.value.push("http://0.0.0.0:8080/models/jobs/cda2cfe9-44e1-11ee-ae11-0242ac130002")
job_urls.value.push("http://0.0.0.0:8080/models/jobs/7e06844a-44e6-11ee-ae11-0242ac130002")

// onMounted(async () => {
//     const response = await fetch(`${api_host}/jobs`);
//     jobs.value = await response.json();
// })
</script>

<style scoped>

</style>