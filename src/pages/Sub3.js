import React, { useEffect, useState } from 'react'

const Sub3 = () => {
  let [count, setCount] = useState(0);
  let [alert, setAlert] = useState(true);

  /* useEffect(()=>{
    setTimeout(()=> {setAlert(false)}, 3000) 
  }) */

  //브라우저는 이 코드가 모두 실행된 다음(에러 없이) html코드 실행
  /* for (let i=1; i<10000; i++){
      console.log(i)
  } */

  useEffect(()=>{
    /* for (let i=1; i<10000; i++){
      console.log(i)
      console.log('useeffect')
    } */

    let a= setTimeout(()=>{setAlert(false)}, 3000);
    console.log(2)

    return () => {
      //기존 타이머 제거 > useEffect 동작 전 실행 구문return()=>{}
      console.log(1);
      clearTimeout(a)
    }
  },[count])

  return (
    <div>
        <h1>Sub3</h1>
        {count}
        <button onClick={()=>setCount(count+1)}>버튼</button>
        {
          alert === true ? <div className='alert alert-danger'>3초 이내 구매시 20% 할인</div> : null
        }
    </div>
  )
}

export default Sub3