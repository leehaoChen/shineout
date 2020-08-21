/**
 * cn - 使用DefaultTime格式化时间
 *    -- type=datetime或者format含有时间格式时，可以使用 resetWithDefaultTime 来格式化时间字段。注意：如果传入的defaultTime与format格式不一致，将会保留原本的Time值。
 * en - use DefaultTime to format time
 *    -- When type=datetime or format contains a time format, you can use resetWithDefaultTime to format the time field. Note: If the incoming defaultTime is inconsistent with the format, the original Time value will be retained.
 */
import React, { Component } from 'react'
import { DatePicker } from 'shineout'

export default class extends Component {
  constructor(props) {
    super(props)
    this.state = { value: new Date() }
    this.handleValueChange = this.handleChange.bind(this, 'value')
  }

  handleChange(type, value) {
    this.setState({ [type]: value })
  }

  render() {
    return (
      <div>
        <DatePicker
          placeholder="format datetime with resetWithDefaultTime"
          type="datetime"
          resetWithDefaultTime
          defaultTime={['00:00:00.999']}
          style={{ marginRight: 12 }}
          format="yyyy-MM-dd HH:mm:ss.SSS"
          value={this.state.value}
          onChange={this.handleValueChange}
        />
      </div>
    )
  }
}
