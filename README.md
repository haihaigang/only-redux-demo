# Redux Overview

Redux 是一个状态管理容器

## 动机

因状态多、变更复杂，为了能清晰知道状态什么时候变化、为什么变化、怎么变化而设计

## 三大原则

- 单一数据源
- 数据源是只读
- 纯函数更新

## 数据流

单向数据流，包含4个部分， store、view(UI)、action、reducer

初始化阶段

`store -> getState -> view -> subscribe`

更新阶段

`view -> click event -> action -> dispatch -> reducer -> store -> subscribe -> view`

## 核心概念

Actions Reducers Store

Actions 是一个普通的对象，包含一个 type 字段，可以认为它是一个事件用来描述有什么事发生了。
Reducers 是一个函数，接受当前的 state 和 action，并决定如何更新，然后返回一个新的 state。
Store 是一个普通对象，包含应用的全局的状态。

类比动机

- Actions 是为什么变化
- Store(dispatch) 是什么时候变化
- Reducers 是怎么变化

## reducers 的三条规则

`默认一定要返回已经存在的 state`

- 返回新的状态，只应该用已有的 state 和 action 计算出一个新的 state
- 不可变更改，更改 state 只能是不可变更新，不能直接改变 state 的引用
- 无副作用，更改中不应该包含异步逻辑等引起副作用的


## actions

- action 是一个普通的对象，约定要包含 type 字段
- action 中其他的附加的数据约定放到 payload 字段下
- 每个 action 描述一个状态的变化，像 数据加载成功、数据加载失败、获取数据 可以分为三个


## store

- 全局只有一个 store 对象
- createStore 方法创建
- applyMiddleware 可以扩展中间件

```
const store = createStore(rootReducer, applyMiddleware(m1, m2, m3,...))

```


### store 对象的方法

- getState 获取状态
- subscribe 订阅状态的变化
- dispatch 触发一个状态的变化