import React from 'react'
import './Clause.scss';

class Clause extends React.Component {
  render () {
    return (
      <div className="Clause" dangerouslySetInnerHTML={{
        __html: '<p style="text-align:left;line-height:200%;background:white">\n' +
        '    <strong><span style="font-size:18px;line-height:200%;font-family:&#39;微软雅黑&#39;,sans-serif;color:#333333">免责声明</span></strong>\n' +
        '</p>\n' +
        '<table>\n' +
        '    <tbody>\n' +
        '        <tr class="firstRow">\n' +
        '            <td width="30" valign="top" style="padding: 0px;">\n' +
        '                <p style="text-align:left">\n' +
        '                    <span style="font-size:18px;font-family:&#39;微软雅黑&#39;,sans-serif;color:#333333">1.</span>\n' +
        '                </p>\n' +
        '            </td>\n' +
        '            <td valign="top" style="padding:0 0 0 0">\n' +
        '                <p style="text-align:left;line-height:200%">\n' +
        '                    <span style=";line-height:200%;font-family:宋体;color:black">天津量研科技有限公司就各项服务、安全、无误及不中断不负担任何明示或默示的保证责任。用户同意承担使用天津量研科技有限公司服务的所有风险及因该风险可能造成的任何直接、间接及衍生损害。天津量研科技有限公司对此不负任何赔偿责任。天津量研科技有限公司不对因本网资料全部或部分内容产生的或因依赖该资料而引致的任何损失承担任何责任。</span>\n' +
        '                </p>\n' +
        '            </td>\n' +
        '        </tr>\n' +
        '        <tr>\n' +
        '            <td width="30" valign="top" style="padding: 0px;">\n' +
        '                <p style="text-align:left;line-height:200%">\n' +
        '                    <span style=";line-height:200%;font-family:宋体;color:black">2.</span>\n' +
        '                </p>\n' +
        '            </td>\n' +
        '            <td valign="top" style="padding:0 0 0 0">\n' +
        '                <p style="text-align:left;line-height:200%">\n' +
        '                    <span style=";line-height:200%;font-family:宋体;color:black">用户在使用天津量研科技有限公司各项服务特别是在租用、使用量研云投资策略前已经仔细评估自身资产实力、风险承受能力以及对投资策略的理解、应用能力，所有直接或间接使用量研云投资模型用于真实交易的用户需要谨慎选择模型，合理运用组合原理，天津量研科技有限公司不承担任何因模型或者策略产生的资金损失及相关责任。</span>\n' +
        '                </p>\n' +
        '            </td>\n' +
        '        </tr>\n' +
        '        <tr>\n' +
        '            <td width="30" valign="top" style="padding: 0px;">\n' +
        '                <p style="text-align:left;line-height:200%">\n' +
        '                    <span style=";line-height:200%;font-family:宋体;color:black">3.</span>\n' +
        '                </p>\n' +
        '            </td>\n' +
        '            <td valign="top" style="padding:0 0 0 0">\n' +
        '                <p style="text-align:left;line-height:200%">\n' +
        '                    <span style=";line-height:200%;font-family:宋体;color:black">大部分量研云投资策略具有自动交易的特点，因为用户的策略运行的硬件和网络环境、交易商的服务能力以及用户的操作可能产生委托指令错误，获取成交结果失败以及操作失误的风险，由此导致的投资损失由用户自行承担。</span>\n' +
        '                </p>\n' +
        '            </td>\n' +
        '        </tr>\n' +
        '        <tr>\n' +
        '            <td width="30" valign="top" style="padding: 0px;">\n' +
        '                <p style="text-align:left;line-height:200%">\n' +
        '                    <span style=";line-height:200%;font-family:宋体;color:black">4.</span>\n' +
        '                </p>\n' +
        '            </td>\n' +
        '            <td valign="top" style="padding:0 0 0 0">\n' +
        '                <p style="text-align:left;line-height:200%">\n' +
        '                    <span style=";line-height:200%;font-family:宋体;color:black">天津量研科技有限公司提供或展示的有关策略或模型，只保证其历史信号及历史产生的收益为真实有效的，股票、期货、贵金属或大宗商品现货市场风险莫测，策略使用的历史交易效益和报告不代表未来结果，未来收益情况不能按照历史简单统计。同时，量研云投资策略具有针对性和时效性，不能在任何市场环境下长期有效。量研云投资策略说明及后验报告等资料，在不同市场环境下和时间段中可能存在被误读的风险，由此导致的投资损失由用户自行承担。</span>\n' +
        '                </p>\n' +
        '            </td>\n' +
        '        </tr>\n' +
        '        <tr>\n' +
        '            <td width="30" valign="top" style="padding: 0px;">\n' +
        '                <p style="text-align:left;line-height:200%">\n' +
        '                    <span style=";line-height:200%;font-family:宋体;color:black">5.</span>\n' +
        '                </p>\n' +
        '            </td>\n' +
        '            <td valign="top" style="padding:0 0 0 0">\n' +
        '                <p style="text-align:left;line-height:200%">\n' +
        '                    <span style=";line-height:200%;font-family:宋体;color:black">用户了解并同意，天津量研科技有限公司可能因公司、其他合作方或相关电信部门的互联网软硬件设备故障或失灵、或人为操作疏忽而全部或部分中断、延迟、遗漏、误导或造成资料传输或储存上的错误、或遭第三人侵入系统篡改或伪造变造资料等，天津量研科技有限公司不承担任何责任。</span>\n' +
        '                </p>\n' +
        '            </td>\n' +
        '        </tr>\n' +
        '        <tr>\n' +
        '            <td width="30" valign="top" style="padding: 0px;">\n' +
        '                <p style="text-align:left;line-height:200%">\n' +
        '                    <span style=";line-height:200%;font-family:宋体;color:black">6.</span>\n' +
        '                </p>\n' +
        '            </td>\n' +
        '            <td valign="top" style="padding:0 0 0 0">\n' +
        '                <p style="text-align:left;line-height:200%">\n' +
        '                    <span style=";line-height:200%;font-family:宋体;color:black">任何在天津量研科技有限公司出现的信息包括但不限于评论、预测、图表、指标、理论、直接的或暗示的指示均只作为参考信息，用户须对任何自主决定的行为负责。</span>\n' +
        '                </p>\n' +
        '            </td>\n' +
        '        </tr>\n' +
        '        <tr>\n' +
        '            <td width="30" valign="top" style="padding: 0px;">\n' +
        '                <p style="text-align:left;line-height:200%">\n' +
        '                    <span style=";line-height:200%;font-family:宋体;color:black">7.</span>\n' +
        '                </p>\n' +
        '            </td>\n' +
        '            <td valign="top" style="padding:0 0 0 0">\n' +
        '                <p style="text-align:left;line-height:200%">\n' +
        '                    <span style=";line-height:200%;font-family:宋体;color:black">凡通过天津量研科技有限公司与其他网站的链接，而获得其所提供的网上资料及内容，用户应该自己进行辨别及判断，并应当由该等网站对其提供内容承担相应责任，天津量研科技有限公司对此不承担任何责任。天津量研科技有限公司提供超级链接至其它网站，并不视为同意、推荐、认可、 &nbsp; 保证或推介任何第三方或在其网站所提供的服务、产品，亦不可视为与该等第三方及网站有任何形式的合作。</span>\n' +
        '                </p>\n' +
        '            </td>\n' +
        '        </tr>\n' +
        '        <tr>\n' +
        '            <td width="30" valign="top" style="padding: 0px;">\n' +
        '                <p style="text-align:left;line-height:200%">\n' +
        '                    <span style=";line-height:200%;font-family:宋体;color:black">8.</span>\n' +
        '                </p>\n' +
        '            </td>\n' +
        '            <td valign="top" style="padding:0 0 0 0">\n' +
        '                <p style="text-align:left;line-height:200%">\n' +
        '                    <span style=";line-height:200%;font-family:宋体;color:black">天津量研科技有限公司所载商标、徽号和服务标志及其他任何数据的所有版权、专利权、知识产权及其它产权均属天津量研科技有限公司或其关联公司所有。天津量研科技有限公司所载资料受版权保护。未经天津量研科技有限公司事前以书面同意，不可将此等材料的任何部分修改、 &nbsp; 翻版、储存于检索系统、传送、复制、分发或以任何其它方式作商业或公共用途。</span>\n' +
        '                </p>\n' +
        '            </td>\n' +
        '        </tr>\n' +
        '        <tr>\n' +
        '            <td width="30" valign="top" style="padding: 0px;">\n' +
        '                <p style="text-align:left;line-height:200%">\n' +
        '                    <span style=";line-height:200%;font-family:宋体;color:black">9.</span>\n' +
        '                </p>\n' +
        '            </td>\n' +
        '            <td valign="top" style="padding:0 0 0 0">\n' +
        '                <p style="text-align:left;line-height:200%">\n' +
        '                    <span style=";line-height:200%;font-family:宋体;color:black">天津量研科技有限公司所提供的信息、软件、产品、模型、策略、搜索结果、接往第三者网站的超级链接及第三者所提供的商品、服务、权利等一切内容，其完整性、正确性、适时性、及时性、有用性、知识产权的不受侵害性及第三者债务的履行及有无瑕疵等方面，不做任何保证，不负任何相关担保责任。</span>\n' +
        '                </p>\n' +
        '            </td>\n' +
        '        </tr>\n' +
        '        <tr>\n' +
        '            <td width="30" valign="top" style="padding: 0px;">\n' +
        '                <p style="text-align:left;line-height:200%">\n' +
        '                    <span style=";line-height:200%;font-family:宋体;color:black">10.</span>\n' +
        '                </p>\n' +
        '            </td>\n' +
        '            <td valign="top" style="padding:0 0 0 0">\n' +
        '                <p style="text-align:left;line-height:200%">\n' +
        '                    <span style=";line-height:200%;font-family:宋体;color:black">天津量研科技有限公司认为，一切登录天津量研科技有限公司网站的用户或浏览者在进入天津量研科技有限公司网站主页及各层页面时已经仔细阅读本免责条款全部内容并完全同意。</span>\n' +
        '                </p>\n' +
        '            </td>\n' +
        '        </tr>\n' +
        '    </tbody>\n' +
        '</table>\n' +
        '<p style="text-align:left;line-height:200%;background:white">\n' +
        '    <strong><span style="font-size:18px;line-height:200%;font-family:&#39;微软雅黑&#39;,sans-serif;color:#333333">隐私声明</span></strong>\n' +
        '</p>\n' +
        '<table>\n' +
        '    <tbody>\n' +
        '        <tr class="firstRow">\n' +
        '            <td width="30" valign="top" style="padding: 0px;">\n' +
        '                <p style="text-align:left">\n' +
        '                    <span style="font-size:18px;font-family:&#39;微软雅黑&#39;,sans-serif;color:#333333">1.</span>\n' +
        '                </p>\n' +
        '            </td>\n' +
        '            <td style="padding:0 0 0 0">\n' +
        '                <p style="text-align:left;line-height:200%">\n' +
        '                    <span style=";line-height:200%;font-family:宋体;color:black">天津量研科技有限公司了解您关心您的信息将如何被使用和共享，天津量研科技有限公司承诺保护您的个人隐私，以下声明将阐述天津量研科技有限公司的隐私保护政策。请阅读下文以了解天津量研科技有限公司的隐私权声明，如果您对本隐私权声明有任何疑问，请发送电子邮件至【lyquant@126.com】。</span>\n' +
        '                </p>\n' +
        '            </td>\n' +
        '        </tr>\n' +
        '        <tr>\n' +
        '            <td width="30" valign="top" style="padding: 0px;">\n' +
        '                <p style="text-align:left;line-height:200%">\n' +
        '                    <span style=";line-height:200%;font-family:宋体;color:black">2.</span>\n' +
        '                </p>\n' +
        '            </td>\n' +
        '            <td style="padding:0 0 0 0">\n' +
        '                <p style="text-align:left;line-height:200%">\n' +
        '                    <span style=";line-height:200%;font-family:宋体;color:black">本隐私权声明适用于由天津量研科技有限公司网站。为了向您提供必要的信息，天津量研科技有限公司可能包含非天津量研科技有限公司的链接。天津量研科技有限公司对此类网站的隐私权政策不承担任何责任。访问此类网站，天津量研科技有限公司建议您查看每个网站的隐私权政策。</span>\n' +
        '                </p>\n' +
        '            </td>\n' +
        '        </tr>\n' +
        '        <tr>\n' +
        '            <td width="30" valign="top" style="padding: 0px;">\n' +
        '                <p style="text-align:left;line-height:200%">\n' +
        '                    <span style=";line-height:200%;font-family:宋体;color:black">3.</span>\n' +
        '                </p>\n' +
        '            </td>\n' +
        '            <td style="padding:0 0 0 0">\n' +
        '                <p style="text-align:left;line-height:200%">\n' +
        '                    <span style=";line-height:200%;font-family:宋体;color:black">您可以访问天津量研科技有限公司的网站并了解天津量研科技有限公司的产品、服务的信息而无需提供个人信息。但是，如果您要加入天津量研科技有限公司的网站进行量研云策略交易或使用其他本网站提供的服务，则需要您提供相关个人信息。个人信息是与您的姓名或身份相关联的信息。当您注册天津量研科技有限公司网站进行相关交易活动时，天津量研科技有限公司需要您提供如下信息：用户名、密码、电子邮件、姓名、身份证号码、联系地址、邮政编码、固定电话号码、手机号码、即时通讯工具联系方式、银行卡账户信息以及属于您的网站的名称、网址。天津量研科技有限公司会将这些资料用于满足你对某种产品、服务的需求或通知你最新产品、服务信息。</span>\n' +
        '                </p>\n' +
        '            </td>\n' +
        '        </tr>\n' +
        '        <tr>\n' +
        '            <td width="30" valign="top" style="padding: 0px;">\n' +
        '                <p style="text-align:left;line-height:200%">\n' +
        '                    <span style=";line-height:200%;font-family:宋体;color:black">4.</span>\n' +
        '                </p>\n' +
        '            </td>\n' +
        '            <td style="padding:0 0 0 0">\n' +
        '                <p style="text-align:left;line-height:200%">\n' +
        '                    <span style=";line-height:200%;font-family:宋体;color:black">天津量研科技有限公司不会将您的个人信息出租、出售或向任何第三方泄露和传播，除非是在如下情况下：&nbsp;</span><span style=";line-height:200%;font-family:&#39;微软雅黑&#39;,sans-serif;color:black"><br/> &nbsp; </span><span style=";line-height:200%;font-family:宋体;color:black">a) </span><span style=";line-height:200%;font-family:宋体;color:black">得到您的同意；&nbsp;</span><span style=";line-height:200%;font-family:   &#39;微软雅黑&#39;,sans-serif;color:black"><br/> &nbsp; </span><span style=";line-height:200%;font-family:宋体;color:black">b) </span><span style=";line-height:200%;font-family:宋体;color:black">只有透露您的个人资料，才能提供您所要求的产品和服务；&nbsp;</span><span style=";line-height:200%;font-family:&#39;微软雅黑&#39;,sans-serif;color:black"><br/> &nbsp; </span><span style=";line-height:200%;font-family:宋体;color:black">c) </span><span style=";line-height:200%;font-family:宋体;color:black">天津量研科技有限公司向代表天津量研科技有限公司处理您的个人信息的子公司、关联公司或其他天津量研科技有限公司信任的公司或个人提供所述信息（天津量研科技有限公司将要求相关方均同意在处理信息时应根据天津量研科技有限公司的指示而为，并应遵守本隐私政策和任何其他适当的保密和安全措施）；&nbsp;</span><span style=";line-height:200%;font-family:&#39;微软雅黑&#39;,sans-serif;color:black"><br/> &nbsp; </span><span style=";line-height:200%;font-family:宋体;color:black">d) </span><span style=";line-height:200%;font-family:宋体;color:black">遵守任何法律、规章、传票或者法院令状；&nbsp;</span><span style=";line-height:200%;font-family:   &#39;微软雅黑&#39;,sans-serif;color:black"><br/> &nbsp; </span><span style=";line-height:200%;font-family:宋体;color:black">e) </span><span style=";line-height:200%;font-family:宋体;color:black">由于与本网站链接的其它网站所造成用户资料泄露及由此而导致的任何法律争议和后果。</span>\n' +
        '                </p>\n' +
        '            </td>\n' +
        '        </tr>\n' +
        '        <tr>\n' +
        '            <td width="30" valign="top" style="padding: 0px;">\n' +
        '                <p style="text-align:left;line-height:200%">\n' +
        '                    <span style=";line-height:200%;font-family:宋体;color:black">5.</span>\n' +
        '                </p>\n' +
        '            </td>\n' +
        '            <td style="padding:0 0 0 0">\n' +
        '                <p style="text-align:left;line-height:200%">\n' +
        '                    <span style=";line-height:200%;font-family:宋体;color:black">天津量研科技有限公司可能与第三方共享某些综合性非个人信息。这些信息并不对您进行单独标识。如果对于个人数据的管理和使用有其他任何问题，请与天津量研科技有限公司联系。</span>\n' +
        '                </p>\n' +
        '            </td>\n' +
        '        </tr>\n' +
        '        <tr>\n' +
        '            <td width="30" valign="top" style="padding: 0px;">\n' +
        '                <p style="text-align:left;line-height:200%">\n' +
        '                    <span style=";line-height:200%;font-family:宋体;color:black">6.</span>\n' +
        '                </p>\n' +
        '            </td>\n' +
        '            <td style="padding:0 0 0 0">\n' +
        '                <p style="text-align:left;line-height:200%">\n' +
        '                    <span style=";line-height:200%;font-family:宋体;color:black">天津量研科技有限公司承诺保护您提供给天津量研科技有限公司的个人信息。为了防止未经授权者访问和防止泄密，同时也为了维护数据正确无误以及确保合理使用信息，天津量研科技有限公司已经采取了相应的技术和管理措施来保护您的个人信息。</span>\n' +
        '                </p>\n' +
        '            </td>\n' +
        '        </tr>\n' +
        '    </tbody>\n' +
        '</table>\n' +
        '<p style="text-align:left;line-height:200%;background:white">\n' +
        '    <strong><span style="font-size:18px;line-height:200%;font-family:&#39;微软雅黑&#39;,sans-serif;color:#333333">&nbsp;</span></strong>\n' +
        '</p>\n' +
        '<p style="text-align:left;line-height:200%;background:white">\n' +
        '    <strong><span style="font-size:18px;line-height:200%;font-family:&#39;微软雅黑&#39;,sans-serif;color:#333333">服务条款</span></strong><span style=";line-height:200%;font-family:宋体;color:black">&nbsp;</span><span style=";line-height:200%;font-family:&#39;微软雅黑&#39;,sans-serif;color:black"><br/> </span><span style=";line-height:200%;font-family: 宋体;color:black">第1条 本站服务条款的确认和接纳&nbsp;</span><span style=";line-height:200%;font-family:&#39;微软雅黑&#39;,sans-serif;color:black"><br/> </span><span style=";line-height:200%;font-family:宋体;color:black">1.1</span><span style=";line-height:200%;font-family:宋体;color:black">本站的各项电子服务的所有权和运营权归天津量研科技有限公司所有。用户同意所有注册协议条款并完成注册程序，才能成为本站的正式用户。用户确认：本协议条款是处理双方权利义务的协议，始终有效，法律另有强制性规定或双方另有特别约定的，依其规定。&nbsp;</span><span style=";line-height:200%;font-family:&#39;微软雅黑&#39;,sans-serif;color:black"><br/> </span><span style=";line-height:200%;font-family:宋体;color:black">1.2</span><span style=";line-height:200%;font-family:宋体;color:black">用户点击同意本协议的，即视为用户确认自己具有享受本站服务、购买本站提供的相关产品、服务等相应的权利能力和行为能力，能够独立承担法律责任。&nbsp;</span><span style=";line-height:200%;font-family:&#39;微软雅黑&#39;,sans-serif;color:black"><br/> </span><span style=";line-height:200%;font-family:宋体;color:black">1.3</span><span style=";line-height:200%;font-family:宋体;color:black">天津量研科技有限公司保留在中华人民共和国大陆地区法施行之法律允许的范围内独自决定拒绝服务、关闭用户账户、清除或编辑内容或取消订单的权利。&nbsp;</span><span style=";line-height:200%;font-family:&#39;微软雅黑&#39;,sans-serif;color:black"><br/> </span><span style=";line-height:200%;font-family: 宋体;color:black">第2条 本站服务&nbsp;</span><span style=";line-height:200%;font-family:&#39;微软雅黑&#39;,sans-serif;color:black"><br/> </span><span style=";line-height:200%;font-family:宋体;color:black">2.1</span><span style=";line-height:200%;font-family:宋体;color:black">天津量研科技有限公司通过互联网依法为用户提供互联网信息等服务，用户在完全同意本协议及本站规定的情况下，方有权使用本站的相关服务。&nbsp;</span><span style=";line-height:200%;font-family:&#39;微软雅黑&#39;,sans-serif;color:black"><br/> </span><span style=";line-height:200%;font-family:宋体;color:black">2.2</span><span style=";line-height:200%;font-family:宋体;color:black">用户必须自行准备如下设备和承担如下费用支出：（1）上网设备，包括并不限于电脑或者其他上网终端、调制解调器及其他必备的上网装置；（2）上网费用，包括并不限于网络接入费、上网设备租用费、手机流量费等。&nbsp;</span><span style=";line-height:200%;font-family:&#39;微软雅黑&#39;,sans-serif;color:black"><br/> </span><span style=";line-height:200%;font-family: 宋体;color:black">第3条 用户信息&nbsp;</span><span style=";line-height:200%;font-family:&#39;微软雅黑&#39;,sans-serif;color:black"><br/> </span><span style=";line-height:200%;font-family:宋体;color:black">3.1</span><span style=";line-height:200%;font-family:宋体;color:black">用户应自行诚信向本站提供注册资料，用户同意其提供的注册资料真实、准确、完整、合法有效，用户注册资料如有变动的，应及时更新其注册资料。如果用 户提供的注册资料不合法、不真实、不准确、不详尽的，用户需承担因此引起的相应责任及后果，并且天津量研科技有限公司保留终止用户使用天津量研科技有限公司及天津量研科技有限公司网站各项服务的权利。&nbsp;</span><span style=";line-height:200%;font-family:&#39;微软雅黑&#39;,sans-serif;color:black"><br/> </span><span style=";line-height:200%;font-family:宋体;color:black">3.2</span><span style=";line-height:200%;font-family:宋体;color:black">用户在本站进行浏览、下单购买相关产品或服务等活动时，涉及用户真实姓名/名称、通信地址、联系电话、电子邮箱等隐私信息的，本站将予以严格保密，除非得到用户的授权或法律另有规定，本站不会向外界披露用户隐私信息（具体内容见本站隐私声明）。&nbsp;</span><span style=";line-height:200%;font-family:&#39;微软雅黑&#39;,sans-serif;color:black"><br/> </span><span style=";line-height:200%;font-family:宋体;color:black">3.3</span><span style=";line-height:200%;font-family:宋体;color:black">用户注册成功后，将产生用户名和密码等账户信息，您可以根据本站规定改变您的密码。用户应谨慎合理的保存、使用其用户名和密码。用户若发现任何非法使用用户账号或存在安全漏洞的情况，请立即通知本站并向公安机关报案。&nbsp;</span><span style=";line-height:200%;font-family:&#39;微软雅黑&#39;,sans-serif;color:black"><br/> </span><span style=";line-height:200%;font-family:宋体;color:black">3.4</span><span style=";line-height:200%;font-family:宋体;color:black">用户同意，天津量研科技有限公司拥有通过邮件、短信、电话等形式，向在本站注册、购买产品或服务的用户发送订单信息等告知信息的权利。&nbsp;</span><span style=";line-height:200%;font-family:&#39;微软雅黑&#39;,sans-serif;color:black"><br/> </span><span style=";line-height:200%;font-family:宋体;color:black">3.5</span><span style=";line-height:200%;font-family:宋体;color:black">用户不得将在本站注册获得的账户借给他人使用，否则用户应承担由此产生的全部责任，并与实际使用人承担连带责任。&nbsp;</span><span style=";line-height:200%;font-family:&#39;微软雅黑&#39;,sans-serif;color:black"><br/> </span><span style=";line-height:200%;font-family:宋体;color:black">3.6</span><span style=";line-height:200%;font-family:宋体;color:black">用户同意，天津量研科技有限公司有权使用用户的注册信息、用户名、密码等信息，登陆进入用户的注册账户，进行证据保全，包括但不限于公证、见证等。&nbsp;</span><span style=";line-height:200%;font-family:&#39;微软雅黑&#39;,sans-serif;color:black"><br/> </span><span style=";line-height:200%;font-family: 宋体;color:black">第4条 用户依法言行义务&nbsp;</span><span style=";line-height:200%;font-family:&#39;微软雅黑&#39;,sans-serif;color:black"><br/> </span><span style=";line-height:200%;font-family: 宋体;color:black">本协议依据国家相关法律法规规章制定，用户同意严格遵守以下义务：&nbsp;</span><span style=";line-height:200%;font-family:&#39;微软雅黑&#39;,sans-serif;color:black"><br/> </span><span style=";line-height:200%;font-family: 宋体;color:black">（1）不得传输或发表：煽动抗拒、破坏宪法和法律、行政法规实施的言论，煽动颠覆国家政权，推翻社会主义制度的言论，煽动分裂国家、破坏国家统一的的言论，煽动民族仇恨、民族歧视、破坏民族团结的言论；&nbsp;</span><span style=";line-height:200%;font-family:&#39;微软雅黑&#39;,sans-serif;color:black"><br/> </span><span style=";line-height:200%;font-family: 宋体;color:black">（2）从中国大陆向境外传输资料信息时必须符合中国有关法规；&nbsp;</span><span style=";line-height:200%;font-family:&#39;微软雅黑&#39;,sans-serif;color:black"><br/> </span><span style=";line-height:200%;font-family: 宋体;color:black">（3）不得利用本站从事洗钱、窃取商业秘密、窃取个人信息等违法犯罪活动；&nbsp;</span><span style=";line-height:200%;font-family:&#39;微软雅黑&#39;,sans-serif;color:black"><br/> </span><span style=";line-height:200%;font-family: 宋体;color:black">（4）不得干扰本站的正常运转，不得侵入本站及国家计算机信息系统；&nbsp;</span><span style=";line-height:200%;font-family:&#39;微软雅黑&#39;,sans-serif;color:black"><br/> </span><span style=";line-height:200%;font-family: 宋体;color:black">（5）不得传输或发表任何违法犯罪的、骚扰性的、中伤他人的、辱骂性的、恐吓性的、伤害性的、庸俗的，淫秽的、不文明的等信息资料；&nbsp;</span><span style=";line-height:200%;font-family:&#39;微软雅黑&#39;,sans-serif;color:black"><br/> </span><span style=";line-height:200%;font-family: 宋体;color:black">（6）不得传输或发表损害国家社会公共利益和涉及国家安全的信息资料或言论；&nbsp;</span><span style=";line-height:200%;font-family:&#39;微软雅黑&#39;,sans-serif;color:black"><br/> </span><span style=";line-height:200%;font-family: 宋体;color:black">（7）不得教唆他人从事本条所禁止的行为；&nbsp;</span><span style=";line-height:200%;font-family:&#39;微软雅黑&#39;,sans-serif;color:black"><br/> </span><span style=";line-height:200%;font-family: 宋体;color:black">（8）不得利用在本站注册的账户进行牟利性经营活动；&nbsp;</span><span style=";line-height:200%;font-family:&#39;微软雅黑&#39;,sans-serif;color:black"><br/> </span><span style=";line-height:200%;font-family: 宋体;color:black">（9）不得发布任何侵犯他人著作权、商标权等知识产权或合法权利的内容；&nbsp;</span><span style=";line-height:200%;font-family:&#39;微软雅黑&#39;,sans-serif;color:black"><br/> </span><span style=";line-height:200%;font-family: 宋体;color:black">用户应不时关注并遵守本站不时公布或修改的各类合法规则规定。&nbsp;</span><span style=";line-height:200%;font-family:&#39;微软雅黑&#39;,sans-serif;color:black"><br/> </span><span style=";line-height:200%;font-family: 宋体;color:black">本站保有删除站内各类不符合法律政策或不真实的信息内容而无须通知用户的权利。&nbsp;</span><span style=";line-height:200%;font-family:&#39;微软雅黑&#39;,sans-serif;color:black"><br/> </span><span style=";line-height:200%;font-family: 宋体;color:black">若用户未遵守以上规定的，本站有权作出独立判断并采取暂停或关闭用户帐号等措施。用户须对自己在网上的言论和行为承担法律责任。&nbsp;</span><span style=";line-height:200%;font-family:&#39;微软雅黑&#39;,sans-serif;color:black"><br/> </span><span style=";line-height:200%;font-family: 宋体;color:black">第5条 产品或服务信息&nbsp;</span><span style=";line-height:200%;font-family:&#39;微软雅黑&#39;,sans-serif;color:black"><br/> </span><span style=";line-height:200%;font-family:宋体;color:black">5.1</span><span style=";line-height:200%;font-family:宋体;color:black">本站上的产品或服务价格等信息随时都有可能发生变动，本站不作特别通知。由于网站上产品或服务信息的数量极其庞大，虽然本站会尽最大努力保证您所浏览信息的准确性，但由于众所周知的互联网技术因素等客观原因存在，本站网页显示的信息可能会有一定的滞后性或差错，对此情形您知悉并理解。&nbsp;</span><span style=";line-height:200%;font-family:&#39;微软雅黑&#39;,sans-serif;color:black"><br/> </span><span style=";line-height:200%;font-family:宋体;color:black">5.2</span><span style=";line-height:200%;font-family:宋体;color:black">由于市场变化及各种以合理商业努力难以控制的因素的影响，本站无法保证您提交的订单信息中希望购买的产品或服务随时能够提供；如您拟购买的产品或服务本站无法提供，您有权取消订单。&nbsp;</span><span style=";line-height:200%;font-family:&#39;微软雅黑&#39;,sans-serif;color:black"><br/> </span><span style=";line-height:200%;font-family: 宋体;color:black">第6条 所有权及知识产权条款&nbsp;</span><span style=";line-height:200%;font-family:&#39;微软雅黑&#39;,sans-serif;color:black"><br/> </span><span style=";line-height:200%;font-family:宋体;color:black">6.1</span><span style=";line-height:200%;font-family:宋体;color:black">用户一旦接受本协议，即表明该用户主动将其在任何时间段在本站发表的任何形式的信息内容（包括但不限于客户评价、客户咨询、各类话题文章等信息内 容）的财产性权利等任何可转让的权利，如著作权财产权（包括并不限于：复制权、发行权、出租权、展览权、表演权、放映权、广播权、信息网络传播权、摄制权、改编权、翻译权、汇编权以及应当由著作权人享有的其他可转让权利），全部独家且不可撤销地转让给天津量研科技有限公司所有，用户同意天津量研科技有限公司有权就任何主体侵权而单独提起诉讼。&nbsp;</span><span style=";line-height:200%;font-family:&#39;微软雅黑&#39;,sans-serif;color:black"><br/> </span><span style=";line-height:200%;font-family:宋体;color:black">6.2</span><span style=";line-height:200%;font-family:宋体;color:black">本协议已经构成《中华人民共和国著作权法》第二十五条（条文序号依照2011年版著作权法确定）及相关法律规定的著作财产权等权利转让书面协议，其效力及于用户在天津量研科技有限公司网站上发布的任何受著作权法保护的作品内容，无论该等内容形成于本协议订立前还是本协议订立后。&nbsp;</span><span style=";line-height:200%;font-family:&#39;微软雅黑&#39;,sans-serif;color:black"><br/> </span><span style=";line-height:200%;font-family:宋体;color:black">6.3</span><span style=";line-height:200%;font-family:宋体;color:black">用户同意并已充分了解本协议的条款，承诺不将已发表于本站的信息，以任何形式发布或授权其它主体以任何方式使用（包括但限于在各类网站、媒体上使用）。&nbsp;</span><span style=";line-height:200%;font-family:&#39;微软雅黑&#39;,sans-serif;color:black"><br/> </span><span style=";line-height:200%;font-family:宋体;color:black">6.4</span><span style=";line-height:200%;font-family:宋体;color:black">天津量研科技有限公司是本站的制作者，拥有此网站内容及资源的著作权等合法权利,受国家法律保护,有权不时地对本协议及本站的内容进行修改，并在本站张贴，无须另行通知用户。在法律允许的最大限度范围内，天津量研科技有限公司对本协议及本站内容拥有解释权。&nbsp;</span><span style=";line-height:200%;font-family:&#39;微软雅黑&#39;,sans-serif;color:black"><br/> </span><span style=";line-height:200%;font-family:宋体;color:black">6.5</span><span style=";line-height:200%;font-family:宋体;color:black">除法律另有强制性规定外，未经天津量研科技有限公司明确的特别书面许可,任何单位或个人不得以任何方式非法地全部或部分复制、转载、引用、链接、抓取或以其他方式使用本站的信息内容，否则，天津量研科技有限公司有权追究其法律责任。&nbsp;</span><span style=";line-height:200%;font-family:&#39;微软雅黑&#39;,sans-serif;color:black"><br/> </span><span style=";line-height:200%;font-family:宋体;color:black">6.6</span><span style=";line-height:200%;font-family:宋体;color:black">本站所刊登的资料信息（诸如文字、图表、标识、按钮图标、图像、声音文件片段、数字下载、数据编辑和软件），均是天津量研科技有限公司或其内容提供者的财产，受 中国和国际版权法的保护。本站上所有内容的汇编是天津量研科技有限公司的排他财产，受中国和国际版权法的保护。本站上所有软件都是天津量研科技有限公司或其关联公司或其软件供应商 的财产，受中国和国际版权法的保护。&nbsp;</span><span style=";line-height:200%;font-family:&#39;微软雅黑&#39;,sans-serif;color:black"><br/> </span><span style=";line-height:200%;font-family: 宋体;color:black">第7条 协议更新及用户关注义务&nbsp;</span><span style=";line-height:200%;font-family:&#39;微软雅黑&#39;,sans-serif;color:black"><br/> </span><span style=";line-height:200%;font-family: 宋体;color:black">根据国家法律法规变化及网站运营需要，天津量研科技有限公司有权对本协议条款不时地进行修改，修改后的协议一旦被张贴在本站上即生效，并代替原来的协议。用户可随时登 陆查阅最新协议；&nbsp;用户有义务不时关注并阅读最新版的协议及网站公告。如用户不同意更新后的协议，可以且应立即停止接受天津量研科技有限公司网站依据本协议提供的服务；如用户继续使用本网站提供的服务的，即视为同意更新后的协议。天津量研科技有限公司建议您在使用本站之前阅读本协议及本站的公告。&nbsp;如果本协议中任何一条被视为废 止、无效或因任何理由不可执行，该条应视为可分的且并不影响任何其余条款的有效性和可执行性。&nbsp;</span><span style=";line-height:200%;font-family:&#39;微软雅黑&#39;,sans-serif;color:black"><br/> </span><span style=";line-height:200%;font-family: 宋体;color:black">第8条 法律管辖和适用&nbsp;</span><span style=";line-height:200%;font-family:&#39;微软雅黑&#39;,sans-serif;color:black"><br/> </span><span style=";line-height:200%;font-family: 宋体;color:black">本协议的订立、执行和解释及争议的解决均应适用在中华人民共和国大陆地区适用之有效法律（但不包括其冲突法规则）。 如发生本协议与适用之法律相抵触时，则这些条款将完全按法律规定重新解释，而其它有效条款继续有效。 如缔约方就本协议内容或其执行发生任何争议，双方应尽力友好协商解决；协商不成时，任何一方均可向有管辖权的中华人民共和国大陆地区法院提起诉讼。&nbsp;</span><span style=";line-height:200%;font-family:&#39;微软雅黑&#39;,sans-serif;color:black"><br/> </span><span style=";line-height:200%;font-family: 宋体;color:black">第9条 其他&nbsp;</span><span style=";line-height:200%;font-family:&#39;微软雅黑&#39;,sans-serif;color:black"><br/> </span><span style=";line-height:200%;font-family:宋体;color:black">9.1</span><span style=";line-height:200%;font-family:宋体;color:black">天津量研科技有限公司网站所有者是指在政府部门依法许可或备案的天津量研科技有限公司网站经营主体。&nbsp;</span><span style=";line-height:200%;font-family:&#39;微软雅黑&#39;,sans-serif;color:black"><br/> </span><span style=";line-height:200%;font-family:宋体;color:black">9.2</span><span style=";line-height:200%;font-family:宋体;color:black">天津量研科技有限公司尊重用户和消费者的合法权利，本协议及本网站上发布的各类规则、声明等其他内容，均是为了更好的、更加便利的为用户和消费者提供服务。本站欢迎用户和社会各界提出意见和建议，天津量研科技有限公司将虚心接受并适时修改本协议及本站上的各类规则。&nbsp;</span><span style=";line-height:200%;font-family:&#39;微软雅黑&#39;,sans-serif;color:black"><br/> </span><span style=";line-height:200%;font-family:宋体;color:black">9.3</span><span style=";line-height:200%;font-family:宋体;color:black">本协议内容中以黑体、加粗、下划线、斜体等方式显著标识的条款，请用户着重阅读。&nbsp;</span><span style=";line-height:200%;font-family:&#39;微软雅黑&#39;,sans-serif;color:black"><br/> </span><span style=";line-height:200%;font-family:宋体;color:black">9.4</span><span style=";line-height:200%;font-family:宋体;color:black">您点击本协议下方的&quot;同意并继续&quot;按钮即视为您完全接受本协议，在点击之前请您再次确认已知悉并完全理解本协议的全部内容。</span>\n' +
        '</p>\n' +
        '<p>\n' +
        '    &nbsp;\n' +
        '</p>\n' +
        '<p>\n' +
        '    <br/>\n' +
        '</p>'
      }}>

      </div>
    )
  }
}

export default Clause
