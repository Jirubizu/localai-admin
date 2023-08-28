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
import {ref} from "vue";
import JobCard from "./JobCard.vue";

const job_uuids = ref<string[]>([]);

job_uuids.value.push("6d0ddd5a-44dc-11ee-ae11-0242ac130002")
job_uuids.value.push("cda2cfe9-44e1-11ee-ae11-0242ac130002")
job_uuids.value.push("cda2cfe9-44e1-11ee-ae11-0242ac130002")
job_uuids.value.push("cda2cfe9-44e1-11ee-ae11-0242ac130002")
job_uuids.value.push("cda2cfe9-44e1-11ee-ae11-0242ac130002")
job_uuids.value.push("7e06844a-44e6-11ee-ae11-0242ac130002")

// onMounted(async () => {
//     const response = await fetch(`${api_host}/jobs`);
//     jobs.value = await response.json();
// })
</script>

<style scoped>

</style>