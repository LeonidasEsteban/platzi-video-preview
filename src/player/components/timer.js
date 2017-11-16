import React from 'react';
import {
  formattedTime
} from '../../lib/utils';
import './timer.css';

function Timer(props) {
  const currentTime = formattedTime(props.currentTime)
  const duration = formattedTime(props.duration)
  return (
    <div className="Timer">
      <p>
        <span>{currentTime} / {duration}</span>
      </p>
    </div>
  )
}

export default Timer;
