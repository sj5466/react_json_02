import React from 'react'
import Contents from '../layout/Contents'
import ImgTextCont from '../includes/ImgTextCont'
import axios from 'axios';

class ImgText extends React.Component{
  state ={
    imgTextInfor:[],
  };

  getImgTexts = async () =>{
    const{
      data:{
        data:{imgTextInfor},
      },
    }= await axios.get(
      "https://raw.githubusercontent.com/sj5466/json2_imgText/main/ImgText.json"
    );
    this.setState({imgTextInfor});
  };

  componentDidMount(){
    this.getImgTexts();
  };

  render(){
    const{ imgTextInfor } =this.state;
    return(
      <>
        <Contents>
          <ImgTextCont imgTextInfor={imgTextInfor}/>
        </Contents>
      </>
    )
  }
}

export default ImgText