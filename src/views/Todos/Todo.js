import React from 'react';
import AddTodo from './AddTodo';
import AddTodoHook from './AddTodoHook';
import TodoContent from './TodoContent';
import './Todo.scss';
class ListTodo extends React.Component{
  

    render() {
        
        return(
            <div className='container-todo'>
                <div className='container-list-todo'>
                    
                    <div className='list-content'>
                        <TodoContent
                        />
                    </div>
                </div>
                <div className='container-list-todo-hook'>
                    <div className='list-input-hook'>
                        <AddTodoHook
                        />
                    </div>
                <div className='container-todo-hook-content'>

                </div>
            </div> 
            </div>
        )
    }
}
export default ListTodo 