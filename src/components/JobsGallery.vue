<template>
    <div class="flex justify-center">
        <h1>Jobs</h1>
        <div v-for="job in jobs" :key="job">
            <JobCard :job="job"/>
        </div>
    </div>
</template>

<script setup lang="ts">
import {inject, onMounted, ref} from "vue";
import JobCard from "./JobCard.vue";
const api_host = inject('api_host')

const jobs = ref<object[]>([]);

onMounted(async () => {
    const response = await fetch(`${api_host}/jobs`);
    jobs.value = await response.json();
})
</script>

<style scoped>

</style>