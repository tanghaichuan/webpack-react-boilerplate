import React, { Component } from 'react'
import PropTypes from 'prop-types'
import PanelContent from './panenContent'

export default class CollapsePanel extends Component {
  static defaultProps = {
    headerClass: 'item-panel-header'
  }
  handleItemClick() {
    const { onClickItem } = this.props
    if (onClickItem) {
      onClickItem()
    }
  }
  render() {
    const {
      className,
      id,
      style,
      header,
      headerClass,
      children,
      isActive
    } = this.props
    return (
      <div className={`item`} style={style} id={id}>
        <div
          className={`${headerClass}`}
          role="tab"
          onClick={this.handleItemClick.bind(this)}
        >
          {header}
        </div>
        <PanelContent isActive={isActive}>{children}</PanelContent>
      </div>
    )
  }
}
