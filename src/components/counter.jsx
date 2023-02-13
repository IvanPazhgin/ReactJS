import React, {useState} from "react";

// 1. реализация с оберткой div
const CounterDiv = () => {
  return (
    <div>
      <h1>Counter</h1>
      <button>+</button>
    </div>
  )
}

// 2. используется если нам необходимо наследовать стили от родительского компонента
const CounterOld = () => {
  return (
    <React.Fragment>
      <h1>Counter</h1>
      <button>+</button>
    </React.Fragment>
  )
}

// 3. краткий вариант записи React.Fragment => <> .. </>
// плюс отображение переменных, либо вложенных выражений
// но здесь мы не можем использовать JS код, а только: JS выражения, вызов функций и переменные
const Counter = ({id, value, name, onDelete, increment, decrement}) => {
  const formatCount = () => {
    return value === 0 ? 'empty' : value
    // const x = <h1>empty</h1>
    // return count === 0 ? x : count + 3
  }

  const getBadgeClasses = () => {
    let classes = 'badge m-2 '
    classes += value === 0 ? 'bg-warning' : 'bg-primary'
    return classes
  }

  return (
    <div>
      {/*{props.children}*/}
      <span> {name} </span>
      {/*<h1>Counter: {count + 3}</h1>*/}
      {/*<h1>Counter: {count === 0 ? 'empty' : count + 3}</h1>*/}
      <span className = {getBadgeClasses()}>
        {formatCount()}
      </span>
      <button
        className='btn btn-primary btn-sm m-2'
        onClick={ () => increment(id)}
      >
        +
      </button>

      <button
        className = 'btn btn-primary btn-sm m-2'
        onClick = { () => decrement(id) }
      >
        -
      </button>

      <button
        className="btn btn-danger btn-sm m-2"
        onClick = {() => onDelete(id)}
      >
        Delete
      </button>
    </div>
  )
}

export default Counter