import { List, InputNumber, Button } from 'antd';
import { observer } from 'mobx-react'
import { store } from './PaymentStore'
import React from 'react'
import './Payment.scss'

const MealInfo = props => {
  const meal = props.meal
  return (
    <div className={'meal-item'}>
      <div className="meal-title">
        {meal.title}
      </div>
      <div className="meal-desc">
        <div>
          套餐内容包含: {meal.content}
        </div>
        <div>可登陆设备数: {meal.client}</div>
        <div>紧急变动提醒: {meal.emergentNotify ? '有' : '无'}</div>
        <div>开仓提醒: {meal.notify ? '有' : '无'}</div>
      </div>
      <div className="meal-count">
        <InputNumber min={0} defaultValue={0} onChange={value => store.mealCountChange(meal, value)} />
      </div>
    </div>
  )
}


@observer
class Payment extends React.Component {
  render () {
    return (
      <div className="Payment">
        <List
          header={<div>建材能源系套餐</div>}
          className={'meal-list'}
          bordered
          dataSource={store.list.slice(0, 3)}
          renderItem={item => (<List.Item key={item.id}><MealInfo meal={item} /></List.Item>)}
        />
        <List
          header={<div>农产品系套餐</div>}
          className={'meal-list'}
          bordered
          dataSource={store.list.slice(3, 6)}
          renderItem={item => (<List.Item key={item.id}><MealInfo meal={item} /></List.Item>)}
        />
        <List
          header={<div>石化系套餐</div>}
          className={'meal-list'}
          bordered
          dataSource={store.list.slice(6.9)}
          renderItem={item => (<List.Item key={item.id}><MealInfo meal={item} /></List.Item>)}
        />
        <div className="checkout">
          <div className="price-count">
            总价: <span className="price">¥ {store.mealTotalPrice.toFixed(2)}</span>
          </div>
          <div className="confirm-btn">
            <Button type={'primary'}>结算</Button>
          </div>
        </div>
      </div>
    )
  }
}

export default Payment
