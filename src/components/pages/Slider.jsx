import React from 'react'
import Header from '../layout/Header'
import Contents from '../layout/Contents'
import SliderCont from '../includes/SliderCont'
import axios from 'axios';

class Slider extends React.Component{
  state ={
    sliderInfor:[],
  };

  getSliders = async ()=>{
    const{
      data:{
        data:{sliderInfor},
      },
    }= await axios.get(
      "https://raw.githubusercontent.com/sj5466/json2_slider/main/Slider.json"
    );
    this.setState({sliderInfor});
  };

  componentDidMount(){
    this.getSliders();
  };

  render(){
    const{ sliderInfor } =this.state;
    return(
      <>
        <Header/>
        <Contents>
          <SliderCont sliderInfor={sliderInfor}/>
        </Contents>
      </>
    )
  }
}

export default Slider