import { useState } from "react" ;

function AddTodoHook () {
    let [name, setName] = useState('')
    let [listTodos, setTodos] = useState([
        {id: 'todo1', name: 'Tuan Anh'},
        {id: 'todo2', name: 'Reactjs'},
        {id: 'todo3', name: 'You will be success'},
    ])
    const handleOnChangeName = (event) => {
        setName(event.target.value)
    }
    const handleAddNewTodo = () => {
        let todo = {id : Math.floor(Math.random()*100), name : name}
        setTodos([
            ...listTodos, todo
        ])
        setName(" ")
    }
    
    const handleDeleteTodo = (item) => {
        let newListTodo = listTodos.filter(_ => _.id !== item)
        setTodos(newListTodo)
    }
    const editList = (item) => {
        console.log(item)
    }   
    return(
        <div className="list-input-hook">
            <p>
                What's the Plan for Today ?
            </p>
            <p>
                With ReactHook
            </p>
            <div className='add-todo-hook'>
                <input 
                    className='add-todo__input-hook'
                    placeholder='Input more todo'
                    value={name}
                    onChange={(event)=> handleOnChangeName(event)}
                    />
                <button 
                    type='button-hook' 
                    className='add-todo__btn-hook'
                    onClick={()=>handleAddNewTodo()}
                    >Add</button>
            </div>
            <div className="list-content__child-hook">
                {listTodos && listTodos.length > 0 && listTodos.map((item, index) => {
                    let isEmptyObj = Object.keys(listTodos).length === 0
                return (
                    
                    <div className="list-content__child-item-hook">
                        <div className="list-content__child-text-item-hook">
                            {index + 1}.{" "}{item.name}
                        </div> 
                        <div className="list-content__child-btn-hook">
                            <i className="fa-regular fa-pen-to-square list-content__child-btn--edit list-content__child-btn-hover" onClick={()=> editList(item)}></i>
                            <i 
                                type="button"
                                className="fa-regular fa-circle-xmark list-content__child-btn--delete list-content__child-btn-delete list-content__child-btn-hover"
                                onClick={()=> handleDeleteTodo(item.id)}>
                            </i>
                        </div>
                    </div>
                )
            })}
            </div>
        </div>
    )
}
export default AddTodoHook