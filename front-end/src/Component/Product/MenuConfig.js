import { remove } from 'lodash'

export const menuList = [
  {
    name: '自选', child: []
  },
  {
    name: '跨产品对冲',
    child: [
      {
        name: '建材能源系',
        child: [
          '螺纹/热卷', '螺纹/焦炭', '热卷/焦炭', '螺纹/铁矿石', '焦煤/焦炭', '玻璃/螺纹', '玻璃/热卷', '焦炭/动力煤', '玻璃/焦炭', '玻璃/动力煤', '玻璃/焦煤',
          '螺纹/焦煤', '热卷/动力煤', '热卷/焦煤', '玻璃/铁矿石'
        ]
      },
      {
        name: '农产品系',
        child: [
          '菜籽粕/菜籽油', '菜籽油/豆油', '豆粕/豆油', '棕榈油/菜籽油', '棕榈油/豆油', '鸡蛋/菜籽粕', '鸡蛋/豆粕', '玉米/玉米淀粉', '鸡蛋/玉米'
        ]
      }, {
        name: '石化系',
        child: [
          '甲醇/动力煤', '塑料/PTA', '甲醇/塑料', '甲醇/聚丙烯', '甲醇/PTA', '甲醇/聚氯乙烯', '甲醇/焦煤', '甲醇/焦碳', '塑料/聚丙烯', '塑料/聚氯乙烯',
          'PTA/聚丙烯', '聚氯乙烯/聚丙烯', '聚氯乙烯/PTA'
        ]
      }
    ]
  }
]

export class LinkNode {
  constructor (parent, child, name) {
    this.parent = parent
    this.child = child
    this.name = name
  }

  appendChild = child => {
    this.child.push(child)
  }

  removeChild = child => {
    remove(this.child, child)
  }
}

export const generateMenuLinkList = menuList => {
  const rootNode = new LinkNode(null, [], '根菜单')

  const DF = (item, parentNode) => {
    item.forEach(child => {
      if (child.child) {
        const currentNode = new LinkNode(parentNode, [], child.name)
        parentNode.appendChild(currentNode)
        DF(child.child, currentNode)
      } else {
        parentNode.appendChild(new LinkNode(parentNode, null, child))
      }
    })
  }

  DF(menuList, rootNode)

  return rootNode
}

/**
 * 搜索并返回
 * @param {String} name
 * @param {LinkNode} linkList
 */
export const linkSearch = (name, linkList) => {
  if (linkList.name === name) {
    return linkList
  } else if (linkList.child) {
    let result = null
    linkList.child.forEach(child => {
      let callback = linkSearch(name, child)
      if (callback) {
        result = callback
      }
    })
    return result
  } else {
    return null
  }
}
