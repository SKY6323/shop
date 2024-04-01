import { useState } from 'react';
import {Routes, Route, useNavigate} from 'react-router-dom'
import {Navbar, Nav, NavDropdown} from 'react-bootstrap'
import HomePage from './pages/HomePage';
import Sub1 from './pages/Sub1';
import Sub2 from './pages/Sub2';
import Sub3 from './pages/Sub3';
import Page404 from './pages/Page404';
import AUthorInfo from './pages/AUthorInfo';
import WritersCall from './pages/WritersCall';

import 'bootstrap/dist/css/bootstrap.min.css'
import './css/reset.css'
import './css/fonts.css'
import './App.css';

import data from './data'
import axios from 'axios';


function App() {
  //useNavigate: 함수. 변수에 담아서 선언을 일반적으로
  let navigate = useNavigate();
  let [pic, setPic] = useState(data);
  //console.log(pic)
  let [showButton, setShowButton] = useState(true)

  //sub1/:id 경로 클릭 시 첫번째 페이지를 보여주는 navigate 함수
  const goToSub1 =(id) =>{
    navigate(`/sub1/${id}`)
  }
  
  //axios로 데이터 요청하기
  const fetchData = () => {
    axios.get("https://raw.githubusercontent.com/SKY6323/shop/main/data2.json")
    .then ((result) => {
      //console.log(result.data)
      let copy = [...pic, ...result.data];
      //pic이 가지고 있는 data.js와 서버에서 받은 data.json의 데이터를 각각 복사해서 copy라는 변수에 저장
      setPic(copy)
      
      if (result.data.length == 0){
        setShowButton(false)
      }
    })
    .catch(()=> {
      console.log("실패")
    })
  }

  //상품 더보기 버튼 함수
  const btnDataClick = () => {
    fetchData();
    setShowButton(false); //버튼 클릭 시 비활성화
  }

  return (
    <div className='wrap'>
      <div className="nav-wrap">
        <Navbar bg="dark" variant="dark">
          <div className="gnb-area">
            <Navbar.Brand href="/" className="logo">
              책모이
            </Navbar.Brand>
            
            <Nav className="me-auto gnb">
              <Nav.Link onClick={()=>goToSub1(0)}>도서 보기</Nav.Link>

              <NavDropdown title="작가별" id="basic-nav-dropdown">
                <NavDropdown.Item
                  onClick={() => navigate("/sub2/sub2-1")}
                  className="nav-submenu">
                  작가소개
                </NavDropdown.Item>
                <NavDropdown.Item
                  onClick={() => navigate("/sub2/sub2-2")}
                  className="nav-submenu">
                  작가 공모
                </NavDropdown.Item>
              </NavDropdown>

              <Nav.Link href="/sub3">이벤트</Nav.Link>
            </Nav>
          </div>
        </Navbar>
      </div>

      <Routes>
        <Route path='/' element={<HomePage pic={pic}/>}/>
        <Route path='/sub1/:id' element={<Sub1 pic={pic}/>} />
        <Route path='/sub2' element={<Sub2 pic={pic} />} >
          <Route path='sub2-1' element={<AUthorInfo pic={pic} />}></Route>
          <Route path='sub2-2' element={<WritersCall />}></Route>
        </Route>
        <Route path='/sub3' element={<Sub3 />} />
        <Route path='*' element={<Page404 />} />
      </Routes>

      {/* 상품 더보기 버튼 */}
      {
        showButton && (
          <button className='btn-data' onClick={btnDataClick} disabled={!showButton}>더보기</button>
          //버튼이 활성화 되었을 때만 클릭 가능하도록
        )
      }
    </div>
  );
}

export default App;
