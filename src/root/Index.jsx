import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { navbar } from '../utils/navbar';
import { accounts } from '../components/Accounts/Accounts';
import Navbar from '../components/NavBar/Navbar';
import NotPage from "../pages/notFound/index"
import UserLog from '../components/UserLog';

function Index() {

  const meActiveInfo = atob(localStorage.getItem("you!Prof_Active_ID-1.1")) === 'true'

  return (
    <Routes>
      <Route path='/' element={<Navbar />}>
        {navbar.map(({ path, element, id }) => {
          return <Route key={id} path={path} element={element} />;
        })}
        <Route path='/' element={<Navigate to='/home' />} />
        <Route path='/user' element={<Navigate to='/user/login' />} />
        <Route path='/me' element={<Navigate to={meActiveInfo ? '/user' : '/user/me'} />} />

        <Route path='*' element={<NotPage />} />

        {accounts.map(({ userName, id }) => {
          return <Route key={id} path={userName} element={<UserLog />} />;
        })}
      </Route>
    </Routes>
  );
}

export default Index;
