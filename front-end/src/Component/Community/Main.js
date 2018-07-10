import { Col, Icon, Row, Tabs, Input, Button, Modal } from "antd";
import React from 'react'
import { observer } from 'mobx-react';
import { observable } from 'mobx';
import NewTopicModal from "./newTopicModal";

@observer
class Main extends React.Component {
  @observable
  newTopicVisible = false

  render () {
    return (
      <Row>
        <Col offset={1} span={17}>
          <Tabs className={'community-container'} defaultActiveKey="1">
            <Tabs.TabPane tab="全部" key="1">
              <div className="topic-container">
                <div className="topic-title">
                  [公告] 量研社区启动啦
                  <div className="last-reply">
                    孙光浩 14分钟前
                  </div>
                </div>
                <div className="topic-des">
                  量研社区从今天开始启动啦!
                </div>
                <div className="topic-info">
                  <div className="topic-author">
                    <div className="author-head">
                      <img src='/default_head.jpg' alt="" />
                    </div>
                    <div className="author-name">
                      万千钧
                    </div>
                  </div>
                  <div className="topic-meta">
                    <div className="topic-create-date">
                      发表于: 2018-07-09 00:48:20
                    </div>
                    <div className="topic-info">
                      <div className="info-each">
                        <Icon type="eye-o" /> 100
                      </div>
                      <div className="info-each">
                        <Icon type="heart-o" /> 25
                      </div>
                      <div className="info-each">
                        <Icon type="message" /> 120
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="topic-container">
                <div className="topic-title">
                  [公告] 量研社区启动啦
                  <div className="last-reply">
                    孙光浩 14分钟前
                  </div>
                </div>
                <div className="topic-des">
                  量研社区从今天开始启动啦!
                </div>
                <div className="topic-info">
                  <div className="topic-author">
                    <div className="author-head">
                      <img src='/default_head.jpg' alt="" />
                    </div>
                    <div className="author-name">
                      万千钧
                    </div>
                  </div>
                  <div className="topic-meta">
                    <div className="topic-create-date">
                      发表于: 2018-07-09 00:48:20
                    </div>
                    <div className="topic-info">
                      <div className="info-each">
                        <Icon type="eye-o" /> 100
                      </div>
                      <div className="info-each">
                        <Icon type="heart-o" /> 25
                      </div>
                      <div className="info-each">
                        <Icon type="message" /> 120
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Tabs.TabPane>
            <Tabs.TabPane tab="问答" key="2">Content of Tab Pane 1</Tabs.TabPane>
            <Tabs.TabPane tab="分享" key="3">Content of Tab Pane 2</Tabs.TabPane>
            <Tabs.TabPane tab="公告&活动" key="4">Content of Tab Pane 3</Tabs.TabPane>
          </Tabs>
        </Col>
        <Col offset={1} span={4} className={'community-console'}>
          <Input.Search
            placeholder="搜索"
            onSearch={value => console.log(value)}
          />
          <NewTopicModal visible={this.newTopicVisible} hide={() => this.newTopicVisible = false} />
          <Button onClick={() => this.newTopicVisible = true}
            type={'primary'} icon={'form'} style={{ width: '100%', marginTop: 30 }}>发帖讨论</Button>
        </Col>
      </Row>
    )
  }
}

export default Main
