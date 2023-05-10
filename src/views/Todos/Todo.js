import React from 'react';
import './Todo.scss';
import 'font-awesome/css/font-awesome.min.css';
import AddTodo from './AddTodo';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

class ListTodo extends React.Component{
    state = {
        listTodo: [
            {id : 'todo1',name : 'Nguyen Tuan Anh'},
            {id : 'todo2',name : 'Demo Auto 1'},
            {id : 'todo3',name : 'Demo Auto 2'},
        ],
        editTodo : {
        }
    }
    AddTodo = (todo) => {
        let currentTodo = this.state.listTodo
        currentTodo.push(todo)
        this.setState({
            listTodo : currentTodo
        })
        toast.success('Add success!')
    }
    handleDeleteTodo = (item) => {
        let currentTodo = this.state.listTodo
        currentTodo = currentTodo.filter(todo => todo.id !== item.id )
        console.log(currentTodo)
        this.setState({
            listTodo : currentTodo
        })
        toast.success('Delete successed!')
    }
    handleEditTodo = (todo) => {
        let {editTodo} = this.state 
        let {listTodo} = this.state
        let isEmptyObj = Object.keys(editTodo).length === 0;
        if(isEmptyObj === false && editTodo.id === todo.id){
            let listTodoCopy = [...listTodo]
            //Find index of specific object using findIndex method.    
            let objIndex = listTodoCopy.findIndex((item => item.id === todo.id));
            //Update object's name property.
            listTodoCopy[objIndex].name = editTodo.name;
            this.setState({
                listTodo : listTodoCopy,
                editTodo : {},
            })
            toast.success('Update success!')
            return;
        }
        this.setState({
            editTodo : todo
        })
    }
    handleOnChangEditTodo = (event) => {
        let editTodoCopy = {...this.state.editTodo}
        editTodoCopy.name = event.target.value 
        this.setState({
            editTodo : editTodoCopy
        })
    }

    render() {
        let {listTodo} = this.state;
        let {editTodo} = this.state;
        let isEmptyObj = Object.keys(editTodo).length === 0; // If editTodo == empty => true ;  // If editTodo !== empty => false;
        console.log("check editTodo", isEmptyObj)
        return(
            <div className='container-list-todo'>
                <AddTodo
                    AddTodo = {this.AddTodo}
                />
                {/**/ }
                <div className='list-content'>
                {listTodo && listTodo.length && listTodo.map((item, index )=> {
                    return(
                        <div className='list-content__child' key={item.id}>
                            <span 
                                className='list-content__child-text'> 
                                {isEmptyObj === true ? 
                                    <span>
                                        {index + 1}. {item.name}
                                    </span>
                                    :
                                    <>
                                    {editTodo.id === item.id ?
                                        <span>
                                            {index + 1}. <input 
                                                value={editTodo.name}
                                                onChange={(event) => this.handleOnChangEditTodo(event)}
                                                />
                                        </span>
                                        :
                                        <span>
                                            {index + 1}. {item.name}
                                        </span>
                                    }
                                    </>
                                    }
                            </span>
                            <div className='list-content__child-btn'>
                                {/* <button className='list-content__child-btn-add'>Edit</button> */}
                                {isEmptyObj === false && editTodo.id === item.id ? 
                                     <i class="fa-solid fa-floppy-disk"
                                        onClick={()=> this.handleEditTodo(item)}></i> 
                                     :
                                     <i 
                                        type="button"  
                                        className="fa-regular fa-pen-to-square list-content__child-btn-edit"
                                        onClick={()=> this.handleEditTodo(item)}
                                        >
                                    </i>
                                }
                                {/* <button className='list-content__child-btn-delete'>Delete</button> */}
                                <i 
                                    type="button"
                                    className="fa-regular fa-circle-xmark list-content__child-btn-delete"
                                    onClick={()=> this.handleDeleteTodo(item)}>
                                </i>
                            </div>
                        </div>
                    )
                })}
                </div>
            </div>
        )
    }
}
export default ListTodo 