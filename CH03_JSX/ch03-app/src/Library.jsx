import React from "react";
import Book from "./Book";

//컴포넌트 ?
function Library(props){
  return(
    //엘리먼트
    <div>
    <Book name = "파이썬이 젤 쉬웠어요" page = '100' />
    <Book name = "리액트란?" page = '500' />
    <Book name = "자바가 뭐임?" page = '700' />
    </div>
  );

}

export default Library;