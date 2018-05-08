import { Carousel, Icon } from "antd"

import 'rc-banner-anim/assets/index.css'
import QueueAnim from 'rc-queue-anim'
import ScrollAnim from 'rc-scroll-anim'
import React from 'react'
import './Home.scss'
import Footer from "../../layout/Footer";

const Banner = () => (
  <Carousel autoplay>
    <div><h1>工大</h1><h3>量研科技</h3></div>
    <div><h1>量化</h1><h3>工大</h3></div>
  </Carousel>
)

const Block1 = () => (
  <QueueAnim delay={300} className={'block-1'}>
    <ScrollAnim.OverPack key={'a'} playScale={0.3} replay>
      <QueueAnim key={'a'} delay={300}>
        <div key={'a'}>
          <Icon type="tablet" />工大量研
        </div>
        <div key={'b'}>
          <Icon type="shopping-cart" />工大量研
        </div>
        <div key={'c'}>
          <Icon type="cloud-upload-o" />工大量研
        </div>
      </QueueAnim>
    </ScrollAnim.OverPack>
    <ScrollAnim.OverPack key={'b'} playScale={0.3} replay>
      <QueueAnim key={'b'} delay={600}>
        <div key={'a'}>
          <Icon type="tablet" />工大量研
        </div>
        <div key={'b'}>
          <Icon type="shopping-cart" />工大量研
        </div>
        <div key={'c'}>
          <Icon type="cloud-upload-o" />工大量研
        </div>
      </QueueAnim>
    </ScrollAnim.OverPack>
    <ScrollAnim.OverPack key={'c'} playScale={0.1} replay>
      <QueueAnim key={'c'} delay={900}>
        <div key={'a'}>
          <Icon type="tablet" />工大量研
        </div>
        <div key={'b'}>
          <Icon type="shopping-cart" />工大量研
        </div>
        <div key={'c'}>
          <Icon type="cloud-upload-o" />工大量研
        </div>
      </QueueAnim>
    </ScrollAnim.OverPack>
  </QueueAnim>
)

const Block2 = () => (
  <QueueAnim delay={300} className={'block-2'}>
    <ScrollAnim.OverPack key={'a'} playScale={0.3} replay>
      <QueueAnim key={'a'} delay={300}>
        <div key={'a'}>
          <Icon type="tablet" />工大量研
        </div>
        <div key={'b'}>
          <Icon type="shopping-cart" />工大量研
        </div>
        <div key={'c'}>
          <Icon type="cloud-upload-o" />工大量研
        </div>
      </QueueAnim>
    </ScrollAnim.OverPack>
    <ScrollAnim.OverPack key={'b'} playScale={0.3} replay>
      <QueueAnim key={'b'} delay={600}>
        <div key={'a'}>
          <Icon type="tablet" />工大量研
        </div>
        <div key={'b'}>
          <Icon type="shopping-cart" />工大量研
        </div>
        <div key={'c'}>
          <Icon type="cloud-upload-o" />工大量研
        </div>
      </QueueAnim>
    </ScrollAnim.OverPack>
    <ScrollAnim.OverPack key={'c'} playScale={0.3} replay>
      <QueueAnim key={'c'} delay={900}>
        <div key={'a'}>
          <Icon type="tablet" />工大量研
        </div>
        <div key={'b'}>
          <Icon type="shopping-cart" />工大量研
        </div>
        <div key={'c'}>
          <Icon type="cloud-upload-o" />工大量研
        </div>
      </QueueAnim>
    </ScrollAnim.OverPack>
  </QueueAnim>
)

class Home extends React.Component {
  render () {
    return (
      <QueueAnim className={'Home'} interval={500} duration={1500}>
        <Banner key={'a'} />
        <Block1 key={'b'} />
        <Block2 key={'c'} />
        <Footer key={'d'} />
      </QueueAnim>
    )
  }
}

export default Home
