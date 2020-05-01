import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  Card,
  CardMedia,
  CardActions,
  CardContent,
  Button,
  Typography
} from '@material-ui/core'

const mediCardStyles = makeStyles(theme => ({
  card: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: theme.spacing(0.5),
  },
  reset: {
    margin: theme.spacing(0),
    padding: theme.spacing(0, 0.5)
  },
  media: {
    flex: 1,
    minHeight: 200   
  }
}))

export default function MediaCard({ Item } ) {  
  const classes = mediCardStyles()

  return (
    <Card className={classes.card}>
      <CardMedia        
        image={Item.image}
        title={Item.title}
        className={classes.media} />
      <CardContent className={classes.reset}>
        <Typography
          gutterBottom variant="h5"
          component="h2"
          className={classes.reset}>
          { Item.header }
        </Typography>
        <Typography 
          variant="body2"
          color="textSecondary"
          component="p"
          className={classes.reset}>
          { Item.resumo }
        </Typography>
      </CardContent>
      <CardActions>
        <Button          
          size="small"
          color="secondary"
          className={classes.reset}>
          Leia mais...
        </Button>
      </CardActions>   
    </Card>
  )
}
