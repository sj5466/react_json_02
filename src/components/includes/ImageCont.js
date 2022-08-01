import React from 'react'

function Info({title,text1,text2,desc,image,alt,text3,text4,text5}){
    return(
        <>
        <h2>{title}<br/>
                {text1} <span>{text2}</span></h2>
            <p>{desc}</p>
            <article className="image">
                <div className="image__header">
                    <figure className="image__figure">
                        <img src={image} alt={alt}/>
                    </figure>
                </div>
                <div className="image__body">
                    <h3 className="image__title">{text3}</h3>
                    <p className="image__desc">{text4}</p>
                    <a href="/" className="image__btn">{text5}</a>
                </div>
            </article>
        </>
    )
}
function ImageCont({imageInfor}) {
  return (
    <section id="imageType" className="image__wrap section nexon"> 
        <div className="image__inner container">
        {imageInfor.map((txt)=>(
            <Info
                title={txt.title}
                text1={txt.text1}
                text2={txt.text2}
                text3={txt.text3}
                text4={txt.text4}
                text5={txt.text5}
                image={txt.image}
                alt={txt.alt}
                desc={txt.desc}
                key={txt.title}
            />
        ))}
        </div>
    </section>
  )
}

export default ImageCont