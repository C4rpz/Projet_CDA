<template>
    <div class="max-w-7xl mx-auto p-6">
      <h2 class="text-3xl font-bold text-gray-800 mb-4">Articles récents</h2>
      <div class="relative">
        <div class="overflow-x-hidden">
          <div
            ref="carousel"
            class="flex transition-transform duration-300"
            :style="`transform: translateX(-${currentIndex * 100}%)`"
          >
            <div class="w-96 flex-none bg-white rounded-lg shadow-md p-6 mr-4">
              <img
                src="../assets/photos/article1.jpg"
                alt="Titre de l'article 1"
                class="rounded-lg mb-4"
              />
              <h3 class="text-lg font-semibold text-gray-800">Amis à poils : Votre plateforme d'adoption d'animaux entre particuliers</h3>
              <p class="text-gray-600 mt-2">
                Adopter un animal de compagnie est une décision pleine d'amour et de responsabilités. Cet article explore les nombreux avantages de l'adoption : créer un lien avec un nouvel ami à quatre pattes, donner une seconde chance à un animal dans le besoin, et même les bénéfices pour votre bien-être mental et physique. Découvrez pourquoi tant de familles choisissent l'adoption comme une alternative à l'achat d'animaux.
              </p>
            </div>
  
            <div class="w-96 flex-none bg-white rounded-lg shadow-md p-6 mr-4">
              <img
                src="../assets/photos/article2.jpg"
                alt="Titre de l'article 2"
                class="rounded-lg mb-4"
              />
              <h3 class="text-lg font-semibold text-gray-800">Comment préparer votre maison pour un nouvel animal ?</h3>
              <p class="text-gray-600 mt-2">
                L'arrivée d'un nouvel animal est excitante, mais elle nécessite également des préparatifs. Apprenez à rendre votre maison sécurisée et accueillante pour votre futur compagnon. De l'aménagement de l'espace à l'achat de fournitures essentielles, cet article vous guide dans chaque étape de la préparation.
              </p>
            </div>
  
            <div class="w-96 flex-none bg-white rounded-lg shadow-md p-6 mr-4">
              <img
                src="../assets/photos/article3.jpg"
                alt="Titre de l'article 3"
                class="rounded-lg mb-4"
              />
              <h3 class="text-lg font-semibold text-gray-800">Top 5 des races d'animaux adoptables pour les familles</h3>
              <p class="text-gray-600 mt-2">é
                Cet article présente les cinq races les plus populaires et adaptées aux familles, notamment les chiens et les chats. Découvrez les caractéristiques de chaque race, leurs besoins spécifiques, et pourquoi elles sont idéales pour les enfants. Informez-vous sur les races qui s'épanouissent dans un environnement familial.
              </p>
            </div>
  
            <div class="w-96 flex-none bg-white rounded-lg shadow-md p-6 mr-4">
              <img
                src="../assets/photos/article4.jpg"
                alt="Titre de l'article 4"
                class="rounded-lg mb-4"
              />
              <h3 class="text-lg font-semibold text-gray-800">Témoignages d'adoption : Des histoires d'amour entre animaux et familles</h3>
              <p class="text-gray-600 mt-2">
                Lisez des témoignages émouvants de familles ayant adopté des animaux via notre plateforme. Ces histoires illustrent la joie et les défis que ces familles ont rencontrés et comment l'adoption a changé leur vie. Soyez inspiré par ces récits qui montrent le véritable lien entre les humains et les animaux.
              </p>
            </div>
  
            <div class="w-96 flex-none bg-white rounded-lg shadow-md p-6 mr-4">
              <img
                src="../assets/photos/article5.jpg"
                alt="Titre de l'article 5"
                class="rounded-lg mb-4"
              />
              <h3 class="text-lg font-semibold text-gray-800">Les erreurs courantes à éviter lors de l'adoption d'un animal</h3>
              <p class="text-gray-600 mt-2">
                L'adoption d'un animal est un engagement sérieux. Dans cet article, nous mettons en lumière les erreurs fréquentes que font les adoptants, comme le manque de recherche sur la race ou le sous-estimation des besoins de l'animal. Apprenez à éviter ces pièges pour garantir une expérience positive pour vous et votre futur compagnon.
              </p>
            </div>
          </div>
        </div>
  
        <button
          @click="prevArticle"
          class="absolute left-0 top-1/2 transform -translate-y-1/2 bg-orange-600 text-white p-2 rounded-full hover:bg-orange-500 transition-colors"
        >
          &#10094; 
        </button>
        <button
          @click="nextArticle"
          class="absolute right-0 top-1/2 transform -translate-y-1/2 bg-orange-600 text-white p-2 rounded-full hover:bg-orange-500 transition-colors"
        >
          &#10095; 
        </button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const currentIndex = ref(0);
  const totalArticles = 2; 
  
  const nextArticle = () => {
    if (currentIndex.value < totalArticles - 1) {
      currentIndex.value++;
    }
  };
  
  const prevArticle = () => {
    if (currentIndex.value > 0 < totalArticles) {
      currentIndex.value--;
    }
  };
  </script>
  
  <style scoped>
  button {
    transition: background-color 0.3s ease;
  }
  </style>
  