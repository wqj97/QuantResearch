import React from 'react'
import './ProductIntroduction.scss'

class ProductIntroduction extends React.Component {
  render () {
    return (
      <div className="ProductIntroduction">
        <div className="block">
          <div className="block-title">
            公司简介
          </div>
          <div className="block-content">
            天津量研科技有限公司专注于国内二级市场量化&对冲策略科学研究、策略及信息支持、相关固定策略投顾产品的研发、产品线上技术平台建设。公司产品“量研云”互联网金融数据技术平台，主要服务于广大的中小投资者群体。
          </div>
          <div className="block-content">
            公司产品“量研云”的宗旨是打造国内专业的投资者群体。量研云通过投资者教育、产品推广和社区交流建设等，向广大投资者推广量化投资、对冲投资科学的投资逻辑和理念，推动广大中小投资者抛弃散户的投资思维，追求成功投资的大概率事件，旨在追求绝对收益和稳定的复利收益，避免虽然跑赢指数但仍然亏损的尴尬，让普通的中小投资者变的专业。
          </div>
        </div>
        <div className="block">
          <div className="block-title">
            产品及业务
          </div>
          <div className="block-content">
            公司产品为“量研云”互联网金融数据技术平台，为国内中小投资者提供基于大数据量化和对冲套利的投顾策略、技术解决方案及服务。
          </div>
          <div className="block-image">
            <img src={require('../../assets/product-introduction-image-1.png')} alt="基础策略核心" />
          </div>
          <div className="block-content">
            <b>基础策略核心如上所示</b>：利用相关产品的历史交易数据寻找出它们客观真实的价格关系，实时监控价格关系病变，做出对冲交易，待价格理性回归正常，实现盈利。
          </div>
          <div className="block-content">
            <b>主要特点：</b>
            <ol>
              <li>
                基本剔除系统性风险
              </li>
              <li>
                不去预测后期价格走势
              </li>
            </ol>
          </div>
          <div className="block-content">
            量研云的主营产品是基于<b>量化策略</b>和<b>对冲策略</b>投资逻辑的期货策略、期权策略等产品，有<b>主观策略产品</b>与<b>固定策略投顾产品</b>两大类。同时量研云提供配合产品的投资者教育、注册用户社区交流建设、相关资讯服务以及精准资讯推送等附加功能服务。
          </div>
          <div className="block-content">
            <b>主观策略产品</b>提供丰富的量化&对冲策略模型及数据支持、决策服务，让投资者主观的执行决策、配置投资产品、仓位管理、入场及出场时机等，更注重基于量化&对冲策略的主观分析和管理配置，投资者具有较高的操盘感。
          </div>
          <div className="block-content">
            <b>固定策略投顾产品</b>利用计算机技术和智能技术，提供基于量化&对冲的固定策略和程序化自动交易功能，利用历史数据对固定策略进行测算并直观可见产品历史收益情况，为投资者提供各种一站式、全自动交易的固定策略，给中小投资者提供专享的投资顾问服务。
          </div>
        </div>
        <div className="block">
          <div className="block-title">
            产品市场发现
          </div>
          <div className="block-content">
            国内的二级市场风云变幻，不论股票市场还是期货市场都已经成为了普通投资者尤其是普通中小个人投资者投入资金入不敷出的战场。
          </div>
          <div className="block-content">
            对比中外资本市场，相对西方发达国家，国内的投资者和资本市场一般更多的具有专业修养相对不足、市场监管不成熟、企业&商品及行业信息披露不客观、价格影响因素不确定、专业投资顾问相对缺乏等特点，这些因素都直接导致国内存量庞大的普通投资者在资本市场处于不可协调的劣势地位，无法摆脱“散户”思维以及“被收割”的最终结果。
          </div>
          <div className="block-content">
            另外对于传统的投资方式，投资者的主要工作是分析及预测后期的价格走势，做出相应的买卖决策和持仓管理，公司以科学辩证的视角认为未来的价格是不可预测的，除非投资者掌握能够影响未来价格走势的资源。而更多的“散户”投资者都在对未来的走势靠“猜”，间接实际上就成为了“赌”，这种不科学的投资思维将二级市场演化成为了“散户”的赌场，而公司认为只要赌就输定了，或早或晚。
          </div>
          <div className="block-content">
            目前国内如上的现实状况与庞大存量的普通中小投资者在二级资本市场追求投资盈利的需求构成了比较大的矛盾。
          </div>
          <div className="block-content">
            量研云旨在解决上述矛盾，向广大普通中小投资者引导输送量化投资&对冲投资的投资哲学和投资逻辑，追求科学的投资理念和投资方式，以价值关系为纽带、数据量化为基础、对冲套利为实现方式，间接的跟随二级资本市场中的大资金相对运动方向，实现投资的大概率事件，追求稳定的绝对收益和复利收益。
          </div>
        </div>
      </div>
    )
  }
}

export default ProductIntroduction
