import { Button, Icon } from "antd"
import React from 'react'
import { getProductConfigList } from '../../utils/API'
import ProductWrap from "./ProductWrap";
import './Setting.scss'

class Setting extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      productConfigList: []
    }
  }

  componentDidMount () {
    getProductConfigList().then(data => {
      this.setState({
        productConfigList: data
      })
    })
  }


  render () {
    return (
      <div className="Setting">
        <div>
          <Button type="dashed" className={'new-button'}>
            <Icon type="plus" /> 新增产品
          </Button>
        </div>
        {this.state.productConfigList.map(data => {
          return <ProductWrap {...data} key={data.id} />
        })}
      </div>
    )
  }
}

export default Setting
