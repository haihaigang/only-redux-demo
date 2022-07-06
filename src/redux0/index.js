// import logo from './logo.svg';
// import './App.css';
import store from './store';
import { useCallback } from 'react';
import Todo from './Todo'
import useTodos from './hooks/useTodos';
import useCount from './hooks/useCount';

import addTodo from './services/add_todo';

function App() {
  // 可以把下面用法放到一个自定义 hook 中
  // const [todos, setTodos] = useState(store.getState().todos)
  // useEffect(() => {
  //   let unsubscribe = store.subscribe(() => {
  //     if (store.getState().todos !== todos) {
  //       console.log('store.getState()', store.getState())
  //       setTodos(store.getState().todos)
  //     }
  //   })

  //   return unsubscribe
  // },[])

  const todos = useTodos(store)
  const count = useCount(store)

  const add = ({name}) => {
    store.dispatch(() => {
      addTodo('hello').then(data => {
        store.dispatch({type: 'add', payload: { name: data.name }})
      })
    })
  }

  const remove = useCallback((e) => {
    e.preventDefault()
    store.dispatch({type: 'remove', payload: e.target.dataset.id})
  }, [])

  const countUp = () => {
    store.dispatch({type: 'countadd'})
  }

  console.log('render')

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={countUp}>count++</button>
        <button onClick={add}>add {count}</button>
        <section>
          {
            todos.map((todo) => {
              return(
                <Todo key={todo.id} todo={todo} remove={remove} />
                // <div key={todo.id}>{todo.id} {todo.name} <a href="#" onClick={remove} data-id={todo.id}>remove</a></div>
                )
              })
            }
        </section>
      </header>
    </div>
  );
}

export default App;
