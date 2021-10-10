import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import { ROUTES }  from '../Utils'
export const SidebarData = [
  {
    title: 'Profile',
    path: ROUTES['PROFILE'],
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Explore',
    path: ROUTES['EXPLORE'],
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title: 'Select Workout',
    path: ROUTES['SELECTWORKOUT'],
    icon: <FaIcons.FaCartPlus />,
    cName: 'nav-text'
  },
  {
    title: 'Break ',
    path: ROUTES['BREAK'],
    icon: <IoIcons.IoMdPeople />,
    cName: 'nav-text'
  },
];