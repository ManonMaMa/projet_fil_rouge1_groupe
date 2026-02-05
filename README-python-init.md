To prepare the Workspace for the app, do the following:

(on a linux terminal)

* Create a python virtual environnement at the root of the project:
  $ `python -m venv .venv`
* Exclude this directory from the git versionning
  ```
  $ cat << EOT > .venv/.gitignore
  #Excluding this directory and all its content from git versionning.

  \*
  EOT

  ```
* Activate the virtual environment
  $ `source .venv/bin/activate`
* Ensure your virtual environment is active and python is ok
  $ `which python`
* Install dependencies of Python project
  $ `pip install -r ./requirements.txt`
* Launch FastAPI server
  $ `fastapi dev main.py`
* Server started loccally on http://127.0.0.1:8000/
