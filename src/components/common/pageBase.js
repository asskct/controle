import React from 'react'
import FixAppBar from './fixAppBar'
import Banner from './banner'
import { makeStyles } from '@material-ui/core/styles'

export const rootStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        height: '100vh',
        width: '100vw',
        margin: '0 auto',
        maxWidth: 800,
        background: theme.palette.primary.main,
    },
    right: {
        flex: 1,
        position: 'relative',            
    },
    wrapper: {
        display: 'flex',
        flexFlow: 'row wrap',
        flexDirection: 'column',        
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
    header: {
      flex: 1,                     
      background: theme.palette.primary.main,
    },
    body: {
        flex: 14,        
        overflowY: 'auto',
        overflowX: 'hidden'
    },
    footer: {
        flex: 1,
        background: 'green',
    }
}))

function pageBase({ children,  title }) {
    const classes = rootStyles()

    return (
        <div className={classes.container}>            
            <div className={classes.right}>
                <div className={classes.wrapper}>
                    <div className={classes.header}>
                        <FixAppBar titulo={title} />                        
                    </div>
                    <div className={classes.body}>{ children }</div>
                    <div className={classes.footer}></div>
                </div>
            </div>
        </div>       
    )
}

export default pageBase
