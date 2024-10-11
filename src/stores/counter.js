import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const access_token = ref('')
  const refresh_token = ref('')
  return { access_token, refresh_token }
})
