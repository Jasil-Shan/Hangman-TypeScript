import React from "react";



const Keyboard = () => {
  const alphabets = Array.from({ length: 26 }, (_, i) =>
    String.fromCharCode(97 + i)
  );

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns:"repeat(auto-fit, minmax(75px, 1fr))",
        gap: ".5rem"
      }}
    >
     {
        alphabets.map(letter =>{
            return <button className="btn" key={letter}>{letter}</button>
        })
     }
    </div>
  );
};

export default Keyboard;
