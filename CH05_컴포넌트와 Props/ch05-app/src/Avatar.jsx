//rfce 하면 만들어줘
import React from 'react'

const styles = {
  avatar: {
    width: 50,
    height: 50,
    borderRadius: '50%'
  }
}


function Avatar(props) {
  return (
    <>
      <img src={props.url} alt='avatar-img' style = {styles.avatar}></img>
    </>
  )
}

export default Avatar




// rafce 화살표 함수
/*
import React from 'react'

const Avatar = () => {
  return (
    <div>Avatar</div>
  )
}

export default Avatar
*/

