import React from 'react';
import RandomRed from "../components/randomred";
import reddogblock from '../assets/reddogblock.png';
import '../RandomRed.css';

const RandomRedPage = () => {
  return (
    <div>
      <h1 className='randomRedTitle'>Random Red</h1>
      <div className='randomRedText'>
        <p>
          Woof! Hey there, hooman! It’s me, Red the Malamute, your fluffy game master.
          I’ve been working on this pawsome block game, and guess what? Every square
          wants to be red—just like moi! I tried blue once, but it looked sad, like a
          cold puddle. Red is bold, warm, and screams “I’m fabulous!” So grab your
          paws-uh, hands-and help me turn every block crimson. If you get the fastest
          time you win, I’ll give you a celebratory tail wag and maybe a slobbery kiss.
          If you lose… well, you’ll still get the slobbery kiss. Let’s make the world
          red together!
        </p>


        <img
          src={reddogblock}
          alt="image of a malamute with coloured blocks round its head"
          className="redBlockImage" />
      </div>
      <RandomRed />
    </div>
  );
};

export default RandomRedPage;

