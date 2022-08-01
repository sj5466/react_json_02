import React from 'react'

function Info({title,text1,text2,text3,text4,text5,desc1,desc2}){
    return(
        <>
        <h2 className="ir_so">{title}</h2>
        <div className="banner__inner">
            <div className="banner_left">
                <h3>{text1} <span>{text2}</span></h3>
                <p>{text3} <br/>
                    {desc1}<br/>
                    {desc2}</p>
                <a href="/" className="btn">{text4}</a>
            </div> 
            <div className="banner_img"><span className="ir_so">{text5}</span></div>
        </div>
        </>
    )
}
function BannerCont({bannerInfor}) {
  return (
    <section id="bannerType" className="banner__wrap section gmarket">
        {bannerInfor.map((txt)=>(
            <Info
            title={txt.title}
            text1={txt.text1}
            text2={txt.text2}
            text3={txt.text3}
            text4={txt.text4}
            text5={txt.text5}
            desc1={txt.desc1}
            desc2={txt.desc2}
            key={txt.title}
            />
        ))}
    </section>
  )
}

export default BannerCont