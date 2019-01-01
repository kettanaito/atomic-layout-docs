import React from 'react'
import styled from 'styled-components'

const Link = styled.a`
  margin: 2rem 0;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  border: 1px solid rgb(230, 236, 241);
  background-color: #fff;
  border-radius: 3px;
  box-shadow: rgba(116, 129, 141, 0.1) 0px 3px 8px 0px;
`

const PageRef = ({ to, name }) => {
  return (
    <Link href={to} alt={name}>
      <span>{name}</span>
      <span>{to}</span>
    </Link>
  )
}

export default PageRef
