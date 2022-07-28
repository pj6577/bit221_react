import React from 'react';
import { useEffect } from 'react';

const Timer = () => {
  useEffect(() => {
    const updateTimer = setInterval(() => {
      console.log('📉');
    }, 1000);
    // 마운트 해제시 실행 정지(정리 작업)
    // 이게 없으면 계속 돌아감 
    return () => {
      clearInterval(updateTimer);
      console.log('타이머 종료');
    }
  }, []); //마운트 && 언 마운트 시 처리완료
  return (
    <div>
      <span>타이머를 시작합니다 콘솔 확인 하세여.</span>
    </div>
  );
};

export default Timer;
