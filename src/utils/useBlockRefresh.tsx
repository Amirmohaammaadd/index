import { useEffect } from "react"

export const useBlockRefresh = () => {
    useEffect(() => {
        const alert = (event: BeforeUnloadEvent) => {
            event.preventDefault()
        }

        window.addEventListener('beforeunload', alert)

        return () => {
            window.removeEventListener('beforeunload', alert)
        }
    }, [])
}