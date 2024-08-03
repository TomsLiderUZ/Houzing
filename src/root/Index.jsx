import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { navbar } from '../utils/navbar';
import { accounts } from '../components/Accounts/Accounts';
import Navbar from '../components/NavBar/Navbar';
import NotPage from "../pages/notFound/index"
import UserMe from '../components/UserMe';

function Index() {
  return (
    <Routes>
      <Route path='/' element={<Navbar />}>
        {navbar.map(({ path, element, id }) => {
          return <Route key={id} path={path} element={element} />;
        })}
        <Route path='/' element={<Navigate to='/home' />} />
        <Route path='/user' element={<Navigate to='/user/login' />} />
        <Route path='*' element={<NotPage />} />

        {accounts.map(({ userName, id }) => {
          return <Route key={id} path={userName} element={<UserMe />} />;
        })}
      </Route>
    </Routes>
  );
}

export default Index;
