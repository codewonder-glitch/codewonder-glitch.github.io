import React from 'react';
import ReactPlayer from 'react-player'





function Renderuser() {
  return (
    <div className="Video">
{/* https://www.youtube.com/watch?v=7lrb0vk2LuU */}
<div className='player-wrapper'>
        <ReactPlayer
          className='react-player'
          url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
          width='100%'
          height='100%'
          playing="true"
      
        />
      </div>
    
    </div>
  );
}

export default Renderuser;
