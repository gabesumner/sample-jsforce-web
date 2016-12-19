# sample-jsforce-web

A simple project that demonstrates how to use JSforce in your web browser.

## Overview

[JSforce](https://jsforce.github.io/) is a JavaScript library that helps you utilize Salesforce's API. 

The documentation provides an example of how to utilize this library in your web browser:

```javaScript
<!DOCTYPE html>
<html>
<head>
  <script src="//cdnjs.cloudflare.com/ajax/libs/jsforce/1.7.0/jsforce.min.js"></script>
  <script>
jsforce.browser.init({
  clientId: '[ your Salesforce OAuth2 ClientID is here ]',
  redirectUri: '[ your Salesforce registered redirect URI is here ]'
});
jsforce.browser.on('connect', function(conn) {
  conn.query('SELECT Id, Name FROM Account', function(err, res) {
    if (err) { return console.error(err); }
    console.log(res);
  });
});
  </script>
</head>
<body>
  <button onclick="javascript:jsforce.browser.login();">Login</button>
</body>
</html>
```

However, if you paste this HTML into a localhost file and load it in your web browser, it won't work.

Not only do you need to replace the clientId and redirectUri variables with your Salesforce Connected App, but you'll also need a proxy server and a local web server.

## Setup

1. Create a Salesforce Developer Org or login to your existing Salesforce org.

1. If your org is using Lightning, go to Setup -> Apps -> App Manager.

1. Click New Connected App
   1. Give your app a name and email address.
   1. Check *Enable oAuth Settings*.
   1. Select *Full access* for the *Selected OAuth Scope*.
   1. Click *Save*.

1. After saving, make note of the *Consumer Key*.

1. Clone this repo:  
*git clone https://github.com/gabesumner/sample-jsforce-web*

1. Run *npm install* to install the dependencies.  

1. Run *node server.js*.

1. Access *http://localhost:8080/*

1. Open Developer Tools (so you can see the console.log messages).

1. Explore the samples.

1. Login using the credentials for your Salesforce org.

1. Look at the console.log messages to confirm that a list of Accounts was retrieved using the Salesforce API.

## Credit

- Full credit to Shinichi Tomita <shinichi.tomita@gmail.com> for creating JSforce. 
