import React from "react";
import logo from '../../assets/images/Todolist.jpg';
import { Connect, connect } from "react-redux";
import './Test.scss'
class Test extends React.Component{
    handleDeleteUser = (user) => {
        console.log(user)
    }
    render(){
        console.log(">>>> check props:", this.props.dataRedux)
        let listUser = this.props.dataRedux
        return(
            <div className="container-home">
                <div className="container-home-content">
                    Homes
                </div>
                <div className="container-home-img">
                    <img src={logo} className="container-home-img-photo"/>
                </div>
                <div>
                     {listUser && listUser.length > 0 && 
                     listUser.map((item,index) => {
                        return (
                            <div key={item.id}>
                                <span>{index + 1}. {item.name} </span>
                                <i 
                                    type="button"
                                    className="fa-regular fa-circle-xmark "
                                    onClick={()=> this.handleDeleteUser(item)}>
                                </i> 
                            </div>
                        )
                     })}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{dataRedux : state.users} 
}
const mapDispatchToProps = (dispatch) => {
    return {
        deleteUserRedux : (userDelete) => dispatch({ type: "DELETE_USER", payload: userDelete })
    }
}
export default connect(mapStateToProps)(Test)