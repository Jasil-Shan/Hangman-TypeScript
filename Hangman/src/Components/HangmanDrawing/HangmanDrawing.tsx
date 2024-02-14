import Head from "../HangmanDrawing/Body/Head/Head.jsx";

const HangmanDrawing = () => {
  return (
    <div style={{ position: "relative" }}>
      <Head />
      <div
        style={{
          height: "50px",
          width: "10px",
          background: "black",
          position: "absolute",
          top: 0,
          right: 0,
        }}
      ></div>
      <div
        style={{
          height: "10px",
          width: "200px",
          background: "black",
          marginLeft: "120px",
          marginTop: "20px",
        }}
      ></div>
      <div
        style={{
          height: "400px",
          width: "10px",
          backgroundColor: "black",
          marginLeft: "120px",
        }}
      ></div>
      <div
        style={{ height: "10px", width: "250px", background: "black" }}
      ></div>
    </div>
  );
};

export default HangmanDrawing;
