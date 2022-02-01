import React from 'react';
import memesData from '../memesData';



const Meme = () => {
    
    const [uRl, setUrl] = React.useState({
        topText: "",
        bottomText: "",
        randomUrl: "https://i.imgflip.com/30b1gx.jpg"
})
    
    function getImage() {
        const arr = memesData.data.memes;
        const r_num = Math.floor(Math.random() * arr.length)
        
        setUrl(prevmeme => ({
            ...prevmeme,
            randomUrl: arr[r_num].url
        }))
    }

    function handleChange(event){
        const {name, value} = event.target
        setUrl(prevmeme => ({
            ...prevmeme,
            [name]: value
        }))

    }
  return (
      <div className='main'>
          <div className='form'>
              <input type='text' placeholder='Top text' className='text-1'
              name = 'topText'
              value = {uRl.topText}
              onChange = {handleChange}
              />
              <input type='text' placeholder='Bottom text' className='text-1'
              name = 'bottomText'
              value = {uRl.bottomText}
              onChange = {handleChange}
              />   
              <button className='button' onClick={getImage}> Get a new meme Image</button>   
          </div>
          <div className= "meme">
            <img src={uRl.randomUrl} className='meme--image'/>
            <h2 className="meme--text top">{uRl.topText}</h2>
            <h2 className="meme--text bottom">{uRl.bottomText}</h2>
        </div>
      </div>
  )
}

export default Meme;
