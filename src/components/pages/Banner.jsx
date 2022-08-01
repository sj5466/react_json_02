import React from 'react'
import Contents from '../layout/Contents'
import BannerCont from '../includes/BannerCont'
import axios from 'axios';

class Banner extends React.Component{
  state={
    bannerInfor:[],
  };

  getBanners = async ()=>{
    const{
      data:{
        data:{bannerInfor},
      },
    } = await axios.get(
      "https://raw.githubusercontent.com/sj5466/json2_banner/main/Banner.json"
    );
    this.setState({bannerInfor});
  };

  componentDidMount(){
    this.getBanners();
  };

  render(){
    const{ bannerInfor } = this.state;
    return(
      <>
        <Contents>
          <BannerCont bannerInfor={bannerInfor}/>
        </Contents>
      </>
    )
  }
}

export default Banner