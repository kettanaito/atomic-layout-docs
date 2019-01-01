import React from 'react'
import styled from 'styled-components'

const getBgColor = ({ variant }) => {
  switch (variant) {
    case 'success':
      return 'rgb(245, 247, 249)'
      break
    default:
      return 'rgb(245, 247, 249);'
  }
}

const getBorderColor = ({ variant }) => {
  switch (variant) {
    case 'success':
      return 'rgb(38, 203, 124)'
      break
    default:
      return 'rgb(56, 132, 255)'
  }
}

const Container = styled.div`
  margin: 2rem 0;
  padding: 1rem;
  background-color: ${getBgColor};
  border: 0;
  border-style: solid;
  border-color: rgb(56, 132, 255);
  border-left-width: 3px;
  border-radius: 3px;
`

const Hint = ({ variant, children }) => (
  <Container variant={variant}>{children}</Container>
)

export default Hint
