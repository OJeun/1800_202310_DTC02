# HotDog

## 1. Project Description
State your app in a nutshell, or one-sentence pitch. Give some elaboration on what the core features are.  
This browser based web application to allow pet owners to know whether the outside temperature is safe for their dogs and provide knowledge about heat related illnesses to the user. We have 3 core featues, a hydration reminder, a symptom tracker, and a temperature checker.

## 2. Names of Contributors
List team members and/or short bio's here... 

* Ivan Cheng I want to change the world
* Martin Siu and I am excited about this project because I want to change the world.
* Julie and I am excited about this subject because I want to change the world.

## 3. Technologies and Resources Used
List technologies (with version numbers), API's, icons, fonts, images, media or data sources, and other resources that were used.
* HTML 5, CSS, JavaScript
* Bootstrap 5.0 (Frontend library)
* Firebase 8.0 (BAAS - Backend as a Service) - authentication, database, and storage
* OpenWeatherMap API
* Dog.ceo
* Google fonts
* Google material icons
* Homemade logo!
* Google jquery library


## 4. Complete setup/installion/usage
State what a user needs to do when they come to your project.  How do others start using your code or application?
Here are the steps ...
* Create a profile - on the landing page there is a "let's get started" button. By clicking this, the user should be taken to the login page.
* Add your first dog - on the home page after loggin in, there is a "Add you Dog" button. Click on that and fill in the fields.
* Users can add more than one dog if they want own mulitple dogs.
* Clicking on the hydration page users can select the hours and minutes for their reminder.
* Clicking on the symptoms page, users can submit the symptoms their dog is experiencing and the app will advise them of what illness their dog may be experiencing.
* Clicking on the temperature page on the bottom navbar, the user can allow the app to know their current location and it will advise if the current temperature is too hot for their dog to go for a walk.

## 5. Known Bugs and Limitations
Here are some known bugs:
* Hydration reminder can aonly remind the user if they are on the the hdyration reminder page.
* Users can not delete dog profiles.

## 6. Features for Future
What we'd like to build in the future:
* E-mail reminders for the hydration reminder
* Map to show closest vet clinics in the user's area
* Calculate asphalt temperature
	
## 7. Contents of Folder
Content of the project folder:

```
 Top level of project folder: 
├── .firebase               # All firebase files
└── functions               # json files and gitfile
└── images                  # All imgages used in hotdog
└── script                  # All javascript files
└── src                     # API file
└── styles                  # All css files
└── text                    # top and bottom navbar

It has the following subfolders and files:
├── .firebase               # Files for firebase
    /firebaseerc
    /database.rules.json
    /firebase.json
    /firestore.indexes.js
    /firebase.rules
    /hosting.cache
    /storage.rules
├── functions                # gitignore and json files
    /.gitignore
    /package.json
    /settings.json
├── images                   # Folder for images
    /blah.jpeg                 
    /drinking.jpeg
    /logo.png
    /mainDogimg.jpeg
    /Nahra.jpeg
    /panting_dog,png
    /profile.png
    /snoopy.jpeg
    /symptom_dog.jpeg
    /waiting_dog.gif
├── script                   # Folder for javascript files
    /authentification.js
    /dogProfile.js
    /hydration.js
    /index.js
    /location.js
    /main.js
    /nav.js
    /skeleton.js
    /switchDog.js
    /symptom.js
    /symptom2.js
├── src                   # Folder for firebaseAPI
    /firebaseAPI_TEAM02
├── styles                # Folder for css files
    /addDog.css
    /colors.css
    /footer.css
    /hydration.css
    /index.css
    /main.css
    /nav.css
    /symptoms.css
    /temperature.css
├── text             # Folder for top and bottom nav bar
    /nav.html
    /footer.html
/404.html
/addDog.html
/dogProfile.html
/hydration.html
/index.html
/login.html
/main.html
/README.md
/symptom.html
/symptom2.html
/temperature.html
/userProfile.html





```


