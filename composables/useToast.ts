export interface ToastMessage {
  id: number
  message: string
  type?: 'success' | 'info' | 'error'
}

export const useToast = () => {
  const toasts = useState<ToastMessage[]>('app-toasts-state', () => [])

  const showToast = (message: string, type: 'success' | 'info' | 'error' = 'success', duration = 1800) => {
    // Reset existing toast array to allow immediate re-trigger on repeated clicks
    toasts.value = []

    const id = Date.now() + Math.random()
    toasts.value.push({ id, message, type })

    if (import.meta.client) {
      setTimeout(() => {
        removeToast(id)
      }, duration)
    }
  }

  const removeToast = (id: number) => {
    toasts.value = toasts.value.filter(t => t.id !== id)
  }

  return {
    toasts,
    showToast,
    removeToast,
  }
}
