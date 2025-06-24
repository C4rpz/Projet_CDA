<template>
  <footer class="bg-grey-800 text-white py-8 h-30 shadow-2xl pt-10 mt-10">
    <div class="container mx-auto flex flex-wrap justify-between">
      <div class="w-full md:w-1/3 mb-6 md:mb-0">
        <h2 class="text-lg font-semibold mb-2 text-amber-700">
          Marketplace Animaux
        </h2>
        <p>
          Votre partenaire de confiance pour accueillir ou trouver un foyer
          aimant à vos animaux, en toute sérénité.
        </p>
      </div>

      <div class="w-full md:w-1/3 mb-6 md:mb-0">
        <h3 class="text-lg font-semibold mb-2 text-amber-700">Liens utiles</h3>
        <ul class="text-sm">
          <li>
            <nuxt-link to="/">Accueil</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/about">À propos</nuxt-link>
          </li>
          <li>
            <nuxt-link to="#">Contact</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/conditions">Termes et conditions</nuxt-link>
          </li>
        </ul>
      </div>

      <div class="w-full md:w-1/3">
        <h3 class="text-lg font-semibold mb-2 text-amber-700">Suivez-nous</h3>
        <div class="flex space-x-4">
          <a href="#" class="text-blue-500 hover:text-white">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <!-- Icône Facebook -->
              <path
                d="M22 12.073c0-5.523-4.477-10-10-10s-10 4.477-10 10c0 5.002 3.657 9.13 8.438 9.88v-6.99h-2.54v-2.89h2.54v-2.205c0-2.507 1.492-3.89 3.778-3.89 1.096 0 2.24.195 2.24.195v2.47h-1.262c-1.244 0-1.63.774-1.63 1.564v1.867h2.773l-.443 2.89h-2.33v6.99c4.78-.75 8.437-4.878 8.437-9.88z"
              />
            </svg>
          </a>
          <a href="#" class="text-blue-400 hover:text-white">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M23.954 4.569c-.885.392-1.83.654-2.825.775a4.92 4.92 0 0 0 2.163-2.723 9.864 9.864 0 0 1-3.127 1.195 4.916 4.916 0 0 0-8.38 4.482A13.944 13.944 0 0 1 1.671 3.15a4.902 4.902 0 0 0 1.523 6.573 4.935 4.935 0 0 1-2.229-.616v.061a4.913 4.913 0 0 0 3.946 4.816 4.996 4.996 0 0 1-2.224.084 4.923 4.923 0 0 0 4.604 3.417 9.87 9.87 0 0 1-6.102 2.104c-.395 0-.785-.023-1.17-.068a13.945 13.945 0 0 0 7.548 2.212c9.055 0 14.002-7.506 14.002-14.002 0-.213 0-.426-.015-.637a10.01 10.01 0 0 0 2.457-2.548l-.047-.02z"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>

    <div class="mt-8 text-center text-sm">
      &copy; 2024 Amis à poils. Tous droits réservés.
    </div>
  </footer>
</template>
<script setup lang="ts"></script>
