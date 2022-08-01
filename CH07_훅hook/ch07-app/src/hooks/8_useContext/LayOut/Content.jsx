import React, { useContext } from 'react'
import { Route, Routes } from 'react-router-dom';
import { ThemeContext } from '../Context/ThemeContext';
import Main from '../Pages/Main';
import Java from '../Pages/Java';
import JavaScript from '../Pages/JavaScript';
import Reacts from '../Pages/Reacts';
import SpringBoot from '../Pages/SpringBoot';
import Slider from '../Ui/Slider';


const styles = {
  h5: {
    marginTop: 100,
  },
  main: {
    height: 500,
    color: 'gray',
    backgroundColor: 'white',
  }
};

function Content() {

  const {isDark} = useContext(ThemeContext);
  const setDark = ()=>{
    return {...styles.main, backgroundColor:'#222', color:'#eee'}
  }

  return (
    <main style={isDark ? setDark() : styles.main}>
      <div className='container text-center'>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='js' element={<JavaScript />} />
          <Route path='java' element={<Java />} />
          <Route path='reacts' element={<Reacts />} />
          <Route path='/sb' element={<SpringBoot />} />
        </Routes>
      </div>
    </main>
  )
}

export default Content