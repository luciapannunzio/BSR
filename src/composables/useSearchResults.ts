
// import { ref, computed, onMounted } from 'vue';
// import { useFetchContainers, SearchItem } from './useFetchContainers';

// export function useSearchResult() {
//   const { searchItems, fetchSearchItems } = useFetchContainers();
//   const searchResult = ref('');
//   const filteredSearchItems = ref<SearchItem[]>([]);

//   const filterSearchItems = (searchValue: string) => {
//     const lowerCaseSearch = searchValue.toLowerCase();
//     const anyPartMatches = searchItems.value.filter(item =>
//       item.itemName.toLowerCase().includes(lowerCaseSearch)
//     );
//     const firstLetterMatches = anyPartMatches.filter(item =>
//       item.itemName.toLowerCase().startsWith(lowerCaseSearch)
//     );
//     const secondWordMatches = anyPartMatches.filter(item =>
//       item.itemName.toLowerCase().split(' ').slice(1).includes(lowerCaseSearch)
//     );
//     const filteredItems = [...new Set([...firstLetterMatches, ...secondWordMatches])];
//     const exactMatches = filteredItems.find(item =>
//       item.itemName.toLowerCase() === lowerCaseSearch
//     );
//     filteredSearchItems.value = exactMatches ? [exactMatches] : filteredItems;
//   };

//   onMounted(() => {
//     fetchSearchItems();
//   });

//   return {
//     searchResult,
//     filteredSearchItems,
//     filterSearchItems
//   };
// }













// import { ref, computed, watch } from 'vue';
// import debounce from 'lodash/debounce';
// import { useFetchContainers, SearchItem } from './useFetchContainers';

// export function useSearchResult() {
//   const { searchItems, fetchSearchItems } = useFetchContainers();
//   const searchResult = ref('');
//   const filteredSearchItems = ref<SearchItem[]>([]);

//   const filterItems = (searchInput: string): SearchItem[] => { 
//     const lowerCaseSearch = searchInput.toLowerCase();
//     const firstLetterMatches = searchItems.value.filter(item =>
//       item.itemName.toLowerCase().startsWith(lowerCaseSearch)
//     );
//     const exactMatch = firstLetterMatches.find(item =>
//       item.itemName.toLowerCase() === lowerCaseSearch
//     );
//     return exactMatch ? [exactMatch] : firstLetterMatches;
//   };

//   const updateFilteredItems = debounce((searchInput: string) => {
//     filteredSearchItems.value = filterItems(searchInput);
//   }, 300);

//   watch(searchResult, (newVal) => {
//     updateFilteredItems(newVal);
//   });

//   return {
//     searchResult,
//     filteredSearchItems,
//     fetchSearchItems
//   };
// }
