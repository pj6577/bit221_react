import React from 'react'
import { useContext } from 'react';
import { ThemeContext } from '../Context/ThemeContext';

const styles = {
  footer: {
    backgroundColor: '#eee',
    height: 100,
    display: 'flex',
    // flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#111',

  },

  contain: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'center',    
  }
};



function Footer() {

  const { isDark, setIsDark } = useContext(ThemeContext);

  const setDark = () => {
    return { ...styles.footer, backgroundColor: '#333', color: '#eee' }
  }

  const toggle = () => {
    setIsDark(!isDark);
    document.querySelector('.btn').innerHTML = isDark ? 'Dark' : 'Light';
  }
  return (
    <>
      <footer style={isDark ? setDark() : styles.footer}>
        <div className='container' style={styles.contain}>
          Current v5.2.1 cod licensed BIT211 , docs CC BY 3.0.
          <button className='btn btn-danger ml-5'
            onClick={toggle}
          >
            Light
          </button>
        </div>
      </footer>
    </>
  )
}

export default Footer