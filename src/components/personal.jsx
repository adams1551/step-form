import React, {Component} from 'react'
import MaterialUiThem from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

class Personal extends Component {
    state = {  } 
    continue = e =>{
        e.preventDefault()
        this.props.next()
    }
    prevStep = e => {
        e.preventDefault()
        this.props.previous()
    }
    render() { 
        const {values, handleChange} = this.props;
        return (
            <div>
                <MaterialUiThem>
                    <>
                        <AppBar title= 'Enter Personal Details' />
                        <TextField hintText= 'Enter your Occupation'
                        floatingLabelText = 'Occupation'
                        onChange={handleChange('occupation')}
                        defaultValue = {values.occupaiton} />
                        <br />
                        <TextField hintText= 'Enter your City'
                        floatingLabelText = 'City'
                        onChange={handleChange('city')}
                        defaultValue = {values.city} />
                        <br />
                        <TextField hintText= 'Enter your Bio'
                        floatingLabelText = 'Bio'
                        onChange={handleChange('bio')}
                        defaultValue = {values.bio} />
                    </>
                    <div className='btn'>
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
                    </div>
                </MaterialUiThem>
            </div>
        );
    }
}
 const style = {
    button: {
        marigin: 15
    }
 }
export default Personal;