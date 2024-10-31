<template>
  <div class="flex flex-col container justify-center mt-20 mx-auto space-y-4">
    <div class="flex flex-row justify-center">
      <div class="border h-96 overflow-auto px-10 py-5">
        <div v-for="item in timestamp" class="mb-2">
          <span class="text-gray-700">
            {{ item }}
          </span>
        </div>
      </div>
      <div class="border h-96 overflow-auto px-10 py-5 w-full">
        <div v-for="item in messages" class="mb-2">
          <p class="text-gray-500 text-sm">Anonym:</p>
          <span class="text-gray-700">
            {{ item }}
          </span>
        </div>
      </div>
    </div>
    <input @keyup.enter="sendMessage" v-model="message" type="text" class="border">
    <div class="flex justify-center">
      <button
          @click="sendMessage"
          class="bg-black text-white py-2 px-5 rounded">send message</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'


const id = ref(0)
const timestamp = ref([])
const message = ref('')
const messages = ref([])

const sendMessage = () => {
  const date = new Date()
  timestamp.value.unshift(date.getHours() + ':' + date.getMinutes())


  messages.value.unshift(message.value)
  message.value = ''

}

</script>