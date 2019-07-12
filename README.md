Front end challenges for lds church

https://codepen.io/lcdpen/pen/ewbKbX?editors=1010

https://codepen.io/lcdpen/pen/mZQzyP

Notes On Final project -

    This is not perfect by any means but here is some info on the project during development.

    I learned some things mixing React with an existing html project. Its not as easy as starting a fresh project. There are a lot of things that don't work when attempting to use multiple dom containers
    in one project. Especially in css terms. Layout can be difficult and adding or removing classes is sometimes not possible with existing web components.

    Having said that my biggest challenge was simply time and knowing that I just did as much as I could. Like I said its not perfect but I did finish most of what was asked.  

To run the project just open lds.html in a browser and you should be able to evaluate.
    
*** Important ***  On lds.html if you uncomment 76-78 and then comment out 80-87 you will see the react version on firefox. I didn’t have chrome or safari up for a lot of the development so by the time I discovered it wasn’t running on those browsers it was too late to try and fix. I assume its something small but maybe next time.

I took most of the code from a page inspection and then copied some of the external css files. I noticed most of the code was available if I opened the website on different browsers. Having said that I actually coded the tools menu myself. I found some minor issues later on that could have been polished with more time but its functional and it looks ok. I made a decision to do a different behavior on hover of the icons. just wanted to try something different.

    There was one HUGE PROBLEM though in the project. On lds.html line 62 this tag "<div id="PFprefBox"></div>" is present on inspection but has nothing in it. However the inspection shows substantial code for the navigation. I was not able to remove the tools section from the code because I could not find it. I was able to copy it from the inspection and use it for the tools menu. But I couldn't remove that code in the project. I am puzzled as to how that code is showing up.

    This made it impossible to complete the other part of the challenge. I would love to know where this code actually resides.
