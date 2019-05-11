import React, { useState } from 'react'
import { animated, useSpring } from 'react-spring/web.cjs'
import styled from 'styled-components'
import Head from 'next/head'

const Main = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const AnimatedDiv = styled(animated.div)`
  width: 45ch;
  height: 45ch;
  background: grey;
  border-radius: 5px;
  background-image: url(https://drscdn.500px.org/photo/435236/q%3D80_m%3D1500/v2?webp=true&sig=67031bdff6f582f3e027311e2074be452203ab637c0bd21d89128844becf8e40);
  background-size: cover;
  background-position: center center;
  box-shadow: 0px 10px 30px -5px rgba(0, 0, 0, 0.3);
  transition: box-shadow 0.5s;
  will-change: transform;
  border: 15px solid white;
`

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

const Home = () => {
  const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))

  return (
    <Main>
      <Head>
        <title>w3win.github.io</title>
        <script crossOrigin="anonymous"
                src="https://polyfill.io/v3/polyfill.min.js?flags=gated&rum=true&features=es2015%2Ces2016%2Ces2017" />
      </Head>
      <AnimatedDiv
        onMouseMove={({clientX: x, clientY: y}) => set({xys: calc(x, y)})}
        onMouseLeave={() => set({xys: [0, 0, 1]})}
        style={{transform: props.xys.interpolate(trans)}}
      />
    </Main>
  )
}

export default Home