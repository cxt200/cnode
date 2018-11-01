import React from 'react'
import './header.scss'

class Header extends React.Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }
    render(){
        return (
            <div className="header">
                <div className="header-con">
                    <a className="brand" href="/">
                        <img src="//static2.cnodejs.org/public/images/cnodejs_light.svg" /> 
                    </a>
                    <div className="search-box">
                        <input />
                        <i>提交</i>
                    </div>
                    <ul className="nav">
                        <li>首页</li>
                        <li>未读消息</li>
                        <li>新手入门</li>
                        <li>API</li>
                        <li>关于</li>
                        <li>设置</li>
                        <li>退出</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Header