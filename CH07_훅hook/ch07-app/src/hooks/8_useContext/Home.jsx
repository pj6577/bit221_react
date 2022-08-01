import React, { useState } from 'react'
import { ThemeContext } from './Context/ThemeContext';
import Page from './Pages/Page'
function Home() {
  //isDark 는 전역변수-> 수 많은 컴포넌트가 필요로 함
  const [isDark, setIsDark] = useState(true);

  console.log(isDark);

  return (
    <>
      <ThemeContext.Provider value={{ isDark, setIsDark }}>
        <Page />
      </ThemeContext.Provider>
    </>
  )
}

export default Home