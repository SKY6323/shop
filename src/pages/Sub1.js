import React from 'react'
import { useParams } from 'react-router-dom'

const Sub1 = ({pic}) => {
  let {id} = useParams(); //window location에 있는 주소값에서 유저가 선언한 파라메터만 추출하는 함수

  return (
    <div className='container pic'>
        <div className="row">
          <h2>책모이 <span>책모이가 선별한 베스트 셀러를 살펴보세요.</span></h2>
          <div className="col-md-6 img">
          <img src={`${process.env.PUBLIC_URL}/img/book_${parseInt(id) + 1}.jpg`} alt={pic[id].title}/> 
          </div>

          <div className="col-md-6 pic-info">
            <p className="pt-4 title">{pic[id].title}</p>
            <p className="author">{pic[id].author}</p>
            <p className="content">{pic[id].content}</p>
            <p className="price">{pic[id].price}</p>
            <button className="btn btn-danger">구매하기</button>
          </div>
        </div>
    </div>
  )
}

export default Sub1