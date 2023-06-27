const express = require('express');
const app = express();
const path = require('path');

const port = 5000;



app.use("/", express.static(path.resolve(__dirname, "../client/public")));

// href path and server redirect to url
app.get('/github/weather-app', (req, res) => {
    res.status(200).redirect("https://github.com/MRobertt/weatherAppAPI");
});

app.get('/github/cocktail-generator', (req, res) => {
    res.status(200).redirect("https://github.com/MRobertt/cocktailFinderApi");
});

app.get('/github/cat-facts', (req, res) => {
    res.status(200).redirect("https://github.com/MRobertt/catFactsApi");
});

app.get('/github/login-form', (req, res) => {
    res.status(200).redirect("https://github.com/MRobertt/react-login-form-frontend");
});


app.all("*", (req, res)=>{
    res.status(400).send("<h1>404 Not Found<h1>")
})


app.listen(port, (err)=>{
    if(err){
        console.log(err);
    }

    console.log(`App is listening on port ${port}`);  
});

