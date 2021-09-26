import React, {useState} from "react";
import { motion } from "framer-motion";
import '../pages/pages.css'
import NetflixImg from '../imgs/Netflix.svg'
import { GoSearch } from 'react-icons/go';
import { MdNotifications } from 'react-icons/md'
import Pfp from '../imgs/pfp.png'
import { AiFillCaretDown } from 'react-icons/ai'
import Pfp1 from '../imgs/user1.png'
import Pfp2 from '../imgs/user3.png'
import Pfp3 from '../imgs/user2.png'

const subMenuAnimate = {
    enter: {
        opacity: 1,
        rotateX: 0,
        transition: {
            duration: 0.2
        },
        display: "block"
    },
    exit: {
        opacity: 0,
        rotateX: -15,
        transition: {
            duration: 0.2,
            delay: 0.1
        },
        transitionEnd: {
            display: "none"
        }
    }
};

export const Navbar = ({ children }) => {

    const [isHover, setIsHover] = useState(false);
    const toggleHoverMenu = () => {
        setIsHover(!isHover);
    };

    return (
        <div>
            <div className="navbar" style={{position: "fixed"}}>
                <div style={{display: "flex", alignItems: "center", flexDirection: "row", marginLeft: 50}}>
                    <img src={NetflixImg} style={{height: 25}}/>
                    <ul style={{marginLeft: 20}}>
                        <li className="wText bText">Home</li>
                        <motion.li whileHover={{color: "#6b6b6b"}} className="gText visibleLi">TV Shows</motion.li>
                        <motion.li whileHover={{color: "#6b6b6b"}} className="gText visibleLi">Movies</motion.li>
                        <motion.li whileHover={{color: "#6b6b6b"}} className="gText visibleLi">Latest</motion.li>
                        <motion.li whileHover={{color: "#6b6b6b"}} className="gText visibleLi">My List</motion.li>
                    </ul>
                </div>
                <div style={{display: "flex", alignItems: "center", flexDirection: "row", marginRight: 50}}>
                    <GoSearch className="wText second-navbar-text pointer" size={20}/>
                    <span className="navbar-text wText second-navbar-text pointer"> Kids </span>
                    <MdNotifications className="wText second-navbar-text pointer" size={25}/>

                    <motion.div
                        className="menu-item"
                        onHoverStart={toggleHoverMenu}
                        onHoverEnd={toggleHoverMenu}
                        style={{display: "flex", alignItems: "center"}}
                    >

                        <img src={Pfp} style={{marginRight: 3, borderRadius: "5px"}}/>
                        <motion.div
                            transition={{delay: 0.2, type: "tween"}}
                            whileHover={{rotate: 180}}
                        >
                            <AiFillCaretDown className="wText"/>
                        </motion.div>

                        <motion.div
                            className="sub-menu"
                            initial="exit"
                            animate={isHover ? "enter" : "exit"}
                            variants={subMenuAnimate}
                        >
                            <div className="dropdown">
                                <div className="wText dropdown-item">
                                    <img src={Pfp1} className="user-profile"/>
                                    <span className="user-name under-text">Khastengis</span>
                                </div>
                                <div className="wText dropdown-item">
                                    <img src={Pfp3} className="user-profile"/>
                                    <span className="user-name under-text">Khasa</span>
                                </div>
                                <div className="wText dropdown-item">
                                    <img src={Pfp2} className="user-profile"    />
                                    <span className="user-name under-text">Kids</span>
                                </div>
                                <div className="wText under-text" style={{fontSize: "13.5px", paddingTop: 6, paddingBottom: 16, borderBottom: "1px solid black"}}>Manage Profiles</div>
                                <div className="wText bText dropdown-item2 under-text" style={{marginTop: 8}}>Account</div>
                                <div className="wText bText dropdown-item2 under-text">Help Center</div>
                                <div className="wText bText dropdown-item2 under-text">Sign out of Netflix</div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
            <div>
                {children}
            </div>
        </div>
    )
}