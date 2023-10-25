import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchData } from './api';
import { setData, removeCard } from './redux/action';
import { BsFillGrid3X3GapFill } from 'react-icons/bs';
import { FaListUl } from 'react-icons/fa';
import {
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from 'react-icons/md';
import CardList from './components/CardList';

import './App.css';

import React from 'react';
import FeedbackForm from './components/FeedbackForm';

const App = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);
  const [currentPage, setCurrentPage] = useState(1);
  const [isloading, setIsLoading] = useState(true);
  const [grid, setGrid] = useState(false);
  const [activeToggle, setActiveToggle] = useState('list');
  const [showFeedbackForm, setShowFeedbackForm] = useState(false);

  useEffect(() => {
    const fetchPost = async () => {
      const posts = await fetchData();
      dispatch(setData(posts));

      setTimeout(() => {
        setIsLoading(false);
      }, 5000);
    };

    fetchPost();
  }, [dispatch]);

  const handleToggleView = () => {
    setGrid((prevGrid) => !prevGrid);
    setActiveToggle((prevView) => (prevView === 'list' ? 'grid' : 'list'));
  };

  const handleRemoveCard = (id) => {
    dispatch(removeCard(id));
  };

  const getMaxPages = () => Math.ceil(data.length / 6);

  const renderPageNumbers = () => {
    const maxPages = getMaxPages();
    const pageNumbers = [];

    const startPage = Math.max(1, currentPage - 1);
    const endPage = Math.min(maxPages, startPage + 2);

    if (startPage > 1) {
      pageNumbers.push(
        <button key="prev" onClick={() => setCurrentPage(startPage - 1)}>
          <MdKeyboardDoubleArrowLeft size={25} />
        </button>
      );
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <button
          key={i}
          onClick={() => setCurrentPage(i)}
          className={currentPage === i ? 'active-page' : 'page'}
        >
          {i}
        </button>
      );
    }

    if (endPage < maxPages) {
      pageNumbers.push(
        <button key="next" onClick={() => setCurrentPage(endPage + 1)}>
          <MdKeyboardDoubleArrowRight size={25} />
        </button>
      );
    }

    return pageNumbers;
  };

  const getCurrentPage = () => {
    const startIdx = (currentPage - 1) * 6;
    const endIdx = currentPage * 6;
    return data.slice(startIdx, endIdx);
  };

  return (
    <div className="app">
      <div className="app__sidebar">
        <div className="app__sidebar-user">
          <h4>Hi Reader,</h4>
          <p>Here's your News!</p>
        </div>
        <div className="app__sidebar-toggle">
          <h2>View Toggle</h2>
          <div className="app__sidebar-toggle_actions">
            <button
              onClick={handleToggleView}
              className={activeToggle === 'grid' ? 'active' : ''}
            >
              <BsFillGrid3X3GapFill size={30} />
            </button>
            <button
              onClick={handleToggleView}
              className={activeToggle === 'list' ? 'active' : ''}
            >
              <FaListUl size={30} />
            </button>
          </div>
        </div>
        <div className="app__sidebar-feedback">
          <h2>Have a Feedback?</h2>
          <button onClick={() => setShowFeedbackForm(true)}>
            We're Listening!
          </button>
          {showFeedbackForm && (
            <FeedbackForm onClose={() => setShowFeedbackForm(false)} />
          )}
          {console.log(showFeedbackForm)}
        </div>
      </div>
      {isloading ? (
        <div class="loader"></div>
      ) : (
        <div className="app__main">
          <CardList
            data={getCurrentPage()}
            onRemove={handleRemoveCard}
            grid={grid}
          />
          <div className="app__actions">{renderPageNumbers()}</div>
        </div>
      )}
    </div>
  );
};

export default App;
