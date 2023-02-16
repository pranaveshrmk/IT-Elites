const express=require('express');   
const router=express.Router();
const numTable=require("../models/number");
const console = require('console'); 
const idTable = require("../models/chip");
const {error} = require('console');
router.get("/",(req,res)=>{
    res.send(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <link rel="stylesheet" href="/homepage.css">

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous" />
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-b5kHyXgcpbZJO/tY9Ul7kGkf1S0CWuKcCD38l8YkeH8z8QjE0GmW1gYU5S9FOnJ0" crossorigin="anonymous">
        </script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css"
        integrity="sha512-HK5fgLBL+xu6dm/Ii3z4xhlSUyZgTT9tuc/hSrtw6uzJOvgRr2a9jyxxT1ely+B+xFAmJKVSTbpM/CuL7qxO8w=="
        crossorigin="anonymous" />
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous" />
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW" crossorigin="anonymous">
        </script>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <script>
            function onClick(){
                document.getElementById("doc").innerHTML="spare will be delivered"
            }
        </script>

    </head>
    <style>
    body{
        background-color: rgb(206, 206, 226)
    }
    
    </style>
    <body>
     <nav class="navbar navbar-expand-lg navbar-light bg-light" style="borderBottom: 1px solid grey" >
        <div class="container-fluid">
            <a href="homepage.html" style="textDecoration: none" class="navbar-brand">
                <img src="https://logos-download.com/wp-content/uploads/2017/01/Ashok_Leyland_logo.png" alt="SPM" height="50px" width="100px" />
                <a class="navbar-brand" href="/"
                    style="marginLeft: 10px; fontSize: 20px; color: #000000; fontWeight: bolder">
                    SPARE FIT
                </a>
            </a>
            <span class="navbar-text">
                <ul class="navbar-nav form-inline me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="home.html">
                            Check Spares
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="login.html">
                            Login
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="signup.html">
                            SignUp
                        </a>
                    </li>
                </ul>
            </span>
        </div>
    </nav>

        <center><span style="font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;font-size: 50px;">SPARE PARTS MANAGMENT</span></center>
        <br>
        
        <br><br><br><br>
        <center>
        <select name="cars" id="cars">
            <option value="undefined" selected="true" disabled="true">Select Type Of vehichle</option>
            <option value="BADA DOST">Ashok Leyland BADA DOST</option>
            <option value="Dost+">Ashok Leyland Dost+</option>
            <option value="Ecomet 1615 H">Ashok Leyland Ecomet 1615 H</option>
            <option value="2820 Tipper">Ashok Leyland 2820 Tipper</option>
            <option value="Dost Strong">Ashok Leyland Dost Strong</option>
            <option value="Partner 6 Tyre">Ashok Leyland Partner 6 Tyre</option>
            <option value="1920 4x2">Ashok Leyland 1920 4x2</option>
            <option value="Partner 4 Tyre">Ashok Leyland Partner 4 Tyre</option>
            <option value="2620 6X2 LA">Ashok Leyland 2620 6X2 LA</option>
        </select>
        <input type="text" name="id" value="id"  placeholder="enter your vechicle number"/>
        <select>
            <option value="undefined" selected="true" disabled="true">Select spare part required</option>
            <option value="Pistons">Pistons</option>
            <option value="bearings">bearings</option>
            <option value="valves">valves</option>
            <option value="Break Pads">Break Pads</option>
            <option value="Break Discs">Break Discs</option>
            <option value="Break calipers">Break calipers</option>
            <option value="struts">struts</option>
            <option value="Ball Joints">Ball Joints</option>
            <option value="Starters">Starters</option>
            <option value="Battery">Battery</option> 
            <option value="Gears">Gears</option>
            <option value="Clutch Plates">Clutch Plates</option>
            <option value="Bumpers">Bumpers</option>
            <option value="Fuel Pump">Fuel Pump</option>
            <option value="Filters">Filters</option>
            <option value="Radiators">Radiators</option>
            <option value="Water Pumps">Water Pumps</option>
            <option value="Doors">Doors</option>
            <option value="Wiring">Wiring</option>
            <option value="Engine oil">Engine oil</option>
            <option value="HeadLights">HeadLights</option>
            <option value="Mirrors">Mirrors</option>
            <option value="Seat covers">Seat covers</option>  
            </select>
            <button onclick="onClick()" >Click me</button>
            <br>
            <div id="doc">

            </div>

        </center>
    </body>
    </html>`)
})
router.post("/number",(req,res)=>{
    let{number}=req.id;
    if(number==""||id==undefined){
        res.json({
            status:"FAILED",
            message:"enter lorry number"
        })
    }
    else{
        numTable.find({number:number})
        .then((result)=>{
            if(result.length<0){
                res.json({
                    status:"FAILED",
                    message:"invalid id"
                })
            }
            else{
                res.json({
                    status:"SUCCESS",
                    message: result[0].chipId
                })
            }
        })
        .catch((err)=>{
            console.log(err);
            res.json({
                status:"FAILED",
                message:"unable to fetch id"
            })
        })
    }
})
router.post("/enterId",(req,res)=>{
    let{number,systemId}=req.body;
    let temp=new numTable({
        number:number,
        chipId:systemId,
        condition:"GOOD"
    })
    temp.save()
    .then((result)=>{
        res.json({
            status:"SAVED",
            message:"saved"
        })
    })
    .catch((err)=>{
        console.log(err),
        res.json({
            status:"FAILED",
            message:"Unable to to save"
        })

    })

})
router.post("/status",(req,res)=>{
    let{chipId,spare}=req.body;
    idTable.find({
        chipId:chipId
    })
    .then((result)=>{
        if(result.length<=0){
            res.json({
                status:"FAILED",
                message:"INVALID CHIPID"
            })
        }
        else{
            if(spare=="PISTON"){
                if(result[0].temperature>=900){
                    if(result[0].gasleak==true){
                        res.json({
                            status:"SUCCESS",
                            message:"YOUR PISTON HAS A TROUBLE"
                        })
                    }
                    else{
                    res.json({
                        status:"FAILED",
                        message:"YOUR PISTON IS WORKING GOOD"
                    })
                }
                }
                else{
                    res.json({
                        status:"FAILED",
                        message:"YOUR PISTON IS WORKING GOOD"
                    })
                }
            }
        }
    })
    .catch((error)=>{
        console.log(error);
        res.json({
            status:"FAILED",
            message:"FAILED TO FETCH CHIP ID"

        })
    })

    
})
router.post("/setChipId",(req,res)=>{
    let {
        chipId,smokeleak,temperature,tyre1pressure,tyre2pressure,tyre3pressure,tyre4pressure,tyre5pressure,tyre6pressure
    }=req.body;
    let temp =new idTable({
        chipId:chipId,
        smokeleak:smokeleak,
        temperature:temperature,
        tyre1pressure:tyre1pressure,
        tyre2pressure:tyre2pressure,
        tyre3pressure:tyre3pressure,
        tyre4pressure:tyre4pressure,
        tyre5pressure:tyre5pressure,
        tyre6pressure:tyre6pressure,
    })
    temp.save() 
    .then(
        (result)=>{
            res.json({
                status:"SUCESS",
                message:"Saved",
            })
        }
    )
    .catch((error)=>{
        console.log(error);
        res.json({
            status:"FAILED", 
            message:"UNABLE TO SAVE DATA",
        })
    })

})
module.exports=router;  