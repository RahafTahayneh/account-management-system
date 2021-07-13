### Installation
- If it's not already on your Windows, install python3.6 and pip (pip should come with it) \* Note: Python 3.7.x is not yet supported.
  
in reacr-app:
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

