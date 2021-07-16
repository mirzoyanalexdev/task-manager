import { TextField,Badge,Grid,Box, Avatar, Button, Menu, MenuItem} from "@material-ui/core"
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import IconButton from '@material-ui/core/IconButton';
import { useState } from "react";
import Link from 'next/link'



const Header:React.FC = () => {

    const [anchorEl, setAnchorEl] = useState(null);

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
            justifyContent="space-between"
            alignItems="center"
        >
            <Grid
                container
                item
                direction="row"
                md={10}
                justifyContent="space-between"
                alignItems="center"
            >
                <form noValidate autoComplete="off">
                    <TextField id="standard-basic" label="Search" />
                </form>
            </Grid>

            <Grid
                container
                item
                direction="row"
                md={2}
                justifyContent="center"
                alignItems="center"
            >   
                <IconButton aria-label="delete">
                    <Badge badgeContent={3} color="primary">
                        <NotificationsNoneIcon/>
                    </Badge> 
                </IconButton>   
                <IconButton 
                     aria-controls="simple-menu"
                     aria-haspopup="true"
                     onClick={handleClick}
                >
                    <Avatar alt="Remy Sharp" src="" />
                </IconButton>   
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                    getContentAnchorEl={null}
                    anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                >
                    <MenuItem onClick={handleClose}>
                        <Link href="/settings">
                        <a>Settings</a>
                        </Link>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                        <Link href="/auth">
                            <a>Sign Out</a>
                        </Link>
                    </MenuItem>
                </Menu>

            </Grid>
        
            
        </Grid>       
    )
}

export default Header