import React from 'react';
import styled from 'styled-components';
import { AiOutlineHome, AiOutlineMessage } from 'react-icons/ai'
import { CgProfile } from 'react-icons/cg'
import { BiPhotoAlbum } from 'react-icons/bi'
import { FiSettings } from 'react-icons/fi'


export const Menu1 = () => {
  const menus = [
    {
      title: "Home",
      icon: <AiOutlineHome/>
    },
    {
      title: "Profile",
      icon: <CgProfile/>
    },
    {
      title: "Message",
      icon: <AiOutlineMessage/>
    },
    {
      title: "Photos",
      icon: <BiPhotoAlbum/>
    },
    {
      title: "Settings",
      icon: <FiSettings/>
    },

  ];

  return (
    <StyledWrapper>
      <StyledMenu>
        <StyledLists>
          {menus.map(({title, icon}, index) => {
            return (
              <StyledList>
                <StyledLink href='#'>
                  <StyledIcon className='icon'>
                    {icon}
                  </StyledIcon>
                  <StyledText className='text'>
                    {title}
                  </StyledText>
                </StyledLink>
              </StyledList>
            );
          })}
          <StyledIndicater/>
        </StyledLists>
      </StyledMenu>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: black;
`

const StyledMenu = styled.div`
  width: 400px;
  height: 70px;
  background-color: white;
  display: flex;
  align-content: center;
  justify-content: center;
  border-radius: 10px;
`

const StyledLists = styled.ul`
  position: relative;
  display: flex;
  padding: 0 10px;
  margin: 0;

`

const StyledList = styled.li`
  list-style: none;
  width: 70px;
  height: 70px;
  z-index: 1;

  &:hover a .icon {
    transform: translateY(-35px);
  }

  &:hover a .text {
    opacity: 1;
    transform: translateY(10px);
  }
`

const StyledLink = styled.a`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  text-align: center;
  font-weight: 500;
`

const StyledIcon = styled.span`
  display: block;
  line-height: 75px;
  font-size: 28px;
  text-align: center;
  transition: 0.5s;
  color: black;
`

const StyledText = styled.span`
  position: absolute;
  color: black;
  font-weight: 400;
  font-size: 16px;
  transition: 0.5s;
  opacity: 0;
  transform: translateY(20px);
`

const StyledIndicater = styled.div`
  margin: 0;
  position: absolute;
  top: -50%;
  width: 70px;
  height: 70px;
  background-color: #30bfdd;
  border-radius: 50%;
  border: solid 6px black;
  box-sizing: border-box;

  &::before {
    content: '';
    background-color: transparent;
    position: absolute;
    top: 50%;
    left: -22px;
    width: 20px;
    height: 20px;
    border-top-right-radius: 20px;
    box-shadow: 0px -10px black;
  }

  &::after {
    content: '';
    background-color: transparent;
    position: absolute;
    top: 50%;
    right: -22px;
    width: 20px;
    height: 20px;
    border-top-left-radius: 20px;
    box-shadow: 0px -10px black;
  }
`