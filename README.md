<h1 align="center">Project-Weather-forecast</h1>

<p align="center">
  <img src="https://image.flaticon.com/icons/png/512/869/869869.png" width=150 height=150>
  <a href="https://mighty-hamlet-06931.herokuapp.com/"><h2 align="center">INSTA WEATHER</h2></a>
</p>
  
A single-page web application that uses <a href="https://openweathermap.org/">OpenWeather</a> API to fetch weather conditions in a JSON format when the user types the name of a city.

This JSON is then interpreted in the server-side and raw data is then sent to the client-side for the user to interpret.

# Tech-Stack:

### Client-side: 
<img alt="HTML5" src="https://img.shields.io/badge/html5%20-%23E34F26.svg?&style=for-the-badge&logo=html5&logoColor=white"/> <img alt="CSS3" src="https://img.shields.io/badge/css3%20-%231572B6.svg?&style=for-the-badge&logo=css3&logoColor=white"/> <img alt="Bootstrap" src="https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white"/> <img alt="JavaScript" src="https://img.shields.io/badge/javascript%20-%23323330.svg?&style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"/> <img alt="jQuery" src="https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white"/>

### Server-side:
<img alt="JavaScript" src="https://img.shields.io/badge/javascript%20-%23323330.svg?&style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"/> <img alt="Express.js" src="https://img.shields.io/badge/express.js%20-%23404d59.svg?&style=for-the-badge"/> <img src="https://img.shields.io/badge/node.js%20-%2343853D.svg?&style=for-the-badge&logo=node.js&logoColor=white"/>   
 
### Project-management:
<img alt="Git" src="https://img.shields.io/badge/git%20-%23F05033.svg?&style=for-the-badge&logo=git&logoColor=white"/> <img alt="Markdown" src="https://img.shields.io/badge/markdown-%23000000.svg?&style=for-the-badge&logo=markdown&logoColor=white"/> <img src="https://img.shields.io/badge/github%20-%23121011.svg?&style=for-the-badge&logo=github&logoColor=white"/> <img src="https://img.shields.io/badge/heroku%20-%23430098.svg?&style=for-the-badge&logo=heroku&logoColor=white"/>
 
 # Installing it on your local system:
 
 **1.**  Fork this repository.

**2.**  Clone your forked copy of the project.

```
git clone https://github.com/<your_user_name>/Project-Weather-forecast.git
```

**3.** Navigate to the project directory :file_folder: .

```
cd Weather-forecast-project
```

**4.** Add all the files to be tracked by git

```
git add .
```

**5.** Install the required dependencies

```
npm install
```

**6.** Create a new branch.

```
git checkout -b <your_branch_name>
```

**7.** Make sure to add your own API key before initiating the server

```
const url = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + <YOUR_API_KEY> + "&units=" + unit;
```

**8.** Track your changes:heavy_check_mark: .

```
git add . 
```

**9.** Commit your changes .

```
git commit -m "Relevant message"
```

**10.** Push the committed changes in your feature branch to your remote repo.

```
git push -u origin <your_branch_name>
```

**11.** To create a pull request, click on `compare and pull requests`.

**12.** Add appropriate title and description to your pull request explaining your changes and efforts done.

**13.** Click on `Create Pull Request`


**_P.S.: This is my first full-stack web application built on Node.js with Express.js and changes and improvements are welcome. Follow the above steps for contributing to this project._**
