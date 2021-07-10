import React, {useEffect} from 'react'
import { connect, styled } from "frontity"
import Link from "@frontity/components/link"
import { useInView, InView } from 'react-intersection-observer'

const List = ({ state, actions, libraries }) => {
  const data = state.source.get(state.router.link)
  const Html2React = libraries.html2react.Component
  // const { ref, inView } = useInView({ threshold: 1 });
  

  return (
    <Items isDestinationsArchive={data.isDestinationsArchive}>
 
      {data.items.map((item) => {
        const post = state.source[item.type][item.id]
         const { ref, inView } = useInView({threshold: 1, rootMargin: "0px 0px -60px 0px"});
        return( 
          

            <SinglePost inView={inView} ref={ref} id="SinglePost" isDestinationsArchive={data.isDestinationsArchive}>
              <Link key={item.id} link={post.link}>
                <h2>{post.title.rendered}</h2>
              <br />
              </Link>
              <Excerpt>
                <Html2React html={post.excerpt.rendered} />
              </Excerpt>
            </SinglePost>

        )
        {
        }
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
    font-size: 1.1em;
    color: var(--primary-blue);
    text-decoration: none;
    font-weight: 700;
  }
  padding: 10px;
  max-width: 500px;
  margin: auto;
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
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 25px 0px 25px 0px; 
  padding: 30px 30px 70px 30px;
  background-color: white; 
  border-width: 0 0 3px 0;
  border-style: solid;
  border-color: var(--light-red);
  & >  h2 {
    margin: 6px 0;
    font-size: 1.1em;
    color: var(--primary-blue);
    text-decoration: none;
    font-weight: 700;
    margin: 6px 0;
    text-decoration: none;
    font-size: 1.1em;
    font-weight: 700;
  }



  ${(props) => (props.inView ? 
    `
    border-color: var(--primary-red);
    transform: scale3d(1.01, 1, 1.9);
    box-shadow:  2px 2px 40px var(--dark-red);
    transition-duration: 1s;
    transition-property: transform, box-shadow, border-color;
/*
    @keyframes animation1 {
    from { box-shadow:  4px 4px 10px var(--primary-blue);
        }
    to { box-shadow:  4px 4px 30px var(--primary-red);
    }
 }
  animation-name: animation1;
   animation-duration: 2s;
   animation-timing-function: linear;
   animation-delay: 0;
   animation-iteration-count:  infinite;
   animation-direction: alternate; */` 
   : "")}
  
`