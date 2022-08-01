import React from 'react'
import Contents from '../layout/Contents'
import TextCont from '../includes/TextCont'
import axios from 'axios';

class Text extends React.Component{
  state={
    textInfor:[],
  };

  getTexts =async ()=>{
    const{
      data:{
        data:{textInfor},
      },
    }= await axios.get(
      "https://raw.githubusercontent.com/sj5466/json2_text/main/Text.json"
    );
    this.setState({textInfor});
  };

  componentDidMount(){
    this.getTexts();
  };
  render(){
    const{ textInfor } =this.state;
    return(
      <>
        <Contents>
          <TextCont textInfor={textInfor}/>
        </Contents>
      </>
    )
  }
}  

export default Text