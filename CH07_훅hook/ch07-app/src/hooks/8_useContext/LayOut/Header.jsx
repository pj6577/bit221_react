import React from 'react'
import { useContext } from 'react';
import { ThemeContext } from '../Context/ThemeContext';
import './layout.css'

import {NavLink} from 'react-router-dom'
const styles = {
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    color: '#111',
    backgroundColor: '#eee',
    justifyContent: 'center',
  },
  h4: {
    marginLeft: 10,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },

  ul: {
    width: 400,
    listStyle: 'none',
    display: 'flex',
    justifyContent: 'space-between',
    cursor: 'pointer',
  },
};

function Header() {
  const { isDark } = useContext(ThemeContext);

  const setDark = () => {
    return { ...styles.header, backgroundColor: '#333', color: '#eee' };
  }
  return (
    <>
      <header style={isDark ? setDark() : styles.header}>
        <img src= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ6yI5v-1UCyMx8CdTpABg9QzItPHcPLZh7_1ZnzOpTg&s" alt='' style={styles.avatar} />
        <h4 style={styles.h4}>
          Bitcamp
          <i className="fa-solid fa-house-user"></i>
        </h4>

        <nav className='ml-5'>
            <NavLink to ={"/"}>Home</NavLink>
            <NavLink to={"/js"}>JavaScript</NavLink>
            <NavLink to ={"/reacts"}>React</NavLink>
            <NavLink to={"/java"}>Java</NavLink>
            <NavLink to ={"/sb"}>SpringBoot</NavLink>
        </nav>
      </header>
    </>
  )
}

export default Header