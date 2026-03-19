---
title: "SOAP Client using DOM | Portalscript API"
source: "https://otris.software/documents/api/portalscript/documents/soap-client-using-dom.html"
---

# SOAP Client using DOM

This JavaScript SOAP Client is based on DOM and XMLHTTPRequest supported by PortalScripting.
It works by calling the method SOAPClient.invoke(url, method, parameters, async, callback)
from the SOAP Client Library as follows:

- Get the WSDL by the given URL for the SOAP Proxy (e.g. "http://localhost:11001/") and cache it for future requests.
- Create and send a SOAP request containing the corresponding header, the given method with the given parameters to the server.
- Receive and process the server response using the WSDL so as to build the corresponding JavaScript objects to be returned.
- In case the call mode is async, the given callback method is invoked to get the response, otherwise the JavaScript object is returned.

**Since** DOCUMENTS 4.0c


## SOAP client example


```
#import "soapclient"

// Call mode
var async = false;

// URL for the SOAP Proxy
var url = "http://localhost:11001/";

function User(user, locale, principal, code, passwd)
{
    this.user = user;
    this.locale = locale;
    this.principal = principal;
    this.code = code;
    this.passwd = passwd;
}

// *************login******************
function login(user)
{
    var pl = new SOAPClientParameters();
    pl.add("user", user.user);
    pl.add("locale", user.locale);
    pl.add("principal", user.principal);
    pl.add("code", user.code);
    pl.add("passwd", user.passwd);

    if (!async)
    {
        var res = SOAPClient.invoke(url, "login", pl, async);
        util.out("session: " + res["session"] + "\n");
    }
    else
        SOAPClient.invoke(url, "login", pl, async, login_callback);
}

function login_callback(res)
{
     if (res instanceof Error)
        util.out("login failed with the error message: \n" + res.message + "\n");
     else
         util.out("session: " + res["session"] + "\n");
}

// *************logout******************
function logout()
{
    var pl = new SOAPClientParameters();

    if (!async)
        var res = SOAPClient.invoke(url, "logout", pl, async);
    else
        SOAPClient.invoke(url, "logout", pl, async, logout_callback);
}

function logout_callback(res)
{
   if (res instanceof Error)
        util.out("logout failed with the error message: \n" + res.message + "\n");
}

// *************userInfo******************
function userInfo()
{
    var pl = new SOAPClientParameters();

    if (!async)
    {
        var res = SOAPClient.invoke(url, "userInfo", pl, async);
        util.out("name: " + res["name"] + "\n");
    }
    else
        SOAPClient.invoke(url, "userInfo", pl, async, userInfo_callback);
}

function userInfo_callback(res)
{
    if (res instanceof Error)
        util.out("userInfo failed with the error message: \n" + res.message + "\n");
    else
        util.out("name: " + res["name"] + "\n");
}

// *************testSession******************
function testSession()
{
    var pl = new SOAPClientParameters();

    if (!async)
    {
        var res = SOAPClient.invoke(url, "testSession", pl, async);
  util.out("valid: " + res["valid"] + "\n");
    }
    else
        SOAPClient.invoke(url, "testSession", pl, async, testSession_callback);
}

function testSession_callback(res)
{
    if (res instanceof Error)
        util.out("testSession failed with the error message: \n" + res.message + "\n");
    else
        util.out("valid: " + res["valid"] + "\n");
}

// *************getInbox******************
function getInbox()
{
    var pl = new SOAPClientParameters();

    if (!async)
    {
        var res = SOAPClient.invoke(url, "getInbox", pl, async);
        outputInbox(res);
    }
    else
        SOAPClient.invoke(url, "getInbox", pl, async, getInbox_callback);
}

function getInbox_callback(res)
{
    if (res instanceof Error)
        util.out("getInbox failed with the error message: \n" + res.message + "\n");
    else
        outputInbox(res);
}

// Help method for getInbox
function outputInbox(res)
{
    util.out("=============return value of getInbox: =================\n");
    util.out("idFolder: " + res["idFolder"] + "\n");

    var fileStatuses = res["fileStatuses"];
 for (var i = 0; i < fileStatuses.length; ++i)
 {
  var fileStatus = fileStatuses[i];
  util.out("\n fileStatus of file " + i + " in inbox: \n");
  util.out("fileId: " + fileStatus["fileId"] + "\n");
  util.out("idWorkflowStep: " + fileStatus["idWorkflowStep"] + "\n");
  util.out("status: " + fileStatus["status"] + "\n");
 }

    util.out("====================================================\n");
}

// *************createFile******************
function createFile()
{
    var pl = new SOAPClientParameters();

 // Add parameter 'fileType'
    pl.add("fileType", "Filetype1");

 var fields = new Array();
 var field1 = new field("Feld1_String", "This is a test for SOAP.");
 fields.push(field1);

 // Add parameter 'fields'
 pl.add("fields", fields);

 var addDocs = new Array();
 var dataBase64 = util.getFileContentAsString("C:\\temp\\test.png");
 var document1 = new document("myTestDoc.png", "Reg1_Docs", dataBase64);
 addDocs.push(document1);

 // Add Parameter 'addDocs'
 pl.add("addDocs", addDocs);

    if (!async)
    {
        var res = SOAPClient.invoke(url, "createFile", pl, async);
        util.out("fileId: " + res["fileId"] + "\n");
    }
    else
        SOAPClient.invoke(url, "createFile", pl, async, createFile_callback);
}

function createFile_callback(res)
{
     if (res instanceof Error)
        util.out("createFile failed with the error message: \n" + res.message + "\n");
     else
         util.out("fileId: " + res["fileId"] + "\n");
}

function field(name, value)
{
 this.name = name;
 this.value = value;
}

function document(name, register, data)
{
 this.name = name;
 this.register = register;
 this.data = data;
}

// *************report3******************
function report3()
{
    var pl = new SOAPClientParameters();

 pl.add("filetypes", ["Filetype1", "Filetype2"]);
    pl.add("archives", ["Filetype1@eas1", "Unit=Default/Instance=Default/View=REGTEST@eex1"]);
 pl.add("columns", ["Hit_Id", "DlcFile_Title", "Feld1_String", "Feld2_Aufzaehlung"]);
 pl.add("filter", "SETMETHOD(2)Feld1_String ~ 'soaptest'");
 pl.add("sort", "Feld2_Aufzaehlung+");
 pl.add("hitlistname", "Default");

 if (!async)
    {
        var res = SOAPClient.invoke(url, "report3", pl, async);
  outputReport(res);
    }
    else
        SOAPClient.invoke(url, "report3", pl, async, report3_callback);
}

function report3_callback(res)
{
     if (res instanceof Error)
        util.out("report3 failed with the error message: \n" + res.message + "\n");
     else
         outputReport(res);
}

// *************report4******************
function report4()
{
    var pl = new SOAPClientParameters();

 pl.add("filetypes", ["Filetype1", "Filetype2"]);
    pl.add("archives", ["Filetype1@eas1", "Unit=Default/Instance=Default/View=REGTEST@eex1"]);
 pl.add("columns", ["Hit_Id", "DlcFile_Title", "Feld1_String", "Feld2_Aufzaehlung"]);
 pl.add("filter", "SETMETHOD(2)Feld1_String ~ 'soaptest'");
 pl.add("sort", "Feld2_Aufzaehlung+");
 pl.add("hitlistname", "Default");
 pl.add("unlimitedHits", false);

 if (!async)
    {
        var res = SOAPClient.invoke(url, "report4", pl, async);
  outputReport(res, true);
    }
    else
        SOAPClient.invoke(url, "report4", pl, async, report4_callback);
}

function report4_callback(res)
{
     if (res instanceof Error)
        util.out("report4 failed with the error message: \n" + res.message + "\n");
     else
         outputReport(res, true);
}

function outputReport(res, isReport4)
{
 var hitlist = res["hitlist"];
 util.out("rows: " + hitlist["rows"]);
 util.out("columns: " + hitlist["columns"]);
 var hit = hitlist["hit"];
 if (hit)
 {
  var hitSize = hit.length;

  var output = "";
  for (var i = 0; i < hitSize; i++)
  {
   output = output + "----------\n"
   output = output + "hit[" + i + "]\n";
   var col = hit[i]["column"]
   for (var j = 0; j < col.length; j++)
   {
    output = output + "column[" + j + "]: " + col[j] + "\n";
   }
   output = output + "reserved: " + hit[i]["reserved"] + "\n";
   output = output + "----------\n";
  }
  util.out("hit:\n" + output);
 }

 if (typeof isReport4 != "undefined" && isReport4)
  util.out("Warning: " + res["warning"]);
}

var user1 = new User("schreiber", "de", "peachit", "", "willi");
login(user1);
userInfo();
testSession();
getInbox();
//createFile();
//report3();
//report4();
logout();
```


