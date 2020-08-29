import '@testing-library/jest-dom'
import React from 'react'
import { render, screen } from '@testing-library/react'
import Greeting from '../Greeting'

describe('Greeting', () => {
  test('propsを渡さないとき、worldという文字が表示される', () => {
    render(<Greeting />)

    expect(screen.getByText('world')).toBeInTheDocument()
  })

  test('targetの値をtestとした、testという文字が表示される', () => {
    const target = 'test'

    render(<Greeting target={target} />)

    expect(screen.getByText(target)).toBeInTheDocument()
  })
})
