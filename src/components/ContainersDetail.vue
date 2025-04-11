<template>
    <div v-if="container" class="container" :style="{ backgroundColor: container.color }">
        <div class="header-container">
            <div class="header-text">
                <img src="@/assets/icons/left-arrow.png" alt="Arrow" class="arrow-left" @click="goToPreviousPage" />
                <p class="selected-category">{{ container.category }}</p>
                <p class="subtitle-container">{{ container.subtitle }}</p>
            </div>
            <div> <img v-if="container.icon" class="header-icon" :src="require(`@/assets/icons/${container.icon}`)" />
            </div>
        </div>

        <div class="text-container">
            <p>{{ container.text }}</p>  
        </div> 

        <div class="container-b-nb">
            <hr>
            <p class="b-nb">These belong here</p>
            <div class="belongs">
                <div class="bubble-b" v-for="(item, index) in container?.itemsYes" :key="index">
                    <p class="dot-green dot"></p>
                    <p>{{ item }} </p>
                </div>
            </div>

            <hr>
            <p class="b-nb">These do not</p>
            <div class="not-belongs">
                <div class="bubble-b" v-for="(item, index) in container?.itemsNo" :key="index">
                    <p class="dot-red dot"></p>
                    <p>{{ item }} </p>
                </div>
            </div>
        </div>

    </div>
</template>

<script setup lang="ts">
import { useFetchContainers } from '@/composable/useFetchContainers';
import { watchEffect } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const router = useRouter();
const route = useRoute();
const { container, fetchContainerDetail } = useFetchContainers();

watchEffect(() => {
    const id = route.params.id;
    if (id) {
        const categoryId = Array.isArray(id) ? id[0] : id.toString();
        fetchContainerDetail(categoryId);
    }
});

const goToPreviousPage = () => {
    router.go(-1);
};
</script>

<style lang="scss"></style>