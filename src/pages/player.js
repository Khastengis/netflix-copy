import React, {useState} from "react";
import { motion } from "framer-motion";
import './pages.css'
import ReactPlayer from 'react-player'

export const VideoPlayer = () => {

    return (
        <div className="video-container">
            <ReactPlayer
                width="100%" height="100%"
                playing
                url='https://youtu.be/zgKQkWd5zhs'
                controls={true}
            />
        </div>
    )
}