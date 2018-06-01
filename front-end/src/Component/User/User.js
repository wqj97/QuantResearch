import { Col, message, Row, Tag } from 'antd'
import React from 'react'
import { getSelfSelectedList, syncUserProductConfig } from '../../utils/API'
import './User.scss'

class User extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      tagList: []
    }
  }

  componentDidMount () {
    getSelfSelectedList().then(list => {
      this.setState({
        tagList: list
      })
    })
  }

  handleClose = tag => {
    tag.config.selfSelected = false
    syncUserProductConfig(tag.code, tag.name, tag.config).then(() =>message.success('删除成功'))
  }

  render () {
    return (
      <div className="User">
        <Row type={'flex'}>
          <Col span={6}>
            <div className="user-box">
              <div className="user-head">
                <div className="user-meta">
                  <div>@{this.props.user.name}</div>
                  <div>{this.props.user.email}</div>
                </div>
                <div className="user-avata">
                  <img src={this.props.user.head} alt={'头像'}/>
                </div>
                <div className="head-background">
                  {/*<img src={this.props.user.head} />*/}
                </div>
              </div>
              <div className="user-info">
                <Row type={'flex'} justify={'space-around'} align={'bottom'} style={{ height: '100%' }}>
                  <Col span={8}>
                    <div className={'info-title'}>自选</div>
                    <div className={'info-content'}>2</div>
                  </Col>
                  <Col span={8}>
                    <div className={'info-title'}>关注</div>
                    <div className={'info-content'}>10</div>
                  </Col>
                  <Col span={8}>
                    <div className={'info-title'}>收藏</div>
                    <div className={'info-content'}>10</div>
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
          <Col span={17} offset={1}>
            <div className="selected-list">
              <div className="box-title">
                自选
              </div>
              <div className="tag-list">
                {this.state.tagList.map(tag => {
                  return (<Tag closable
                    key={tag.id}
                    color={'blue'}
                    onClose={() => this.handleClose(tag)}>{tag.name} ( {tag.code.join('/')} )</Tag>)
                })}
              </div>
            </div>
          </Col>
        </Row>
      </div>
    )
  }
}

export default User
