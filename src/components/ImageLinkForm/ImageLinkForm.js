import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
  return (
    <div>
      <p className='f3'>
        {'This Magic Brain will detect faces in your pictures. Git it a try.'}
      </p>
      <div className='center'>
        <div className='form center pa4 br3 shadow-5'>
          <input className='f4 pa2 w-70 center' type='text' placeholder='paste image link here' onChange={onInputChange}/>
          <button
            className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple'
            onClick={onButtonSubmit}
          >Detect</button>
        </div>
      </div>
      <p className='f3'>Click <a href='https://hips.hearstapps.com/hmg-prod/images/gettyimages-1257937597.jpg?crop=1xw:1.0xh;center,top&resize=640:*' target='_blank'>here</a> for example image </p>
    </div>
  );
}

export default ImageLinkForm;