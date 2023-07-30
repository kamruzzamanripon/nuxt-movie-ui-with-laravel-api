import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const categoryStore = defineStore('categoryStore', () => {
    const count = ref(0)
    const name = ref('Syed kamruzzaman')
    const doubleCount = computed(() => count.value * 2)
    function increment() {
      count.value++
    }
  
    return { count, name, doubleCount, increment }
  })