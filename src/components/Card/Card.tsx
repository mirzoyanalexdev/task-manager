import { Box, Grid, Typography, Button, Avatar, IconButton, FormControl, Menu } from "@material-ui/core"
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { useState } from "react";
import MenuItem from '@material-ui/core/MenuItem';
import theme from "../../theme";
import { Images } from '../../../consts'
import Image from 'material-ui-image'
import Modal from 'react-modal';

import classNames from 'classnames';
import CreateTaskModal from "../CreateTaskModalContent/CreateTaskModal";

const Items = [
    {title:'Evaluate the addition and deletion of user IDs',status:['Pending','InProgress'],priorety:['Minor','Critical','Normal'],asigned:['Messi','Ronaldon',"Pele"]},
    {title:'Identify the implementation team.',status:['Pending','InProgress'],priorety:['Minor','Critical','Normal'],asigned:['Messi','Ronaldon',"Pele"]},
    {title:'Batch schedule download/process.',status:['Pending','InProgress'],priorety:['Minor','Critical','Normal'],asigned:['Messi','Ronaldon',"Pele"]},
    {title:'Monitor system performance and adjust hardware.',status:['Pending','InProgress'],priorety:['Minor','Critical','Normal'],asigned:['Messi','Ronaldon',"Pele"]},

]   

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };
  
  Modal.setAppElement('#__next');
  

    const useStyles = makeStyles((theme) => ({

        circle:{width:'9px',height:'9px',marginRight:'5px'},
        purple:{color:'#8A2BE2'},
        orange:{backgroundColor:"#FF8000"},
        priorety:{backgroundColor:"#FFC0CB",padding:'2px',borderRadius:'8px',color:'red'},      
        button: {
            display: 'block',
            marginTop: theme.spacing(2),
          },
          formControl: {
            margin: theme.spacing(1),
            minWidth: 120,
          },
      
        root: {
          margin: theme.spacing(6, 0, 3),
        },
        lightBulb: {
          verticalAlign: 'middle',
          marginRight: theme.spacing(1),
        },
       
          small: {
            width: theme.spacing(3),
            height: theme.spacing(3),
          },
      }));

const Card:React.FC = () => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(null);

    const [items, setItems] = useState(Items);
    const [add, setAdd] = useState([]);

    const addItem = (title: string) => {
      console.log("add New To Do")
  };


    const handleClick = event => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
    let subtitle;
    const [modalIsOpen, setIsOpen] = useState(false);
  
    function openModal() {
      setIsOpen(true);
    }
  
    function afterOpenModal() {
      subtitle.style.color = '#f00';
    }
  
    function closeModal() {
      setIsOpen(false);
    }

    return(
        <Grid
            container
            item
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={5}

        >
             <Grid 
                container
                alignItems="center"
                justifyContent="flex-start"
                direction="row"
                item
                md={12}
                spacing={4}
            >
                <Box mr={2}>
                    <Typography variant='h4' >
                        {`You have got ${Items.length} task today`}
                    </Typography>
                </Box>
                <Box>
                    <Button onClick={openModal} variant="contained" color={"primary"}>
                        <AddIcon /> 
                        Add Task
                    </Button>
                </Box>
            </Grid>
                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                 >
                   <CreateTaskModal addItem={addItem}/>
                
                </Modal>  
                
                    
           <Grid container item>
            <Box>
                <Typography >On Hold</Typography>
                </Box>
            </Grid>

            <Grid
                item
                direction="row"
                lg={12}
            >
                <Grid
                item
                >
                 {items.map((item, i) => (
                    <Grid 
                        container
                        item
                        alignItems="center"
                        justifyContent="center"
                        key={`avatar-item-${i}`}
                    >
                        <Grid 
                        container
                        alignItems="center"

                          item
                          lg={4}
                        >  
                        <Avatar alt="Remy Sharp" className={classes.circle} src={Images.circle}/>
                            <Box  >
                            {item.title}
                            </Box>
                        </Grid>  
                        <Grid
                             container
                             justifyContent='center'
                             alignItems="center"
                             item
                             lg={2}
                             
                        >
                            <Box className={classes.priorety} >
                                {item.status[0]}
                            </Box>
                        </Grid>  
                        <Grid
                            container
                            justifyContent='center'
                            item
                            lg={2}
                        >
                         {item.priorety[0]}
                        </Grid>
                        <Grid
                            container
                            justifyContent='center'
                            item
                            lg={2}
                        >
                             <Avatar  className={classNames(theme.palette.primary.dark, classes.small)}   src='https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300'>h</Avatar>
                        </Grid>   
                        <Grid 
                               container
                               justifyContent='center'
                               item 
                               lg={2}
                        >

                                <Button
                                        aria-controls="simple-menu"
                                        aria-haspopup="true"
                                        onClick={handleClick}
                                    >
                                <MoreHorizIcon />
                                </Button>
                                    <Menu
                                        id="simple-menu"
                                        anchorEl={anchorEl}
                                        keepMounted
                                        open={Boolean(anchorEl)}
                                        onClose={handleClose}
                                        getContentAnchorEl={null}
                                        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                                    >
                                        <MenuItem onClick={handleClose}>Edit</MenuItem>
                                        <MenuItem onClick={handleClose}>View</MenuItem>
                                    </Menu>
                        </Grid>     
                       
                    </Grid>    
                ))}

            </Grid>

            </Grid>


        

        </Grid>
    )
}

export default Card