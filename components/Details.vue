<script setup lang="ts">
import { useRoute } from "vue-router";
import { ref, onMounted } from "vue";

// Interface pour typer l'animal
interface Animal {
  id: number;
  name: string;
  description: string;
  age: number | null;
  breed: string | null;
  category_id: number; // Ajout de category_id
  image: string | null;
}

// Interface pour la catégorie
interface Category {
  id: number;
  name: string;
}

// Récupérer l'ID de l'animal depuis l'URL
const route = useRoute();
const animalId = route.params.id;

// Variables réactives pour stocker l'animal et la catégorie
const animal = ref<Animal | null>(null);
const categoryName = ref<string | null>(null);

// Fonction pour récupérer les détails de l'animal
const fetchAnimalDetails = async (id: string) => {
  try {
    const response = await fetch(`http://backend:3001/api/v1/animals/${id}`);
    if (!response.ok) {
      throw new Error("Failed to fetch animal details");
    }
    const data = await response.json();
    animal.value = data;

    // Après avoir récupéré l'animal, appeler l'API pour récupérer la catégorie
    if (animal.value && animal.value.category_id) {
      await fetchCategoryById(animal.value.category_id);
    }
  } catch (error) {
    console.error(
      "Erreur lors de la récupération des détails de l'animal:",
      error,
    );
  }
};

// Fonction pour récupérer les données de la catégorie
const fetchCategoryById = async (categoryId: number) => {
  try {
    const response = await fetch(
      `http://backend:3001/api/v1/categories/${categoryId}`,
    );
    if (!response.ok) {
      throw new Error("Failed to fetch category details");
    }
    const data: Category = await response.json();
    categoryName.value = data.name; // Stocker le nom de la catégorie
  } catch (error) {
    console.error(
      "Erreur lors de la récupération des détails de la catégorie:",
      error,
    );
  }
};

// Charger les détails de l'animal lorsque la page est montée
onMounted(() => {
  fetchAnimalDetails(animalId);
});
</script>

<template>
  <section v-if="animal" class="pt-8 mb-14 max-h-screen">
    <!-- Bouton "Go Back" repositionné au-dessus du contenu principal -->

    <div
      class="container mx-auto flex flex-col md:flex-row justify-between space-y-6 md:space-y-0 md:space-x-6"
    >
      <!-- Image de l'animal -->
      <div class="w-full md:w-1/3">
        <img
          src="/assets/photos/cat.png"
          alt="Image de {{ animal.name }}"
          class="w-full h-auto rounded-lg shadow-lg"
        />
      </div>

      <!-- Détails de l'animal -->
      <div
        class="w-full md:w-1/2 bg-neutral-800 text-white p-6 rounded-lg shadow-lg"
      >
        <h1 class="text-4xl font-bold mb-4">{{ animal.name }}</h1>
        <p class="text-sm mb-4 text-amber-400">ANIMAL ID: {{ animal.id }}</p>
        <ul class="text-lg leading-relaxed space-y-3">
          <li><strong>Race:</strong> {{ animal.breed || "Inconnu" }}</li>
          <li>
            <strong>Age:</strong>
            {{ animal.age ? animal.age + " years" : "Inconnu" }}
          </li>
          <li>
            <strong>Categorie:</strong>
            {{ categoryName || "Not Specified" }}
          </li>
          <li>
            <strong>Description:</strong>
            {{ animal.description || "Non spécifié" }}
          </li>
        </ul>
      </div>
    </div>
    <NuxtLink
      to="/"
      class="bg-amber-500 text-white px-4 py-2 mb-4 mt-6 inline-flex items-center rounded-lg hover:bg-amber-600 shadow-md"
    >
      ← Go Back
    </NuxtLink>
  </section>
</template>

<style scoped></style>
