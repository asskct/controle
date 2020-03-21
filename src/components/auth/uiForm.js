import React, { useState, useRef } from 'react'
import {Visibility, VisibilityOff } from '@material-ui/icons'
import {
  makeStyles,
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
  InputAdornment,
  Button,
  IconButton
} from '@material-ui/core'

import validate from './validateLogin'
import useForm from '../common/useForm'
import { signIn } from '../../store/actions/authActions'

export default function Form() {  
  const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: "center",
      alignItems: "center"
    },
    textField: {
      width: '100%',
      margin: theme.spacing(1),
    },
    changeError: {
      color: 'red',
      fontSize: '10px'
    },    
    submitError: {
      color: 'red',
      fontSize: '12px'
    }
  }))

  const classes = useStyles()
  const emailRef = useRef(null)
  const passwRef = useRef(null)
  const [showPassword, setShowPassword] = useState(false)
  const [handleSubmit, changeError, submitError] = useForm(signIn, validate, [emailRef, passwRef])

  const handleClickShowPassword = event => {
    event.preventDefault();
    setShowPassword(!showPassword)
  }

  return (
    <form 
      onSubmit={handleSubmit}
      className={classes.root}
      noValidate
      autoComplete="off">
      <FormControl className={ classes.textField }>
        <InputLabel htmlFor="standard-adornment-email">Email</InputLabel>
        <Input type="text" inputRef={emailRef} name="email"/>
        {changeError.email && <FormHelperText className={classes.changeError}>{changeError.email}</FormHelperText>}        
      </FormControl>          
        <FormControl className={ classes.textField }>
          <InputLabel htmlFor="standard-adornment-password">Senha</InputLabel>
          <Input
            inputRef={passwRef}
            name="password"          
            type={showPassword ? 'text' : 'password'}     
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  color="default"
                  onClick={handleClickShowPassword}>
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />
        <FormHelperText className={classes.changeError}>{changeError.password}</FormHelperText> 
      </FormControl>      
      <Button 
        fullWidth         
        type="submit"            
        color="primary"
        variant="contained">
         LOGIN
      </Button>                 
      <FormHelperText className={classes.submitError}>{submitError}</FormHelperText>
    </form>
  )
}
