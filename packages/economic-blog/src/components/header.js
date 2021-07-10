import React from 'react'
import { connect, styled } from "frontity"
import Link from '@frontity/components/link'
import logo from '../assets/logo.png'
import logotexto from '../assets/logo-texto.png'
const Header = ({state}) => {
    const data = state.source.get(state.router.link)
    return (
            <HeaderContainer isPostType={data.isPostType} isPage={data.isPage}>
          <HeaderContent>
                    <img src={logo} alt="logo"/>               
                    <img src={logotexto} alt="el arte de le economía" />
                { state.theme.isUrlVisible ? <p>Current URL: {state.router.link}</p> : null }
          </HeaderContent>      
                <Menu>
                  <Link link="/">Home</Link>
                  <Link link="/destinations">Destinations</Link>
                  <Link link="/about-us">About Us</Link>
                </Menu>
            </HeaderContainer>
    )
}

export default connect(Header)

const HeaderContainer = styled.header`
background: linear-gradient(90deg, var(--black), var(--darkest-blue));
height: 60px;
margin-bottom: 30px;
box-shadow: 0px 2px 8px var(--black);
display: flex;
align-items: center;
justify-content: space-around;
border-width: 0 0 6px 0;
border-style: solid;
border-color: var(--light-red);
div {
    display: flex;
}

`
const HeaderContent = styled.div`
  max-width: 800px;
  align-items: center;
  margin-right: 10px;
  img {
    height: 40px;
}

`

const Menu = styled.nav`
  display: flex;
  flex-direction: row;
  font-size: 13px;
  & > a {
    margin-right: 0.8em;
    text-decoration: none;
    color: white;
  }
`