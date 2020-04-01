# Interactive Frontend Development Milestone project

### Your project’s name
The project’s name is Heritage Sites and uses skills learnt to build a Google Maps API map for the heritage sites in the Wollongong City (NSW Australia).  By activating the functionalities the top attractions in the respective area are shown on the map using the JavaScript and Interactive Development features.
### UX
The map is for prospective individuals (whether or not tourists) and companies (whether or not in the tourism industry) who would like to visit the most important heritage sites in the above-mentioned region. My project is the best way for them to access the locations as it shows the most important locations which are considered heritage sites. The user story would consist of the user wanting to find places to visit in the area they are visiting so that he can say he has seen the most important heritage sites.  For the purpose of this project I have not created any wireframes, mockups or diagrams as I consider the objective and the output related to the project straight forward.
The steps were deciding where the location would be then dropping the pins on the respective map.
Features
The website is fully responsive, on desktop and larger screen sizes there is an amount of additional content (navigation bar on top).
The project has several components which are featured below:
-	Index.html-HTML section;
-	Heritage.html-HTML section;
-	Keys.js-JavaScript section containing the API key;
-	Stationmap.js-JavaScript section containing the map code;
-	Stationmap.css-CSS section defining the dimensions of the map.
### Existing features
Feature Drop Marker allows users to implement the marker function to put pins to specific locations on the map.
Various functions such as StationName, Latitude and Longitude to define the locations on the map were defined.
The Marker is accompanied by a Popup (InfoWindow object) in order for the pins/markers to have a title on the map.
Features left to implement
Another feature to be implemented in Scale Control which would allow the focus of the map to modif, as well as draggable (to be able to move around) and Zoomcontrol.
### Technologies used
The frameworks and technologies used include: 
-	HTML 5-used to provide links to different CSS files and represented internally by the browser;
-	CSS 3-to be brought in the html
-	Javascript –used for displaying the map , passing the elements on the map
-	GIT
-	GITHUB



### Other libraries used are: 
-	Google Maps API (Application programming Interface) platform console which includes several versions of the map (to be able to enable the Maps Javascript API in the console)

https://developers.google.com/maps/documentation/javascript/places

-	Google Map-Adding a map with a marker 
### Testing
The page was also tested locally on the Github pages using Chrome developer tools, testing its functionality, as well as look and feel (in landscape and portrait mode) on Galaxy S5, Nexus 5S, Nexus 6P, iPhone 7, iPhone 7 plus, iPhone 8, iPhone 8 plus, iPhone X, iPad, iPad pro and responsive desktop. All links were tested along with video player. 
The Jasmine Testing system was used to write tests for the JavaScript code in order to ensure that the functionalities work well and that the users have achieved their goals, as well as to be protected in case the testers do something was not planned for.
The testing sequences were:
- Testing the JavaScript Code;
- Creating a suite of tests;
- Safely refactoring code.
The tests could not be automated because of deadline and budgetary constraints but Defensive Programming was implemented (catching and dealing with potential issues).
The user stories have been tested manually.

Example- Contact form:

    1. Go to the "Contact Us" page
    2. Try to submit the empty form and verify that an error message about the required fields appears
    3. Try to submit the form with an invalid email address and verify that a relevant error message appears
    4. Try to submit the form with all inputs valid and verify that a success message appears.
The project works differently on different browser and screen sizes as follows: Chrome uses V8, Firefox uses SpiderMonkey, Safari uses javascriptcore, Internet Explorer uses chakra.

### Deployment
The website was coded in the Webstorm 2019.3.1., a local GIT directory was used for version control and then uploaded to GITHUB. Once it was in GITHUB repositories, it was made live using GITHUB pages. The website can be found at: 
Git push was used for activating github pages 

There are no differences between the deployed version and the development version are:

### Content
The text for section Heritage in the html was copied from the Wikipedia pages related to those sites:
Example-St.Michael’s Cathedral
https://en.wikipedia.org/wiki/St_Michael%27s_Cathedral,_Wollongong

