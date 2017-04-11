# Projekt 2 - P16

A React project setup

#### Backend

##### Create a virtual environment

```bash
virtualenv --no-site-packages --distribute .env
```

##### Activate the virtual environment

```bash
source .env/bin/activate
```

##### Install requirements

```bash
pip install -r requirements.txt
```

##### Run server
After activating the virtual environment run:
```bash
python server/app.py
```
And open ```localhost:5000``` in browser

#### Frontend

##### Init the npm package manager

If npm is not installed, install it from: https://nodejs.org/en/

Init npm:
```bash
npm init
```
Press enter on all questions

##### Install packages
To install all packages simply run:
```bash
npm install
```

##### Build and start dev server
To build the project run:
```bash
npm start
```
This will build the project and start a dev server on localhost:8080 with the application.
The page is reloaded automagically on any change.
