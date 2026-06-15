import styled, { css } from 'styled-components'
import * as Styles from '../../components/Styles'
import portfolio_1 from '../../img/portfolio-1.jpg'
import portfolio_2 from '../../img/portfolio-2.jpg'
import portfolio_3 from '../../img/portfolio-3.jpg'
import portfolio_4 from '../../img/portfolio-4.jpg'

const Section   = styled(Styles.Section)``
const Content   = styled(Styles.Content)``
const H3        = styled(Styles.H3)``
const H5        = styled(Styles.H5)``

const List      = styled.div`
  display   : flex;
  flex-wrap : wrap;
  width     : 80vw;
  height    : 80vh;
  margin-top: 1rem;
`
const Caption   = styled.div`
  width     : 100%;
  height    : 100%;
  position  : absolute;
  color     : #ffffff;
  background-color: rgba(33, 37, 41, 0.5);
  transition: clip-path 0.25s ease-out, background-color 0.7s;
  clip-path : inset(0rem);
  font-size : 1rem;
  z-index   : 1;
`
const CaptionTitle    = styled.div `
  margin-top  : 12rem;
  font-weight : 700;
  text-transform: uppercase;
  padding     : 50px;
`
const CaptionContent  = styled.div `
  padding: 0 0 0 50px;
`

const ImageContent  = css `
  transision: clip-path 0.25s ease-out;
  clip-path : inset(-1px);
  width     : 100%;
  height    : 100%;
`


const IMG_1         = styled.img `
  background: url(${portfolio_1});
  
  ${ImageContent}
`

const IMG_2         = styled.img `
  background: url(${portfolio_2});

  ${ImageContent}
`

const IMG_3         = styled.img `
  background: url(${portfolio_3});

  ${ImageContent}
`

const IMG_4         = styled.img `
  background: url(${portfolio_4});
  
  ${ImageContent}
`
const ListItem  = styled.div`
  width     : 50%;
  height    : 50%;
  position  : relative;
  overflow  : hidden;

  &:hover {
    ${Caption} {
      background-color: rgba(33, 37, 41, 0.75);
      clip-path: inset(2rem);
    }

    ${IMG_1} {
      clip-path: inset(2rem);
    }

    ${IMG_2} {
      clip-path: inset(2rem);
    }

    ${IMG_3} {
      clip-path: inset(2rem);
    }

    ${IMG_4} {
      clip-path: inset(2rem);
    }
  }
`

const Portfolio : React.FC = () => {
  return(
    <Section>
        <Content>
          <H5>Profolio</H5>
          <H3>Recent project</H3>
          <List>
            <ListItem>
              <Caption>
                <CaptionTitle>Stationary</CaptionTitle>
                <CaptionContent>A yellow pencil with envelopes on a clean, blue backdrop</CaptionContent>
              </Caption>
              <IMG_1 />
            </ListItem>
            <ListItem>
              <Caption>
                <CaptionTitle>Stationary</CaptionTitle>
                <CaptionContent>A yellow pencil with envelopes on a clean, blue backdrop</CaptionContent>
              </Caption>
              <IMG_2 />
            </ListItem>
            <ListItem>
              <Caption>
                <CaptionTitle>Stationary</CaptionTitle>
                <CaptionContent>A yellow pencil with envelopes on a clean, blue backdrop</CaptionContent>
              </Caption>
              <IMG_3 />
            </ListItem>
            <ListItem>
              <Caption>
                <CaptionTitle>Stationary</CaptionTitle>
                <CaptionContent>A yellow pencil with envelopes on a clean, blue backdrop</CaptionContent>
              </Caption>
              <IMG_4 />
            </ListItem>
          </List>
        </Content>
    </Section>
  )
}
                  
export default Portfolio
