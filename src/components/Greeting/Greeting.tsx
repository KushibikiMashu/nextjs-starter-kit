import React from 'react'

type Props = {
  target: string
}

export const Component: React.FC<Props> = (props) => (
  <h1 className="text-5xl text-center text-accent-1">Hello, {props.target}</h1>
)

type ContainerProps = {
  target?: string
}

const Container: React.FC<ContainerProps> = (props) => {
  const target = props.target || 'World'

  return <Component target={target} />
}

Container.displayName = 'Hello'

export default Container
