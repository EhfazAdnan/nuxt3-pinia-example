// setup store
import { defineStore } from "pinia";
export const useCounterStore = defineStore("counter", () => {
    const count = ref(1) // state
    function increment(){
        count.value++;
    }
    function decrement(){
        count.value--;
    }
    return {count, increment, decrement}
})