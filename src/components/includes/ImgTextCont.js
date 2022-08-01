import React from 'react'

function Info({title,text,desc1,desc2,desc3,desc4}){
    return(
        <>
        <h2 className="ir_so">{title}</h2>
            <div className="imgText__inner container">
                <div className="txt">
                    <h3 className="title">{text}</h3>
                    <p className="desc">
                        {desc1}
                    </p>
                </div><br/>
                <div className="img bg1"><a href="/"><span className="ir_so">{desc2}</span></a></div>
                <div className="img bg2"><a href="/"><span className="ir_so">{desc3}</span></a></div>
                <div className="img bg3"><a href="/"><span className="ir_so">{desc4}</span></a></div>
            </div>
        </>
    )
}
function imgTextCont({imgTextInfor}) {
  return (
    <section id="imgTextType" className="imgText__wrap section nexon">
      {imgTextInfor.map((txt)=>(
        <Info 
        title={txt.title}
        text={txt.text}
        desc1={txt.desc1}
        desc2={txt.desc2}
        desc3={txt.desc3}
        desc4={txt.desc4}
        key={txt.title}
        />
      ))}
  </section>
  )
}

export default imgTextCont