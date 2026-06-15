import styled from 'styled-components'
import * as Styles from '../../components/Styles'
import bg from '../../img/bg-masthead.jpg'

const Section = styled(Styles.Section) `
  background: url(${bg});
  background-position: center center;
  background-size: cover;
`
const Content = styled(Styles.Content)``
const H1 = styled(Styles.H1)``
const H3 = styled(Styles.H3)``

const A = styled(Styles.A) `
  background-color: #17667f;
  color: #ffffff;
  margin: auto;

  ${Styles.Button}

  &:hover ${Styles.Button} {
    background-color: #ffffff;
    color: #17667f;
    border: 1px solid @17667f;
  }
`

const Home : React.FC = () => {
  return(
    <Section>
      <Content>
        <H1>SEstudio Portfolio</H1>
        <H3>Startup for future</H3>
        <A href="/about">Find out more</A>
      </Content>
    </Section>
  )
}

export default Home
