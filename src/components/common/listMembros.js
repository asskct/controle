import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
    List,
    ListItem,
    ListItemText,
    ListItemAvatar,
    Divider,
    Typography,
    Avatar
} from '@material-ui/core'

const styleList = makeStyles(theme => ({
    list: {
        display: 'flex',
        flexDirection: 'row',
    },
    inline: {
        display: 'block',
    },
}))

function listMembros() {
    const classes = styleList()

    return (
        <List className={classes.list}>
            <ListItem button alignItems="flex-start" onClick={() => console.log('ok')} >
                <ListItemAvatar>
                    <Avatar alt="Travis Howard" src="https://docs.google.com/uc?id=0B8DqXRXBW8yIcU8xUGRvcjhJMms&export=download" />
                </ListItemAvatar>
                <ListItemText
                    primary="Fulano"
                    secondary={
                        <Typography
                            component="span"
                            variant="body2"
                            className={classes.inline}
                            color="textPrimary"
                        > Zagueiro
                        </Typography>
                    }
                />
            </ListItem>
            <Divider variant="inset" component="li" />           
        </List>
    )
}

export default listMembros
