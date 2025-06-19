import React from 'react'
import { Counter } from './counter/counter';
import {FilteredList} from "./FilteredList/FilteredList.jsx";


function App ()  {
  return (
    <div className="App">
        <h1>Пример</h1>
        <Counter/>
        <FilteredList/>
    </div>
  )
}

export default App;