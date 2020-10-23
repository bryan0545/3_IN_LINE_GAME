# 3_IN_LINE_GAME

This is a Web App where the user can create, read, update and delete contacts; Also the user can apply some filters to the contacts.

## Overview
This is a repo of Web App created using React, Styled Components, Node.js, Express and Mongoose.

## Setup
### Backend
The backend needs a database in mongoDB. So you should have mongoDB installed on your computer. 

#### Running
Enter to backend folder and run the next commands on bash.
Install all dependencies.
```bash 
npm i 
```
Run the server
```bash 
npm run dev 
```
## How use the API
#### Successful response: 
You will recieve always the same object structure as a response.
```bash 
Example:
{
    "message": "message",
    "data": {
        "currentTurn": "x",
        "status": "started",
        "board": [
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            ""
        ],
        "winner": "",
        "result": "",
        "id": "5f92cd4462599d27b00f6b3f",
        "created": "Oct 23 2020 07:32:04",
        "updated": "Oct 23 2020 07:32:04"
    },
    "error": ""
}
```

#### ERROR
If the API has a error, it's send in the error property. 
```bash 
{
    "message": "",
    "data": data,
    "error": "Error message"
}
```

#### POST to create a game.
  http://localhost:5000/games
  
To this request you don't need send a body.

  Request:
```bash 
N/A
```  
  Succesfull Response:  
```bash 
{
    "message": "Game Created",
    "data": data,
    "error": ""
}
```
#### PUT to update a game.
  http://localhost:5000/ID-Game
  
Request: On the url you should replace "ID-Game" with the id that you want to change.
  
To this process you should send the next structure, but you should change the information just on the board, so you can save the first response that you recieved and change just the board.

Request:
```bash 
{
    "currentTurn": "Return the same value that you recieved",
    "status": "Return the same value that you recieved",
    "board": [
        "x",
        "o",
        "",
        "",
        "x",
        "",
        "o",
        "",
        ""
    ],
    "winner": "Return the same value that you recieved",
    "result": "Return the same value that you recieved",
    "id": "Return the same value that you recieved"
}
```
  Succesfull Response:  
```bash 
{
    "message": "Game Updated",
    "data": data,
    "error": ""
}
```

#### GET to get all games.
  http://localhost:5000/games 
  
To this request you don't need send a body.

  Request:
```bash 
N/A
```  
  Succesfull Response:  
```bash 
{
    "message": "Games found",
    "data": data,
    "error": ""
}
```

#### GET to a game.
  http://localhost:5000/ID-Game
  
Request: On the url you should replace "ID-Game" with the id that you want to get.

  Request:
```bash 
N/A
```  
  Succesfull Response:  
```bash 
{
    "message": "Game found",
    "data": data,
    "error": ""
}
```


### Forntend
#### Running
Enter to forntend folder and run the next commands on bash.

Install all dependencies.
```bash 
npm i 
```
Run the Web App
```bash 
npm start 
```
