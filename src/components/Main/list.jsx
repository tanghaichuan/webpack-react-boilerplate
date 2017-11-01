import React, {Component} from 'react'

const arr = [
  {
    username: 'Jerry',
    age: 21,
    gender: 'male'
  }, {
    username: 'Tomy',
    age: 22,
    gender: 'male'
  }, {
    username: 'Lily',
    age: 19,
    gender: 'female'
  }, {
    username: 'Lucy',
    age: 20,
    gender: 'female'
  }
]

export default class extends Component {
  constructor() {
    super()

  }
  render() {
    return (   // 将原数组映射为vdom数组
      <div>
        {arr.map((user, index) => {  // 
          return (
            <div key={index}>
              <div>姓名：{user.username}</div>
              <div>年龄：{user.age}</div>
              <div>性别：{user.gender}</div>
              <hr/>
            </div>
          )
        })}
      </div>
    )
  }
}


