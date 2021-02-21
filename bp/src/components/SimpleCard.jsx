import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
  
    minWidth: 275,
    backgroundColor: 'rgb(53, 51, 51);',
    
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos1: {
    marginTop: 12,
  },
  pos: {
    marginBottom: 12,
    marginTop: 12
  },
});

export default function SimpleCard({heading, para1, para2, Icon}) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h4" component="h2">
          Icon || {heading}
        </Typography>
        <Typography className={classes.pos1} variant="h5" component="p">
          {para1}
        </Typography>
        <Typography className={classes.pos} component="p">
          {para2}
        </Typography>
      </CardContent>
      
    </Card>
  );
}
