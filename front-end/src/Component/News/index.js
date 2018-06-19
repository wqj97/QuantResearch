import React from 'react'
import './News.scss'
import { Row, Col, Card, Avatar, List, Pagination, Icon } from 'antd'
import { Link } from "react-router-dom";
import 'moment/locale/zh-cn'
import moment from 'moment'
import { getNews } from '../../utils/API'

class News extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      news: [],
      paginate: 1,
      total: 1
    }
    this.getPage(1)
  }

  getPage = page => {
    getNews(page).then(pageConfig => {
      this.setState({
        news: pageConfig.data,
        total: pageConfig.total,
        paginate: page
      })
    })
  }


  render () {
    const { news, paginate, total } = this.state
    return (
      <div className="News">
        <Row>
          <Col span={24}>
            <Card
              className={'projectList'}
              style={{ marginBottom: 24 }}
              title="量研快讯"
              bordered={false}
              extra={<Link to="/">全部新闻</Link>}
              bodyStyle={{ padding: 0 }}
            >
              {news.map(item => (
                <Card.Grid className={'projectGrid'} key={item.id}>
                  <Card bodyStyle={{ padding: 0 }} bordered={false}>
                    <Card.Meta
                      title={
                        <div className={'cardTitle'}>
                          <span className={'news-type'}>{item.classify}</span>
                          <a href={item.url} target={'__blank'}>{item.title}</a>
                        </div>
                      }
                      description={item.content.slice(0, 30) + '...'}
                    />
                    <div className={'projectItemContent'}>
                      <Link to={item.url}>{item.analysis.positive >= item.analysis.negative ?
                        <span><Icon type="caret-up" style={{ color: 'green' }} />利好 {(item.analysis.positive * 100).toFixed(2)}</span> :
                        <span><Icon type="caret-down" style={{ color: 'red' }} />利空 {(item.analysis.negative * 100).toFixed(2)}</span>}</Link>
                      {item.updated_at && (
                        <span className={'datetime'} title={item.updated_at}>
                          {moment(item.updated_at).fromNow()}
                        </span>
                      )}
                    </div>
                  </Card>
                </Card.Grid>
              ))}
            </Card>
          </Col>
        </Row>
        <Row type={'flex'} justify={'center'}>
          <Pagination showQuickJumper pageSize={15} defaultCurrent={paginate} total={total} onChange={this.getPage} />
        </Row>
      </div>
    )
  }
}

export default News
