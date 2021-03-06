import React from 'react';
import styled from 'styled-components';

export const DeleteBtn = () => {
  const onClick = (e) => {
    e.currentTarget.classList.toggle('active');
  }

  return (
    <StyledWrapper>
      <StyledButton onClick={onClick}>
        <StyledTrash></StyledTrash>
        <StyledButtonText>Delete</StyledButtonText>
      </StyledButton>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
display: flex;
align-content: center;
align-items: center;
justify-content: center;
min-height: 100vh;
`

const StyledButton = styled.button`
  width: 160px;
  height: 50px;
  background-color: #333;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.5s;
  border: none;
  position: relative;
  overflow: hidden;
  cursor: pointer;

  &.active:hover span::before,
  &.active span::before {
    transform: scale(0);
  }

  &:hover span {
    transform: scale(1.2) rotate(60deg) translateY(10px);

    &::before {
      transform: rotate(-90deg) translateX(50%) translateY(-10px);
    }
  }

  &.active {
    background-color: #30bfdd;
    span {
      left: 50%;
      transform: translateX(-50%) rotate(-45deg);
      border-radius: 0;
      width: 20px;
      height: 10px;
      background-color: transparent;
      border-bottom: 2px solid #fff;
      border-left: 2px solid #fff;
    }
  }

  &:hover text,
  &.active text {
    transform: translateX(-50px) translateY(-5px) scale(0);
  }
`

const StyledTrash = styled.span`
  position: absolute;
  left: 40px;
  width: 18px;
  height: 20px;
  display: inline-block;
  background-color: #fff;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  transition: 0.5s;

  &::before {
    content: '';
    position: absolute;
    top: -3px;
    left: 0px;
    width: 100%;
    height: 2px;
    background-color: #fff;
    box-shadow:
    //蓋の取手のいらない部分を隠す部分
    12px -2px 0 #333,
    //蓋の取手になる部分
    6px -2px 0 #fff;
    transition: 0.5s;
  }
`

const StyledButtonText = styled.text`
  position: absolute;
  right: 40px;
  color: #fff;
  transition: 0.5s;
`