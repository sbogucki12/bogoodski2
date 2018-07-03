# BoGoodSki Dot Com Two Point Oh 




## Background

Currently [Bogoodski.com](https://resumebogucki.herokuapp.com/ "Resume - Steve Bogucki") just hosts my basic resume site.  I want to extend that out to an entire portfolio and do so in a way that allows easy expansion for adding future functionality.  


Because of that desire for future functionality, I am going to build a Node.js/Express server to support this project.  Though, initially, it might not really need it.  In the future, I'm gonna want to add features like an SMTP client that will require server-side coding, so I think this pre-planning will be invaluable at that time.  


For now, some of the features that I plan to incorporate into this site include: 


+ Link to my current resume site (the source code of which I will likely pull into this project)
+ Repository for all of the tech-related writings I share on LinkedIn 
+ A library of online courses and resources that have helped my study of web development
+ Social media widgets 
+ Links to my Soundcloud (I mix music, aka DJ in my bedroom, not necessarily well)
+ Link to my video log [Maxresistanceblog.com](https://maxresistance.herokuapp.com/ "The Path of Maximum Resistance")
+ Link to my [GitHub](https://github.com/sbogucki12 "GitHub - sbogucki12")


Most importantly, I just want to practice some front-end design techniques.  I kinda like to think of myself as a full stack developer and sometimes prefer working on business logic, querying data, and that sort of thing.  So, I don't know if I've ever set out to just create something online that emphasized aesthetic appeal over utilitarian purpose.  In this case, I intend to.  



## Technology


The planned technology stack: 


+ Node.js
+ Express
+ Bootstrap 4
+ Flexbox 
+ Material-UI
+ ReactJS (Create React App)
+ MongoDB (via mLab)
+ Mongoose
+ Heroku
+ NodeMailer (eventually)
+ React Router (eventually)
+ git (GitHub)
+ VSCode 
+ Postman
+ Axios







## Screenshots


+ July, 2018: 


*Added project components to the "Porfolio" tab:*


![recordIt](http://g.recordit.co/WnV4fVvNr5.gif)



+ June 26, 2018: 


*Added Dj BoGoodSki component:* 



![recordIt](http://g.recordit.co/Wz3GdQpPhy.gif)


+ June 25, 2018:


*Added social media component:*


![Imgur](https://i.imgur.com/5d3vkfW.jpg)




+ June 24, 2018: 


*Writings component - table for desktop, list for mobile:*


![Imgur](https://i.imgur.com/yeLhNYR.jpg)


+ June 23, 2018: 


*Express, via Node to MongoDB on mLab to feed Material-UI via React. Geez:*


[Click here to see gif of this functionality](http://g.recordit.co/34Ir5WWj6v.gif)



+ June 22, 2018: 


*get() call to mLab that will populate Writings component (Will be refactored via GraphQL):*



![Imgur](https://i.imgur.com/yrRRPqc.jpg)



+ June 21, 2018: 


*We now have a contact form!:*


![Imgur](https://i.imgur.com/UUT7WLN.jpg)


+ June 19, 2018: 


*Wired up the API/ORM DB connection:* 


![recordIt](http://g.recordit.co/nlVnu9oKtR.gif)



*Updated the Home component:*


![Imgur](https://i.imgur.com/Buhs5lL.jpg)



+ June 18, 2018: 


*Working on the Resume component:*


![recordIt](http://g.recordit.co/XSljWjrkLI.gif)


+ June 17, 2018: 


*Added some tabs:*


![recordIt](http://g.recordit.co/W9AJh7Onxh.gif)


*Gridlist of my favorite learning resources:*


![recordIt](http://g.recordit.co/YHrxY2OECG.gif)



*such progress, lol:*


![Imgur](https://i.imgur.com/L2wvsNO.jpg)


+ June 16, 2018: 


*Look at this sweet progress:*


![Imgur](https://i.imgur.com/gPhAaGk.jpg)



*It all began with a dream*


![Imgur](https://i.imgur.com/ROqNVNs.jpg)







## Timeline: 


**July 2, 2018:**



+ Created project components to populate the "Portfolio" tab.
+ Created template components that will be used to make the content components for the Portfolio tab



**June 26, 2018:** 

+ Added the Dj BoGoodSki component.  It needs some major refactoring. Lol.  Also, if you look closely, some of the hover colors on the buttons aren't the unform shade of blue with the rest of the app.  I need to configure the theme for this component. 


**June 25, 2018:**


+ Adjusted formatting on experience component
+ Added the social media component.


**June 24, 2018:**


+ Created two separate components for the Writings component, one with a Material-UI table for desktop viewing, and another for mobile with just an unordered list
+ Refactored how the button works on the landing page to make it more React-y. (Passed props from parent to child to grandchild in order to change state in the original parent)


**June 23, 2018:**


+ Got my Axios call to work to populate the Material-UI table for the Writings component.  But I need to fix the formatting; responsive to all devices EXCEPT iPad.  Also, need to add pagination.  And resolve, if possible, so Cross-Origin issues that are preventing some of the thumbnails from rendering.  



**June 22, 2018:** 


+ I collected a bunch of my activity posts from LinkedIn and stored them in a mongoDB instance on mLab with the intent of practicing GraphQL (that I've never before used) to get the posts and return them in the writings component.  For now, the get() is just a regular Mongoose query until I become more familiar with GraphQL.  At which time, I'll refactor. 



**June 21, 2018:**


+ Created and connected Contact component
+ Fixed Mongoose connection
+ Resolved the syntax error that was being presented in production.  


**June 20, 2018:** 

+ Created the basic contact form 



**June 19, 2018:**

+ Created MongoDB instance via mLab, connected Express API via Mongoose, and tested successfully via Postman in preparation for creating a contact form 
+ Updated the theme color for the tabs
+ Updated the Home component
+ Updated the resume component so that it is formatted well on all devices (except Ipad Pro; need to circle back to that later)



**June 18, 2018:**


+ Started work on Resume component, utilizing Material-UI card components 
+ Added content to resume component


**June 17, 2018:**

+ Added tabs for navigation on the main page
+ Created GridList component of learning resources 
+ Formatted the landing page. Used one media query to respond to mobile devices.  Messed around alot with Material-UI, trying to do a lot of legwork now to make future expansion easier later. 


**June 16, 2018:** 

+ First commit, installed concurrently, generated Create-React-App, added some boiler plate scripts for preparation for future deployment to Heroku 
+ Added some basic bootstrap and flexbox boilerplate to the css 
+ Installed Material-UI




## Credit

**I'm in the market for a full time position**, preferably either in the Los Angeles area, where I currently reside, or in Las Vegas, where I intend to be.  I have experience with the .NET CORE stack, to include MVC and Web API, as well as all associated technologies: SQL Server, Entity Framework, LINQ.  However, I am trying to move my career toward the MERN stack and potentially toward learning elm which, admittedly, I currenty have zero experience :)   

Please visit [my online resume](https://resumebogucki.herokuapp.com/ "Resume - Steve Bogucki")





<br/>
<br/>

![Imgur](https://i.imgur.com/lPZPov1.jpg)