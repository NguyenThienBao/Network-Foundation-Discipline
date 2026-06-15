import styled, { css } from 'styled-components'

export const Section = styled.section `
  font-size: 4rem; 
  font-weight: 700;
  height: 100vh;
`

export const A = styled.a `
  text-decoration: none;
  margin: auto;
`

export const Content = styled.div `
  display: flex; 
  flex-direction: column;
  justify-content: center; 
  align-items: center;
  height: 100vh; 
  row-gap: 1rem;:
`

export const HeaderStyle = css ``

export const H1 = styled.h1 `
  font-size: 4rem; 
  font-weight: 700;
  
  ${HeaderStyle}
`

export const H2 = styled.h2 `
  color: #ffffff;
  font-size: 3rem; 
  font-weight: 700; 
`

export const H3 = styled.h3 `
  font-size: 1.5rem;
  font-style: italic;
  font-weight: 400;

  ${HeaderStyle}
`

export const H4 = styled.h4 `
  font-size: 2rem; 
  color: #ffffff;

  ${HeaderStyle}
`

export const H5 = styled.h5 `
  font-size: 1rem; 
  color: #f2b912;
`

export const Button = css `
  padding: 1.25rem 2rem;
  border-radius: 5px;
`

export const Row = styled.div `
  display: flex;
  flex-wrap: wrap;
  flex-direction: row; 
  width: 100vw;
  justify-content: space-evenly;
  align-items: center;
`

export const Cart = styled.div `
  display: flex; 
  flex-direction: column; 
  justify-content: center; 
  align-items: center;
  row-gap: 1rem;
  margin-top: 1rem;
`

export const I = styled.i `
  width: 7rem;
  height: 7rem;
  border-radius: 50%;
  background-color: #ffffff;
  display: block !important;
  text-align: center; 
  line-height: 7rem !important; 
  font-size: 2.5rem;
  color: #1d809f;
`

export const P = styled.p `
  color: #ffffff;
  font-size: 1.25rem;
`
