import './App.css';
import { useRef } from 'react';


function App() {
  const github ='https://github.com/BrunoFay'
  const imageCard ='https://cdn.pixabay.com/photo/2017/02/07/11/45/eagle-2045655__340.jpg'
  const effect = useRef()
  function flipEffect({target}) {
    const catchEffect = effect.current
    console.log(catchEffect.classList.length);
   
    
    catchEffect.className=`${target.value}`
   
      
  }
  return (
   <>
    <div className='buttons'>
      <button value='spin' onClick={(e)=>flipEffect(e)}>Rotação</button>
      <button value='rotation' onClick={(e)=>flipEffect(e)}>Rotação X</button>
      <button value='rotation-y' onClick={(e)=>flipEffect(e)}>Rotação Y</button>
      <button value='flip-3D' onClick={(e)=>flipEffect(e)}>Flip 3D</button>
      <button value='zoom-ot' onClick={(e)=>flipEffect(e)}>Zoom </button>
      <button value='top-moviment' onClick={(e)=>flipEffect(e)}>Movimento top</button>
      <button value='lateral-movement' onClick={(e)=>flipEffect(e)}>Movimento 3D</button>
      



    </div>

    <div id ='card-container' ref={effect}>
    <img src={imageCard}className='image-card' alt='card image'></img>
    <span className='title-card'># Titulo</span>
    <div className='location-infos'>
      <span>lorem</span>
      <span>test</span>
    </div>
    <div className='infos-author'>
      <a className='gitHub-link' href={github} alt='gitHub-link'> github </a>
      <span className='signature'>by: {<span className='name-author'>bruno</span>}</span>
    </div>
    </div>
    </>
  );
}

export default App;
