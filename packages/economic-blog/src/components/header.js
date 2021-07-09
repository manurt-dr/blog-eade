import React from 'react'
import { connect, styled } from "frontity"
import Link from '@frontity/components/link'
import logo from '../assets/logo.png'

const Header = ({state}) => {
    const data = state.source.get(state.router.link)
    return (
            <HeaderContainer isPostType={data.isPostType} isPage={data.isPage}>
          <HeaderContent>
                    <img src={logo} alt="logo"/>               
                    <h1>El Arte de la Economía</h1>
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
background-color: var(--darkest-blue);
display: flex;
align-items: center;
justify-content: space-around;
border-width: 0 0 8px 0;
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
    margin: 5px;
    margin-left: 10px;
    height: 50px;
    filter: drop-shadow(0 1px 1px rgba(0, 0, 0, 0.2));
}
h1 {
    color:  white;
    font-size: 13px;
  }
`

const Menu = styled.nav`
  display: flex;
  flex-direction: row;
  font-size: 11px;
  & > a {
    margin-right: 1em;
    color: steelblue;
    text-decoration: none;
    color: white;
  }
`