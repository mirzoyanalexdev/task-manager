import { Button, Grid, MenuItem, Menu } from '@material-ui/core';
import { useState } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

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

interface TodoFormProps {
   addItem(title:string) :void
}

const CreateTaskModal:React.FC<TodoFormProps> = (props) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [title, setTitle] = useState<string>('')

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value)

  }
  const keyPressHandler = (event: React.KeyboardEvent) => {
    if(event.key === 'Enter')
    {
      
    }
  }

    const handleClick = event => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };

  return (
    <Grid 
        container
        direction="row"
    >

      <Grid  container item lg={12} justifyContent='center' >
        <form  className={classes.root} noValidate autoComplete="off">
          <TextField 
            id="outlined-basic"
            label={title}
            variant="outlined" 
            onChange={changeHandler}
            onKeyPress={keyPressHandler}
          />
          <TextField id="outlined-basic" label="Status" variant="outlined" />
          <Grid container            
                direction="row"
                lg={12}
                justifyContent="center"
          >
            <Button variant="contained" color="primary">
              Create Task
            </Button>
        </Grid>
   
        </form>

      </Grid>
      
    </Grid>
  );
}

export default CreateTaskModal