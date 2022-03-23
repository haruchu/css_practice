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
        <div css={Toggle} className='toggle' onClick={onClick}>
          <AiOutlinePlus/>
        </div>
        {menus.map(({icon}, index) => {
          return (
            <li css={List}
              className={index === 0 ? 'list active' : 'list'}
              style={{'--index': + index}}
            >
              <a href='#' css={Link}>
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
  display: flex;
  justify-content: center;
  align-items: center;

  &.active .toggle {
    transform: rotate(315deg);
  }

  &.active li {
    transform: rotate(calc(360deg / 8 * var(--index)));
  }
`

const Toggle = css`
  position: absolute;
  width: 60px;
  height: 60px;
  background-color: #fff;
  color: #000;
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
  left: 0;
  list-style: none;
  transform-origin: 100px;
  transition: 0.5s;
  transition-delay: calc(0.1s * var(--index));
  transform: rotate(0) translateX(80px);
`

const Link = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  background-color: #fff;
  border-radius: 50%;
  transform: rotate(calc(360deg / -8 * var(--index)));
  box-shadow: 0 3px 4px rgba(0,0,0,0.15);
  color: #000;
  transition: 0.5s;

  &:hover {
    color: #00f;
  }
`