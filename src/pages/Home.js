import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/Home.css"
import img1 from "../images/image 30.png"
import practiceImage from '../images/Frame 3233083.png'
import { subjects } from "../utils/subjects"
import Header from "../components/header/Header"

const Home = () => {
  // const [subjects, setSubject] = useState(null)
  const navigate = useNavigate();
  useEffect(() => {
    localStorage.setItem('subjects', JSON.stringify(subjects));
  }, [])
  return (
    <div>
      <Header />
      <div className='layer_one'>
        <img src={img1} alt='' style={{ height: '80%', width: '80%' }} />
      </div>

      <div>
        <p>Watch Video Lessons</p>
      </div>
      <div className='subject_container'>
        {
          subjects.map((sub) => (
            <div className='subjects' style={{ backgroundColor: sub.color }} onClick={() => navigate('/video-list', { state: { lesson: sub.title } })}>
              <img src={sub.icon} alt='' style={{ height: 20, width: 20 }} />
              <p>{sub.title.toUpperCase()}</p>
            </div>
          ))
        }
      </div>

      <div className='practice_container'>
        <div className='practice'>
          <p>PRACTICE EXAM</p>
          <h4>Ready to test your knowledge?</h4>
          <h6>Take practice exams to prepare for upcoming exams. Practice makes perfect grades!</h6>
          <button>START PRACTICE</button>
        </div>
        <img src={practiceImage} alt='' style={{ height: 210, width: '50%' }} />
      </div>

    </div>
  );
};

export default Home;
