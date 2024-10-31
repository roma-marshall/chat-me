<template>
  <div class="flex flex-col container justify-center mt-20 mx-auto space-y-4">
    <div class="border rounded h-96 overflow-auto px-10 py-5 w-full">
      <div v-for="item in messages" class="border rounded py-4 bg-blue-50 space-y-2 mb-2 space-x-4">
        <div class="flex justify-start mx-3 space-x-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" class="w-8 h-8" viewBox="0 0 24 24" stroke-width="1.5" stroke="#c1c1c1">
            <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
          </svg>
          <div class="flex justify-between w-full my-auto">
            <span class="text-red-500 font-bold text-sm w-fit">
              Anonym
            </span>
            <span class="text-gray-300 text-sm">
            {{ item.timestamp }}
          </span>
          </div>
        </div>
        <div class="text-gray-500 pr-4">
          {{ item.message }}
        </div>
      </div>
    </div>
    <textarea
        @keyup.enter="sendMessage"
        v-model="message"
        type="text"
        class="border h-20 resize-none py-2 px-4 outline-none rounded" />
    <div class="flex justify-center space-x-4">
      <button
          @click="sendMessage"
          class="hover:bg-blue-500 bg-blue-400 text-white py-2 px-5 rounded">
        send message
      </button>
      <button
          @click="clearMessage"
          class="hover:bg-red-500 bg-red-400 text-white py-2 px-5 rounded">
        clear
      </button>
      <button
          @click="readFromDB"
          class="hover:bg-red-500 bg-red-400 text-white py-2 px-5 rounded">
        read
      </button>
    </div>
  </div>
</template>

<script setup>
import {onMounted, ref} from 'vue'
import {getDatabase, onValue, push, ref as firebaseRef} from 'firebase/database'

const id = ref(0)
const timestamp = ref([])
const message = ref('')
const messages = ref([])

const readFromDB = () => {
  const db = getDatabase()
  const starCountRef = firebaseRef(db, 'chats/')
  onValue(starCountRef, (snapshot) => {
    messages.value = snapshot.val()
  })
}

onMounted(() => {
  readFromDB()
})

const sendMessage = () => {
  if (message.value.length <= 1) {
    message.value = ''
  } else {
    const date = new Date()
    timestamp.value.unshift(date.getHours() + ':' + date.getMinutes())

    const db = getDatabase()
    push(firebaseRef(db, 'chats'), {
      message: message.value,
      timestamp: date.getHours() + ':' + date.getMinutes()
    })
        .then(() => {
          console.log('Data successfully added without overwriting.')
        })
        .catch((error) => {
          console.error('Error adding data: ', error)
        })

    id.value++
    message.value = ''
  }
}

const clearMessage = () => {
  messages.value = []
}
</script>