import React from 'react'
import Comment from './Comment';

const list = [{
  name: 'Ken',
  comment: '안녕! 밥 줘 @ @ ',
  avatarUrl: 'images/simple/2627.jpg'
}, {
  name: 'Tom',
  comment: '안녕하세여~  ',
  avatarUrl: 'images/simple/7149.jpg'
}, {
  name: 'Jennie',
  comment: '챱챱ㅍ뱌챱ㅊ뱣뱣ㅂ챱ㅊ뱣ㅂ챱',
  avatarUrl: 'images/simple/8173.jpg'
}, {
  name: 'Kari',
  comment: 'Nice to meet you',
  avatarUrl: 'images/simple/6147.jpg'
}, {
  name: 'berry',
  comment: '피너엇~~~',
  avatarUrl: 'images/simple/7944.jpg'
}];

function CommentList() {
  return (
    <>
    {
       list.map((data, index)=>{
        return(
          <Comment name={data.name} comment={data.comment} avatarUrl= {data.avatarUrl}/>
        )
      })
    }
    </>
  )
}

export default CommentList