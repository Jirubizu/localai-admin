<template>
<div>
    
</div>

</template>

<script setup lang="ts">

interface Job {
    id: string;
    name: string;
    status: string;
    model: string;
    created_at: string;
    updated_at: string;
}

interface Props {
    job: Job;
}
const props = defineProps<Props>();

</script>

<style scoped>

</style>