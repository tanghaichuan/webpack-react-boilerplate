import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classname from 'classnames'

export default class PanelContent extends Component {
  static defaultProps = {
    isActive: false
  }
  static propTypes = {
    isActive: PropTypes.bool
  }
  constructor() {
    super()
  }
  render() {
    const { children, isActive } = this.props
    const contentCls = classname({
      [`panel-content`]: true,
      [`panel-content-active`]: isActive,
      [`panel-content-inactive`]: !isActive
    })
    const child = <div className="content-box">{children}</div>
    return <div className={contentCls}>{child}</div>
  }
}
