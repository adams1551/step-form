import React, {Component} from 'react'
import MaterialUiThem from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import { blue300 } from 'material-ui/styles/colors'

class UserDetails extends Component {
    state = {  } 
    continue = e =>{
        e.preventDefault()
        this.props.next()
    }
    render() { 
        const {values, handleChange} = this.props;
        return (
            <div>
                <MaterialUiThem>
                    <>
                        <AppBar title= 'Enter User Details' />
                        <TextField hintText= 'Enter your First Name'
                        floatingLabelText = 'First Name'
                        onChange={handleChange('firstName')}
                        defaultValue = {values.firstName} />
                        <br />
                        <TextField hintText= 'Enter your Last Name'
                        floatingLabelText = 'Last Name'
                        onChange={handleChange('lastName')}
                        defaultValue = {values.lastName} />
                        <br />
                        <TextField hintText= 'Enter your Email'
                        floatingLabelText = 'Email'
                        onChange={handleChange('email')}
                        defaultValue = {values.email} />
                    </>
                        <br />
                        <br />
                        <RaisedButton 
                        label = 'Continue'
                        style = {style.button}
                        onClick = {this.continue} />
                </MaterialUiThem>
            </div>
        );
    }
}
 const style = {
    button: {
        marigin: 15,
        backgroundColor: blue300
    }
 }
export default UserDetails;