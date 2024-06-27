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

export const useFetchContainers = () => {
  // Store containers
  const containersList = ref<Container[]>([]);
  const container = ref<Container | null>(null);
  const searchItems = ref<SearchItem[]>([]);
  const selectedItem = ref<SearchItem | null>(null); // Añadido para almacenar el elemento seleccionado
  const categories = computed(() => containersList.value);

  const fetchContainers = () => {
    fetch("http://localhost:3000/containersList")
      .then((response) => response.json())
      .then((data) => {
        containersList.value = data;
      })
      .catch((error) => {
        console.error("Error fetching containers list:", error);
      });
  };

  const fetchContainerDetail = (id: string) => {
    fetch(`http://localhost:3000/containers/${id}`)
      .then((response) => response.json())
      .then((data) => {
        container.value = data;
      })
      .catch((error) => {
        console.error("Error fetching container details:", error);
      });
  };

  const fetchSearchItems = () => {
    fetch("http://localhost:3000/searchItems")
      .then((response) => response.json())
      .then((data) => {
        searchItems.value = data;
      })
      .catch((error) => {
        console.error("Error fetching search items:", error);
      });
  };

  const fetchSearchItemsById = (id: string) => {
    fetch(`http://localhost:3000/searchItems/${id}`)
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
