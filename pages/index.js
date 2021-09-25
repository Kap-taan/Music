import Router from 'next/router';
import { useEffect } from 'react';
import styles from '../styles/Home.module.css'

export default function Home() {


  useEffect(() => {
    const { pathname } = Router
    if(pathname == '/' ){
        Router.push('/albums')
    }
  });

  return (
    <div>
      Welcome to Our Website Where you can listen to good music
    </div>
  )
}
