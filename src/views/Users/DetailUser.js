import React from "react";
import {withRouter} from 'react-router-dom'
import axios from "axios";
import './DetaildUser.scss'
class Detail extends React.Component{
    state = {
        user : {}
    }
    async componentDidMount(){
        if(this.props.match && this.props.match.params){
            let id = this.props.match.params.id;
            let res = await axios.get(`https://reqres.in/api/users/${id}`);
            this.setState({
                user: res && res.data && res.data.data ? res.data.data : {}
            })
        }
    }
    handleBackButton = () => {
        this.props.history.push('/user')
    }
    render() {
        let {user} = this.state;
        console.log('this is user :', user)
        let isEmptyObj = Object.keys(user).length === 0 ; 
        return(
            <div className="container">
                <table className="container-table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>User's name</th>
                            <th>User's email</th>
                            <th>Image</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{user.id}</td>
                            <td>{user.first_name}{" "}{user.last_name}</td>
                            <td>{user.email}</td>
                            <td>
                                <img src={user.avatar}/>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div className="user-btn">
                    <button onClick={() => this.handleBackButton()} className="user-btn-back"> Back </button>
                </div>
            </div>
        )
    }
}
export default withRouter(Detail)