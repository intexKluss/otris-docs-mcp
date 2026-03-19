---
title: "System Requirements DOCUMENTS 5"
source: "https://otris.software/documents/manuals/books/system-requirements-d5-en/server-hardware.en.html"
---

## Hardware


### Server

|  | Minimum requirement |
| --- | --- |
| Processor |  |
| Current multi-core processor | 4 cores, 64-Bit |
| RAM |  |
| Windows, remote database | 12 GB |
| Windows, locally installed | 16 GB |
| Linux | 6 GB |
| SSD |  |
| System, depends on the database type | 10 GB |
| Data, depends on the database volume | 50 GB |


### Network

The connection speed between the web server (Tomcat) and the application server (DocumentsServer) as well as between the application server and the database must be at least 1 GBit.


### Scaling options

The application can be operated on one server. To scale the system, the application can be distributed to up to 3 servers.