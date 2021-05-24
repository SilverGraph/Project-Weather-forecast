const express = require('express');
const https = require('https');
const bodyParser = require('body-parser')

const app = express();

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.use(express.static('public'));

app.set('view engine', 'ejs')

var lat = 51.5085;
var lon = -0.1257;
var units = "metric";

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});


app.post("/", (req, res) => {
  let cityName = req.body.cityName;
  // console.log(cityName);

  // CODE TO GET THE LATITUDE AND LONGITUDE
  const apiKey = "YOUR_API_KEY";
  const unit = "metric";
  const url = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + apiKey + "&units=" + unit;

  https.get(url, (response) => {
    console.log(response.statusCode);

    response.on("data", (data) => {
      const weatherData = JSON.parse(data);
      lat = (weatherData.coord.lat).toString();
      lon = (weatherData.coord.lon).toString();

      // console.log('lat: ', lat);
      // console.log('lon: ', lon);

      response.on('end', () => {

        // CODE TO GET CURRENT DATA
        const url2 = "https://api.openweathermap.org/data/2.5/onecall?exclude=minutely,alerts&appid=" + apiKey + "&lat=" + lat +"&lon="+ lon +"&units=" + units;

        https.get(url2, (resp) => {
          
          console.log(resp.statusCode);
          let stockData = '';

          resp.on('data', (data) => {
            stockData += data;
          })

          resp.on("end", () => {
            const dailyData = JSON.parse(stockData);
            
            module.exports = dailyData.timezone;

            const dateAndDay = require('./dateAndDay');
            var timeNow = new Date().toLocaleTimeString('en-US', {
              timeStyle: 'medium',
              hourCycle: 'h23',
              timeZone: dailyData.timezone
          })
          
          // CALCULATION OF CURRENT-TIME
          timeNow = timeNow.slice(0, 2);
          
          let timeArray = []
          
          while(timeArray.length != 24) {
              if(timeNow < 24) {
                  timeArray.push(timeNow);
                  ++timeNow;
              }
              if(timeNow === 24 && timeArray.length < 24) {
                  timeNow = 0;
                  timeArray.push(timeNow);
                  ++timeNow;
              }
          }
            // console.log(dailyData.current.weather[0].icon);

            res.render('index', {
              currentData: dailyData.current,
              city: cityName,
              daily: dailyData.daily,
              weekday: dateAndDay,
              timeArray: timeArray,
              hourly: dailyData.hourly
            })
            
          });

        });

      })

    });

  });
  
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Server listening on port 3000");
});
