import React from 'react'

function Dtime() {
  let dd = new Date().toLocaleDateString();
  let tt = new Date().toLocaleTimeString();

  return (
    <div>
      {dd + " " + tt}
    </div>
  )
}

export default Dtime