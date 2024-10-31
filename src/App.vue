<template>
  <div class="flex flex-col container justify-center mt-20 mx-auto space-y-4">
    <div class="border h-40">
      <div v-for="item in messages">
        {{ item }}
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

const message = ref('')
const messages = ref(['hello', 'world'])

const sendMessage = () => {
  messages.value.unshift(message.value)
  message.value = ''
}

</script>