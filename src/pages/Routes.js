
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Sidebar from './Sidebar'
import LiveClasses from './LiveClasses';
import HomeworkHelp from './HomeworkHelp';
import VideoLibrary from './VideoLibrary';
import MockExam from './MockExam';
import MultiplayerQuiz from './MultiplayerQuiz';
import PracticeExam from './PracticeExam';
import Notifications from './Notifications';
import LearningReport from './LearningReport';
import BuyLearningPlan from './BuyLearningPlan';
import ManageSubscription from './ManageSubscription';
import Header from '../components/header/Header';
import VideoList from '../components/LessonVideoList//List'
import VideoPlayer from '../components/player/Player';

const RoutePage = () => {
  return (
    <Router>
      <div className="app-container">
        <Sidebar />

        <div className="content">
          <div className='route_contents'>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
            <Routes>
              <Route path="/live-classes" element={<LiveClasses />} />
            </Routes>
            <Routes>
              <Route path="/homework-help" element={<HomeworkHelp />} />
            </Routes>
            <Routes>
              <Route path="/video-library" element={<VideoLibrary />} />
            </Routes>
            <Routes>
              <Route path="/mock-exam" element={<MockExam />} />
            </Routes>
            <Routes>
              <Route path="/multiplayer-quiz" element={<MultiplayerQuiz />} />
            </Routes>
            <Routes>
              <Route path="/practice-exam" element={<PracticeExam />} />
            </Routes>
            <Routes>
              <Route path="/notifications" element={<Notifications />} />
            </Routes>
            <Routes>
              <Route path="/learning-report" element={<LearningReport />} />
            </Routes>
            <Routes>
              <Route path="/buy-plan" element={<BuyLearningPlan />} />
            </Routes>
            <Routes>
              <Route path="/subscription" element={<ManageSubscription />} />
            </Routes>
            <Routes>
              <Route path="/video-list" element={<VideoList />} />
            </Routes>
            <Routes>
              <Route path="/player" element={<VideoPlayer />} />
            </Routes>

          </div>
        </div>
      </div>
    </Router>
  );
};

export default RoutePage;
