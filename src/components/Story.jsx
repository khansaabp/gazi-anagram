import React,{useState,useEffect} from "react";
import { Grid,Card,TextField,CardContent,Button } from "@mui/material";
import axios from "axios";
import { Link } from "react-router-dom";

const Story=()=>{

    const [dat,setData]=useState([])

    const getData=async()=>{
        const result= await axios.get("https://hacker-news.firebaseio.com/v0/item/8863.json?print=pretty")
        setData(result.data)
    }
    useEffect(()=>{
getData()
    },[])
    return(
        <React.Fragment>
<Grid container spacing={2}>
<Grid item xs={2}></Grid>
<Grid item xs={10}>
    {
        <Link to={"/story"}>
        {  dat.id}
        </Link> 
}
</Grid>
</Grid>
        </React.Fragment>
    )
}
export default Story