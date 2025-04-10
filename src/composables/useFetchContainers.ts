import { ref, computed } from "vue";

interface Container {
  id: string;
  category: string;
  color?: string;
  itemsYes: string[];
  itemsNo: string[];
  text: string;
  subtitle: string;
  icon: string;
}

export interface SearchItem {
  id: string;
  containerId: string;
  category: string;
  color?: string;
  subtitle: string;
  icon: string;
  itemName: string;
}

const API_URL = process.env.VUE_APP_API_URL;  // Usar la URL de la API desde el archivo .env.local

console.log('API URL:', API_URL);

export const useFetchContainers = () => {
  // Store containers
  const containersList = ref<Container[]>([]);
  const container = ref<Container | null>(null);
  const searchItems = ref<SearchItem[]>([]);
  const selectedItem = ref<SearchItem | null>(null); // Añadido para almacenar el elemento seleccionado
  const categories = computed(() => containersList.value);

  const fetchContainers = () => {
    fetch(`${API_URL}/containersList`)
      .then((response) => response.json())
      .then((data) => {
        containersList.value = data;
      })
      .catch((error) => {
        console.error("Error fetching containers list:", error);
      });
  };

  const fetchContainerDetail = (id: string) => {
    fetch(`${API_URL}/containers/${id}`)
      .then((response) => response.json())
      .then((data) => {
        container.value = data;
      })
      .catch((error) => {
        console.error("Error fetching container details:", error);
      });
  };

  const fetchSearchItems = () => {
    fetch(`${API_URL}/searchItems`)
      .then((response) => response.json())
      .then((data) => {
        searchItems.value = data;
      })
      .catch((error) => {
        console.error("Error fetching search items:", error);
      });
  };

  const fetchSearchItemsById = (id: string) => {
    fetch(`${API_URL}/searchItems/${id}`)
      .then((response) => response.json())
      .then((data) => {
        selectedItem.value = data;
      })
      .catch((error) => {
        console.error("Error fetching search item details:", error);
      });
  };

  return {
    containersList,
    categories,
    container,
    searchItems,
    selectedItem,
    fetchContainerDetail,
    fetchContainers,
    fetchSearchItems,
    fetchSearchItemsById,
  };
};
