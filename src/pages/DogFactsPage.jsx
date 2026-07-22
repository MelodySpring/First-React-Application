import React from 'react';
import DogFacts from '../components/DogFacts';
import reddogquestion from '../assets/reddogquestion.png';
import '../DogFacts.css';


const DogFactsPage = () => {
  return (
    <div>
      <h1 className="dogFactsTitle">Welcome to the Dog Facts Page</h1>
      <img src={reddogquestion} alt="Red Dog Question" className="dogFactsImage" />
      <p>Woof woof! It’s me, Red the Malamute, your fluffy guide to all things dog‑tastic. I’ve built this super‑scientific, totally‑professional Random Dog Fact Generator because you hoomans clearly need help understanding the majestic world of doggies. Just press the magic button and I’ll fetch you a fresh fact faster than I steal socks. You’ll learn important stuff like why treats should be unlimited and why belly rubs are a universal right. So go on — click it! Become wise. Become dog‑wise. And if you get confused, don’t worry… I explain everything with enthusiastic tail wags and dramatic howls. Woof!</p>

      <DogFacts />
    </div>
  );
};

export default DogFactsPage;
