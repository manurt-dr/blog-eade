import React from "react"
import { connect, styled, Head } from "frontity"
import dayjs from "dayjs"


const Post = ({ state, libraries}) => {
  const data = state.source.get(state.router.link)
  const post = state.source[data.type][data.id]
  const author = state.source.author[post.author]

  const Html2React = libraries.html2react.Component

  const formattedDate = dayjs(post.date).format("DD MMMM YYYY")

  return (
    <>
      <Head>
        
        <title>{post.title.rendered}</title>
        <meta name="description" content={post.excerpt.rendered} />
      </Head>
      <PostContent>
        <h1>{post.title.rendered}</h1>
        <Html2React html={post.content.rendered} />
        <PostInfo>
          <p>
            <strong>Publicado: </strong>
            {formattedDate}
          </p>
          <p>
            <strong>Autor: </strong>
            {author.name}
          </p>
        </PostInfo>       
      </PostContent>
  </>
  )
}

export default connect(Post)

const PostInfo = styled.div`
  margin-bottom: 1em;
  padding: 0.5em;
  border-left: 4px solid var(--light-red);
  font-size: 0.8em;

  & > p {
    margin: 0;
    color: var(--gray);
  }
`

const PostContent = styled.div `
  display: flex;
  flex-direction: column;
  margin: 0 1.5rem 0 1.5rem;
  padding: 10px 25px;
  background-color: white;
  line-height: 1.5;
  box-shadow:  2px 2px 5px #5eb9e499;
  & > p {
    margin: 1em 0;
    line-height: 1.6em;
  }
  & > h2 {
    text-align: center;
    font-size: 22px;
    color: var(--darkest-blue);
    border-bottom: 1px solid var(--primary-blue);
    width: 100%;
    margin: 1em 0;
  }
  & > h1 {
    text-align: center;
    font-size: 32px;
    color: var(--black);
    width: 80%;
    margin: 1em auto 1em auto;
  }
  
  & > figure {
    width: 100%;
    display: flex;
    justify-content: center;
  }
  
  & > figure > img {
    width: 70%;
    height: auto;
  }
`