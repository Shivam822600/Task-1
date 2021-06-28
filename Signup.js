import React,{useState,useEffect} from "react"
import Grid from "@material-ui/core/Grid"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import Avatar from '@material-ui/core/Avatar';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import swalhtml from "@sweetalert/with-react"
import swal from "sweetalert"
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import {ServerURL,postDataAndImage,getData} from "./FetchNodeServices"
import { makeStyles } from '@material-ui/core/styles';
import {isBlank} from "./Checks"
import renderHTML from "react-render-html" 



const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    display:'flex',
    justifyContent:'center',
    
  },

  paper: {
    margin: theme.spacing(0.1, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },

}));



export default function Signup(Props)
{ 
  const classes=useStyles();
     
  const [Name,setName]=useState('')
  const [emailid,setemailid]=useState('')
  const [password,setpassword]=useState('')
                
   const handleClick=async()=>{
    var error=false
    var msg="<div>"
    
   
    msg+="</div>"

    if(error){
        swalhtml(renderHTML(msg))
    }
    else{


    var formData=new FormData()
    formData.append("name",Name)
    formData.append("emailid",emailid)
    formData.append("password",password)
   
    

    var config={headers:{"content-type":"multipart/form-data"}}
    var result= await postDataAndImage('signup/adddata',formData,config)
    if(result){
        swal({
            title: "State  Submitted Successfully",
            icon: "success",
            dangerMode: true,
          })
    }
}
}


return ( 
  <Grid container component="main" className={classes.root}>

    
    <Grid
      item
      xs={12}
      sm={8}
      md={5}
      component={Paper}
      elevation={6}
      square
    >
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Typography component="h4">Please enter your details</Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete="fname"
                name="Name"
                onChange={(event) =>setName(event.target.value)}
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
              />
            </Grid>
            
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                onChange={(event) => setemailid(event.target.value)}
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
         
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                onChange={(event) => setpassword(event.target.value)}
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="rpassword"
                label="Re Enter Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>

            <div style={{ margin: 10 }}>
    <Button
      variant="contained"
      color={"#000"}
      style={{background:'#1e6b7b',color:'#FFF',width:450}}
      startIcon={<VerifiedUserIcon />}
      onClick={() => handleClick()}
    >
      Sign up
    </Button>
  </div>
          </Grid>
         
        </form>
      </div>
    </Grid>
  </Grid>


) }
 