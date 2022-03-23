import React from 'react';
import { css } from '@emotion/react'
import { FaLine, FaTwitter, FaInstagram, FaFacebookSquare, FaTiktok, FaGithub, FaYoutube, FaVimeoV } from 'react-icons/fa'
import { AiOutlinePlus } from 'react-icons/ai'

export const CirculerMenu = () => {
  const menus = [
    {
      title: "LINE",
      icon: <FaLine/>
    },
    {
      title: "Twitter",
      icon: <FaTwitter/>
    },
    {
      title: "Instagram",
      icon: <FaInstagram/>
    },
    {
      title: "Facebook",
      icon: <FaFacebookSquare/>
    },
    {
      title: "Youtube",
      icon: <FaYoutube/>
    },
    {
      title: "Github",
      icon: <FaGithub/>
    },
    {
      title: "Tiktok",
      icon: <FaTiktok/>
    },
    {
      title: "Vimeo",
      icon: <FaVimeoV/>
    },
  ];

  const onClick = () => {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('active');
  }

  return (
    <div css={Wrapper}>
      <div css={Menu} className='menu'>
        <div css={Toggle} className='menu' onClick={onClick}>
          <AiOutlinePlus/>
        </div>
        {menus.map(({icon}, index) => {
          return (
            <li css={List}
              className={index === 0 ? 'list active' : 'list'}
              index={index}
            >
              <a href='#'>
                <span className='icon'>
                  {icon}
                </span>
              </a>
            </li>
          );
        })}
      </div>

    </div>
  );
};


const Wrapper = css`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-image: linear-gradient(90deg, rgba(65, 164, 253, 1), rgba(14, 244, 255, 1));
`

const Menu = css`
  position: relative;
  width: 200px;
  height: 200px;
  background-color: #0f0;
  display: flex;
  justify-content: center;
  align-items: center;

  &.active .menu {
    transform: rotate(315deg);
  }
`

const Toggle = css`
  position: absolute;
  width: 60px;
  height: 60px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  border-radius: 50%;
  cursor: pointer;
  box-shadow: 0 3px 4px rgba(0,0,0,0.15);
  font-size: 30px;
  transition: 1.25s;
  `

  const List = css`
    position: absolute;
    list-style: none;
  `