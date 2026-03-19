---
title: "Finding and retrieving items"
source: "https://otris.software/documents/manuals/books/ews-js-api/finditems.html"
---

# Finding and retrieving items


## Item identification

Every item (message, contact, calendar item, task etc.) has an id
consisting of two components:

- The actual id: Identifies the item
- The change key: Identifies the version of the item

For retrieving an item, both is needed. By the change key the Exchange
server checks, if you request the latest version of the item. This
ensure the synchronisation between different clients where an item
can be changed by a different client in the meantime.

Thus, an item id looks like this:


```javascript
var itemId = {
    id: "AAMkADZ...AAA=", // Usually a long string
    change_key: "EQAAABYAAADUM4GKjFsjRbsS+0UFYt/5AABXnuGA"
};
```

var itemId = {
    id: "AAMkADZ...AAA=", // Usually a long string
    change_key: "EQAAABYAAADUM4GKjFsjRbsS+0UFYt/5AABXnuGA"
};
## Searching for an item

Searching for an item can be executed by the function `findItem()`:


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
});The functions offers to search in various folders of a user's mailbox,
e.g., `inbox`, `contacts`, `calendar` etc. In the example, the `inbox`
of the user is searched and will retrieve the id of any item (in this
case, messages), which have the word "EWS" in the subject. Other
fields can be specified by the field URI, e.g., `item:From`,
`contacts:DisplayName` etc.

See the documentation for `findItem()` for more details and search
options.


## Retrieving an item

If you have an id of an item (either by searching for it or having it
stored somewhere), you can retrieve this item by the various get
functions (`getMessage()`, `getContact()` etc.). Using the found item
ids from above, retrieving the item itself will look like this:


```javascript
util.out("Received item ids: " + itemIds.length); // DOCUMENTS only
itemIds.forEach(id => {
    var message = service.getMessage(id);
    util.out(message.subject); // DOCUMENTS only
});
```

util.out("Received item ids: " + itemIds.length); // DOCUMENTS only
itemIds.forEach(id => {
    var message = service.getMessage(id);
    util.out(message.subject); // DOCUMENTS only
});