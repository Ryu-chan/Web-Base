# Setup

Ruby
---
bundle install

Python
---
    cd
    curl -O https://pypi.python.org/packages/source/v/virtualenv/virtualenv-1.10.1.tar.gz
    tar xvfz virtualenv-1.10.1.tar.gz
    cd virtualenv-1.10.1
    sudo python setup.py install

    cd (your_git_directory)
    virtualenv ENV
    source ENV/bin/activate
    
    pip install -r _base/py/requirements.txt

Text Editors (Optional)
---
* Sublime Text (At least 2)
   > Install from http://www.sublimetext.com/
* Retext
   > `sudo add-apt-repository ppa:mitya57/ppa`
   > `sudo apt-get update`
   > `sudo apt-get install retext`
* 