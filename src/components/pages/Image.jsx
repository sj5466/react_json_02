import React from 'react'
import Contents from '../layout/Contents'
import ImageCont from '../includes/ImageCont'
import axios from 'axios';

class Image extends React.Component{
  state ={
    imageInfor:[],
  };

  getImages = async ()=>{
    const{
      data:{
        data:{imageInfor}
      },
    }= await axios.get(
      "https://raw.githubusercontent.com/sj5466/json2_image/main/Image.json"
    );
    this.setState({imageInfor});
  };

  componentDidMount(){
    this.getImages();
  };

  render(){
    const{ imageInfor } =this.state;
    return(
      <>
        <Contents>
          <ImageCont imageInfor={imageInfor}/>
        </Contents>
      </>
    )
  }
}



// function Image() {
//   return (
//     <>
//     <Contents>
//       <ImageCont/>
//     </Contents>
//     </>
//   )
// }

export default Image