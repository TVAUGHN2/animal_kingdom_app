Travis Vaughn
CSC 436
HOMEWORK #4
9/14/2017


HOMEWORK LOCATION:
https://github.com/trvaughn/animal_kingdom_app

COMPLEXITY [EASY / HARD]: HARD

This was a really cool assignment!  I started off “solving” it without a service to get everything else accurate since I am not that familiar with dependency injection/services.  That worked out pretty well as I got to make certain everything worked out with the model before transitioning. 

APPROXIMATION OF HOURS INVESTED IN ASSIGNMENT:
7 hours


EXPECTED GRADE: A


DESCRIBE APPLICATION INTENT:
When the application is started, the Pyramid object calls the PyramidService which returns an array of PyramidRows.  The PyramidRows contain an array of animals. 

The PyramidRows styling uses flex box in order to create the rows and apply some styling. 
One change I made to the example class for PyramidRow was to include a color hash, so that when the row is loaded, I could use ngStyle to convert the color has for the row to a background color. 

There is also an animal object that is created but providing it with a level and a type. 

An array of animals is created in the PyramidService in a for loop 1-5 (to represent the levels in the animal kingdom). 

For each level, the service will call all of the animal types associated with that level from the static variable “ANIMAL_TYPES”.  When the service creates an animal, it passes the type and level, and then in the animal constructor, a random name is assigned from the static variable “ANIMAL_NAMES”, and the image url corresponding to the type is generated from the static variable “ANIMAL_URLS”


PARTICPIATION LOCATIONS:
N/A



INSTRUCTIONS TO RUN APPLICATION:
 1. NPM INSTALL
 2. GULP SURVE
 3. NAVIGATE TO LOCALHOST:4200/