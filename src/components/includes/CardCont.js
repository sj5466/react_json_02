import React from 'react'

function Info({image,alt1,title,text,desc,img,alt2}){
    return(
        <>
            <article className="card">
                <figure className="card__header">
                    <img src={image} alt={alt1}/>
                </figure>
                <div className="card__body">
                    <h3 className="title">{title}</h3>
                    <p className="desc">{desc}</p>
                    <a className="btn" href="/">
                        {text}
                        <img src={img} alt={alt2}/>
                    </a>
                </div>
            </article>
        </>
    )
}
function CardCont({cardInfor}) {
  return (
    <section id="cardType" className="card__wrap section nexon">
    <h2>새로워진 뚜레쥬르</h2>
    <p>
        16년 10월 뚜레쥬르가 신선함이 가득한 베이커리로 태어났습니다. <br/>
        컨셉과 패키지 디자인은 물론 매장 인테리어까지 모두 새로워졌습니다.<br/>
        <span>지금부터 신선함이 가득한 베이커리 <em>뚜레쥬르</em>를 만나보세요.</span>
    </p>
    <div className="card__inner container">
    {cardInfor.map((txt)=>(
            <Info
                image={txt.image}
                alt1={txt.alt1}
                title={txt.title}
                desc={txt.desc}
                text={txt.text}
                img={txt.img}
                alt2={txt.alt2}
                key={txt.title}
            />
        ))}
        
    </div>
</section>
  )
}

export default CardCont