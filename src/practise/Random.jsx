import React, { useState } from 'react';
import { Random } from 'random-js';

const Random1 = () => {
  const [randomNumber, setRandomNumber] = useState([]);

  const handleClick = () => {
    const random = new Random(); // Create a new Random instance
    // const newRandomNumber = random.integer(1, 100); // 
    // const newRandomNumber = random.real(1, 100); // 
    // const newRandomNumber = random.uuid4();// 
    // const newRandomNumber = random.string(10,);
    // const newRandomNumber = random.string(10,'123xyz');
    // const newRandomNumber = random.bool()

    // const newRandomNumber=random.pick([1,2,3,4,5,6,7,5,4,23,32])
    const newRandomNumber=random.shuffle([1,2,3,4,5,6,7,20,30,40]);

    // const newRandomNumber=random.sample([1,2,3,4,5,6,7,20,30,40],3);
     setRandomNumber(newRandomNumber.join(','))

 
  };

  return (
    <div>
      <button onClick={handleClick}>Generate Random Number</button>
      <p>{randomNumber}</p>
    </div>
  );
};

export default Random1;