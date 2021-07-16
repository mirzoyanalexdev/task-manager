import {  Typography, TextField, Grid, Avatar, Container } from "@material-ui/core"
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';



const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }),
);

const ProfileSettings:React.FC = () => {
    const classes = useStyles();

    return(
        <Container>
        <Grid
            container
            item
            direction="column"
            justifyContent="center"
            alignItems="center"
        >
            <Grid>
                <Avatar  alt="Remy Sharp" src="" />
            </Grid>
            <Grid 
                container
                item
                direction="row"
                justifyContent="center"
                alignItems="center"
            >
                <Typography variant="body1" component="h2">
                    Name:
                </Typography>
                <Typography variant="body1" component="h2">
                    Surname:
                </Typography>
            </Grid>
            <Grid
                item   
                justifyContent="center"
                alignItems="center"

                container
             
                lg={2}
                >
                <form className={classes.root}>
                    <TextField label="First Name" variant="filled" required />
                    <TextField label="Last Name" variant="filled" required />
                    <TextField label="Email" variant="filled" type="email" required />
                    <TextField label="Password" variant="filled" type="password" required />
                </form>
            </Grid>
          
        </Grid>
        </Container>
    )
}

export default ProfileSettings