import React, { Component } from 'react'
import ProTypes from 'prop-types'
import './style/index.less'

export default class Button extends Component {
  static defaultProps = {
    prefixCls: 'btn',
    loading: false,
    type: 'primary'
  }

  static proTypes = {
    type: ProTypes.string,
    loading: ProTypes.bool,
    className: ProTypes.string,
    icon: ProTypes.string,
    onClick: ProTypes.func
  }
  constructor(props) {
    super(props)
    this.state = {
      loading: props.loading,
      clicked: false
    }
  }

  componentWillReceiveProps(nextProps) {
    const loading = nextProps.loading
    const currentLoading = this.props.loading
    this.setState({ loading })
  }

  handleClick(e) {
    const onClick = this.props.onClick
    if (onClick) {
      onClick(e)
    }
  }

  render() {
    const { type, prefixCls, children } = this.props
    const { loading, clicked } = this.state
    const kids = loading ? 'loading' : children
    //const insertChild = React.Children.count(children) === 1 && (!iconType || iconType === 'loading')
    //console.log(this.props)

    const classes = `${prefixCls} ${prefixCls}-${type}`
    return (
      <button onClick={this.handleClick.bind(this)} className={classes}>
        {kids}
      </button>
    )
  }
}
