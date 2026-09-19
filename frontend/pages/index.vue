<template>
    <h1>Hello Home Page</h1>
    <h1>Getting Category</h1>
</template>

<script setup lang="ts">
    const config = useRuntimeConfig();
    const handleGetCategories  = async () => {
        try {
            const response = await $fetch(`http://nest_backend/api/v1/admin/master-data/categories`);
            console.log('DATA', response);
        } catch (error) {
            console.log(error);
        }
    }

    onMounted(() => {
        handleGetCategories();
    })
</script>