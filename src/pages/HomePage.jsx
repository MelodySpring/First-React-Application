// HomePage.js
import React from 'react';
import redcode from '../assets/redcode.png';
import '../HomePage.css'

const HomePage = () => {
  return (
    <div>
      <h1 className='mainTitle'>Welcome to the Home Page</h1>
      <img src={redcode} alt="Red Dog Question" className="redCode" />
      <p>Ohhh WOOF WOOF, gather round, hoomans — it’s Red the Malamute, your fluffy marketing manager with excellent fur and even better opinions. I’ve got breaking news straight from the doghouse. My mum — yes, the clever treat‑dispensing legend herself — has started building websites for people, and she even named her business Red Dog Design after ME. Finally, the recognition I deserve.
        She just finished this super‑exciting Bootcamp with a pack called Step8Up, where she built all sorts of magical hooman projects. Buttons, pages, fancy layouts… honestly, I’m shocked she didn’t chew the keyboard. And her tutor, Jason, is absolutely brilliant. Like, scary brilliant. Even though he likes cats. I mean… nobody’s perfect.
        So if you need a website, my mum’s ready. I’ll supervise every project with professional tail wags and high‑quality howls.</p>
    </div>
  );
};

export default HomePage;
