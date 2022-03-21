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
    <StyledLists>
      {menus.map(({title, icon}, index) => {
        return (
          <StyledList>
          <StyledLink>
            <StyledIcon>
              {icon}
            </StyledIcon>
            <StyledText>
              {title}
            </StyledText>
          </StyledLink>
        </StyledList>
        );
      })}
    </StyledLists>
  );
};

const StyledLists = styled.ul`

`

const StyledList = styled.li`

`

const StyledLink = styled.a`

`

const StyledIcon = styled.span`

`

const StyledText = styled.span`

`