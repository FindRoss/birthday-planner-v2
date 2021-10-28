import React from 'react'

import { ButtonStyle } from './ButtonElements';

function Button({ children }) {

  return (
    <>
      <ButtonStyle>
        {children}
      </ButtonStyle>
    </>
  )
}

export default Button
