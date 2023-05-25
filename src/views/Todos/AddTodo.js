 import React from "react";
 import { ToastContainer, toast } from 'react-toastify';
 class AddTodo extends React.Component{
    state = {
        name : ''
    }
    handleOnChangeName = (event) => {
        this.setState({
            name : event.target.value
        })
    }
    handleAddNewTodo = () => {
        if(!this.state.name){
            toast.error("Missing Name")
            return
        }
        let todo ={
            id : Math.floor(Math.random()*10000),
            name : this.state.name
        }
        this.props.AddTodos(todo)
        this.setState({
            name: ''
        })
    }
    render() {
        let {name} = this.state
        return(
            <div className="list-input">
                <p>
                    What's the Plan for Today ? 
                </p>
                <p>
                    With Class Component
                </p>
                <div className='add-todo'>
                    <input 
                        className='add-todo__input'
                        placeholder='Input more todo'
                        value={name}
                        onChange={(event)=> this.handleOnChangeName(event)}
                        />
                    <button 
                        type='button' 
                        className='add-todo__btn'
                        onClick={()=>this.handleAddNewTodo()}
                    >Add</button>
                </div>
            </div>
        )
    }
 }
 export default AddTodo 