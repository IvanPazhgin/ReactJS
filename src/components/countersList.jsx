import React, {useState}  from "react";
import Counter from "./counter";

const CountersList = () => {
  const initialState = [
    { id: 0, value: 1, name:'Ненужная вещь', },
    { id: 1, value: 4, name:'Ложка' },
    { id: 2, value: 2, name:'Вилка' },
    { id: 3, value: 0, name:'Тарелка' },
    { id: 4, value: 0, name:'Набор минималиста' },
  ]

  const [counters, setCounters] = useState(initialState)

  const handleDelete = (id) => {
    const newCounters = counters.filter(item => item.id !== id)
    setCounters(newCounters)
  }

  const handleReset = () => {
    setCounters(initialState)
  }

  const handleIncrement = (id) => {
    setCounters(
      counters.map(
        counter => counter.id === id ? {...counter, value: counter.value + 1} : counter
      )
    )
  }

  const handleDecrement = (id) => {
    setCounters(
      counters.map(
        counter => counter.id === id ? {...counter, value: counter.value - 1} : counter
      )
    )
  }

  return <>
    {counters.map(count =>
      <Counter
        key = {count.id}
        // id = {count.id}
        // value = {count.value}
        // name = {count.name}
        onDelete = {handleDelete}
        increment = {handleIncrement}
        decrement = {handleDecrement}

        {...count} // еще один способ передачи данных
      />
      // пример передачи значений через children
      // <Counter key = {count.id} value = {count.value}>
      //   <span>{count.name}</span>
      // </Counter>
    )}
    <button className="btn btn-primary btn-sm m-2" onClick={handleReset}>Сброс</button>
  </>
}

export default CountersList