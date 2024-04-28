import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './../components/Navbar';

const Home = () => {
  return (
    <>
      <div className='home'>
        <h2>Home Page</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde sunt
          eius saepe mollitia dicta alias modi. Necessitatibus blanditiis iure
          exercitationem incidunt nesciunt iusto, numquam alias amet eveniet
          autem, at dolorem?
        </p>
      </div>
    </>
  );
};

export default Home;
