<template>
  <div class="body-search">
    <div class="header-container">
      <div class="header-search">
        <img src="@/assets/icons/left-arrow.png" alt="Arrow" class="arrow-black" @click="goToPreviousPage" />
        <p class="search-text">Search</p>
        <div>
          <input class="search-input" type="text" v-model="searchQuery" @input="updateSearchResult" />
        </div>
      </div>
    </div>

    <div v-if="searchQuery">
      <p class="search-result" v-if="filteredSearchItems.length > 0">
        {{ filteredSearchItems.length }} {{ filteredSearchItems.length > 1 ? 'results found' : 'result found' }}
      </p>
    </div>

    <p class="search-no-result" v-if="searchQuery && filteredSearchItems.length === 0"> No results found </p>
    <div class="search-result">
      <p class="search-result-bubble" v-for="item in filteredSearchItems" :key="item.id" @click="redirectToItemResult(item.id)">
        <span>{{ item.itemName }}</span>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useFetchContainers, SearchItem } from '@/composable/useFetchContainers';

const router = useRouter();
const { searchItems, fetchSearchItems } = useFetchContainers();
const searchResult = ref<SearchItem[]>([]);  // Inicializamos searchResult como un array vacío de SearchItem[]
const searchQuery = ref('');  // Variable para mantener el texto del input

const filteredSearchItems = computed(() => {
  if (!searchQuery.value) {
    return [];
  }
  const lowerCaseSearch = searchQuery.value.toLowerCase();
  
  return searchItems.value.filter(item =>
    item.itemName.toLowerCase().includes(lowerCaseSearch)
  );
});

const goToPreviousPage = () => {
  router.go(-1);
};

const redirectToItemResult = (containerId: string) => {
  router.push({ name: 'Result', params: { id: containerId } }).catch(error => {
    if (error.name !== 'Navigation Duplicated') { 
      throw error;
    }
  });
};

// Función para actualizar searchResult en base a searchQuery
const updateSearchResult = () => {
  searchResult.value = searchQuery.value ? searchItems.value.filter(item =>
    item.itemName.toLowerCase().includes(searchQuery.value.toLowerCase())
  ) : [];
};

onMounted(() => {
  fetchSearchItems();
});
</script>

<style lang="scss"></style>

