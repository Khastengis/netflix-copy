import React, {useState} from "react";
import { motion } from "framer-motion";
import './pages.css'
import Poster from '../imgs/poster.jpg'
import Poster2 from '../imgs/poster3.jpg'
import Poster4 from '../imgs/poster4.jpg'
import {Navbar} from "../components/navbar";
import ReactPlayer from 'react-player'
import {useHistory} from 'react-router-dom';
import { FiVolume2 } from 'react-icons/fi'
import { FiVolumeX } from 'react-icons/fi'
import { FaArrowLeft } from 'react-icons/fa'
import { FaArrowRight } from 'react-icons/fa'

const hoverVariants = {
    hover: {
        scale: 1.2,
        zIndex: 2,
        cursor: "pointer",
    },
    initial: {
        scale: 0, zIndex: 1
    },
    animate: {
        rotate: 360, scale: 1
    },
    transition: {
        type: "spring",
        stiffness: 180,
        damping: 20,
    }
}

export const Home = () => {

    const [isHover, setIsHover] = useState(false);
    const [muted, setMuted] = useState(50);
    const history= useHistory();

    const mute = () => {
        if (muted === 50) {
            setMuted(0);
        } else {
            setMuted(50)
        }
    }
    const videoPush = () => {
        history.push("/player")
    }

    return (
        <Navbar>
            <div className="column container">
                <div className="video">
                    <ReactPlayer
                        width="100%" height="100%"
                        playing
                        url='https://youtu.be/IsOlj-xpK9Q'
                        volume = {muted}
                        controls={false}
                    />
                    {/*<div>*/}
                    {/*    {*/}
                    {/*        muted === 50 ?*/}
                    {/*            <FiVolume2 size={60} className="wText" onClick={mute}/>*/}
                    {/*            :*/}
                    {/*            <FiVolumeX size={60} className="wText" onClick={mute}/>*/}
                    {/*    }*/}
                    {/*</div>*/}
                </div>
                <div className="column" style={{marginLeft: 50, marginTop: -100, zIndex: 10}}>
                    <div className="title">Only on Netflix</div>
                    <div className="row posters">
                        {/*<FaArrowLeft className="wText pointer" style={{zIndex: 20}}/>*/}
                        <motion.img
                            className="poster"
                            variants={hoverVariants}
                            initial="initial"
                            animate="animate"
                            transition="transition"
                            whileHover="hover"
                            src={Poster}
                            onClick={videoPush}
                        />
                        <motion.img
                            className="poster"
                            variants={hoverVariants}
                            initial="initial"
                            animate="animate"
                            transition="transition"
                            whileHover="hover"
                            src={Poster}
                            onClick={videoPush}
                        />
                        <motion.img
                            className="poster"
                            variants={hoverVariants}
                            initial="initial"
                            animate="animate"
                            transition="transition"
                            whileHover="hover"
                            src={Poster}
                            onClick={videoPush}
                        />
                        <motion.img
                            className="poster"
                            variants={hoverVariants}
                            initial="initial"
                            animate="animate"
                            transition="transition"
                            whileHover="hover"
                            src={Poster}
                            onClick={videoPush}
                        />
                        <motion.img
                            className="poster"
                            variants={hoverVariants}
                            initial="initial"
                            animate="animate"
                            transition="transition"
                            whileHover="hover"
                            src={Poster}
                            onClick={videoPush}
                        />
                        {/*<FaArrowRight className="wText pointer" style={{zIndex: 20}}/>*/}
                    </div>

                    <div className="title">Western TV Shows</div>
                    <div className="row posters">
                        {/*<FaArrowLeft className="wText pointer" style={{zIndex: 20}}/>*/}
                        <motion.img
                            className="poster"
                            variants={hoverVariants}
                            initial="initial"
                            animate="animate"
                            transition="transition"
                            whileHover="hover"
                            src={Poster4}
                            onClick={videoPush}
                        />
                        <motion.img
                            className="poster"
                            variants={hoverVariants}
                            initial="initial"
                            animate="animate"
                            transition="transition"
                            whileHover="hover"
                            src={Poster4}
                            onClick={videoPush}
                        />
                        <motion.img
                            className="poster"
                            variants={hoverVariants}
                            initial="initial"
                            animate="animate"
                            transition="transition"
                            whileHover="hover"
                            src={Poster4}
                            onClick={videoPush}
                        />
                        <motion.img
                            className="poster"
                            variants={hoverVariants}
                            initial="initial"
                            animate="animate"
                            transition="transition"
                            whileHover="hover"
                            src={Poster4}
                            onClick={videoPush}
                        />
                        <motion.img
                            className="poster"
                            variants={hoverVariants}
                            initial="initial"
                            animate="animate"
                            transition="transition"
                            whileHover="hover"
                            src={Poster4}
                            onClick={videoPush}
                        />
                        {/*<FaArrowRight className="wText pointer" style={{zIndex: 20}}/>*/}
                    </div>

                    <div className="title">Trending Now</div>
                    <div className="row posters">
                        {/*<FaArrowLeft className="wText pointer" style={{zIndex: 20}}/>*/}
                        <motion.img
                            className="poster"
                            variants={hoverVariants}
                            initial="initial"
                            animate="animate"
                            transition="transition"
                            whileHover="hover"
                            src={Poster2}
                            onClick={videoPush}
                        />
                        <motion.img
                            className="poster"
                            variants={hoverVariants}
                            initial="initial"
                            animate="animate"
                            transition="transition"
                            whileHover="hover"
                            src={Poster2}
                            onClick={videoPush}
                        />
                        <motion.img
                            className="poster"
                            variants={hoverVariants}
                            initial="initial"
                            animate="animate"
                            transition="transition"
                            whileHover="hover"
                            src={Poster2}
                            onClick={videoPush}
                        />
                        <motion.img
                            className="poster"
                            variants={hoverVariants}
                            initial="initial"
                            animate="animate"
                            transition="transition"
                            whileHover="hover"
                            src={Poster2}
                            onClick={videoPush}
                        />
                        <motion.img
                            className="poster"
                            variants={hoverVariants}
                            initial="initial"
                            animate="animate"
                            transition="transition"
                            whileHover="hover"
                            src={Poster2}
                            onClick={videoPush}
                        />
                        {/*<FaArrowRight className="wText pointer" style={{zIndex: 20}}/>*/}
                    </div>
                </div>
            </div>
        </Navbar>
    )
}