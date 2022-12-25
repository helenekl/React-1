import React, { useState, useEffect } from 'react';
import './style.css';

function Card (props) {
  useEffect(
    () => {
      console.log('Component was loaded', props.id);
      const value = localStorage.getItem(props.id) || props.likes;
      setLikes(parseInt(value, 10));
    },
    []
  );

  const saveToLocalStorage = (likes) => {
    localStorage.setItem(props.id, likes);
  };

  const [likes, setLikes] = useState(props.likes); 
  const like = () => {
    const value = likes + 1;
    setLikes(value);
    saveToLocalStorage(value);
  };
  const dislike = () => {
    const value = likes - 1;
    setLikes(value);
    saveToLocalStorage(value);
  };
  const [opacity, setOpacity] = useState(1);
  const opacityFunc = () => {
    if (opacity === 1) {
      setOpacity(0.5);
    } else {
      setOpacity(1);
    }
  };
  useEffect(() => {
    if (opacity < 0.5) {
      console.log('Opacity was changed', opacity);
    }
  }, [opacity]);
  return (
    <div className="card" style={{ backgroundColor: props.backgroundColor }}>
      <img src={props.imageSrc}
        style={{ opacity: opacity }} />
      <div className='likes'>
        <button onClick={dislike}>Dislike</button>
        <span>{likes}</span>
        <button onClick={like}>Like</button>
      </div>
      <div onClick={opacityFunc}>Opacity</div>
      <input type="range" min="0" max="100"
        onChange={(event) => {
          setOpacity(event.target.value / 100);
        }} />
    </div>
  );
}

export default Card;