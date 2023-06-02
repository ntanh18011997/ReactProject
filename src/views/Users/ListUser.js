import React from "react";
import axios from "axios";
import './ListUser.scss';
import { withRouter } from "react-router-dom";

class ListUser extends React.Component{
    state = {
        ListUser : []
    }
    async componentDidMount(){
        // axios.get("https://reqres.in/api/users?page=2")
        // .then(res => {
        //     console.log('check res :', res.data.data )
        // })
        let res = await axios.get("https://reqres.in/api/users?page=2")
        this.setState({
            ListUser: res && res.data && res.data.data ? res.data.data : []
        })
    }
    handleViewDetailUser = (user) => {
        this.props.history.push(`/user/${user.id}`)
    }
    render() {
        let {ListUser} = this.state;
        console.log(ListUser)
        return(
            <div className="list-user-container">
                <div className="title">
                    Get and render data from API <a>https://reqres.in/api/users?page=2</a> 
                </div>
                <p> You can click to know detail</p>
                <div className="list-user-content">
                    {ListUser && ListUser.length > 0 &&
                        ListUser.map((item,index) => {
                            return(
                                <div 
                                    className="child" 
                                    key={item.id} 
                                    onClick={() => this.handleViewDetailUser(item)}>
                                    <span>
                                        {index + 1 }.
                                    </span>
                                    <span>
                                        {item.first_name}  {item.last_name}
                                    </span>
                                </div>
                            )})}
                </div>
            </div>
        )
    }
}
export default withRouter(ListUser)