<template>
  <header class="bg-white w-full sticky top-0 z-50">
    <nav
      class="flex max-w-full items-center justify-between p-6 lg:px-8 border-b shadow-md"
      aria-label="Global"
    >
      <div class="flex items-center lg:flex-1">
        <nuxt-link to="/" class="flex items-center -m-1.5 p-1.5">
          <img
            class="h-12 w-auto"
            src="../public/file.png"
            alt="Amis à poils"
          />
          <span
            class="ml-3 font-serif text-orange-600 text-2xl font-bold font-poppins"
            >Amis à poils</span
          >
        </nuxt-link>
      </div>

      <div class="hidden lg:flex lg:flex-1 lg:justify-end flex space-x-6">
        <nuxt-link
          to="/"
          class="text-sm font-semibold leading-6 text-gray-900 hover:text-orange-300 px-2.5 py-1"
        >
          Accueil
        </nuxt-link>
        <nuxt-link
          to="/annonces"
          class="text-sm font-semibold leading-6 text-gray-900 hover:text-orange-300 px-2.5 py-1"
        >
          Annonces
        </nuxt-link>
        <nuxt-link
          to="/createAnnonce"
          class="text-sm font-semibold leading-6 text-orange-600 border-2 border-orange-600 px-2.5 py-1 rounded hover:bg-orange-600 hover:text-white hover:border-transparent transition-colors"
        >
          Créer mon annonce
        </nuxt-link>
        <!-- Bouton Chat -->
        <nuxt-link
          to="/chat"
          class="text-sm font-semibold leading-6 bg-orange-500 text-white px-2.5 py-1 rounded hover:bg-orange-600 transition-colors"
        >
          Chat
        </nuxt-link>
        <!-- Bouton Profil -->
        <nuxt-link v-if="isAuthenticated" to="/profil"
          class="text-sm font-semibold leading-6 bg-orange-600 text-white px-2.5 py-1 rounded hover:bg-white hover:text-orange-600 border-2 border-transparent hover:border-orange-600 transition-colors">
          Profil
        </nuxt-link>
        <nuxt-link v-else to="/login"
          class="text-sm font-semibold leading-6 bg-orange-600 text-white px-2.5 py-1 rounded hover:bg-white hover:text-orange-600 border-2 border-transparent hover:border-orange-600 transition-colors">
          Log in
        </nuxt-link>
      </div>

      <!-- Bouton du menu hamburger -->
      <button @click="mobileMenuOpen = !mobileMenuOpen" class="lg:hidden text-gray-900 focus:outline-none">
        <span class="sr-only">Menu</span>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </button>

      <!-- Menu mobile -->
      <div v-if="mobileMenuOpen" class="lg:hidden absolute top-16 right-0 w-full bg-white border-b shadow-md">
        <div class="flex flex-col space-y-2 p-4">
          <nuxt-link to="/" class="text-sm font-semibold leading-6 text-gray-900 hover:text-orange-300">
            Accueil
          </nuxt-link>
          <nuxt-link to="/annonces" class="text-sm font-semibold leading-6 text-gray-900 hover:text-orange-300">
            Annonces
          </nuxt-link>
          <nuxt-link to="/createAnnonce" class="text-sm font-semibold leading-6 text-orange-600 hover:bg-orange-600 hover:text-white">
            Créer mon annonce
          </nuxt-link>
          <!-- Bouton Chat (mobile) -->
          <nuxt-link to="/chat" class="text-sm font-semibold leading-6 bg-orange-500 text-white px-2.5 py-1 rounded hover:bg-orange-600 transition-colors">
            Chat
          </nuxt-link>
          <nuxt-link v-if="isAuthenticated" to="/profil" class="text-sm font-semibold leading-6 bg-orange-600 text-white hover:bg-white hover:text-orange-600 border-2 border-transparent hover:border-orange-600">
            Profil
          </nuxt-link>
          <nuxt-link v-else to="/login" class="text-sm font-semibold leading-6 bg-orange-600 text-white px-2.5 py-1 rounded hover:bg-white hover:text-orange-600 border-2 border-transparent hover:border-orange-600 transition-colors">
            Log in
          </nuxt-link>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const mobileMenuOpen = ref(false); 

    return {
      mobileMenuOpen,
      isAuthenticated: false, 
    };
  },
  mounted() {
    const isAuthenticated = sessionStorage.getItem('isAuthenticated');
    this.isAuthenticated = isAuthenticated === 'true';  
  }
};
</script>

<style scoped>
button {
  transition: background-color 0.3s ease;
}
</style>
