import { Modal } from 'antd'
import React from 'react'

export const HomeModal = props => {
  return (
    <Modal
      title={'致量研云用户'}
      visible={props.visible}
      width={'75vw'}
      okText={'不再提示'}
      cancelText={'我已知晓'}
      onCancel={props.cancle}
      onOk={props.ok}
    >
      <div dangerouslySetInnerHTML={{
        __html: '<h3>\n' +
        '        致量研云用户:\n' +
        '      </h3>\n' +
        '      <p style="margin-bottom:30px;text-align:left;line-height:26px;background:white">\n' +
        '        <span style="color:#474747">一、根据《证券投资咨询管理办法》等相关法律法规的规定，量研云为您提供的投资哲学和套利逻辑仅供学习与观摩，量研云不提供股票策略和股票信号交易，不提供股票投资分析、预测、建议等证券投资咨询服务，不承诺股票策略投资收益。若您有意进行股票策略投资，请确认您具备相应风险识别能力和风险承担能力，并且您对股票策略投资有充分的了解。任何由于您对股票策略投资带来的资金缩水或亏损风险，量研云不承担任何责任。</span>\n' +
        '      </p>\n' +
        '      <p style="margin-bottom:30px;text-align:left;line-height:26px;background:white">\n' +
        '        <span style="color:#474747">二、针对客户</span><span style="font-family: &#39;微软雅黑&#39;,sans-serif;color:#474747">200</span><span\n' +
        '        style="color:#474747">万以下的期货策略跟单，量研云以信号租用的形式提供技术服务，不收取业绩分成。若您有意进行针对</span><span style="font-family:&#39;微软雅黑&#39;,sans-serif;color:#474747">300</span><span\n' +
        '        style="color:#474747">万以下资金租用量研云</span><span style="font-family:&#39;微软雅黑&#39;,sans-serif;color:#474747">CTA</span><span\n' +
        '        style="color:#474747">策略组合信号，请确认您具备相应风险识别能力和风险承担能力，并且您对</span><span style="font-family:&#39;微软雅黑&#39;,sans-serif;color:#474747">CTA</span><span\n' +
        '        style="color:#474747">策略组合程序化交易有充分的了解。</span>\n' +
        '      </p>\n' +
        '      <p style="margin-bottom: 30px; text-align: left; line-height: 26px; background: white;">\n' +
        '        <span style="color:#474747">三、投资市场风险极大，选取产品要格外小心，任何一类量化对冲产品都不能绝对保证其在未来的正盈利性，所有量研云的产品，都会详细公布其真实有效的历史数据和业绩，但是未来如何表现，会受市场变动、硬件环境、人为因素等众多条件约束，您需要了解并同意量化对冲投资产品不能绝对保证其未来盈利性的共识，才可在量研云购买产品服务。任何由于量化对冲交易产品带来的资金缩水或亏损风险，量研云不承担任何责任。</span>\n' +
        '      </p>'
      }} />
    </Modal>
  )
}
