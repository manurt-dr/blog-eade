import React from 'react'
import { connect, Global, css, styled, Head } from 'frontity'
import Switch from "@frontity/components/switch"
import List from "./list/list"
import Post from "./post"
import Page from "./page"
import Loading from "./loading"
import Error from "./error"
import Header from "./header"

const Root = ({ state, actions }) => {
    const data = state.source.get(state.router.link)
    return (
        <>
          <Header>
          </Header>
          <Head>
            <title>My first Frontity Theme</title>
            <meta
              name="description"
              content="Based on the Frontity step by step tutorial"
              />
          </Head>
        <Global
        styles={css`
          * {
        @import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap');
              margin: 0;
              padding: 0;
              box-sizing: border-box;
              --primary-blue: #3E9DC9;
              --darkest-blue: #116C96;
              --light-red: #E35D6F;
              --primary-red: #C93E51;
              --dark-red: #B02538;
              --black: #293133;
              --light-gray: #DAE3E6;
              --gray: #8A9799;
          }  
          html {
            font-family: system-ui, Verdana, Arial, sans-serif;
          }
          body{
            font-family: 'Lato', sans-serif;
            background-color: var(--light-gray);
            text-rendering: optimizeLegibility;
          }
        `}
      />
            <main>
              <Switch>
                  <Loading when={data.isFetching} />
                  <List when={data.isArchive} />
                  <Post when={data.isPost} />
                  <Page when={data.isPage} />
                  <Page when={data.isDestinations} />
                  <Error  when={data.isError} />
              </Switch>
            </main>
        </>
      )
}

export default connect(Root);

const Main = styled.main`
  max-width: 800px;
  padding: 1em;
  margin: auto;

  img {
    max-width: 100%;
  }
  h2 {
    margin: 0.5em 0;
  }
  p {
    line-height: 1.25em;
    margin-bottom: 0.75em;
  }
  figcaption {
    color: #828282;
    font-size: 0.8em;
    margin-bottom: 1em;
  }
`

const Button = styled.button`
  background: transparent;
  border: none;
  color: #aaa;

  :hover {
    cursor: pointer;
    color: #888;
  }
`