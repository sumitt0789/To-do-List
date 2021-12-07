import React from "react";
import { useState } from "react";
import "./App.css"
import List from './List';
function App() {


  const [currentItem, setCurrentItem] = useState("")

  const [itemList, updateItemList] = useState([]);

  const onChangeHandler = e => {

    console.log("current value", e.target.value);

    setCurrentItem(e.target.value);
  };

  const addItemToList = () => {
    updateItemList([...itemList, { item: currentItem, key: Date.now }]);

    console.log("list item", itemList);

  }
  return (
    <div className="App" >

      <header className="App-header">

        <div className="Wrapper">

          <div className="Input-Wrapper">
            <input
              placeholder="Add item"

              onChange={onChangeHandler} />

            <button onClick={addItemToList}>Add</button>

          </div>

          <List itemList={itemList} updateItemList={updateItemList} />

        </div>

      </header>

    </div >
  );
}

export default App;