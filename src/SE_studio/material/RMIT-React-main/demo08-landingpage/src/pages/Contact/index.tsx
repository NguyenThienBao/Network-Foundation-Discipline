import styled from 'styled-components'
import * as Styles from '../../components/Styles'

const Section   = styled(Styles.Section)``
const Content   = styled(Styles.Content)``

const IFrame    = styled.iframe `
  width  : 100%;
  height : 100%;
  border : 0;
`

const Contact : React.FC = () => {
  return(
    <Section>
      <Content>
        <IFrame src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62713.827378499176!2d106.65615448711569!3d10.764186526125425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752fbea5fe3db1%3A0xfae94aca5709003f!2sRMIT%20University%20Vietnam%20-%20Saigon%20South%20campus!5e0!3m2!1sen!2s!4v1699963367331!5m2!1sen!2s" loading="lazy"></IFrame>
      </Content>
    </Section>
  )
}

export default Contact
