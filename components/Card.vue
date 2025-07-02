<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps<{
  animals: Array<any>
}>();
</script>

<template>
  <div class="flex space-x-4 p-6 text-center justify-center bg-orange-100">
    <div
      v-for="animal in props.animals"
      :key="animal.id"
      class="card card-compact bg-slate-100 w-96 shadow-xl ml-2 mr-2 text-slate-800"
    >
      <figure>
        <img src="assets/photos/cat.png" alt="animal" />
      </figure>
      <div class="card-body text-slate-700">
        <h2 class="card-title">{{ animal.name }}</h2>
        <p>{{ animal.description }}</p>
        <div class="card-body text-slate-700">
          <div class="card-actions justify-end">
            <NuxtLink
              :to="`/animal/${animal.id}`"
              class="btn btn-primary bg-amber-700 hover:bg-amber-600 hover:border-amber-900 border-amber-800"
            >
              Adopter maintenant
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
