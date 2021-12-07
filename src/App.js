import './App.css';
import { useRef } from 'react';

function App() {
  const photo ='https://scontent.fpoa8-1.fna.fbcdn.net/v/t1.6435-9/57308546_2185311971563376_8153247580340355072_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=174925&_nc_ohc=4KQeAgvNKX0AX894Rdk&tn=MqofNUljjQ6j9VxQ&_nc_ht=scontent.fpoa8-1.fna&oh=816a0d265351da872087aa1cba6af524&oe=61D43D88'
  const imageCard ='https://cdn.pixabay.com/photo/2020/07/18/11/10/clouds-5416914_960_720.jpg'
  const effect = useRef()
  function flipEffect({target}) {
    const catchEffect = effect.current
    console.log(catchEffect.classList.length);
   
    
    catchEffect.className=`${target.value}`
   
      
  }
  return (
   <>
    <div className='buttons'>
      <button value='spin' onClick={(e)=>flipEffect(e)}>spin</button>
      <button value='rotation' onClick={(e)=>flipEffect(e)}>rotação</button>
      <button value='flip-3D' onClick={(e)=>flipEffect(e)}>flip 3D</button>
      <button value='zoom-ot' onClick={(e)=>flipEffect(e)}>zoom reverso</button>
      <button value='top-moviment' onClick={(e)=>flipEffect(e)}>movimento top</button>
      <button value='drop-moviment' onClick={(e)=>flipEffect(e)}>deitar</button>

    </div>

    <div id ='card-container' ref={effect}>
    <img src={imageCard}className='image-card' alt='card image'></img>
    <span className='title-card'>#titulo</span>
    <div className='location-infos'>
      <span>lorem</span>
      <span>test</span>
    </div>
    <div className='infos-author'>
      <img className='perfil-image' src={photo} alt='author-photo'></img>
      <span className='signature'>by: {<span className='name-author'>bruno</span>}</span>
    </div>
    </div>
    </>
  );
}

export default App;
