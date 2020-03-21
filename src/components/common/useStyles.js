import { makeStyles } from '@material-ui/core/styles'
import { green } from '@material-ui/core/colors'

export const useStyles = makeStyles(theme => ({
    root: {
        maxWidth: 800,
    },
    trow: {
        display: 'flex',
        flexFlow: 'row wrap',
        flexDirection: 'row',
        justifyContent: 'center',
        background: green[600],
    },
    tcol: {
        flex: 1,
        minWidth: 345,
        padding: theme.spacing(0, 0.8),
    },
    paper: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: theme.spacing(0.5),
    },
}))