import styled, { css } from 'styled-components'
import * as Styles from '../../components/Styles'

const Section = styled(Styles.Section)`
  background-color: #1d809f;
`

const Content = styled(Styles.Content)``
const H2      = styled(Styles.H2)``

const ListButton = styled.div `
  display: flex; 
  column-gap: 1rem;
`

const AStyle  = css `
  padding: 1.25rem 2rem; 
  border-radius: 5px; 
  min-width: 5rem; 
  text-align: center;
`

const A1      = styled(Styles.A)`
  background-color: #ffffff; 
  color: #343a40;

  ${AStyle}
`

const A2      = styled(Styles.A)`
  background-color: #343a40; 
  color: #ffffff; 

  ${AStyle}
`

const Action : React.FC = () => {
  return(
    <Section>
      <Content>
        <H2>The button below are impossible to resists...</H2>
        <ListButton>
          <A1 href='/portfolio'>Click me</A1>
          <A2 href='/'>Look at me</A2>
        </ListButton>
      </Content>
    </Section>
  )
}

export default Action
