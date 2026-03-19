---
title: "Sending e-mails via EWS"
source: "https://otris.software/documents/manuals/books/ews-js-api/sending.html"
---

# Sending e-mails via EWS

In addition to known mechanism for sending e-mails, e-mails can be sent
via EWS. To


## Creating and sending a message

An e-mail can be sent when the e-mail is created. To this purpose, the
function `ews.Service.createMessage()` can be used:


```javascript
// Establish a connection to an Exchange server
var options = /** @type {ews.Credentials} */ ({
    auth_type: "ntlm",
    server_uri: "https://exchange.example.com/ews/Exchange.asmx",
    domain: "example",
    username: "user",
    password: "passwort"
});

try {
    var service = new ews.Service(options);

    // Create a new message which will be sent immediately

    var message = service.createMessage({
        item: {
            from: {
                email_address: "john.doe@example.com",
                name: "John Doe",
                mailbox_type: "Mailbox",
                routing_type: "SMTP"
            },
            subject: "Sending e-mails via EWS",
            body: {
                content: "Hi Jane,\n\nI sent an e-mail via EWS.\n\nBest regards, John",
                type: "text"
            },
            to_recipients: [{
                email_address: "jane.doe@example.com",
                name: "Jane Doe",
                mailbox_type: "Mailbox",
                routing_type: "SMTP"
            }]
        },
        message_disposition: "send_and_save_copy"
    });

    // Continue working with the created and sent message

} catch (e) {
    // Error handling
}
```

// Establish a connection to an Exchange server
var options = /** @type {ews.Credentials} */ ({
    auth_type: "ntlm",
    server_uri: "https://exchange.example.com/ews/Exchange.asmx",
    domain: "example",
    username: "user",
    password: "passwort"
});

try {
    var service = new ews.Service(options);

    // Create a new message which will be sent immediately

    var message = service.createMessage({
        item: {
            from: {
                email_address: "john.doe@example.com",
                name: "John Doe",
                mailbox_type: "Mailbox",
                routing_type: "SMTP"
            },
            subject: "Sending e-mails via EWS",
            body: {
                content: "Hi Jane,\n\nI sent an e-mail via EWS.\n\nBest regards, John",
                type: "text"
            },
            to_recipients: [{
                email_address: "jane.doe@example.com",
                name: "Jane Doe",
                mailbox_type: "Mailbox",
                routing_type: "SMTP"
            }]
        },
        message_disposition: "send_and_save_copy"
    });

    // Continue working with the created and sent message

} catch (e) {
    // Error handling
}
## Sending an existing message

The second option for sending e-mails, is to create the e-mail as a
message first and then send it later. Creating the message can be
done with `ews.Service.createMessage()` and the
`message_disposition: save_only`.

This function returns the create message object containing an `item_id`.
This item can be used for sending the message late using the function
`ews.Service.sendItem()` or `ews.Service.sendItems()`, if more than one
e-mail should be sent.


```javascript
// Establish a connection to an Exchange server
var options = /** @type {ews.Credentials} */ ({
    auth_type: "ntlm",
    server_uri: "https://exchange.example.com/ews/Exchange.asmx",
    domain: "example",
    username: "user",
    password: "passwort"
});

try {
    var service = new ews.Service(options);

    // Create a message

    var message = service.createMessage({
        item: {
            from: {
                email_address: "john.doe@example.com",
                name: "John Doe",
                mailbox_type: "Mailbox",
                routing_type: "SMTP"
            },
            subject: "Sending e-mails via EWS",
            body: {
                content: "Hi Jane,\n\nI sent an e-mail via EWS.\n\nBest regards, John",
                type: "text"
            },
            to_recipients: [{
                email_address: "jane.doe@example.com",
                name: "Jane Doe",
                mailbox_type: "Mailbox",
                routing_type: "SMTP"
            }]
        },
        message_disposition: "save_only"
    });

    // Send the e-mail
    service.sendItem(message.item_id);

    // ...or send several e-mail at once
    service.sendItems([
        message.item_id
        // Add further id of messages
    ]);

    // Continue working with the created and sent message

} catch (e) {
    // Error handling
}
```

// Establish a connection to an Exchange server
var options = /** @type {ews.Credentials} */ ({
    auth_type: "ntlm",
    server_uri: "https://exchange.example.com/ews/Exchange.asmx",
    domain: "example",
    username: "user",
    password: "passwort"
});

try {
    var service = new ews.Service(options);

    // Create a message

    var message = service.createMessage({
        item: {
            from: {
                email_address: "john.doe@example.com",
                name: "John Doe",
                mailbox_type: "Mailbox",
                routing_type: "SMTP"
            },
            subject: "Sending e-mails via EWS",
            body: {
                content: "Hi Jane,\n\nI sent an e-mail via EWS.\n\nBest regards, John",
                type: "text"
            },
            to_recipients: [{
                email_address: "jane.doe@example.com",
                name: "Jane Doe",
                mailbox_type: "Mailbox",
                routing_type: "SMTP"
            }]
        },
        message_disposition: "save_only"
    });

    // Send the e-mail
    service.sendItem(message.item_id);

    // ...or send several e-mail at once
    service.sendItems([
        message.item_id
        // Add further id of messages
    ]);

    // Continue working with the created and sent message

} catch (e) {
    // Error handling
}