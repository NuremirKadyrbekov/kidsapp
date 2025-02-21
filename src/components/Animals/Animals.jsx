import React from 'react'
import './Animals.css'
import { animal } from '../../data/Animal'
import { Howl } from 'howler'
const Animals = () => {
  const playSound = (src) => {
    const sound = new Howl({
      src,
      html5: true,
    });
    sound.play();
  }
  return (
    <div className='Animals'>
     <h1>Жаныбарлар</h1>
          <div className='Animal_MainBlock'>{animal.map((el,index)=>{
          return(
            <div onClick={()=>playSound(el.sound)} key={index} className='AnimalBlock'>
               <img src={el.img} alt=""  className='AnimalImg'/>
               <h1 className='AnimalName'>{el.Name}</h1>
            </div>
          )
              })
             }
          </div>
    </div>
  )
}

export default Animals