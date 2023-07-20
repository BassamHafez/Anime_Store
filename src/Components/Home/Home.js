import React,{Fragment} from 'react'
import Header from '../Layout/Header/Header.js';
import HomeMainBody from './HomeContent/HomeMainBody.js';
import Items from './HomeContent/Items.js';
const Home = () => {
  return (
    <Fragment>
        <Header/>
        <HomeMainBody/>
        <Items/>
    </Fragment>
  )
}

export default Home
