import React from 'react'
import './courses.css'

const Courses = () => {

    const draw = ["https://www.nifafinearts.com/images/homegallery/img1.jpg",
        'https://www.nifafinearts.com/images/homegallery/img2.jpg',
        'https://www.nifafinearts.com/images/homegallery/img4.jpg',
        'https://www.nifafinearts.com/images/homegallery/img3.jpg',
        'https://www.nifafinearts.com/images/homegallery/img5.JPG',
        'https://www.nifafinearts.com/images/homegallery/img6.JPG',
        'https://www.nifafinearts.com/images/homegallery/img7.jpg',
        'https://www.nifafinearts.com/images/homegallery/img8.jpg',
        'https://www.nifafinearts.com/images/homegallery/img9.jpg',
        'https://www.nifafinearts.com/images/homegallery/img9.jpg',
        'https://www.nifafinearts.com/images/homegallery/img10.jpg'
        , 'https://www.nifafinearts.com/images/homegallery/img21.jpeg'

    ];

    const ytUrl = [


        'https://www.youtube.com/embed/VrGcY2k5zuc', 'https://www.youtube.com/embed/EnYCmNGoySc', "https://www.youtube.com/embed/iX6KgBTH__E"
        , "https://www.youtube.com/embed/GfialCtEAYk", "https://www.youtube.com/embed/GfialCtEAYk", "https://www.youtube.com/embed/GfialCtEAYk",];

    return (
        <div>
            <div className='course'>
                <h1>Our Courses</h1>
                <div className='cards'>
                    <div className='card'>
                        <img src='https://www.nifafinearts.com/images/animation-sketching.jpg'></img>
                        <p>6 Months Diploma in Sketching & Oil Painting - Regular/Part time</p>
                        <button>Know More</button>
                    </div>
                    <div className='card'>
                        <img src='https://www.nifafinearts.com/images/animation-sketching.jpg'></img>
                        <p>6 Months Diploma in Sketching & Oil Painting - Regular/Part time</p>
                        <button>Know More</button>
                    </div>
                    <div className='card'>
                        <img src='https://www.nifafinearts.com/images/animation-sketching.jpg'></img>
                        <p>6 Months Diploma in Sketching & Oil Painting - Regular/Part time</p>
                        <button>Know More</button>
                    </div>
                    <div className='card'>
                        <img src='https://www.nifafinearts.com/images/animation-sketching.jpg'></img>
                        <p>6 Months Diploma in Sketching & Oil Painting - Regular/Part time</p>
                        <button>Know More</button>
                    </div>
                    <div className='card'>
                        <img src='https://www.nifafinearts.com/images/animation-sketching.jpg'></img>
                        <p>6 Months Diploma in Sketching & Oil Painting - Regular/Part time</p>
                        <button>Know More</button>
                    </div>
                    <div className='card'>
                        <img src='https://www.nifafinearts.com/images/animation-sketching.jpg'></img>
                        <p>6 Months Diploma in Sketching & Oil Painting - Regular/Part time</p>
                        <button>Know More</button>
                    </div>
                    <div className='card'>
                        <img src='https://www.nifafinearts.com/images/animation-sketching.jpg'></img>
                        <p>6 Months Diploma in Sketching & Oil Painting - Regular/Part time</p>
                        <button>Know More</button>
                    </div>
                    <div className='card'>
                        <img src='https://www.nifafinearts.com/images/animation-sketching.jpg'></img>
                        <p>6 Months Diploma in Sketching & Oil Painting - Regular/Part time</p>
                        <button>Know More</button>
                    </div>
                </div>
            </div>

            <div className='student_work'>
                <h1>Student Work</h1>
                <div className='image-grid'>
                    {draw.map((imageUrl, index) => (
                        <div className="image-item">
                            <img src={imageUrl} alt={`Image ${index}`} />
                        </div>
                    ))}
                </div>
            </div>

            <div className='student_testimonial'>
                <h1>Student Testimonial</h1>

                <div className='yt_video'>
                    {ytUrl.map((imageUrl, index) => (

                        <div className='yt'>
                            <iframe src={imageUrl} alt={`Video ${index}`} />
                        </div>

                    ))


                    }
                </div>
            </div>

            <div className='footer'>

                <div className='upper'>

                    <div className='info'>
                        <h4>Company</h4>
                        <p>About</p>
                        <p>Facilities</p>
                        <p>Career</p>
                        <p>Contact Us</p>
                        <p>Terms & Conditions</p>
                        <p>Refund Policy</p>
                        <p>Privacy Policy</p>
                    </div>
                    <div className='info'>
                        <h4>Activities</h4>
                        <p>Art Gallery</p>
                        <p>Workshops</p>
                        <p>Outdoor Activities</p>
                        <p>Media Coverage</p>
                        <p>Art Events</p>
                        <p>Exhibition</p>
                        <p>Daily Activities</p>
                    </div>
                    <div className='info'>
                        <h4> Popular Course</h4>
                        <p>Diploma In Fine Arts</p>
                        <p>Certificate Hobby Course</p>
                        <p>Entrance Preparation</p>
                        <p>BFA</p>
                        <p>Animation Sketching</p>
                        <p>Kids Diploma</p>


                    </div>
                    <div className='info'>
                        <h4>Our Locations</h4>
                        <p>Gurgaon (Dlf Phase - 4)</p>
                        <p>Mumbai (Andheri West)</p>
                        <p>South Delhi (Kailash Colony)</p>
                        <br></br>
                        <h4>International Branches</h4>
                        <p>London</p>
                        <p>USA</p>
                        <p>Dubai, UAE</p>

                    </div>
                </div>
                <div className='lower'>
                    <div className='lower_left'>
                        <h4>NIFA Is A Unit Of Nifaedutech Pvt Ltd.</h4>
                        <h4>Connect With Us</h4>
                        <p>9555112200,9810130552</p>
                        <p>admission@nifafinearts.com</p>
                        <div className='social_img'>

                        </div>
                    </div>

                    <div className='lower_right'>

                        <h4>Download The App</h4>
                        <div className='download'>
                            <img className='download_img' src='https://www.nifafinearts.com/images/gplay.png' alt='img' />
                            <img className='download_img2' src='https://www.nifafinearts.com/images/appstore.png' alt='img' />
                        </div>
                        <p>© Copyright 2021 NIFA Fine Arts. All Rights Reserved.</p>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Courses
