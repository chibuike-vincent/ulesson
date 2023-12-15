//import subject icons
import mathIcon from '../images/MTH ICON.png'
import engIcon from '../images/Union.png'
import chemIcon from '../images/CHM ICON.png'
import bioIcon from '../images/BIO ICON.png'
import phyIcon from '../images/PHY ICON.png'
import econIcon from '../images/ECO ICON.png'
import accIcon from '../images/ACC ICON.png'
import litIcon from '../images/LIT ICON.png'
import govIcon from '../images/GOV ICON.png'

//import video icons
import chpt1Icon from '../images/MTH10_02_01 (1).png'
import chpt2Icon from '../images/MTH10_01_05 (1).png'
import chpt3Icon from '../images/MTH10_01_04.png'
import chpt4Icon from '../images/MTH10_01_03.png'
import chpt5Icon from '../images/MTH10_01_01.png'

export const subjects = [
  {
    id: 1,
    title: 'Mathematics',
    icon: mathIcon,
    color: '#EA7052',
    chapters: []
  },
  {
    id: 2,
    title: 'English Language',
    icon: engIcon,
    color: '#506AAC',
    chapters: []
  },
  {
    id: 3,
    title: 'Chemistry',
    icon: chemIcon,
    color: '#FCA964',
    chapters: []
  },
  {
    id: 4,
    title: 'Biology',
    icon: bioIcon,
    color: '#68BC98',
    chapters: [
      {
        id: 1,
        icon: chpt1Icon,
        title: 'Test video one',
        lessons: [
          {
            id: 1,
            completed: false,
            topic: 'Reproduction',
            video: [
              { id: 1, completed: false, vid: "https://res.cloudinary.com/dragcemzx/video/upload/v1702311920/Ulesson/BIO10_01_02_01_RV_pqayww.mp4", title: 'Video title' },
              { id: 2, completed: false, vid: "https://res.cloudinary.com/dragcemzx/video/upload/v1702311884/Ulesson/BIO10_02_07_01_asrq2y.mp4", title: 'Video title' },
              { id: 3, completed: false, vid: "https://res.cloudinary.com/dragcemzx/video/upload/v1702311892/Ulesson/BIO10_02_07_02_rmudeq.mp4", title: 'Video title' }
            ]
          },
          {
            id: 2,
            completed: false,
            topic: 'Digestion',
            video: [
              {
                id: 1,
                completed: false,
                vid: "https://res.cloudinary.com/dragcemzx/video/upload/v1702311890/Ulesson/BIO10_03_01_06_NEW_ix0igw.mp4",
                title: 'Video title'
              }, {
                id: 2,
                completed: false,
                vid: "https://res.cloudinary.com/dragcemzx/video/upload/v1702311899/Ulesson/BIO10_01_01_01_RV_qgisd2.mp4",
                title: 'Video title'
              }
            ]
          },
          {
            id: 3,
            completed: false,
            video: [{
              id: 1,
              completed: false,
              vid: "https://res.cloudinary.com/dragcemzx/video/upload/v1702311899/Ulesson/BIO10_01_01_01_RV_qgisd2.mp4",
              title: 'Video title'
            }],
            topic: 'Phosynthesis'
          }
        ]
      },
      {
        id: 2,
        icon: chpt2Icon,
        title: 'Test video two',
        lessons: [
          {
            id: 1,
            completed: false,
            video: [{
              id: 1,
              completed: false,
              vid: "https://res.cloudinary.com/dragcemzx/video/upload/v1702311884/Ulesson/BIO10_02_07_01_asrq2y.mp4",
              title: 'video title'
            },
            {
              id: 2,
              completed: false,
              vid: "https://res.cloudinary.com/dragcemzx/video/upload/v1702311890/Ulesson/BIO10_03_01_06_NEW_ix0igw.mp4",
              title: 'video title'
            }
            ],
            topic: "Plants"
          },
          {
            id: 2,
            completed: false,
            video: [{
              id: 1,
              completed: false,
              vid: "https://res.cloudinary.com/dragcemzx/video/upload/v1702311892/Ulesson/BIO10_02_07_02_rmudeq.mp4",
              title: 'video title'
            }],
            topic: "Animals"
          }
        ]
      },
      {
        id: 3,
        icon: chpt3Icon,
        title: 'Test video three',
        lessons: [
          {
            id: 1,
            completed: false,
            video: [{
              id: 1,
              completed: false,
              vid: "https://res.cloudinary.com/dragcemzx/video/upload/v1702311899/Ulesson/BIO10_01_01_01_RV_qgisd2.mp4",
              title: 'video title'
            }],
            topic: 'Habitat'
          },
          {
            id: 2,
            completed: false,
            video: [{
              id: 1,
              completed: false,
              vid: "https://res.cloudinary.com/dragcemzx/video/upload/v1702311890/Ulesson/BIO10_03_01_06_NEW_ix0igw.mp4",
              title: 'video title'
            }],
            topic: 'Human Organs'
          }
        ]
      },
      {
        id: 4,
        icon: chpt4Icon,
        title: 'Test video four',
        lessons: [
          {
            id: 1,
            completed: false,
            video: [{
              id: 1,
              completed: false,
              vid: "https://res.cloudinary.com/dragcemzx/video/upload/v1702311890/Ulesson/BIO10_03_01_06_NEW_ix0igw.mp4",
              title: 'video title'
            }],
            topic: 'History Of Biology'
          }]
      },
      {
        id: 5,
        icon: chpt5Icon,
        title: 'Test video five',
        lessons: [{
          id: 1,
          completed: false,
          video: [{
            id: 1,
            completed: false,
            vid: "https://res.cloudinary.com/dragcemzx/video/upload/v1702311890/Ulesson/BIO10_03_01_06_NEW_ix0igw.mp4",
            title: "video title"
          }],
          topic: 'Branches of Biology'
        }]
      }
    ]
  },
  {
    id: 5,
    title: 'Physics',
    icon: phyIcon,
    color: '#7B7FDA',
    chapters: []
  },
  {
    id: 6,
    title: 'Economics',
    icon: econIcon,
    color: '#EE6B6B',
    chapters: []
  },
  {
    id: 7,
    title: 'Accounting',
    icon: accIcon,
    color: '#5CBBF3',
    chapters: []
  },
  {
    id: 8,
    title: 'Literature In English',
    icon: litIcon,
    color: '#B75C8D',
    chapters: []
  },
  {
    id: 9,
    title: 'Government',
    icon: govIcon,
    color: '#EFBC37',
    chapters: []
  },
]