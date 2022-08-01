import React from 'react'

function Info({title,text1,text2}){
    return(
        <>
            <h2 className="ir_so">{title}</h2>
            <div className="slider__inner">
                <div className="slider">
                    <div className="slider__img">
                        <div className="desc">
                            <div className="btn">
                                <a href="/" className="white">{text1}</a>
                                <a href="/" className="black">{text2}</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
function SliderCont({sliderInfor}) {
  return (
    <section id="sliderType" className="slider__wrap nexon">
        {sliderInfor.map((txt)=>(
            <Info
                title={txt.title}
                text1={txt.text1}
                text2={txt.text2}
                key={txt.id}
            />
        ))}
    </section>
  )
}

export default SliderCont