<template>
  <div class="relative w-full mx-auto my-12 p-4">
    <div class="overflow-hidden rounded-lg">
      <div class="flex transition-transform duration-300 " :style="slideStyle">
        <div
          v-for="(image, index) in images"
          :key="index"
          class="flex-shrink-0 w-full h-96 bg-cover bg-center"
          :style="{ backgroundImage: `url(${image.src})` }"
        >
          <div class="flex items-center justify-center h-full bg-black bg-opacity-50">
            <h2 class="text-white text-xl font-semibold">{{ image.title }}</h2>
          </div>
        </div>
      </div>
      <button
        @click="prevSlide"
        class="absolute top-1/2 left-2 transform -translate-y-1/2 text-white bg-gray-800 rounded-full p-2"
      >
        &#10094; 
      </button>
      <button
        @click="nextSlide"
        class="absolute top-1/2 right-2 transform -translate-y-1/2 text-white bg-gray-800 rounded-full p-2"
      >
        &#10095; 
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue';
import image1 from '/assets/photos/slide1.jpg';
import image2 from '/assets/photos/slide2.jpg';
import image3 from '/assets/photos/slide3.jpg';
import image4 from '/assets/photos/slide4.jpg';
import image5 from '/assets/photos/slide5.jpg';

const currentIndex = ref(0);
const intervalId = ref(null);

const images = [
  { src: image1, title: 'Adoption d\'animaux' },
  { src: image2, title: 'Nos amis à poils' },
  { src: image3, title: 'Unis pour l\'adoption' },
  { src: image4, title: 'Chaque animal mérite un foyer' },
  { src: image5, title: 'Rejoignez notre communauté' },
];

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % images.length; 
};

const prevSlide = () => {
  currentIndex.value = (currentIndex.value - 1 + images.length) % images.length; 
};

const slideStyle = computed(() => {
  return {
    transform: `translateX(-${currentIndex.value * 100}%)`,
  };
});

const startAutoSlide = () => {
  intervalId.value = setInterval(nextSlide, 5000);
};

const stopAutoSlide = () => {
  clearInterval(intervalId.value);
};

onMounted(startAutoSlide);
onBeforeUnmount(stopAutoSlide);
</script>

<style scoped>
.carousel-image {
  transition: opacity 0.5s ease;
}
</style>
