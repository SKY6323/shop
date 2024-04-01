import React from 'react';
import Card from '../component/Card';

const HomePage = (props) => {
  return (
    <div>
        <div className='main-bg'>
            <h1>READ SPACE</h1>
            <p>우주를 읽어 나의 우주를 넓히다.</p>
        </div>
        
        <div className="container">
            <div className="row pic-area">
                {
                    props.pic.map((item, i)=> (
                        <Card 
                        key={i} 
                        item={item} 
                        imgSrc={`/img/book_${i + 1}.jpg`} 
                        id={i}
                        /> //인덱스를 이용해서 이미지를 동적으로 생성
                    ))
                }
               
            </div>
        </div>
    </div>
  )
}

export default HomePage