import React, { useState, useEffect } from 'react';
import './ProgrssBar.css'

const ProgressBar = ({ lessons }) => {
  const [overallProgress, setOverallProgress] = useState(0);

  useEffect(() => {
    const totalLessons = lessons ? lessons.length : 0;

    const completedLessons = lessons ? lessons.filter(lesson => lesson.completed).length : 0;

    const progress = (completedLessons / totalLessons) * 100;

    setOverallProgress(progress);
  }, [lessons]);

  return (
    <div className='progress_container'>
      <progress value={overallProgress} max="100" className='progressBar' s />
    </div>
  );
};

export default ProgressBar;


// import React, { useState, useEffect } from 'react';

// const ChapterProgressBar = ({ chapter }) => {
//   const [chapterProgress, setChapterProgress] = useState(0);

//   useEffect(() => {
//     const totalLessons = chapter.lessons ? chapter.lessons.length : 0;
//     const completedLessons = chapter.lessons
//       ? chapter.lessons.filter(lesson => lesson.completed).length
//       : 0;

//     const progress = (completedLessons / totalLessons) * 100 || 0;

//     setChapterProgress(progress);
//   }, [chapter]);

//   return (
//     <div>
//       <h3>{chapter.title}</h3>
//       <progress
//         value={chapterProgress}
//         max="100"
//         className='progressBar' />
//       <p>{`${chapterProgress.toFixed(2)}% completed`}</p>
//     </div>
//   );
// };

// const ProgressBar = ({ subject }) => {
//   return (
//     <div className='progress_container'>
//       <h2>Overall Progress</h2>
//       {subject[0]?.chapters.map(chapter => (
//         <ChapterProgressBar key={chapter.id} chapter={chapter} />
//       ))}
//     </div>
//   );
// };

// export default ProgressBar;
