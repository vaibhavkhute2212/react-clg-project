import React from 'react'
import './Head.css'
import {BsFillTelephoneFill ,BsTwitter , BsYoutube} from "react-icons/bs"
import {GoMail} from "react-icons/go"
import {AiOutlineInstagram} from "react-icons/ai"
import {FaFacebookF} from 'react-icons/fa'

const Head = () => {
    return (
        <div>
            <div className='nav'>
                <div className='nav1'>
                    <p>Welcome to the National Institute of Fine Arts</p>
                </div>
                <div className="nav2">
                    
                    <div className='nav2_no'>
                            <BsFillTelephoneFill color='white' className='nav2_no_icon'/>
                            <p>9555112200 </p>
                    </div>
                    <div className='nav2_no'>
                             <BsFillTelephoneFill color='white' className='nav2_no_icon'/>  
                            <p>9555112200</p>              
                        
                    </div>
                    
                            
                    <div className='nav2_mail'>
                        <GoMail color ='white' className='nav2_mail_icon'/>
                        <p>admission@nifafinearts.com</p>
                    </div>    
                    <div className='nav2_icon'>
                        <FaFacebookF className='icon'/>
                        <AiOutlineInstagram className='icon'/>
                        <BsTwitter className='icon'/>
                        <BsYoutube className='icon'/>
                    </div>
                </div>
            </div>

            <div className='nifa'>

                <div className='img'>
                <img src = 'https://www.nifafinearts.com/images/nifa-new-logo.png'/>
                </div>
                <div className='options'>
                    <ul className='nav5'>
                        <li>Home</li>
                        <li>About</li>
                        <li>Courses</li>
                        <li>Activities</li>
                        <li>Admission</li>
                        <li>Art Gallery</li>
                        <li>Franchise</li>
                        <li>Online Classes</li>
                        <li>Videos</li>
                        <li>Pay Fee</li>
                        <li>Contact</li>
                        
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Head
