import React from 'react';
import RandomRed from "../components/randomred";
import reddogblock from '../assets/reddogblock.png';
import '../RandomRed.css';

const RandomRedPage = () => {
  return (
    <div className="randomRedContainer">
      <h1 className="randomRedTitle">Random Red Game</h1>

      <div className="randomRedText">
        <p>
          Woof! Hey there, hooman! It’s me, Red the Malamute, your fluffy game master.
          I’ve been working on this pawsome block game, and guess what? Every square
          wants to be <span style={{ color: 'red' }}>red</span> just like moi! I tried blue once,
          but it looked sad, like a cold puddle. <span style={{ color: 'red' }}>Red</span> is bold,
          warm, and screams “I’m fabulous!”. I will 🐶W00F🐶 every time you click so help me
          turn every block <span style={{ color: 'red' }}>crimson!</span> If you get the fastest time,
          you win — I’ll give you a celebratory tail wag and maybe a slobbery kiss.
          If you lose… well, you’ll still get the slobbery kiss. Let’s make the world red together!
        </p>

        <img
          src={reddogblock}
          alt="Image of a malamute with coloured blocks around its head"
          className="redBlockImage"
        />
      </div>

      <RandomRed />
    </div>
  );
};

export default RandomRedPage;

