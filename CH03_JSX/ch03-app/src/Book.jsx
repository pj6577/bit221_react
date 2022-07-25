import React from 'react';

const Book = ({title, page}) => {
  let info ={
    color : 'white',
    backgroundColor : 'black',
    border:'1px solid',
    display : 'flex'
  };

  let img = {
    width : '150px',
    height :'100px',
    borderRadius:'100px',
    display :'flex'
  }
  let urling ="/images/simple/223.jpg";
  return (
    <div style={info}>
      <img src ={urling} style={img}/>
      <div>
        <h2>{`이 책의 이름은 ${title}  입니다 `}</h2>
        <h3>{`이 책은 총 ${page} 페이지 입니다`}</h3>
      </div>
    </div>
  );
};

export default Book;
<Book />