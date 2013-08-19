# Setup

Note: 
`{BASE}` refers to the location of Web-Base in your apps project referred to as `{PROJECT}` - this is because you may call them anything you want - `{PROJECT}` being your own git repository or local directory for projects built with Web-Base, `{BASE}` being a direct sub directory of `{PROJECT}` and a clone of Web-Base.

Directory
---
- - -
* Create a directory for your projects (recommended you use a git repository but not necessary) in your local system.  
* Create or edit the .gitignore to include three things:
	* `{BASE}/*` - ignore the Web-Base
	* `ENV` - ignore the python environment
	* `ENV/*` - ignore the python environment resources
* Clone the base into your project
	* Navigate to `{PROJECT}` 
	* Run: `git clone https://github.com/Ryu-chan/Web-Base.git {BASE}`

Ruby
---
- - -
1. Navigate into {BASE}
2. Run: `bundle install`

Python
---
- - -
Run:
    
	cd
	curl -O https://pypi.python.org/packages/source/v/virtualenv/virtualenv-1.10.1.tar.gz
    tar xvfz virtualenv-1.10.1.tar.gz
    cd virtualenv-1.10.1
    sudo python setup.py install

    cd {PROJECT}
    virtualenv ENV
    source ENV/bin/activate
    
    pip install -r _base/py/requirements.txt
    
Text Editors (Optional)
---
- - -
Sublime Text (At least 2):
 
	Install from http://www.sublimetext.com/

Retext (linux):

	sudo add-apt-repository ppa:mitya57/ppa
	sudo apt-get update
	sudo apt-get install retext
   	