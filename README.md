# STEGATO

Stegato was created as an application to rate all of your music.

After registering your account, you will be able to search and rate all music that is in the iTunes database. When your rating is submitted, that album is added to your music dashboard.

Click [here](http://stegato.netlify.com/) to use the application!

Search for an artist                                        
![Search for an artist](/src/images/IMG_5489.PNG)

Rate the project                                        
![Rate the Project](/src/images/IMG_5490.PNG)

Submit it to your dashboard and the Stegato database
![Submit to Dashboard](/src/images/IMG_5491.PNG)

After rating an artist’s project, you can see on the leaderboard where your project ranks within the Stegato community leaderboard.

This application is powered by iTunes and last.fm API’s.

This application was designed as a capstone project while studying at Thinkful.

## Features
- React JS
- Redux
- enzyme
- Node JS
- Express
- Passport HTTP
- Passport JWT
- bcrypt
- jsonwebtoken
- Mocha
- Chai
- MongoDB/mongoose
- mLab
- TravisCI
- Heroku
- jQuery

## API Documentation

Stegato utilizes the last.fm and iTunes api. The last.fm api is used to correct any spelling errors from the user. For example, if a user inputs "davidbowie", the last.fm api corrects this input to "David Bowie." From there, all albums by the artist searched for by the user is returned from the last.fm API.