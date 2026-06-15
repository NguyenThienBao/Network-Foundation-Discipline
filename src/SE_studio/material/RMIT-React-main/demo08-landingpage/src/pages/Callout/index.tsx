import styled from 'styled-components'
import masthead from '../../img/bg-masthead.jpg'
import * as Styles from '../../components/Styles'

const H1 = styled(Styles.H1)``
const Section = styled(Styles.Section)`
  background: url(${masthead});
  background-position: center center; 
  background-size: cover;
`

const Content = styled(Styles.Content)``

const A = styled(Styles.A)`
  background-color: #17667f;
  color: #ffffff; 

  ${Styles.Button}

  &:hover {
    background-color: #ffffff;
    color: #17667f;
    border: 1px solid #17667f;
  }
`

const Callout : React.FC = () => {
  return (
    <Section>
      <Content>
        <H1>Welcome to your next Website</H1>
        <A href="/portfolio">Download</A>
      </Content>
    </Section>
  )
}

export default Callout
