import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import './signin.css'
import { AUTH, LOGIN } from '../../confiq';

function TabPanel(props) {
    const { children, value, index, ...other } = props;
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`nav-tabpanel-${index}`}
        aria-labelledby={`nav-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `nav-tab-$ {index}` ,
      'aria-controls': `nav-tabpanel-${index}`,
    };
  }
  
  function LinkTab(props) {
    return (
      <Tab
        component="a"
        onClick={(event) => {
          event.preventDefault();
        }}
        {...props}
      />
    );
  }
  
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper,
      borderRadius: '50px 50px 60px 60px'
    },
    panel: {
        backgroundColor: '#66676c',
        borderRadius: '0 0 50px 50px',
        height: '500px'
    },
    tab: {
        backgroundColor: '#45464c',
        opacity: '0.6',
        color: 'white',
        borderRadius: '50px 50px 0 0',
     
    },
    
  }));
  
function Signin(props) {
    const classes = useStyles();
    const [value, setValue] = useState(0);
    const [username, setUsername] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [valueAuth, setValueAuth] = useState();


  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeAuth = (event, newValue) => {
    setValueAuth(newValue);
  };

  const signup = async ()=>{
    let data ={
      password,
      username,
    }
    const res = await fetch(AUTH,
      {
        method:'POST',
        headers:{
          'Content-Type': 'application/json'
        },
       
        body:JSON.stringify(data)
      }
    )
    const req = await res.json()
      console.log(req);
  }

  const login = async ()=>{
    let data ={
      password,
      username,
      email, 
    }
    const res = await fetch(LOGIN,
      {
        method:'POST',
        headers:{
          'Content-Type': 'application/json'
        },
       
        body:JSON.stringify(data)
      }
    )
    const req = await res.json()
      console.log(req);
  }
    return (
        <div> 
        {props.signinOpen && (
        <div className="wrapper5" id="wrapper5">
        <div className={classes.root}>
      <AppBar position="static"
      className={classes.tab}>
        <Tabs
          variant="fullWidth"
          value={value}
          onChange={handleChange}
          aria-label="nav tabs example"
        >
          <LinkTab label="SIGN IN" href="/drafts" {...a11yProps(0)} />
          <LinkTab label="SIGN UP" href="/trash" {...a11yProps(1)} />
        </Tabs>
      </AppBar>

      <TabPanel className={classes.panel} value={value} index={0}>
      <form onSubmit={handleChangeAuth}>
        <div className='inform'>
            <p className='title'>UserName</p>
            <input className='getInform' value={valueAuth}
            onChange={event=>{
              setUsername(event.target.value)
            }}></input>
        </div>
      
        <div className='inform'>
            <p className='title'>Password</p>
            <input type='password' value={valueAuth}
            className='getInform'
            onChange={event=>{
            setPassword(event.target.value)
            }}></input>
        </div>
      
        <button className='button' type='button' onClick={signup}>Sign up</button>
        </form>
      </TabPanel>
      
      <TabPanel className={classes.panel} value={value} index={1}>
      <form>
        <div className='inform'>
            <p className='title'
            >UserName </p>
            <input className='getInform' onChange={event=>{
              setUsername(event.target.value)
            }}></input>
        </div>
        <div className='inform'>
            <p className='title'
            >email </p>
            <input className='getInform' onChange={event=>{
              setEmail(event.target.value)
            }}></input>
        </div>
        <div className='inform'>
            <p className='title'
            >Password</p>
            <input type='password' className='getInform' onChange={event=>{
              setPassword(event.target.value)
            }}></input>
        </div>
        <button className='button' type='button' onClick={login}>SUMBIT</button>
        </form>
      </TabPanel>
    </div>
        </div>)}
        </div>
    )
} export default Signin;
