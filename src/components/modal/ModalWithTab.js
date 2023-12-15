
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from 'react-modal';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './ModalWithTab.css'
import Collapsible from './Collapsible'
import vidIcon from '../../images/Group 40.png'
import { RiArrowDropDownLine } from "react-icons/ri";
import { RiArrowDropUpLine } from "react-icons/ri";
import { IoIosArrowRoundBack } from "react-icons/io";

Modal.setAppElement('#root');

const ModalWithTabs = ({ isOpen, closeModal, lesson }) => {
  const [tabIndex, setTabIndex] = useState(0);
  const [isCollapsible, setIsCollapsible] = useState(false);
  const navigate = useNavigate();

  const toggleCollapsible = () => {
    setIsCollapsible(!isCollapsible);
  };

  const handleTabSelect = index => {
    setTabIndex(index);
  };


  const tabs = [
    {
      index: 0,
      title: 'Lessons'
    },
    {
      index: 1,
      title: 'Exercises'
    },
    {
      index: 2,
      title: 'Tests'
    }
  ]

  const modalStyle = {
    overlay: {
      backgroundColor: 'rgba(255, 255, 255, .1)'
    },
    content: {
      width: '50%',
      minHeight: '60%',
      margin: 'auto',
      padding: '20px',
      borderRadius: '8px',
      maginBottom: '100px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
      borderColor: '#ededee'
    },
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Modal with Tabs"
      style={modalStyle}
    >
      <IoIosArrowRoundBack style={{ width: 33, height: 33 }} className='goBack' onClick={closeModal} />
      <div className='title_container'>
        <p>Chapter {lesson.id}</p>
        <h2>{lesson.title}</h2>
        <h5>{`${lesson.lessons.length} lessons`}</h5>
      </div>
      <Tabs selectedIndex={tabIndex} onSelect={handleTabSelect}>
        <TabList className='tablist'>
          {
            tabs.map((t) => (
              <Tab className={`${t.index === tabIndex ? 'activeTab' : 'tab'}`}>{t.title}</Tab>
            ))
          }
        </TabList>

        <div className='tabPannel_container'>

          <TabPanel >
            {
              lesson.lessons.map((item) => (
                <>
                  <div className='tabPanel' onClick={toggleCollapsible}>

                    <Collapsible title={item.topic} >

                      {
                        item.video.map((vid) => (
                          <div className='lesson_list' onClick={() => navigate('/player', { state: { videoSource: vid, lesson: item } })}>
                            <img src={vidIcon} alt='' />
                            <p>{vid.title}</p>
                          </div>

                        ))
                      }

                    </Collapsible>
                    {!isCollapsible ? <RiArrowDropDownLine style={{ width: 33, height: 33 }} /> : <RiArrowDropUpLine style={{ width: 33, height: 33 }} />}
                  </div>
                  <div className='tabPanel_divider'></div>
                </>
              ))

            }
          </TabPanel>
          <TabPanel>
            <h2>Content for exercises</h2>
            <p>oops! No exercises yet</p>
          </TabPanel>
          <TabPanel>
            <h2>Content for Test</h2>
            <p>oops! No test yet</p>
          </TabPanel>
        </div>
      </Tabs>
    </Modal>
  );
};

export default ModalWithTabs;

