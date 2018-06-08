import 'antd/dist/antd.css'
import 'nprogress/nprogress.css'
import 'ant-design-pro/dist/ant-design-pro.css'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(
  <App />
  , document.getElementById('root'))
registerServiceWorker()
