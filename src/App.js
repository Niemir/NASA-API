import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';

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
}));

const App = () => {
  const classes = useStyles();
  return (
    <div className='App'>
      <Container>
        <Grid container className={classes.root} spacing={2}>
          <Grid item xs={12}>
            <Grid container justify='center' spacing={2}>
              <Paper className={classes.paper} />
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default App;
