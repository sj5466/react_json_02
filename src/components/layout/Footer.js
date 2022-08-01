import React from 'react'
const footerInfor=[
    {
        title:"회사소개",
        info1:"브랜드 소개",
        info2:"글로벌 뚜레쥬르",
        info3:"매장안내",
        info4:"기사채용안내",
        info5:"창업안내"
    },{
        title:"공지사항",
        info1:"할인혜택",
        info2:"고객센터",
        info3:"1:1 문의",
        info4:"알림/소식",
        info5:"이벤트당첨"
    },{
        title:"처리방침",
        info1:"이용약관",
        info2:"개인정보처리방침",
        info3:"위치기반서비스 이용약관",
        info4:"이메일 무단 수집 거부",
    },{
        title:"법적조치",
        info1:"윤리신고센터",
        info2:"법적고지",
    }
]
function Info({title,info1,info2,info3,info4,info5}){
    return(
        <>
        <div>
            <h3>{title}</h3>
            <ul>
                <li><a href="/">{info1}</a></li>
                <li><a href="/">{info2}</a></li>
                <li><a href="/">{info3}</a></li>
                <li><a href="/">{info4}</a></li>
                <li><a href="/">{info5}</a></li>
            </ul>
        </div>
        </>
    )
}
function Footer() {
  return (
    <footer id="footerType" className="footer__wrap section nexon gray">
        <h2 className="ir_so">푸터 영역</h2>
        <div className="footer__inner container">
            <div className="footer__menu">
                <div className="ft_logo">
                    <a href="/"><div className="logo"><span className="ir_pm">뚜레쥬르</span></div></a>
                </div>
                <div className="icon">
                    <ul>
                        <li className="i1"><a href="/"><span className="ir_pm">페이스북</span></a></li>
                        <li className="i2"><a href="/"><span className="ir_pm">트위터</span></a></li>
                        <li className="i3"><a href="/"><span className="ir_pm">인스타</span></a></li>
                    </ul>
                </div>
               
               
                {footerInfor.map((txt)=>(
                    <Info
                    title={txt.title}
                    info1={txt.info1}
                    info2={txt.info2}
                    info3={txt.info3}
                    menu3={txt.menu3}
                    info4={txt.info4}
                    info5={txt.info5}
                    key={txt.title}
                    />
                ))}
            </div>
           
            <address className="footer__right">
                COPYRIGHT 2022©CJ Foodville ALL RIGHT RESERVED.
            </address>
        </div>
    </footer>
  )
}

export default Footer