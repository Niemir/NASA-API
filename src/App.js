import { makeStyles } from '@material-ui/core/styles';

import {
  Grid,
  Paper,
  Container,
  Typography,
  FormControl,
  Input,
  InputLabel,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: '100%',
  },
  control: {
    padding: theme.spacing(2),
  },
  title: {
    fontSize: 42,
  },
  subtitle: {
    color: theme.palette.grey[700],
    fontSize: 24,
    // margin: theme.spacing(1, 2),
  },
}));

const App = () => {
  const classes = useStyles();
  return (
    <div className='App'>
      <Container>
        <Grid container className={classes.root} spacing={2}>
          <Grid item xs={12}>
            <Grid className={classes.control}>
              <Typography
                variant='h3'
                align='center'
                color='primary'
                gutterBottom
              >
                Nasa api app
              </Typography>
              <Typography
                variant='h4'
                align='center'
                className={classes.subtitle}
                gutterBottom
              >
                Enter any location and see what it looks like from the satellite
              </Typography>
            </Grid>
            <Grid container justify='center' spacing={2}>
              <FormControl>
                <InputLabel htmlFor='my-input'>Location</InputLabel>
                <Input id='my-input' aria-describedby='my-helper-text' />
              </FormControl>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default App;
