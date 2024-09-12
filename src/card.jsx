import React, { useState } from 'react';

const Card = ({ id, question, answer }) => {
  const [showData, setShowData] = useState(false);

  const Showanser=()=>{
      setShowData(pre=>!pre)
  }

  return (
    <div>
      <div>
        <h1 className='font-bold text-lg text-red-600'>Q{id}.{question}</h1>
      </div>
      <div>
        {showData && <h1 className='font-semibold text-center text-green-800'>Ans.{answer}</h1>}
        <button
          className='border-green-500 w-auto h-auto bg-green-500 font-extrabold rounded-md cursor-pointer'
          onClick={()=>Showanser(true)  }
        >
          Show answer
        </button>
      </div>
    </div>
  );
};

export default Card;
