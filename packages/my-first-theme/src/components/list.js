import React from 'react'
import { connect, styled } from "frontity"
import Link from "@frontity/components/link"

const List = ({ state, actions, libraries }) => {
  const data = state.source.get(state.router.link)
  const Html2React = libraries.html2react.Component

  return (
    <Items isDestinationsArchive={data.isDestinationsArchive}>
      {data.items.map((item) => {
        const post = state.source[item.type][item.id]
        return( 
          <>
            <SinglePost isDestinationsArchive={data.isDestinationsArchive}>
              <Link key={item.id} link={post.link}>
                {post.title.rendered}
              <br />
              </Link>
              <Excerpt>
                <Html2React html={post.excerpt.rendered} />
              </Excerpt>
            </SinglePost>  
          </>
        )
      })}
      <PrevNextNav>
        {data.previous && (
          <button
            onClick={() => {
              actions.router.set(data.previous)
            }}
          >
            &#171; Prev
          </button>
        )}
        {data.next && (
          <button
            onClick={() => {
              actions.router.set(data.next)
            }}
          >
            Next &#187;
          </button>
        )}
      </PrevNextNav>
    </Items>
  )
}


export default connect(List)

const Items = styled.div`
  & > div > a {
    display: block;
    margin: 6px 0;
    font-size: 1.2em;
    color: ${props => props.isDestinationsArchive ? '#056127' : '#052e61'};
    text-decoration: none;
  }
  padding: 10px;
`

const PrevNextNav = styled.div`
  padding-top: 1.5em;

  & > button {
    background: #eee;
    text-decoration: none;
    padding: 0.5em 1em;
    color: #888;
    border: 1px solid #aaa;
    font-size: 0.8em;
    margin-right: 2em;
  }
  & > button:hover {
    cursor: pointer;
  }
`

const Excerpt = styled.div`
  display: block;
  padding: opx 5px;
`

const SinglePost = styled.div`
  margin-bottom: 20px;
  padding: 5px;
  background-color: ${props => props.isDestinationsArchive ? '#95d2ab' : '#95b0d2'};
  border-width: 0 0 2px 0;
  border-style: solid;
  border-color: ${props => props.isPostType ? ( props.isPage ? 'lightsteelblue' : 'red' ) : 'maroon'};
`