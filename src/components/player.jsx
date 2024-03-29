import "../styles.css"
import styled from 'styled-components';
import Polo from '../images/polog.png';
import { IoAddCircleOutline } from "react-icons/io5";
import { LuShuffle } from "react-icons/lu";
import { GiPreviousButton } from "react-icons/gi";
import { FaPauseCircle } from "react-icons/fa";
import { GiNextButton } from "react-icons/gi";
import { RiRepeatLine } from "react-icons/ri";
import { RiVideoFill } from "react-icons/ri";
import { PiMicrophoneStageFill } from "react-icons/pi";
import { HiMiniQueueList } from "react-icons/hi2";
import { TbDevices2 } from "react-icons/tb";
import { BsFillVolumeUpFill } from "react-icons/bs";
import { GrExpand } from "react-icons/gr";


const ArtistH3 = styled.h3`
  color:#fff;
  font-size:14px;
  font-weight:200;
  cursor:pointer;
  transition:0.3s;
  &:hover{
  text-decoration:underline;
  }
`

const Li = styled.li`
    list-style:none;
    display:flex;
    align-items:center;
    margin-bottom:4px;
    padding:5px 3px 0 9px;
    border-radius:4px;
    transition:0.3s; 
`

const ArtistImage = styled.img`
width:60px;
height:60px;
border-radius:3px;
`


function Player() {
    return(
        <>
            <section>
                <div className="player-container">
                    <div className="player-content">
                        <div className="first-div">
                            <div className="first-div-content">

                                <ul style={{ display:'flex'}}>
                                        <Li>
                                            <div>
                                                <ArtistImage src={Polo} alt="" />
                                            </div>

                                            <div style={{lineHeight:'20px',marginLeft:'15px'}}>
                                                <ArtistH3>Polo G</ArtistH3>
                                                <ArtistH3 style={{color:'gray'}}>Rapstar</ArtistH3>
                                            </div>
                                        </Li>

                                        <Li>
                                            <ArtistH3><IoAddCircleOutline style={{fontSize:'1.5rem'}} /></ArtistH3>
                                        </Li>

                                </ul>
                            </div>
                        </div>

                        <div className="second-div">
                            <div className="second-div-content">
                                <div className="upper-second-div">
                                    <i><LuShuffle /></i>
                                    <i><GiPreviousButton /></i>
                                    <i><FaPauseCircle /></i>
                                    <i><GiNextButton /></i>
                                    <i><RiRepeatLine /></i>
                                </div>
                            </div>
                        </div>

                        <div className="third-div">
                            <div className="third-div-content">
                                <div className="upper-third-div">
                                    <i><RiVideoFill /></i>
                                    <i><PiMicrophoneStageFill /></i>
                                    <i><HiMiniQueueList /></i>
                                    <i><TbDevices2 /></i>
                                    <i><BsFillVolumeUpFill /></i>
                                    <p></p>
                                    <i><GrExpand /></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Player