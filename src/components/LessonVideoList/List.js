import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './List.css'
import Search from '../searchInput/search';
import img0 from '../../images/Frame 237838.png'
import img1 from '../../images/Group 237809.png'
// import { subjects } from '../../utils/subjects';
import ProgressBar from '../progressBar/ProgressBar'
import ModalWithTabs from '../modal/ModalWithTab'
import { IoIosArrowRoundBack } from "react-icons/io";


const VideoList = () => {
  const [subject, setSubject] = useState([])
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedLesson, setSelectedLesson] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {

    const updateLessonCompletedStatus = () => {
      const subjects = JSON.parse(localStorage.getItem('subjects')) || [];

      for (const subject of subjects) {
        for (const chapter of subject.chapters) {
          for (const lesson of chapter.lessons) {
            const allVideosCompleted = lesson.video.every((video) => video.completed);
            lesson.completed = allVideosCompleted;
          }
        }
      }

      localStorage.setItem('subjects', JSON.stringify(subjects));
    };

    updateLessonCompletedStatus();

    const result = JSON.parse(localStorage.getItem('subjects')) || [];

    const sub = result.filter((item) => item.title.toLowerCase() === location.state.lesson.toLowerCase())
    setSubject(sub)
  }, [])

  const totalLessons = subject[0]?.chapters?.reduce((total, chapter) => {
    return total + (chapter.lessons ? chapter.lessons.length : 0);
  }, 0);

  const openModal = (lesson) => {
    console.log(lesson, "lesson")
    setSelectedLesson(lesson);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleGoBack = () => {
    navigate(-1)
  }

  return (

    <div className='list_container'>
      <div className='list_search_container'>
        <div className='list_search'>
          <IoIosArrowRoundBack style={{ width: 43, height: 23 }} className='goBack' onClick={handleGoBack} />
          <p>{location.state.lesson}</p>
        </div>
        <div className='list_search'>
          <Search radius='30px' />
        </div>
      </div>

      {

        subject[0]?.chapters.length ? (
          <>
            <p className='lesson_total'>{`${subject[0]?.chapters.length} chapters / ${totalLessons} lessons`}</p>

            <p>Resume Learning</p>
            <div className='video_resume' >
              <img src={img1} alt='' style={{ width: 43, height: 43 }} />
              <div>
                <p>properties of plan shapes</p>
                <p>You've watched 3 of 7 lessons</p>
              </div>
              <img src={img0} alt='' style={{ width: 43, height: 43 }} />
            </div>

            <p>All Chapters</p>

            <div className='list_card_container'>
              {subject[0]?.chapters.map((item) => (
                <div className='list_card' key={item.id} onClick={() => openModal(item)}>
                  <img src={item.icon} alt='' style={{ width: 150, height: 70 }} />
                  <div className='card_title'>
                    <p>Chapter {item.id}</p>
                    <h5>{item.title}</h5>
                  </div>
                  <ProgressBar lessons={item.lessons} />
                  <p>{`${item.lessons.length} lessons`} </p>
                </div>
              ))}
              {isModalOpen && (
                <ModalWithTabs isOpen={isModalOpen} closeModal={closeModal} lesson={selectedLesson} />
              )}
            </div>

          </>
        ) : null}
    </div>
  );
};

export default VideoList;
