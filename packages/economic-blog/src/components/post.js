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
        <h2>{post.title.rendered}</h2>
        <PostInfo>
          <p>
            <strong>Posted: </strong>
            {formattedDate}
          </p>
          <p>
            <strong>Author: </strong>
            {author.name}
          </p>
        </PostInfo> 
      <img src={post._links["wp:featuredmedia"][0].href} />
      
        <Html2React html={post.content.rendered} />
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
  margin: 8px;
  padding: 8px;
  background-color: white;
  line-height: 1.5;
  box-shadow:  2px 2px 5px #5eb9e499;
  & > p {
    margin-bottom: 10px;
  }
  & > h2 {
    align-self: center;
  }
`