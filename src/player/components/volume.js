import React from 'react';
import VolumeIcon from '../../icons/components/volume';
import './volume.css';

const Volume = (props) => (
  <button
    className="Volume"
  >
    <VolumeIcon
      size={25}
    />
    <div className="Volume-range">
      <input
        type="range"
        min={0}
        max={1}
        value={props.value}
        step={.05}
        onChange={props.handleVolumeChange}
      />
    </div>
  </button>
)

export default Volume
