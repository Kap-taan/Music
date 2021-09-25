import { Play, Pause } from "phosphor-react";
import Router from 'next/router';
import { useState, useRef } from 'react';
import classes from '../styles/Card.module.css';

const Cards = ({ song }) => {

    const clickHandler = () => {

        const { pathname } = Router
        if(pathname == '/albums' ){
            Router.push(`/albums/${song.l}`)
        }

    }

    return (
            <div className={classes.card} onClick={clickHandler}>
                <img src={song.image} width={400} height={300} alt="Moon Child Era Thumbnail" className={classes.img} />
                <h4 className={classes.song_title}>{song.title}</h4>
            </div>
    );
}
 
export default Cards;