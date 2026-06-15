import styled from 'styled-components'
import * as Styles from '../../components/Styles'

const Section = styled(Styles.Section)`
  background-color: #ffffff;
`
const Content = styled(Styles.Content)``
const H1 = styled(Styles.H1)``
const H3 = styled(Styles.H3)``

const A = styled(Styles.A)`
  background-color: #343A40;
  color: #ffffff;

  ${Styles.Button}

  &:hover {
    background-color: #ffffff;
    color: #343A40;
    border: 1px solid #343A40;
  }
`

const About : React.FC = () => {
  return (
    <Section>
      <Content>
        <H1>Stylish Portfolio is the perfect theme for your next project</H1>
        <H3>This theme feature a flexible, UX friendly sidebar menu and stock photo from our friends at Unsplash!</H3>
        <A href="/services">Find out more</A>
      </Content>
    </Section>
  )
}

export default About
