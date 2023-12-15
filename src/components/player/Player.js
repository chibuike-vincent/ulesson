import React, { useState, useRef, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios'
import './player.css'
import playIcon from '../../images/Group 18.png'
import rewind from '../../images/Group 31.1.png'
import fastforward from '../../images/Group 31.2.png'
import { FaRegCirclePause } from "react-icons/fa6";
import { IoIosArrowRoundBack } from "react-icons/io";
import { IoChevronBack } from "react-icons/io5";
import { GrFormNext } from "react-icons/gr";


// import { subjects } from '../../utils/subjects';




const VideoPlayer = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  // const [subjects, setSubject] = useState(null)
  const location = useLocation();
  const navigate = useNavigate();
  let videoSource = location.state.videoSource.vid
  const lesson = location.state.lesson
  console.log(lesson, 'lesson')

  const handleDownload = async () => {
    try {
      const response = await fetch(videoSource);
      const blob = await response.blob();
      const cache = await caches.open('my-video-cache');
      await cache.put(videoSource, new Response(blob));
    } catch (error) {
      console.error('Error downloading video:', error);
    }
  };

  const handlePlayPause = async () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
      await handleDownload()
    }
    setIsPlaying(!isPlaying);
  };

  const handleFastForward = () => {
    videoRef.current.currentTime += 10;
  };

  const handleRewind = () => {
    videoRef.current.currentTime -= 10;
  };

  const handleGoBack = () => {
    navigate(-1)
  }

  const handleVideoEnd = async () => {
    try {
      const existingData = JSON.parse(localStorage.getItem('subjects')) || [];

      const updatedData = existingData.map((subjectData) => {
        return {
          ...subjectData,
          chapters: subjectData?.chapters.map((chapterData) => {
            return {
              ...chapterData,
              lessons: chapterData?.lessons.map((lessonData) => {
                return {
                  ...lessonData,
                  video: lessonData?.video.map((videoData) => {
                    if (videoData.vid === videoSource) {
                      return {
                        ...videoData,
                        completed: true,
                      };
                    }
                    return videoData;
                  }),
                };
              }),
            };
          }),
        };
      });

      localStorage.setItem('subjects', JSON.stringify(updatedData));
    } catch (error) {
      console.error('Error updating localStorage:', error);
    }
  };

  const videoElement = document.getElementById('videoPlayer');

  const handleNext = () => {
    try {
      const currentVid = lesson.video.find((item) => item.vid === videoSource);
      const nextVid = lesson.video.find((item) => item.id === currentVid.id + 1);

      if (nextVid) {
        videoSource = nextVid.vid;
        videoElement.src = videoSource;
        videoElement.load();
        videoElement.play();
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handlePrev = () => {
    try {
      const currentVid = lesson.video.find((item) => item.vid === videoSource);
      const prevVid = lesson.video.find((item) => item.id === currentVid.id - 1);

      if (prevVid) {
        videoSource = prevVid.vid;
        videoElement.src = videoSource;
        videoElement.load();
        videoElement.play();
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="video-container">
      <IoIosArrowRoundBack style={{ width: 33, height: 43 }} className='vidGoBack' onClick={handleGoBack} />

      <video ref={videoRef} controls onEnded={handleVideoEnd} width="1200" height="700" className='videoPlayer' id='videoPlayer' >
        <source src={videoSource} type="video/mp4" className='videoPlayer' />
        Your browser does not support the video tag.
      </video>
      <div className="custom-controls" >
        <img src={rewind} alt='' style={{ width: 33, height: 33 }} onClick={handleRewind} />
        {isPlaying ? <FaRegCirclePause style={{ width: 33, height: 33, color: '#ea7052' }} onClick={handlePlayPause} /> : <img src={playIcon} alt='' style={{ width: 33, height: 33 }} onClick={handlePlayPause} />}
        <img src={fastforward} alt='' style={{ width: 33, height: 33 }} onClick={handleFastForward} />
      </div>
      <div className='nextPrev_container'>
        <div onClick={handlePrev} className='nextPrev'>
          <IoChevronBack />
          <IoChevronBack />
          <p>Prev</p>
        </div>
        <p>This video is a demo on frontend role test</p>
        <div onClick={handleNext} className='nextPrev'>
          <p>Next</p>
          <GrFormNext />
          <GrFormNext />

        </div>

      </div>

    </div>
  );
};

export default VideoPlayer;
