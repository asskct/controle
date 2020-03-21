import React from 'react'
import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import IconButton from '@material-ui/core/IconButton'

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        margin: theme.spacing(0.3),
        padding: theme.spacing(0.6, 0, 0, 0),
    },
    button: {
        border: "1px solid #e7e7e7"
    },
}))

function prevDef(e) { return e.preventDefault() }

function ContainerButton({ children, label, action = prevDef }) {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <IconButton
                onClick={action}
                className={classes.button}
                label={label}>
                {children}
            </IconButton>
            <Typography>{label}</Typography>
        </div>
    )
}

export default ContainerButton
