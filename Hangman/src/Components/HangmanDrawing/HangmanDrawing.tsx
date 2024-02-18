import LeftArm from "../Body/Arms/Left/LeftArm";
import RightArm from "../Body/Arms/Right/RightArm";
import Chest from "../Body/Chest/Chest";
import Head from "../Body/Head/Head";
import LeftLeg from "../Body/Legs/Left/LeftLeg/LeftLeg";
import RightLeg from "../Body/Legs/Right/RightLeg";


const HangmanDrawing = () => {
  return (
    <div style={{ position: "relative" }}>
      <Head />
      <Chest />
      <RightArm />
      <LeftArm />
      <RightLeg />
      <LeftLeg />
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
