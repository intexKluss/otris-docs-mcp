---
title: "Getting started"
source: "https://otris.software/documents/manuals/books/ews-js-api/gettingstarted.html"
---

# Getting started

The EWS JS API allows to connect to an Exchange server and query and
manipulate data. In this How-to the first steps to implement this, are
given. See below for the full example.

1. Instantiate a object of the EWS service class.
Set the authentification type and the corresponding credentials
The URL of the EWS service is usually http://your-host/ews/Exchange.asmx
For connecting to Office 365 see Howto on Office 365


```javascript
var service = new ews.Service({
    auth_type: "basic",
    server_uri: "https://host/ews/Exchange.asmx",
    username: "user",
    password: "password"
});
```

var service = new ews.Service({
    auth_type: "basic",
    server_uri: "https://host/ews/Exchange.asmx",
    username: "user",
    password: "password"
});1. Execute a method, e.g., find all mails with "EWS" in the subject


```javascript
var itemIds = service.findItem({
    distinguished_folder: "inbox",
    is_equal_to: {
        field_uri: "item:Subject",
        constant: "EWS"
    }
});
```

var itemIds = service.findItem({
    distinguished_folder: "inbox",
    is_equal_to: {
        field_uri: "item:Subject",
        constant: "EWS"
    }
});1. Handle the retrieved data


```javascript
var result = "Found mails with subject 'EWS': " + itemIds.length + "\n";
itemIds.forEach((itemId, index) => {
    result += "Mail " + index + ": " + itemId.id + ", " + itemId.change_key + "\n";
    var item = service.getMessage(itemId);
    result += "  " + JSON.stringify(item, null, 2) + "\n--\n";
});

// Log to console (DOCUMENTS only)
util.out(result);
```

var result = "Found mails with subject 'EWS': " + itemIds.length + "\n";
itemIds.forEach((itemId, index) => {
    result += "Mail " + index + ": " + itemId.id + ", " + itemId.change_key + "\n";
    var item = service.getMessage(itemId);
    result += "  " + JSON.stringify(item, null, 2) + "\n--\n";
});

// Log to console (DOCUMENTS only)
util.out(result);