import {ref} from "vue";

export default function useTicker() {
    const seconds = ref(0)
    let now = null;
    let ticker;

    return {
        start(startedAt) {

            if (ticker) {
                return
            }

            now = Date.now()
            seconds.value = ~~(now / 1000) - ~~(startedAt / 1000);
            ticker = setInterval(() => seconds.value++, 1000)
        },
        stop() {
            clearInterval(ticker)
            seconds.value = 0
            ticker = null
        },
        isEnabled() {
            return !!ticker
        },
        seconds
    }
}