import React,{useState,useEffect} from 'react'
// import { NavLink } from 'react-router-dom'
import style from './Nav.module.css';
import HeaderCardButton from './HeaderCardButton.js';



const Nav = () => {

  const [changeColor,setChangeColor]=useState(false);
  
  useEffect(()=>{
    
      const handleScroll=()=>{
        
        if(window.scrollY>1){
          setChangeColor(true);
        }
        
        else{
          setChangeColor(false);
        }
      }
      window.addEventListener('scroll',handleScroll)

      return ()=> window.removeEventListener('scroll',handleScroll);

  },[])

 let navClass=  changeColor ? style.nav_colored : style.nav_not_colored;

 return (
    <div className={style.nav_container}>
      <nav className={`${navClass} navbar navbar-expand-lg fixed-top`}>
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className={`${style.nav_item} nav-item mx-3`}>
                <a className="nav-link active" aria-current="page" to="#">Home</a>
              </li>
              <li className={`${style.nav_item} nav-item mx-3`}>
                <a className="nav-link" href="#">Store</a>
              </li>
              <li className={`${style.nav_item} nav-item mx-3`}>
                <a className="nav-link" href="#">Contact</a>
              </li> 
            </ul>
            <div className='ms-auto'>
                  <HeaderCardButton/>
            </div>
          </div>
      </div>
    </nav>
  </div>
  )
}

export default Nav
