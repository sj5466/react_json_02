import React from 'react'
import Contents from '../layout/Contents'
import CardCont from '../includes/CardCont'
import Footer from '../layout/Footer'
import axios from 'axios';

class Card extends React.Component{
  state={
    cardInfor:[],
  };

  getCards = async ()=>{
    const{
      data:{
        data:{cardInfor},
      },
    }=await axios.get(
      "https://raw.githubusercontent.com/sj5466/json2_card/main/Card.json"
    );
    this.setState({cardInfor});
  };

  componentDidMount(){
    this.getCards();
  };

  render(){
    const{ cardInfor }=this.state;
    return(
      <>
        <Contents>
          <CardCont cardInfor={cardInfor}/>
        </Contents>
        <Footer />
      </>
    )
  }
}

export default Card