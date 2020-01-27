const express=require("express")
const app=express()
// Scrapper File
const scrapper=require("./scrapper")


const cors=require("cors")

// Middleware
app.use(cors())


// Routes

// @route:GET  "/"
// @desc: homepage message
app.get("/",(req,res)=>{
    res.json({message:"Scrapping is awsome!!!"})
})


// @route:GET  "/search/:title"
// @desc: get by title
app.get("/search/:title",(req,res)=>{
    res.json({message:"Scrapping is awsome!!!"})
})



// @route:GET  "/movie/:imdbID"
// @desc: get movie by id
app.get("/movie/:imdbID",(req,res)=>{
    res.json({message:"Scrapping is awsome!!!"})
})


// Server setup
const PORT=process.env.PORT || 3005

app.listen(PORT,()=>{
    console.log("Server is running successfullt on port:",PORT)
})


