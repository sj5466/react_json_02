import React from 'react'

function Info({text}){
    return(
        <>
            <div className="text">
                <div className="img_box">
                    <div className="img"><a href="/"><p>{text}</p></a></div>
                </div>
            </div>
        </>
    )
}
function TextCont({textInfor}) {
  return (
    <section id="textType" className="text__wrap section nexon">
        <h2>뚜레쥬르 추천 상품</h2>
        <p>선별된 좋은 재료를 사용하여
            더욱 건강한 제품을 제공합니다.</p>
        <div className="text__inner container">
            {textInfor.map((txt)=>(
                <Info
                text={txt.text}
                key={txt.text}
                />
            ))}
        </div>
    </section>
  )
}

export default TextCont