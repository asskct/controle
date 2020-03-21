
import clsx  from 'clsx'
import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Avatar, CardHeader } from '@material-ui/core'

import { Card, CardContent, CardMedia, CardActions, Typography, Link } from '@material-ui/core'

import Form from './uiForm'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',    
  },
  padding: {
    padding: theme.spacing(2)
  },
  rowend: {
    alignItems: 'flex-end',
  },
  rowcenter: {
    alignItems: 'center',
  },
  reset: {
    padding: theme.spacing(1),
  },
  media: {
    paddingTop: theme.spacing(24),
    paddingBottom: theme.spacing(15),
  },
}))

export default function Login() {
  const classes = useStyles()
  return (
    <div className={ clsx(classes.root, classes.rowcenter) }>
      <Card >
        <CardHeader
          className={classes.padding}
          avatar={ <Avatar src="favicon.ico" /> }          
          titleTypographyProps={{variant:'button', color:'primary' }}
          title="Americanados Esporte Clube"
          subheaderTypographyProps={{variant:'caption', color:'primary' }}
          subheader="Fundado em 06 de Junho de 1992"/>
        <CardContent className={classes.padding}>        
          <Form />        
        </CardContent>
        <CardActions className={ clsx(classes.root, classes.rowend, classes.reset) } disableSpacing>
          <Typography>         
            <Link
              component="button"
              variant="body2"
              onClick={() => {
                console.info("I'm a button.");
              }}>
              Esqueci a Senha
            </Link>
          </Typography>
        </CardActions>
        <CardMedia
          className={classes.media}
          image="/aguia512.png"
          title="Paella dish" />    
      </Card>
    </div>
  )
}
