<template>
<div v-if="selectedItem" class="item-container" :style="{ backgroundColor: selectedItem.color }">
        <div class="header-container">
            <div class="header-search-item">

                <img src="@/assets/icons/left-arrow.png" alt="Arrow" class="arrow-left" @click="goToHome" />

                <p class="selected-category">{{ selectedItem.itemName }}</p>

            <div class="subtitle-icon-container">
                <p class="subtitle-container">This item belongs in the {{ selectedItem.subtitle }} </p>

                <div class="icon-item"><img v-if="selectedItem.icon" class="header-icon"
                        :src="require(`@/assets/icons/${selectedItem.icon}`)" alt="Icon" /></div>
            </div>
            </div>
        </div>
        
        <hr>
       <div class="container-bottom"> 
        <div class="info">
            <p @click="openCategory(selectedItem.containerId)">Discover what else belongs in the {{ selectedItem.category }} </p>
            <p @click="openCategory(selectedItem.containerId)" class="small-arrow">→</p> 
        </div>

        <p class="subtitle-search-item">Looking for another item?</p>
        <div class="search-bar-item" @click="goToSearch">
            <span class="search-item">
                <img src="@/assets/icons/search-icon.svg" alt="search-icon" class="search-icon" />
                Search for an item...</span>
        </div>
    </div>
</div>
</template>

<script setup>

import { onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { useFetchContainers } from '@/composable/useFetchContainers';

const { selectedItem, fetchSearchItemsById } = useFetchContainers();
const router = useRouter();
const route = useRoute();

onMounted(() => {
    const id = route.params.id;
    fetchSearchItemsById(id);
});
const goToHome = () => {
    router.push({ path: '/' });
};
const goToSearch = () => {
    router.push({ name: 'Search' });
};
const openCategory = (containerId) => {
    router.push({ name: "Detail", params: { id: containerId } });
};

</script>

<style lang="scss"></style>