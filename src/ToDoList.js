import React, {Component} from 'react'
import './ToDoList.css'


export class ToDoList extends Component {

    removeItem = (name) => {
        this.props.removeItemCallback(name)
    }

    render() {

        let items = this.props.items

        let itemsToDo = items.map((items) => {
            return (
                <li>{items}<button onClick={() => this.removeItem(items)}>Remove</button></li>
            )
        })
        return (
            <ul>{itemsToDo}</ul>
        )
    }

}