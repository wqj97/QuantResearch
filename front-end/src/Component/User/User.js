import { Col, message, Row, Tag } from 'antd'
import { observable } from 'mobx'
import { observer } from 'mobx-react'
import React from 'react'
import { userStore } from '../../model/User'
import { getSelfSelectedList, syncUserProductConfig } from '../../utils/API'
import './User.scss'

@observer
class User extends React.Component {
  @observable
  tagList = []

  componentDidMount () {
    getSelfSelectedList().then(list => {
      this.tagList = list
    })
  }

  handleClose = tag => {
    tag.config.selfSelected = false
    syncUserProductConfig(tag.code, tag.name, tag.config).then(() => message.success('删除成功'))
  }

  render () {
    const { user } = userStore;
    return (
      <div className="User">
        <Row type={'flex'}>
          <Col span={6}>
            <div className="user-box">
              <div className="user-head">
                <div className="user-meta">
                  <div>@{user.name}</div>
                  <div>{user.roles.map(item => (item.name)).join(', ')}</div>
                  <div>{user.email}</div>
                </div>
                <div className="user-avata">
                  <img src={user.head} alt={'头像'} />
                </div>
                <div className="head-background">
                </div>
              </div>
              <div className="user-info">
                <Row type={'flex'} justify={'space-around'} align={'bottom'} style={{ height: '100%' }}>
                  <Col span={8}>
                    <div className={'info-title'}>自选</div>
                    <div className={'info-content'}>{this.tagList.length}</div>
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
            <Row>
              <Col>
                <div className="selected-list">
                  <div className="box-title">
                    自选
                  </div>
                  <div className="tag-list">
                    {this.tagList.map(tag => {
                      return (<Tag
                        closable
                        key={tag.id}
                        color={'blue'}
                        onClose={() => this.handleClose(tag)}>{tag.name} ( {tag.code.join('/')} )</Tag>)
                    })}
                  </div>
                </div>
              </Col>
              <Col>
                <div className="selected-list">
                  <div className="box-title">
                    已购产品
                  </div>
                  <div className="tag-list">
                    {user.group.map(tag => {
                      return (<Tag
                        key={tag.id}
                        color={'blue'}
                        onClose={() => {
                        }}>{tag.name}</Tag>)
                    })}
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    )
  }
}

export default User
