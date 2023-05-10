import React from "react";
import logo from '../../assets/images/Todolist.jpg';
import { Connect, connect } from "react-redux";
class Home extends React.Component{
    render(){
        console.log(">>>> check props:", this.props.dataRedux)
        return(
            <>
                <div>
                    Homes
                </div>
                <div>
                    <img src={logo} />
                </div>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return{dataRedux : state.users} 
}
export default connect(mapStateToProps)(Home)