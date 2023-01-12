import React, {Component} from 'react'
import MaterialUiThem from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import {List, ListItem} from 'material-ui/List'
import RaisedButton from 'material-ui/RaisedButton'
import { blue300 } from 'material-ui/styles/colors'

class Confirm extends Component {
    state = {  } 
    continue = e =>{
        e.preventDefault()
        this.props.next()
        this.props.handleSubmit()
    }
    prevStep = e =>{
        e.preventDefault();
        this.props.previous()
    }
    render() { 
        const {values :{ firstName, lastName, email, occupation, city, bio}} = this.props;
        return (
            <div>
                <MaterialUiThem>
                    <>
                        <AppBar title= 'Enter User Details' />
                        <List>
                            <ListItem 
                            primaryText= 'First Name'
                            secondaryText = {firstName}
                            />
                            <br />
                            <ListItem 
                            primaryText= 'Last Name'
                            secondaryText = {lastName}
                            />
                            <br />
                            <ListItem 
                            primaryText= 'Email'
                            secondaryText = {email}
                            />
                            <br />
                            <ListItem 
                            primaryText= 'Occupation'
                            secondaryText = {occupation}
                            />
                            <br />
                            <ListItem 
                            primaryText= 'City'
                            secondaryText = {city}
                            />
                            <br />
                            <ListItem 
                            primaryText= 'Bio'
                            secondaryText = {bio}
                            />
                        </List>
                    </>
                        <br />
                        <br />
                        <RaisedButton 
                        label = 'Continue'
                        style = {style.button}
                        onClick = {this.continue} />
                        <br />
                        <br />
                        <RaisedButton 
                        label = 'Previous'
                        style = {style.button}
                        onClick = {this.prevStep} />
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
export default Confirm;