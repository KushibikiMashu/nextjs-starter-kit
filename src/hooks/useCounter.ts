import { useState } from 'react'

type useCounter = {
  count: number
  increment: () => void
  decrement: () => void
}

export default function useCounter(): useCounter {
  const [count, setCount] = useState(0)
  const increment = () => setCount((count) => count + 1)
  const decrement = () => setCount((count) => count - 1)

  return { count, increment, decrement }
}