## SOAP Client Library


```
// *****************************************************************************

// Javascript "SOAP Client" library

// @version: 2.4 - 2007.12.21
// @author: Matteo Casati - http://www.guru4.net/

// *****************************************************************************

// Adjusted for DOCUMENTS 4 using DOM Parser by otris software AG

// The class for the definition of the parameters to be passed to the Web method
function SOAPClientParameters()
{
 var _pl = new Array();

 // Append a new parameter
 this.add = function(name, value)
 {
  _pl[name] = value;
  return this;
 }

 // Provide XML serialization for SOAP request
 this.toXml = function()
 {
  var xml = "";
  for(var p in _pl)
  {
   switch(typeof(_pl[p]))
   {
                case "string":
                case "number":
                case "boolean":
                case "object":
                    xml += "<" + p + ">" + SOAPClientParameters._serialize(_pl[p]) + "</" + p + ">";
                    break;
                default:
                    break;
            }
  }
  return xml;
 }
}

// XML serialization
SOAPClientParameters._serialize = function(o)
{
    var s = "";
    switch(typeof(o))
    {
        case "string":
            s += o.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;"); break;
        case "number":
        case "boolean":
            s += o.toString(); break;
        case "object":
            // Date
            if(o.constructor.toString().indexOf("function Date()") > -1)
            {

                var year = o.getFullYear().toString();
                var month = (o.getMonth() + 1).toString(); month = (month.length == 1) ? "0" + month : month;
                var date = o.getDate().toString(); date = (date.length == 1) ? "0" + date : date;
                var hours = o.getHours().toString(); hours = (hours.length == 1) ? "0" + hours : hours;
                var minutes = o.getMinutes().toString(); minutes = (minutes.length == 1) ? "0" + minutes : minutes;
                var seconds = o.getSeconds().toString(); seconds = (seconds.length == 1) ? "0" + seconds : seconds;
                var milliseconds = o.getMilliseconds().toString();
                var tzminutes = Math.abs(o.getTimezoneOffset());
                var tzhours = 0;
                while(tzminutes >= 60)
                {
                    tzhours++;
                    tzminutes -= 60;
                }
                tzminutes = (tzminutes.toString().length == 1) ? "0" + tzminutes.toString() : tzminutes.toString();
                tzhours = (tzhours.toString().length == 1) ? "0" + tzhours.toString() : tzhours.toString();
                var timezone = ((o.getTimezoneOffset() < 0) ? "+" : "-") + tzhours + ":" + tzminutes;
                s += year + "-" + month + "-" + date + "T" + hours + ":" + minutes + ":" + seconds + "." + milliseconds + timezone;
            }
            // Array
            else if(o.constructor.toString().indexOf("function Array()") > -1)
            {
                for(var p in o)
                {
                    if(!isNaN(p))   // linear array
                    {
                        (/function\s+(\w*)\s*\(/ig).exec(o[p].constructor.toString());
                        var type = RegExp.$1;
                        switch(type)
                        {
                            case "":
                                type = typeof(o[p]);
                            case "String":
                                type = "string"; break;
                            case "Number":
                                type = "int"; break;
                            case "Boolean":
                                type = "bool"; break;
                            case "Date":
                                type = "DateTime"; break;
                        }
                        s += "<" + type + ">" + SOAPClientParameters._serialize(o[p]) + "</" + type + ">"
                    }
                    else    // associative array
                        s += "<" + p + ">" + SOAPClientParameters._serialize(o[p]) + "</" + p + ">"
                }
            }
            // Object or custom function
            else
                for(var p in o)
                    s += "<" + p + ">" + SOAPClientParameters._serialize(o[p]) + "</" + p + ">";
            break;
        default:
            break; // throw new Error(500, "SOAPClientParameters: type '" + typeof(o) + "' is not supported");
    }
    return s;
}

// The SOAPClient class
function SOAPClient() {}

// Session id of SOAP client
SOAPClient.sessionId = "0";

// Timeout in milliseconds for asynchronous calls, the value 0 implies infinite timeout.
SOAPClient.timeout = 30000;

// Idle time in milliseconds for asynchronous calls
SOAPClient.idle = 50;

// This method is invoked by the SOAP client using a JavaScript function with following parameters.
// url: The Web Service URL
// method: Web methode name
// parameters: Web methode parameter values
// async: Call mode (true = async, false = sync)
// callback: Callback method invoked to receive the server response (optional for sync calls)
SOAPClient.invoke = function(url, method, parameters, async, callback)
{
 if(async)
  SOAPClient._loadWsdl(url, method, parameters, async, callback);
 else
  return SOAPClient._loadWsdl(url, method, parameters, async, callback);
}

// private: wsdl cache
SOAPClient_cacheWsdl = new Array();

// private: invoke async
SOAPClient._loadWsdl = function(url, method, parameters, async, callback)
{
 // load from cache?
 var wsdl = SOAPClient_cacheWsdl[url];
 if(wsdl + "" != "" && wsdl + "" != "undefined")
  return SOAPClient._sendSoapRequest(url, method, parameters, async, callback, wsdl);
 // get wsdl
 var xmlHttp = SOAPClient._getXmlHttp();
 xmlHttp.open("GET", url + "?wsdl", async);
    xmlHttp.send(null);
 if(async)
 {
        var timeoutTS = (new Date()).getTime() + SOAPClient.timeout;

        while (true)
        {
            if(xmlHttp.readyState == xmlHttp.COMPLETED)
            {
                SOAPClient._onLoadWsdl(url, method, parameters, async, callback, xmlHttp);
                break;
            }

            if (SOAPClient.timeout > 0)
            {
                if ((new Date()).getTime() > timeoutTS)
                {
                    if(callback)
                    {
                        callback(new Error("Timeout!"), null);
                        break;
                    }
                    else
                        throw new Error("Timeout for the method '" + method + "'!");
                }
            }

          PDTools.sleep(SOAPClient.idle);
        }
 }

 if (!async)return SOAPClient._onLoadWsdl(url, method, parameters, async, callback, xmlHttp);
}
SOAPClient._onLoadWsdl = function(url, method, parameters, async, callback, req)
{
 var wsdl = req.response;
 SOAPClient_cacheWsdl[url] = wsdl; // save a copy in cache
 return SOAPClient._sendSoapRequest(url, method, parameters, async, callback, wsdl);
}
SOAPClient._sendSoapRequest = function(url, method, parameters, async, callback, wsdl)
{
 // get namespace
    var ns = "http://xml.otris.de/ws/DOCUMENTS.xsd";

    // build SOAP request
    var headerSessionId = "";
    if (method != "login")
        headerSessionId = "<DOCUMENTS:sessionID soap:mustUnderstand=\"1\" >" + SOAPClient.sessionId + "</DOCUMENTS:sessionID>"

 var sr =
    "<?xml version=\"1.0\" encoding=\"utf-8\"?>" +
    "<soap:Envelope " +
    "xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" " +
    "xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\" " +
    "xmlns:soap=\"http://schemas.xmlsoap.org/soap/envelope/\" " +
                "xmlns:DOCUMENTS=\"" + ns + "\">" +
                "<soap:Header>" +
                headerSessionId +
                "</soap:Header>" +
    "<soap:Body>" +
    "<" + method + " xmlns=\"" + ns + "\">" +
    parameters.toXml() +
    "</" + method + "></soap:Body></soap:Envelope>";
 // send request
 var xmlHttp = SOAPClient._getXmlHttp();

    xmlHttp.open("POST", url, async);

    var soapaction = ((ns.lastIndexOf("#") != ns.length - 1) ? ns + "#" : ns) + method;
 xmlHttp.addRequestHeader("SOAPAction", soapaction);
    xmlHttp.addRequestHeader("Content-Type", "text/xml; charset=utf-8");
    xmlHttp.send(sr);
 if(async)
 {
  var timeoutTS = (new Date()).getTime() + SOAPClient.timeout;

        while (true)
        {
            if(xmlHttp.readyState == 4)
            {
                SOAPClient._onSendSoapRequest(method, async, callback, wsdl, xmlHttp);
                break;
            }

            if (SOAPClient.timeout > 0)
            {
                if ((new Date()).getTime() > timeoutTS)
                {
                    if(callback)
                    {
                        callback(new Error("Timeout!"), null);
                        break;
                    }
                    else
                        throw new Error("Timeout for the method '" + method + "'!");
                }
            }

          PDTools.sleep(SOAPClient.idle);
        }
 }

 if (!async)
  return SOAPClient._onSendSoapRequest(method, async, callback, wsdl, xmlHttp);
}

// Receive and process the server response
SOAPClient._onSendSoapRequest = function(method, async, callback, wsdl, req)
{
 var o = null;

 if (req.response)
 {
  var tagName;
  if (method == "report2" || method == "report3")
   tagName = "DOCUMENTS:" + method + "Respose"; // Typing error in the wsdl
  else
   tagName = "DOCUMENTS:" + method + "Response";

        var nd = SOAPClient._getElementsByTagName(req.response, tagName);

  if(nd.length == 0)
  {
   nd = SOAPClient._getElementsByTagName(req.response, "faultcode");
   if(nd.length > 0)
   {
    var faultstring = SOAPClient._getElementsByTagName(req.response, "faultstring")[0].childNodes[0].nodeValue;
    if(async || callback)
     o = new Error(faultstring);
    else
     throw new Error(faultstring);
   }
  }
  else
  {
   SOAPClient.sessionId = SOAPClient._getElementsByTagName(req.response, "DOCUMENTS:sessionID")[0].childNodes[0].nodeValue;
   var wsdlArrTypes = SOAPClient._getArrayTypesFromWsdl(wsdl);

   // Special handling for the methods report2/report3/report4, getFilesInfo and getFileTypes,
   // because these methods are specified in the wsdl different than usual.
   if (method == "report4" || method == "report3" || method == "report2")
    o = SOAPClient._reportResponse2object(nd[0], method);
   else if (method == "getFilesInfo")
    o = SOAPClient._getFilesInfoResonse2object(nd[0], wsdlArrTypes);
   else if (method == "getFileTypes")
    o = SOAPClient._getFileTypesResonse2object(nd[0], wsdlArrTypes);
   else
    o = SOAPClient._node2object(nd[0], wsdlArrTypes);
  }
 }
 else
 {
  var faultstring = "Error occurred during invoking '" + method + "'.";
        if(async || callback)
            o = new Error(faultstring);
        else
           throw new Error(faultstring);
 }

 if(callback)
  callback(o, req.response);
 if(!async)
  return o;
}

SOAPClient._reportResponse2object = function(resNode, method)
{
 if(resNode.hasChildNodes())
  o = new Object();
 else
  return null;

 // hitlist
 var hitlist = null;
 if (resNode.firstChild.hasChildNodes())
 {
  hitlist = new Object();
  var hitlistNode = resNode.firstChild;

  hitlist["rows"] = hitlistNode.childNodes[0].childNodes[0].nodeValue;
  hitlist["columns"] = hitlistNode.childNodes[1].childNodes[0].nodeValue;
  var len = hitlistNode.childNodes.length;
  if (hitlistNode.childNodes.length > 2)
  {
   var hits = new Array();
   var colCount = hitlistNode.childNodes[2].childNodes.length - 1;
   for (var i = 2; i < len; i++)
   {
    var hitData = new Object();
    var columns = new Array();
    for (var j = 0; j < colCount; j++)
    {
     if (hitlistNode.childNodes[i].childNodes[j].hasChildNodes())
      columns[j] = hitlistNode.childNodes[i].childNodes[j].childNodes[0].nodeValue;
     else
      columns[j] = "";
}
    hitData["column"] = columns;
    hitData["reserved"] = hitlistNode.childNodes[i].childNodes[colCount].childNodes[0].nodeValue;

    hits[i-2] = hitData;
   }
   hitlist["hit"] = hits;
  }
 }

 o["hitlist"] = hitlist;

 if (method == "report4")
 {
  if (resNode.childNodes[1].childNodes[0])
   o["warning"] = resNode.childNodes[1].childNodes[0].nodeValue;
  else
   o["warning"] = "";
 }

 return o;
}

SOAPClient._getFilesInfoResonse2object = function(resNode, wsdlArrTypes)
{
 if(resNode.hasChildNodes())
  o = new Object();
 else
  return null;

 var files = new Array();
 var len = resNode.childNodes.length;
 for (var i = 0; i < len; i++)
 {
  files[i] = SOAPClient._node2object(resNode.childNodes[i], wsdlArrTypes);
 }

 o["file"] = files;
 return o;
}

SOAPClient._getFileTypesResonse2object = function(resNode, wsdlArrTypes)
{
 if(resNode.hasChildNodes())
  o = new Object();
 else
  return null;

 var filetypes = new Array();
 var len = resNode.childNodes.length;
 for (var i = 0; i < len; i++)
 {
  filetypes[i] = SOAPClient._node2object(resNode.childNodes[i], wsdlArrTypes);
 }

 o["filetype"] = filetypes;
 return o;
}

SOAPClient._node2object = function(node, wsdlArrTypes)
{
 // null node
 if(node == null)
  return null;

 // text node
 if(node.nodeType == 3 || node.nodeType == 4)
  return node.nodeValue;

 // leaf node
 if (node.childNodes.length == 1 && (node.childNodes[0].nodeType == 3 || node.childNodes[0].nodeType == 4))
  return SOAPClient._node2object(node.childNodes[0], wsdlArrTypes);

 var type = wsdlArrTypes[node.nodeName] + "";
 var isarray = type != "undefined";

 // object node
 if(!isarray)
 {
  var obj = null;
  if(node.hasChildNodes())
   obj = new Object();
  for(var i = 0; i < node.childNodes.length; i++)
  {
   var p = SOAPClient._node2object(node.childNodes[i], wsdlArrTypes);
   obj[node.childNodes[i].nodeName] = p;
  }
  return obj;
 }
 // list node
 else
 {
  // create node ref
  var l = new Array();
  for(var i = 0; i < node.childNodes.length; i++)
   l[l.length] = SOAPClient._node2object(node.childNodes[i], wsdlArrTypes);
  return l;
 }
 return null;
}

SOAPClient._getArrayTypesFromWsdl = function(wsdl)
{
 var wsdlArrTypes = new Array();
 var ell = SOAPClient._getElementsByTagName(wsdl, "element");
 for(var i = 0; i < ell.length; i++)
 {
  if(   ell[i].attributes.getNamedItem("name") != null
     && ell[i].attributes.getNamedItem("type") != null
     && ell[i].attributes["type"].nodeValue.toLowerCase().indexOf("list") != -1
     && ell[i].attributes["type"].nodeValue.toLowerCase().indexOf("hitlist") == -1)
  {
   wsdlArrTypes[ell[i].attributes["name"].nodeValue] = ell[i].attributes["type"].nodeValue;
  }
 }
 return wsdlArrTypes;
}

// private: utils
SOAPClient._getElementsByTagName = function(document, tagName)
{
 var parser = new DOMParser;
 var errCode = parser.parse(document);
 var doc;
 if (errCode == DOMParser.ErrCatNone)
 {
  doc = parser.getDocument();
  if (doc != null)
  {
   var nodeList = doc.getElementsByTagName(tagName);
   return nodeList;
  }
 }
 return null;
}

// private: xmlhttp factory
SOAPClient._getXmlHttp = function()
{
 return new XMLHTTPRequest();
}
```