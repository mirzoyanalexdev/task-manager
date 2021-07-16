import { Button, Container, Grid,TextField, Typography } from "@material-ui/core"
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';



const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: 200,
      },
     
    },
    margin: {
        margin: theme.spacing(1),
      },
      extendedIcon: {
        marginRight: theme.spacing(1),
      },
  }),
);

const Login:React.FC = () => {
    const classes = useStyles();

    return(
        <Container>
        <Grid
            container
            item
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={10}
        >
            <Grid
                container
                item
                direction="row"
                justifyContent="center"
                alignItems="center"
            >
                <Typography variant="h5" component="h2">
                    Login
                </Typography>
               
            </Grid>
            <Grid
            lg={2}
            >
                <form className={classes.root}>
                    <TextField size="small" label="Email" variant="filled" type="email" required />
                    <TextField size="small" label="Password" variant="filled" type="password" required />
                    <Grid item container 
                          direction="column"        
                          justifyContent="center"
                          alignItems="center"
                          spacing={2}
>
                        <Grid item >
                            <Button  size="large"  variant="contained" color="primary" href="#contained-buttons">
                                Sign In
                            </Button>
                        </Grid>
                        <Grid item >
                            <Button  size="small"  variant="contained" color="primary" href="#contained-buttons">
                                Register
                            </Button>
                        </Grid>
                    </Grid>
                   
                </form>
            </Grid>
              
        </Grid>
        </Container>
    )
}

export default Login