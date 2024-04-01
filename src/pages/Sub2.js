import React from 'react'
import { Outlet } from 'react-router-dom'
import styled from 'styled-components'

/* component */
const Sub2 = () => {
  let TitleBox = styled.div`
  padding-top:50px;
  margin-bottom:40px;`

  let TextBox = styled.p`
  margin-bottom: ${props=>props.mb};
  font-weight: ${props=>props.fw};`

  let DefaultBtn = styled.button`
    border:none;
    width: 160px; height:40px;
    border-radius: 4px;
    color: ${props=>props.bg === 'seagreen' ? '#fff' : '#000'};
    background: ${props=>props.bg}
  `

  return (
    <div className='container author'>
        <TitleBox>
          <h2>작가 소개</h2>

          <TextBox mb='15px' fw='600'>구병모</TextBox>
          <TextBox mb='10px' fw='400'>구병모 작가의 작품은 독특한 세계관에 우리를 초대합니다.</TextBox>
        </TitleBox>
        <DefaultBtn bg='seagreen'>살펴보기</DefaultBtn>
        <h1>sub2</h1>
        <Outlet />
    </div>
  )
}

export default Sub2