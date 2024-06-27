 <template>
  <div class="container-list">
    <h1>Recycling made simple</h1>
    <h2>Learn how to recycle waste properly and help keep our planet green</h2>
    <p class="subtitle">Explore the different bins</p>
    <div class="row">
      <div class="column" v-for="(category, index) in categories" :key="index">
        <div class="cube" :style="{ backgroundColor: category.color }" @click="openCube(category.id)">
          <p class="category">{{ category.category }}</p>
          <p class="arrow-right">→</p>
        </div>
      </div>
    </div>
    <p class="subtitle-search"> Looking for something specific?</p>
    <div class="search-bar" @click="goToSearch"> 
      <span class="search-me">
      <img src="@/assets/icons/search-icon.svg" alt="search-icon" class="search" />
      Search for an item...</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useFetchContainers } from '@/composables/useFetchContainers';
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const { categories, fetchContainers } = useFetchContainers();

const openCube = (categoryId: string) => {
  router.push({ name: "Detail", params: { id: categoryId } });
};

const goToSearch = () => {
  router.push({ name: 'Search' });
};

onMounted(() => {
  fetchContainers();
});
</script>

<style lang="scss"></style>