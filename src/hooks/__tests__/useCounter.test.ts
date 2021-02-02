import { act, renderHook } from '@testing-library/react-hooks'

import useCounter from '../useCounter'

describe('useCounter', () => {
  test('countは初期値0である', () => {
    const { result } = renderHook(() => useCounter())

    expect(result.current.count).toBe(0)
  })

  test('incrementを2回実行したとき、countは2である', () => {
    const { result } = renderHook(() => useCounter())

    act(() => {
      result.current.increment()
      result.current.increment()
    })

    expect(result.current.count).toBe(2)
  })

  test('decrementを2回実行したとき、countは-2である', () => {
    const { result } = renderHook(() => useCounter())

    act(() => {
      result.current.decrement()
      result.current.decrement()
    })

    expect(result.current.count).toBe(-2)
  })
})
