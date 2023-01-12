import React from 'react'
import MaterialUiThem from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'


const success = () => {
  return (
    <MaterialUiThem>
        <AppBar title = 'Success Page' />
        <h2> THANK YOU FOR YOUR SUBMISSION</h2>
    </MaterialUiThem>
  )
}

export default success