<template>
  <div>
    <Accordion />
    <div class="bg-orange-100 pb-6">
      <h2 class="text-center text-2xl text-orange-700 font-bold mt-6 pt-5">
        Nos Nouveaux Arrivants
      </h2>
      <NuxtLink
        to="/annonces"
        class="absolute right-0 text-orange-700 font-bold"
        >Rencontrer les -></NuxtLink
      >
    </div>
    <Card :animals="latestAnnonces" />
  </div>
  <Article />
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import Accordion from "../components/Accordion.vue";
import Card from "../components/Card.vue";
import Article from "../components/Article.vue";

const latestAnnonces = ref<
  { id: number; name: string; description: string; created_at: string }[]
>([]);

onMounted(() => {
  fetch("http://backend:3001/api/v1/animals")
    .then((response) => response.json())
    .then(
      (
        data: {
          id: number;
          name: string;
          description: string;
          created_at: string;
        }[],
      ) => {
        latestAnnonces.value = data
          .sort(
            (a: { created_at: string }, b: { created_at: string }) =>
              new Date(b.created_at).getTime() -
              new Date(a.created_at).getTime(),
          )
          .slice(0, 4);
      },
    )
    .catch((error) => {
      console.error("Error fetching animals:", error);
    });
});
</script>


