const express=require("express")
const app=express()
const open=require("open")
// Scrapper File
const scrapper=require("./scrapper")


const cors=require("cors")

// Middleware
app.use(cors())
app.use("/",express.static("public"))


// Routes

// @route:GET  "/"
// @desc: homepage message
app.get("/",(req,res)=>{
    res.json({message:"Scrapping is awsome!!!"})
})


// @route:GET  "/search/:title"
// @desc: get by title
app.get("/search/:title",(req,res)=>{
    scrapper.searchMovies(req.params.title)
    .then(movie=>res.json(movie))
})



// @route:GET  "/movie/:imdbID"
// @desc: get movie by id
app.get("/movie/:imdbID",(req,res)=>{
    console.log("hi")
    scrapper.getMovie(req.params.imdbID)
    .then(movie=>res.json(movie))
})


// Server setup
const PORT=process.env.PORT || 3005

app.listen(PORT,()=>{
    console.log("Server is running successfullt on port:",PORT)
    //open(`http://localhost:${PORT}`)
})


