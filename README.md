Hi Matthieu, 

Good to meet you today.

As promised, here are the details for the Web Directions Code conference which is for two days: Thursday, August 3 and Friday August 4.

Cheers

John 

-----Original Message-----
From: Web Directions [mailto:info@webdirections.org] 
Sent: Friday, 30 June 2017 3:10 PM
To: John Hardy
Subject: Web Directions Code Ticket Information

Thank you for registering for Code 2017 in Melbourne. 

We are really looking forward to seeing you there. 

This email is your ticket. Just arrive at the venue for registration and we'll have everything you need for Code ready for you. 

In this email, you will also find some more information about timings, registration and more. In the lead up to Code, we will send reminders and updates, so you be ready when August rolls around, however, if there is something you need to know right now, please get in touch and we would be happy to help. 

========== Your Ticket(s) =========

You are registered to attend:

DETAILS ABOUT YOUR CODE SILVER TICKET

WEB DIRECTIONS CODE CONFERENCE

==Timing==

The conference runs from 9.00am to 5.30pm on Thursday, August 3 and Friday August 4 2017 and is fully catered. 

Please Join us for a networking reception on Thursday evening immediately following the last session. 


==On Site Registration==

Registration will be open at the venue from 8:00am on Thursday, August 3. 

==Venue==

Web Directions Code takes place at

The Pavillion
Arts Centre Melbourne
Level 8
100 St Kilda Road, Melbourne



Thanks for registering and see you in August!


john
John Allsopp
====================================

Web Directions Conference Pty Ltd
http://webdirections.org/respond/
Suite 2B Level 2/2-12 Foveaux St
Surry Hills NSW 2010
ABN: 20 118 802 118

Phone: +61 2 9043 6797
Email: info@webdirections.org

Subscribe to our weekly newsletter: exclusive special offers, competitions, and news from Web Directions, plus the latest newsworthy links from around the web.
http://www.webdirections.org/sign-up-to-the-newsletter/


____________________________________________________________
Report any spam emails to spam@nab.com.au Report any phishing / suspicious emails to hoax@nab.com.au For more information visit http://go/cybersafety ____________________________________________________________





# f-layout CSS layout system

[f-layout](https://jhlagado.github.io/f-layout) is an easy to use alternative to grid layouts. 
A family of composable CSS classes designed to quickly enable 
responsive flexbox-based layout on IE 11+, Edge, Chrome, Firefox 
and Safari browsers.

Using CSS for laying out pages has always been tricky and before CSS3 
was done mainly by misusing CSS features in order to get the job done.
The idea behind f-layout is use modern CSS (now well supported
in browsers) to create a small set of easily learned classes 
to enable web designers to build layouts quickly.

It uses the <a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/">flexbox CSS model</a>
but tries to avoid complexity by surfacing only its most useful features 
and to have sensible defaults to make layout building as simple as possible. 
      
Here's a simple example:
```html
<div class="toolbar f-row f-middle f-padding">
  <i class="material-icons">menu</i>
  <strong class="f-grow">Welcome to f-layout </strong>
  <i class="material-icons">email</i>
  <img style="width:56px;height:56px;border-radius:50%;"
      src="https://s.gravatar.com/avatar/f850593bdae3cb1c8c535b4acfdfdb98?s=80">
</div>
```
and this is what it looks like:
![example](https://jhlagado.github.io/f-layout/example0.png)

Here's a reasonably complicated example:
```html
<div class="f-row f-stretch">
  <div class="f-hide-s f-column f-stretch f-padding">
    <div class="f-row f-center" style="height:80px;">
      Logo
    </div>
    <div class="f-grow">
      <div>123</div>
      <div>456</div>
      <div>789</div>
    </div>
  </div>
  <div class="f-column f-stretch f-grow">
    <div class="f-row f-padding">
      <i class="material-icons">menu</i>
      <strong class="f-grow">Welcome to f-layout </strong>
      <i class="material-icons">email</i>
      <img style="width:56px;height:56px;border-radius:50%;"
          src="https://s.gravatar.com/avatar/f850593bdae3cb1c8c535b4acfdfdb98?s=80">
    </div>
    <div class="f-grow" style="overflow-y:auto">
      <div style="height:1000px;">
      </div>
    </div>
  </div>
</div>
```
which looks like this:
![example](https://jhlagado.github.io/f-layout/example.png)

In f-layout, all layout is either in a row or a column or 
a nested combination. Flow is from left to right, top to bottom. 

For element alignment, it follows CSS conventions of using terms like "left", "right", "top" and "bottom".
It also uses the term "center" to denote horizontal centering as opposed 
to "middle" for vertical centering.

Elements can be hidden or shown and reordered. All of the features of
f-layout can be applied responsively so as to deal with different
device screen widths.

All classes can be suffixed with s, m or l and these suffixes
correspond to screen width break points:

<table>
  <tr><td>suffix</td><td>meaning</td><td>break point</td></tr>
  <tr><td>s</td><td>small</td><td>less than 600px</td></tr>
  <tr><td>m</td><td>medium</td><td>601px to 992px</td></tr>
  <tr><td>l</td><td>large</td><td>more than 992px</td></tr>
</table>

### Installing

#### Using Npm

```bash
npm install f-layout --save
```
Add this tag to your html:

```html
    <link href="node_modules/f-layout/dist/f-layout.min.css" rel="stylesheet">
```

#### Using Bower

```bash
bower install f-layout --save
```
Add this tag to your html:

```html
    <link href="bower_components/f-layout/dist/f-layout.min.css" rel="stylesheet">
```

#### Documentation

[Go here](https://jhlagado.github.io/f-layout) to read the f-layout documentation.
