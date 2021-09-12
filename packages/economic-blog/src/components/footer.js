import React from 'react'
import { connect, styled } from "frontity"
import Link from '@frontity/components/link'
import logo from '../assets/logo.png'
import logotexto from '../assets/logo-texto.png'
const Footer = ({state}) => {
    const data = state.source.get(state.router.link)
    return (
            <FooterContainer isPostType={data.isPostType} isPage={data.isPage}>
          <FooterContent>
                    <img src={logo} alt="logo"/>               
                    <img src={logotexto} alt="el arte de le economía" />
                { state.theme.isUrlVisible ? <p>Current URL: {state.router.link}</p> : null }
          </FooterContent>      
                <Menu>
                  <Link link="/aviso-legal">Aviso Legal</Link>
                  <Link link="/politica-de-cookies">Política de Cookies</Link>
                  <Link link="/politica-de-privacidad">Política de privacidad</Link>
                </Menu>
                <Message><p>Made with 💜</p></Message>
            </FooterContainer>
    )
}

export default connect(Footer)

const FooterContainer = styled.footer`
background: var(--black);
height: 120px;
margin-top: 30px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-around;
border-width: 6px 0 0px 0;
border-style: solid;
border-color: var(--dark-red);
div {
    display: flex;
}

`
const FooterContent = styled.div`
  max-width: 800px;
  align-items: center;
  img {
    height: 40px;
}

`

const Menu = styled.nav`
  display: flex;
  flex-direction: row;
  font-size: 13px;
  & > a {
    margin: 0 0.8em 0 0.8em;
    text-decoration: none;
    color: white;
  }
`
const Message = styled.div `
display: flex;
& > p {
  color: white;
  font-size: 12px;
}

`