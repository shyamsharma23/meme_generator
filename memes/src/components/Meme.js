import React from 'react';
import memesData from '../memesData';



const Meme = () => {
    
    const [uRl, setUrl] = React.useState(" ")
    
    function getImage() {
        const arr = memesData.data.memes;
        const r_num = Math.floor(Math.random() * arr.length)
        
        setUrl(arr[r_num].url)
    }
  return (
      <div className='main'>
          <div className='form'>
              <input type='text' placeholder='Top text' className='text-1' />
              <input type='text' placeholder='Bottom text' className='text-1' />   
              <button className='button' onClick={getImage}> Get a new meme Image</button>   
          </div>
            <img src={uRl} className='image'/>

      </div>
  )
}

export default Meme;
