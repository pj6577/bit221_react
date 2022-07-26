import React from "react";

function Book(props){
  let info = {
    color: 'white',
    backgroundColor : 'lightblue',
    display: 'flex',
    border:'1px solid',


  };

  let img = {
    width: '100px',
    height: '100px',
    borderRadius: '100px',
    marginRight: '70px',

  }
  let urlImg = 'https://bimage.interpark.com/partner/goods_image/7/4/0/9/249927409g.jpg';

  return(
    <div style={info}>
      <img src={urlImg} style={img} />
      <div>
        <h2> {` 이 책의 이름은 ${props.name} 입니다.`} </h2>
        <h3>{` 이 책은 총 ${props.page} 입니다.`}</h3>
        
      </div>
    </div>
  );
};


// 선언해야 다른 곳에서 이 컴포넌트 사용 가능
export default Book;
<Book title = "모두의 SQL" page='100'/>
