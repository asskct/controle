import { makeStyles } from '@material-ui/core/styles'
import { green } from '@material-ui/core/colors'

export const useStyles = makeStyles(theme => ({
    root: {
        margin: '0 auto',
        width: '100vw',
        maxWidth: 800,
        background: green[600],
    },
    trow: {
        display: 'flex',
        flexFlow: 'row wrap',
        flexDirection: 'row',
        justifyContent: 'center',
        
    },
    tcol: {
        flex: 1,
        width: '100vw',
        minWidth: 345,
        padding: theme.spacing(0, 0.8),
    },
    paper: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: theme.spacing(0.5),
    },
}))