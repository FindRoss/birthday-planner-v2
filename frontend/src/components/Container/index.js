import React from 'react'
import { Wrapper } from './ContainerElements';

const Container = ({ children }) => {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  )
}

export default Container
