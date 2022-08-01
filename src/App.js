import React from "react";
import Slider from "./components/pages/Slider";
import Image from "./components/pages/Image";
import ImgText from "./components/pages/ImgText";
import Card from "./components/pages/Card";
import Banner from "./components/pages/Banner";
import Text from "./components/pages/Text";

function App() {
  return (
    <>
      <Slider/>
      <Image />
      <ImgText />
      <Text />
      <Banner />
      <Card />
    </>
  );
}

export default App;