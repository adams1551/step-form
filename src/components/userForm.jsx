import React, {Component} from 'react'
import emilajs from 'emailjs-com'
import Personal from './personal'
import Confirm from './confirm'
import Success from './success'
import UserDetials from './userDetials'


class UserForm extends Component {
    state = { 
        step: 1,
        firstName: '',
        lastName: '',
        email: '',
        occupation: '',
        city: '',
        bio: ''
     } 

     next = ()=>{
        const {step} = this.state
        this.setState({step: step + 1})
     }
     previous = ()=>{
        const {step} = this.state;
        this.setState({step: step - 1})
     }
     handleChange = input => e =>{
        this.setState({[input]: e.target.value})
     }
     handleSubmit = e =>{
        
        emilajs.sendForm('gmail',"template_q728iva", e.target.value, 'Gmail')
     }

    render() { 
        const {step} = this.state;
        const {firstName, lastName, email,
            occupation, bio, city} = this.state;
             const values = {firstName, lastName, email, occupation,city, bio}
       switch(step){
        case 1:
            return(
                <UserDetials
                next ={this.next}
                handleChange = {this.handleChange}
                values = {values}
                
                />
            )
        case 2:
            return(
                <Personal 
                next= {this.next}
                handleChange = {this.handleChange}
                previous = {this.previous}
                values = {values}
                />
               
            )
        case 3:
            return(
                <Confirm
                next= {this.next}
                previous = {this.previous}
                values = {values}
                handleSubmit = {this.handleSubmit}
                 />
            )
        case 4:
            return(
                <Success

                 />
            )
        
       }
    }
}
 
export default UserForm;