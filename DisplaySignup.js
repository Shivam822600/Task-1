import MaterialTable from "material-table"
import React,{useState,useEffect} from "react"
import {ServerURL,postDataAndImage,getData,postData} from "./FetchNodeServices"




export default function DisplaySignup()
{ const[list,setList]=useState()
  
  ///////////////////////////////////////////////////////////////////
const fetchAllData=async()=>{
var result=await getData("signup/displayall")
setList(result)

}
useEffect(function(){
fetchAllData()

},[])


function displayall() {
    return (
      <div>
      <MaterialTable
        title=" list"
        columns={[
          { title: 'Id', field: 'signupid' },
          { title: 'name', field: 'name' },
          { title: 'Email', field: 'emailid' },
          { title: 'password', field: 'password' },
             
       
         
        ]}
        data={list}       
       
      />
    
      </div>
    )
  }
  return( <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
<div style={{width:800,marginTop:10,padding:3}}>
{displayall()}
</div>

  </div>
  )
  
}