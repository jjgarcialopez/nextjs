import React from 'react';
import type { NextPage } from 'next';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <div className='bg-green-500'>
      <p>Pagina de Index - prueba dev</p>
      <h1> Hola mi amor te amo muchooooo, ya estoy aprendiendo a desplegar mi página web </h1>
      <Link href='/admin/usuarios'>
        <a className='cursor-pointer'>Ir a admin usuarios</a>
      </Link>
    </div>
  );
};

export default Home;
