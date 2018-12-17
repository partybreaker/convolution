# Expert system based on linear convolution

Django is used as a 'backend', javascript was used to perform calculations.

Formula used in the project:

 ![Formula](https://github.com/partybreaker/convolution/blob/master/img/f.png)


## First-time setup
 1. Make sure Python 3.7x and Pipenv are already installed. See here for help.
 2. Clone the repo and configure the virtualenv:

   ```
   git clone https://github.com/partybreaker/convolution.git
   cd djangox
   pipenv install
   pipenv shell
   ```

 3. Set up the initial migration for our custom user models in users and build the database.

 	```
 	python manage.py makemigrations
 	python manage.py migrate
 	```

 4. Create superuser:

 	```
 	python manage.py createsuperuser
 	```

 5. Start Server:

 	```
 	python manage.py runserver
 	```

Load the site at http://127.0.0.1:8000.

