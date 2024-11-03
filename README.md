# Online Chat

Technology Stack used: Vue3, Firebase and Tailwind CSS

## Code snippets

1. Define `firebaseConfig` and configure the API key in the `firebase/config.js` file

```javascript
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY, // your api key
  authDomain: "vue-app-db753.firebaseapp.com",
  projectId: "vue-app-db753",
  storageBucket: "vue-app-db753.firebasestorage.app",
  messagingSenderId: "216666859258",
  appId: "1:216666859258:web:d8a71442ea367839a3cb43"
}

export default firebaseConfig
```

2. Sending messages to Realtime Firebase using the push method
```javascript
import { getDatabase, push, ref as firebaseRef } from 'firebase/database'

const db = getDatabase()

push(firebaseRef(db, 'chats'), {
  message: 'hello world',
  timestamp: '12:42'
})
```

3. Reading messages from Realtime Firebase
```javascript
import { onMounted } from 'vue'
import { getDatabase, onValue, query, orderByKey, remove, ref as firebaseRef } from 'firebase/database'

const readMessage = () => {
  const db = getDatabase()
  const sortedQuery = query(firebaseRef(db, 'chats'), orderByKey())
  
  onValue(sortedQuery, (snapshot) => {
    const temp = []
    snapshot.forEach((childSnapshot) => {
      temp.push({ id: childSnapshot.key, ...childSnapshot.val() })
    })

    messages.value = temp
  })
}

onMounted(() => {
  readMessage()
})
```

4. Removing messages from Realtime Firebase using the remove method
```javascript
import { getDatabase, remove, ref as firebaseRef } from 'firebase/database'

const removeMessage = () => {
  const db = getDatabase()
  remove(firebaseRef(db, 'chats'))
}
```

## Recommended Installation

```
git clone https://github.com/roma-marshall/chat-me.git
cd chat-me
npm run dev
```

## License

MIT License
