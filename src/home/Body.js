import React, { useEffect, useState } from 'react'
import { FiArrowLeft, FiArrowRight } from "react-icons/fi"
import './Body.css'

const Body = () => {

  const imgUrl = [
    'https://www.nifafinearts.com/banner-images/1273170038home-banner2.jpg',
    'https://www.nifafinearts.com/banner-images/1858311846home-banner4.jpg',
    'https://www.nifafinearts.com/banner-images/1952342548home-banner5.jpg'
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % imgUrl.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const goToPreviousSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + imgUrl.length) % imgUrl.length);
  };

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % imgUrl.length);
  };

  return (
    <div>
      <div className='photos'>
        {imgUrl.map((photo, index) => (
          <img
            key={index}
            src={photo}
            alt='photo'
            style={{ display: index === currentSlide ? 'block' : 'none', width: '98.7vw' }}
          />
        ))}
        <div className='left_arrow' onClick={goToPreviousSlide}>
          <FiArrowLeft color='white' size={'28px'} />
        </div>
        <div className='right_arrow' onClick={goToNextSlide} >
          <FiArrowRight color='white' size={'28px'} />
        </div>
      </div>

      <div className='welcome'>
        <div className='moving'>
          <h3>Nifa Updates::</h3>
          <div className='scrolling-text-container'>
            <h4 className='scrolling-text' >All NIFA courses are now available worldwide through our Live and Interactive Online Classes.Please download the NIFA app from our online classes page to register for a complimentary trial class.</h4>
          </div>
        </div>
        <div className='welcome2'>
          <h1>Welcome To National Institute of Fine Arts</h1>
          <p>National Institute of Fine Arts (NIFA) is a national center for education in arts, fostering the excellence of emerging and established artists and advancing art to create a more human world. National Institute of Fine Arts  (NIFA) was established by MRS RENU KHERA in Delhi and NCR of Delhi on July 2005. Institute established another unit in Panna (M.P) which is affiliated to Raja Mansingh Music and Arts University (Gwalior). Its aim is to provide education and training to students on a wide spectrum of Fine Arts.</p>
          <p>National Institute of Fine Arts is a place where the creative expression of individuals is nurtured and a sense of community flourishes. We seek to shape the global future of arts with an emphasis on excellence that allows its members to reach for the highest artistic standards as individuals while recognizing that the Art is one of the foundations of a healthy and creative society. This is a place where national and international leaders in the arts gather, teach, show and perform their work. The institute prides itself on its openness and on creating an environment that is safe, welcoming, and built on mutual respect.</p>
          <h4>National Institute of Fine Arts is a place where the creative expression of individuals is nurtured and a sense of community flourishes.</h4>
          <button>Read More</button>
        </div>

      </div>
      
      <div className='Online_classes'>
        <div className='info'>
          <h2>Online Classes</h2>
          <p>Dear Students/Parents, Nifa presents its Learning App for your regular art practice in which we have added many amazing features Like: Step-by-step recorded demo videos prepared by your faculty members. Regular assessment of your practise through assignment section. Live class section from same app. Attendance, payment invoice, art news, announcements, important information and direct connect with the management team are some more features. So hurry up n join now to experience personalised coaching by experts sitting at your home.</p>
          <p>We wish u Happy Learning. Stay Safe n Healthy.</p>
          <button>Read More</button>

          <h3>Download The App</h3>
          <div className='download'>
            <img className='download_img' src='https://www.nifafinearts.com/images/gplay.png' alt='img'/>
            <img className='download_img2' src='https://www.nifafinearts.com/images/appstore.png' alt='img'/>
          </div>
        </div>
        <div className='yt'>
          <iframe src='https://www.youtube.com/embed/-9cJjaLXKqE?rel=0' title='Youtube Video' allowFullScreen></iframe>
        </div>
      </div>
    </div>

  );
};

export default Body
