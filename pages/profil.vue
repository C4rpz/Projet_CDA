<template>
    <div class="container mx-auto p-6 ">
      <h1 class="text-3xl font-bold mb-6 text-center text-orange-600">Mon Profil</h1>
      
      <div class="bg-white p-6 rounded-lg shadow-lg">
        <h2 class="text-2xl font-semibold mb-4">Informations personnelles</h2>
        <div class="space-y-4">
          <div class="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-orange-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8h18M3 12h18m-7 4h7" />
            </svg>
            <p class="text-lg"><strong>Nom :</strong> {{ user.lastName }}</p>
          </div>
          <div class="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-orange-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 12h12m-6-6v12m-6-6h12" />
            </svg>
            <p class="text-lg"><strong>Prénom :</strong> {{ user.firstName }}</p>
          </div>
          <div class="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-orange-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 10-8 0v4M3 21h18" />
            </svg>
            <p class="text-lg"><strong>Email :</strong> {{ user.email }}</p>
          </div>
        </div>
      </div>
  
      <nuxt-link to="/createAnnonce" class="mt-6 block text-center text-sm font-semibold leading-6 bg-orange-600 text-white px-4 py-2 rounded hover:bg-white hover:text-orange-600 border-2 border-transparent hover:border-orange-600 transition-colors">
        Publier une annonce
      </nuxt-link>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        user: {
          firstName: 'Jean',
          lastName: 'Dupont',
          email: 'jean.dupont@example.com',
        },
      };
    },
  };
  </script>
  

  