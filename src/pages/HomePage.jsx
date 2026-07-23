import React from 'react';
import redcode from '../assets/redcode.png';
import collage from '../assets/collage.png';
import '../HomePage.css'

const HomePage = () => {
  return (
    <div>
      <h1 className='mainTitle'>Red Dog Design</h1>
      <div className='homePageText'>
        <p>WOOF WOOF, gather round, hoomans - it’s Red the Malamute, your fluffy marketing manager with excellent fur and even better opinions. I’ve got breaking news straight from the doghouse. My mum - yes, the clever treat dispensing legend herself - has started building websites for people, and she even named her business Red Dog Design after ME. Finally, the recognition I deserve. </p>
        <img src={redcode} alt="Image of a malamute with snippets of code round its head" className="redCode" />
      </div>
      <div className='homePageText'>
        <img src={collage} alt="A collage of web pages" className="collage" />
        <p>She has almost finished this exciting Bootcamp with a pack called Step8Up, where she built all sorts of magical hooman projects. Javascript, Bootstrap, fancy layouts… honestly, I’m shocked she didn’t chew the keyboard just don't mention Python. And her tutor, Jason, is absolutely brilliant. Like, scary brilliant. Even though he likes cats. I mean… nobody’s perfect.</p>
      </div>
      <div>
        <p>So if you need a website, my mum’s ready. I’ll supervise every project with professional tail wags and high‑quality howls.</p>
      </div>
    </div >
  );
};

export default HomePage;
