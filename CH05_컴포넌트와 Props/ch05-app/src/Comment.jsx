import React from 'react'
import Avatar from './Avatar'
import Dtime from './Dtime';

function Comment(props) {
  return (
    <>
      <div className="comment">
        <div className="user-info container">
          {/* <img src="./8224.jpg" alt="avarta-img" class="avatar" /> */}
          <Avatar url={props.avatarUrl}/>
          <div className="user-info-name container">
            {props.name}
          </div>
        </div>
        <div class="comment-txt container">
          <p>
            {props.comment}
          </p>
          <div class="comment-date">
            <Dtime></Dtime>
          </div>
        </div>
      </div>
    </>
  )
}

export default Comment