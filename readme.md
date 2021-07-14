
<!-- PROJECT LOGO -->

<br />
<p align="center">

  <h2 align="center">Account Managment System</h2>
  <p align="center">A react-mobx responsive application, where a staff member can view all accounts in a table, filter by account status, see statistics and aggregate values of total balance and total # of accounts in each
status at the top of the table and change the status for any account, but only to a status that is available given the current
status of the account.</p>
 <a href="https://github.com/RahafTahayneh/account-management-system">
    <p align="center"> <a href="https://im.ge/i/2IZhY" alt="Screen-Shot-2021-05-29-at-2-21-32-AM" height="200" width="400" border="0"></a> 
  <a href="https://im.ge/i/2IWXM" alt="Screen-Shot-2021-05-29-at-2-21-32-AM" height="200" width="400" border="0"></a>
  </p>
  </a>
  <p align="center">
    <a href="https://github.com/RahafTahayneh/account-management-system/issues">Report Bug</a>
    · 
    <a href="https://github.com/RahafTahayneh/account-management-system/issues">Request Feature</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->
## Table of Contents

* [About the Project](#about-the-project)
* [Installation](#installation)
* [Test](#test)
* [Live Link](#Live-Link)
* [Built With](#built-with)
* [Nice to have features](#nice-to-have-features)
* [Potential Future Updates](#potential-future-updates)


<!-- ABOUT THE PROJECT -->
## About The Project
A simple account management application, built using react-mobx, where a staff member can view all accounts in a table, filter by account status, see statistics and aggregate values of total balance and total # of accounts in each
status at the top of the table and change the status for any account, but only to a status that is available given the current
status of the account.

App uses react router to route to different components. 

The backend service is implememnted using Django/Python
<!-- Live Link  -->

## Live Link

[Click here](https://vimeo.com/575104700) to see live version

<!-- INSTALLATION -->

## Installation

To run the app locally, clone the repository, navigate to it's directory.

#### Follow these commands step by step:-

```bash
- If it's not already on your Windows, install python3.6 and pip (pip should come with it) \* Note: Python 3.7.x is not yet supported.
  
in react-app folder:
  - run  `npm install`
  - run `npm run build`
  
  For Windows operating system: and in root folder
  - create a virtualenv with python 3.6 and activate it(Windows):
  - run `virtualenv --system-site-packages -p python3 ./venv`
  - run `.\venv\Scripts\activate` in the same location as the above command

for Mac Operating system and in root folder
- create a virtualenv with python 3.6 and activate it(MAC):
  - run `virtualenv -p python3 venv`
  - run `source ./venv/bin/activate` in the same location as the above command

The following should happen in a terminal with `venv` activated (often this means you can see the `venv` name in the beginning of the terminal prompt):

- run `pip install -r requirements.txt` (make sure you're on the root folder of the repo where requirement.txt is)

- run `python manage.py migrate`

- run `python manage.py populate_db` to populate your db with seed data.

- run `python manage.py createsuperuser` to create an account for the admin. You can view the admin dashboard here: `127.0.0.1:8000/admin`

- run `python manage.py runserver`.
  This should start up the server and show output about which IP/Port it's running on (usually 127.0.0.1:8000)

- Open a browser on 127.0.0.1:8000 or localhost:8000 as the URL (or whatever URL the previous command displayed)


### API endpoints

| Route | Description |
| ------ | ------ |
| 127.0.0.1:8000/api/accounts/ | Get all accounts |
```

Now go to [http://127.0.0.1:8000/](http://127.0.0.1:8000/) in your browser.

<!-- BUILD WITH -->

## Built With

- HTML/CSS
- ReactJs
- Mobx
- React Router
- Material-ui
- ES6
- Material-Icons
- Django/Python


<!-- Nice to have features -->

## 'Nice to have features' that are implemented
- Responsive to mobile and desktop screens
- Using am4charts to display the data in interactve way  

<!-- potential future updates -->

## Potential Future Updates

- Add more backend services/ create delete 
- implement more pages for staff admin like profile page/setting
- Add notifications
- Develop the user interface with a help from a UI/UX engineer

