import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { ToDoList } from './ToDoList';


export class App extends Component {

  constructor() {
    super()

    this.state = {
      item: '',
      items: []
    }
  }

  itemText = (e) => {
    
    this.setState({
      item: e.target.value
    })
  }

  addClick = () => {

    let item = this.state.item
    this.setState({
      items: this.state.items.concat(item)
    })
  }  

  removeItem = (name) => {

    this.setState({
      items: this.state.items.filter((item) => item != name)
    })
  }

  render() {
    return (
      <div className='to-do-list'>
        <h2 className='title'>To Do List</h2>
        <h4 className='subTitle'>Mk. 4</h4>
        <input onChange={this.itemText} type='text'/>
        <button onClick={this.addClick}>Add</button>
        <h6 className='pending-title'>Pending Items</h6>
        <ToDoList items={this.state.items} removeItemCallback={this.removeItem}></ToDoList>
      </div>
    )
  }

  
}

export default App;
