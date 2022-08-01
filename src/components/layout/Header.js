import React from 'react'
const headerInfor=[
    {
        title:"뚜레쥬르",
        text:"메인 메뉴",
        menu1:"브랜드 스토리",
        menu2:"새로워진 뚜레쥬르",
        menu3:"제품안내",
        menu4:"이벤트&멤버쉽",
        menu5:"쇼핑몰&케이크  배달신청",
        login:"로그인"
    }
]
function Info({title,text,menu1,menu2,menu3,menu4,menu5,login}){
    return(
    <>
        <h1 className="header__logo">
            <a href="/"><div className="logo"><span  className="ir_so">{title}</span></div></a>
        </h1>
        <nav className="header__menu">
            <h2 className="ir_so">{text}</h2>
            <ul>
                <li><a href="/">{menu1}</a></li>
                <li><a href="/">{menu2}</a></li>
                <li><a href="/">{menu3}</a></li>
                <li><a href="/">{menu4} </a></li>
                <li><a href="/">{menu5}</a></li>
            </ul>
        </nav>
        <div className="header__member">
            <a href="/">{login}</a>
        </div>
    </>
    )
}
function Header() {
  return (
    <header id="headerType" className="header__wrap nexon">
        <div className="header__inner">
           {headerInfor.map((txt)=>(
            <Info
                title={txt.title}
                text={txt.text}
                menu1={txt.menu1}
                menu2={txt.menu2}
                menu3={txt.menu3}
                menu4={txt.menu4}
                menu5={txt.menu5}
                login={txt.login}
                key={txt.title}
            />
           ))}
        </div>
    </header>
  )
}

export default Header