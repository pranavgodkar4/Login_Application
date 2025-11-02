import React from 'react';
import HomePage from '../../Pages/Home/HomePage';
import { Outlet } from 'react-router-dom';

function Main() {
  return (
    <div className='mt-2 ml-2'>
     <Outlet/>
    </div>
  );
}

export default Main;
