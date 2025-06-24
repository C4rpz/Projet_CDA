<script setup lang="ts">
defineProps({
  animal: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <section v-if="animal" class="py-8">
    <div class="container justify-center mx-auto px-4 relative">
      <div class="-mt-36 p-4 rounded-lg bg-neutral-50 dark:bg-neutral-900">
        <div class="flex flex-col h-full rounded-lg">
          <div class="p-2 sm:p-8">
            <!-- Affichage du nom de l'animal avec un lien -->
            <NuxtLink :href="`/animal/${animal.id}`">
              <h3
                class="font-semibold leading-tight text-xl whitespace-pre-wrap"
              >
                {{ animal.name }}
              </h3>
            </NuxtLink>

            <!-- Section avec l'utilisateur, la catégorie et le prix -->
            <div
              class="border-t flex items-center justify-between mt-auto p-4 text-xs"
            >
              <div>
                <!-- Affichage des informations de l'utilisateur si elles existent -->
                <div
                  v-if="animal.user"
                  class="inline-flex items-center space-x-2"
                  variant="ghost"
                >
                  <NuxtImg
                    preset="avatar"
                    class="h-12 rounded-3xl w-12"
                    :alt="animal.user.name"
                    :src="animal.user.profile_image"
                  />
                  <div>
                    <h4 class="font-semibold text-base">
                      {{ animal.user.name }}
                    </h4>
                    <p>
                      Posté le :
                      {{ new Date(animal.created_at).toLocaleDateString() }}
                    </p>
                  </div>
                </div>
              </div>
              <!-- Affichage du prix de l'animal -->
              <span class="font-bold text-lg">{{ animal.price }} €</span>
            </div>

            <!-- Informations supplémentaires sur l'animal -->
            <div class="font-semibold ml-8 mt-4 space-x-2 text-xs">
              <p>Catégorie : {{ animal.category.name }}</p>
              <p>
                Âge : {{ animal.age ? animal.age + " ans" : "Non spécifié" }}
              </p>
              <p>Race : {{ animal.breed || "Non spécifiée" }}</p>
            </div>

            <!-- Description de l'animal -->
            <div
              class="dark:prose-invert dark:prose-neutral-100 prose prose-neutral-800 md:max-w-none lg:prose-lg mt-4"
            >
              <p>{{ animal.description }}</p>
            </div>

            <!-- Affichage de l'image de l'animal s'il y en a une -->
            <div v-if="animal.image" class="mt-4">
              <NuxtImg
                :src="animal.image"
                alt="Image de {{ animal.name }}"
                class="w-full h-48 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
