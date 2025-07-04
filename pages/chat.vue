<template>
  <div class="max-w-xl mx-auto mt-10 p-4 bg-white rounded shadow">
    <h2 class="text-2xl font-bold mb-4">Chat en temps réel</h2>
    <div class="h-64 overflow-y-auto border p-2 mb-4 bg-gray-50" ref="messagesContainer">
      <div v-for="(msg, i) in messages" :key="i" class="mb-2">
        <span class="font-semibold">{{ msg.user || 'Anonyme' }}:</span>
        <span>{{ msg.text }}</span>
      </div>
    </div>
    <form @submit.prevent="sendMessage" class="flex gap-2">
      <input
        v-model="newMessage"
        type="text"
        placeholder="Votre message..."
        class="flex-1 border rounded px-2 py-1"
        required
      />
      <button type="submit" class="bg-orange-600 text-white px-4 py-1 rounded hover:bg-orange-500">Envoyer</button>
    </form>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue'
import { io } from 'socket.io-client'

const messages = ref([])
const newMessage = ref('')
const socket = io('http://localhost:3001')
const messagesContainer = ref(null)

onMounted(() => {
  socket.on('chat message', (msg) => {
    messages.value.push(msg)
    nextTick(() => {
      if (messagesContainer.value) {
        messagesContainer.value.scrollTop = messagesContainer.value.scrollHeight
      }
    })
  })
})

onUnmounted(() => {
  socket.disconnect()
})

function sendMessage() {
  if (newMessage.value.trim()) {
    socket.emit('chat message', { text: newMessage.value, user: 'Utilisateur' }) 
    newMessage.value = ''
  }
}
</script>