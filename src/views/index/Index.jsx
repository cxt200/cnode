import React from 'react'

class HomePage extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            
        }
    }
    render () {
        return (
            <div className="home-page"> 
                {/* 用户信息列表 */}
                {/* 帖子列表 */}
                <TopicList />
            </div>
        )
    }
}

export default HomePage