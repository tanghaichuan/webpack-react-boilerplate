import React, { Component, Children, cloneElement } from 'react'
import Panel from './panel'
import PropTypes from 'prop-types'

function toArray(keys) {
  let arrKeys = keys
  if (!Array.isArray(arrKeys)) {
    arrKeys = arrKeys ? [arrKeys] : []
  }
  return arrKeys
}

class Collapse extends Component {
  static defaultProps = {
    prefixCls: 'collapse',
    className: 'collapse',
    defaultActiveKey: '1'
  }

  static propTypes = {
    children: PropTypes.any,
    className: PropTypes.string,
    style: PropTypes.object,
    defaultActiveKey: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.arrayOf(PropTypes.string)
    ])
  }

  constructor(props) {
    super(props)
    const { activeKey, defaultActiveKey } = this.props
    let currentActiveKey = defaultActiveKey
    if ('activeKey' in this.props) {
      currentActiveKey = activeKey
    }
    this.state = {
      activeKey: toArray(currentActiveKey)
    }
  }

  onClickItem(key) {
    let { activeKey } = this.state
    const index = activeKey.indexOf(key)
    const isActive = index > -1
    if (isActive) {
      activeKey.splice(index, 1)
    } else {
      activeKey.push(key)
    }
    // this.setActiveKey(activeKey)
    this.setState({ activeKey })
  }
  getItems() {
    const { children } = this.props
    const { activeKey } = this.state
    const newChildren = []
    Children.forEach(children, (child, index) => {
      //console.log(child, index)
      if (!child) return
      const key = child.key || String(index)
      let isActive = false
      isActive = activeKey.indexOf(key) > -1
      const { header, headerClass, disabled } = child.props
      const props = {
        key, // 这里的key传不进props
        header,
        headerClass,
        isActive,
        children: child.props.children,
        onClickItem: () => this.onClickItem(key)
      }

      newChildren.push(cloneElement(child, props))
    })
    return newChildren
  }

  render() {
    const { prefixCls, className, style } = this.props
    //console.log(children)
    return (
      <div className={className} style={style}>
        {this.getItems()}
      </div>
    )
  }
}

Collapse.Panel = Panel

export default Collapse
