import React from 'react'
import { Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const bannerStyles = makeStyles(theme => ({    
    banner: {    
        margin: theme.spacing(0, 0.5, 0, 0.5),
        backgroundSize: '100% 96%',
        backgroundRepeat: 'no-repeat',
        padding: theme.spacing(5.15, 0),
        backgroundImage: `url(${"https://docs.google.com/uc?id=1n2OScKaROTPZ1RJ9XgPSjbqLtSrVukLF&export=download"})`,
    }
}))

export default function Banner() {
    const classes =  bannerStyles()
    return <Paper className={classes.banner} />
}