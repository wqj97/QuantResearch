import GlobalFooter from 'ant-design-pro/lib/GlobalFooter'
import { Icon } from 'antd'
import React from 'react'

const links = [{
  key: '帮助',
  title: '帮助',
  href: '',
}, {
  key: '联系方式',
  title: '联系方式',
  href: '',
  blankTarget: true,
}, {
  key: '条款',
  title: '条款',
  href: '',
  blankTarget: true,
}]

const copyright = <div><p>打造国内专业的个人投资者群体</p><p>Copyright <Icon type="copyright" /> 2018 天津量研科技</p></div>

class Footer extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <GlobalFooter links={links} copyright={copyright} />
    )
  }
}

export default Footer

const Styles = {}

Styles.flexCenter = {
  display: 'flex',
  height: '100%',
  alignItems: 'center',
  justifyContent: 'center'
}
