<template>
    <div class="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md my-12 mb-12 py-12">
      <h2 class="text-2xl font-bold text-gray-800 mb-4">Créer une annonce</h2>
      <form @submit.prevent="submitForm" class="space-y-4">
        <div>
          <label for="name" class="block text-sm font-medium text-gray-700">Nom</label>
          <input
            type="text"
            id="name"
            v-model="formData.name"
            required
            class="bg-white block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
          />
        </div>
  
        <div>
          <label for="description" class="block text-sm font-medium text-gray-700">Description</label>
          <textarea
            id="description"
            v-model="formData.description"
            required
            class="bg-white block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
            rows="4"
          ></textarea>
        </div>
  
        <div>
          <label for="category_id" class="block text-sm font-medium text-gray-700">Catégorie</label>
          <select
            id="category_id"
            v-model="formData.category_id"
            required
            class="bg-white block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
          >
            <option value="" disabled selected>Choisir une catégorie</option>
            <option value="1">Chien</option>
            <option value="2">Chat</option>
            <option value="3">Rongeur</option>
          </select>
        </div>
  
        <div>
          <label for="age" class="block text-sm font-medium text-gray-700">Âge</label>
          <input
            type="number"
            id="age"
            v-model="formData.age"
            min="0"
            class="bg-white block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
          />
        </div>
  
        <div>
          <label for="breed" class="block text-sm font-medium text-gray-700">Race</label>
          <input
            type="text"
            id="breed"
            v-model="formData.breed"
            class="bg-white block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
          />
        </div>
  
        <div>
          <label for="price" class="block text-sm font-medium text-gray-700">Prix</label>
          <input
            type="number"
            id="price"
            v-model="formData.price"
            min="0"
            class="bg-white block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
          />
        </div>
  
        <button
          type="submit"
          class="w-full bg-orange-600 text-white py-2 rounded-md hover:bg-orange-500 transition-colors"
        >
          Créer l'annonce
        </button>
      </form>
    </div>
    <br>
  </template>
  
<script setup>
import { ref } from 'vue'

const formData = ref({
  name: '',
  description: '',
  category_id: '',
  postalCode: '',
  age: '',
  breed: '',
  price: '',
  user_id: 1 
})

const submitForm = async () => {
  try {
    const payload = {
      name: formData.value.name,
      description: formData.value.description,
      category_id: Number(formData.value.category_id),
      age: formData.value.age ? Number(formData.value.age) : undefined,
      breed: formData.value.breed,
      price: formData.value.price ? Number(formData.value.price) : undefined,
      user_id: formData.value.user_id,
    }

    const response = await fetch('/api/v1/animals', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })
    if (!response.ok) throw new Error('Erreur lors de la création')
    formData.value = { name: '', description: '', category_id: '', postalCode: '', age: '', breed: '', price: '', user_id: 1 }
    alert('Annonce créée !')
  } catch (e) {
    alert('Erreur : ' + e.message)
  }
}
</script>
