import React from 'react';
import {COLORS} from '../../constants/colors';
import DetailView from './detail.view';

const data = {
  imageUrl: [
    'https://images.unsplash.com/photo-1564092566747-4dd00afb59c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8TnVzYSUyMFBlZGluYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60',
    'https://images.unsplash.com/photo-1578235169908-d9482dc9e76f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8TnVzYSUyMFBlZGluYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60',
    'https://images.unsplash.com/photo-1544979407-1204ff29f490?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8TnVzYSUyMFBlZGluYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60',
    'https://images.unsplash.com/photo-1604500943879-80a4da030905?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8TnVzYSUyMFBlZGluYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60',
    'https://images.unsplash.com/photo-1590757825699-4844233cd768?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fE51c2ElMjBQZWRpbmF8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60',
  ],
  name: 'Nusa Pedina',
  location: 'Bali, Indonesia',
  info: [
    {
      name: 'Rating',
      value: 4.8,
      unit: '5.2k',
      iconName: 'star',
      category: 'AntDesign',
      color: COLORS.red,
    },
    {
      name: 'Distance',
      value: 3000,
      unit: 'km',
      iconName: 'map-marker-distance',
      category: 'MaterialCommunityIcons',
      color: COLORS.GST_Blue,
    },
    {
      name: 'Department',
      value: 108,
      unit: 'avail',
      iconName: 'hotel',
      category: 'FontAwesome5',
      color: COLORS.green_light,
    },
  ],
  sortDescription:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ',
};

const DetailContainer = () => {
  return <DetailView data={data} />;
};

export default DetailContainer;
