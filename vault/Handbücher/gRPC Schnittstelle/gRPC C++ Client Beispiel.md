---
title: "Erstellen der Client-Stubs"
source: "https://otris.software/documents/manuals/books/grpc/client-stubs-cpp.html"
---

# Erstellen der Client-Stubs

Bevor man mit der Implementierung der Client-Stubs anfängt, müssen gRPC und `Protocol Buffers` zuerst gebaut und lokal installiert werden. Danach wählt man eine von gRPC unterstützte Programmiersprache aus und generiert den passenden gRPC-Server/Client-Code aus den .proto-Dateien (im `[INSTALLDIR]\grpc\protos`). Die Anweisungen dafür verweisen wir einfachheitshalber auf die Webseite [https://grpc.io/docs/languages](https://grpc.io/docs/languages/). Als Beispiel werden hier einige Client-Stubs in C++ erstellt und anschießend werden die Remote-Operationen damit aufgerufen:


```cpp
#include <iostream>
#include <string>
#include <fstream>
#include <sstream>
#include <grpc++/grpc++.h>
#include "otris/scripting.grpc.pb.h"
#include "otris/documents/sessions.grpc.pb.h"

int _tmain(int argc, _TCHAR* argv[])
{
  std::shared_ptr<grpc::Channel> channel;
  std::unique_ptr<otris::rpc::documents::Session::Stub> sessionStub;
  std::shared_ptr<grpc::ChannelCredentials> sslCreds;
  std::unique_ptr<otris::rpc::Scripting::Stub> scriptingStub;

  // Using client certificate
  grpc::SslCredentialsOptions ssl_opts;
  ssl_opts.pem_root_certs = read("ca_cert.pem");
  ssl_opts.pem_private_key = read("myClient_key.pem");
  ssl_opts.pem_cert_chain = read("myClient_cert.pem");
  sslCreds = grpc::SslCredentials(ssl_opts);

  // Create a new Channel verifying SSL certificate and pointing to target
  channel = grpc::CreateChannel("localhost:50050", sslCreds);

  // S. sessions.proto
  otris::rpc::documents::CreateSessionRequest sessionReq;
  otris::rpc::documents::CreateSessionResponse sessionRes;

  // Each call needs an own context.
  grpc::ClientContext context;
  context.AddMetadata("principal", "dopaag";
  context.AddMetadata("username", "schreiber");

  // Create a session
  sessionStub = otris::rpc::documents::Session::NewStub(channel);
  grpc::Status status = sessionStub->CreateSession(&context, sessionReq, &sessionRes);

  if (status.ok())
  {
      // Create a client stub for the service 'Scripting' on the channel
      scriptingStub = otris::rpc::Scripting::NewStub(channel);

      otris::rpc::RunScriptRequest req;
      otris::rpc::RunScriptResponse res;

      req.set_file_id("peachitreg_fi20110000000011");
      req.set_script_name("testScript");
      auto parameters = mReq.mutable_parameters();
      (*parameters)["paramName"] = "paramValue";

      // Each call needs an own context.
      grpc::ClientContext context2;
      context2.AddMetadata("principal", "dopaag");
      context2.AddMetadata("username", "schreiber");
      context2.AddMetadata("locale", "en");
      context2.AddMetadata("session_id", sessionRes.session_id());

      // Invoke the remote operation 'RunScript'
      status = scriptingStub->RunScript(&context2, req, &res);
      if (status.ok())
          std::cout << "Return value: " << res.return_value();
  }

  otris::rpc::documents::CloseSessionRequest csReq;
  otris::rpc::documents::CloseSessionResponse csRes;

  grpc::ClientContext context3;
  context3.AddMetadata("principal", "dopaag");
  context3.AddMetadata("username", "schreiber");
  context3.AddMetadata("session_id", sessionRes.session_id());
  // Close the session
  grpc::Status status = sessionStub->CloseSession(&context3, csReq, &csRes);
}
```

#include <iostream>
#include <string>
#include <fstream>
#include <sstream>
#include <grpc++/grpc++.h>
#include "otris/scripting.grpc.pb.h"
#include "otris/documents/sessions.grpc.pb.h"

int _tmain(int argc, _TCHAR* argv[])
{
  std::shared_ptr<grpc::Channel> channel;
  std::unique_ptr<otris::rpc::documents::Session::Stub> sessionStub;
  std::shared_ptr<grpc::ChannelCredentials> sslCreds;
  std::unique_ptr<otris::rpc::Scripting::Stub> scriptingStub;

  // Using client certificate
  grpc::SslCredentialsOptions ssl_opts;
  ssl_opts.pem_root_certs = read("ca_cert.pem");
  ssl_opts.pem_private_key = read("myClient_key.pem");
  ssl_opts.pem_cert_chain = read("myClient_cert.pem");
  sslCreds = grpc::SslCredentials(ssl_opts);

  // Create a new Channel verifying SSL certificate and pointing to target
  channel = grpc::CreateChannel("localhost:50050", sslCreds);

  // S. sessions.proto
  otris::rpc::documents::CreateSessionRequest sessionReq;
  otris::rpc::documents::CreateSessionResponse sessionRes;

  // Each call needs an own context.
  grpc::ClientContext context;
  context.AddMetadata("principal", "dopaag";
  context.AddMetadata("username", "schreiber");

  // Create a session
  sessionStub = otris::rpc::documents::Session::NewStub(channel);
  grpc::Status status = sessionStub->CreateSession(&context, sessionReq, &sessionRes);

  if (status.ok())
  {
      // Create a client stub for the service 'Scripting' on the channel
      scriptingStub = otris::rpc::Scripting::NewStub(channel);

      otris::rpc::RunScriptRequest req;
      otris::rpc::RunScriptResponse res;

      req.set_file_id("peachitreg_fi20110000000011");
      req.set_script_name("testScript");
      auto parameters = mReq.mutable_parameters();
      (*parameters)["paramName"] = "paramValue";

      // Each call needs an own context.
      grpc::ClientContext context2;
      context2.AddMetadata("principal", "dopaag");
      context2.AddMetadata("username", "schreiber");
      context2.AddMetadata("locale", "en");
      context2.AddMetadata("session_id", sessionRes.session_id());

      // Invoke the remote operation 'RunScript'
      status = scriptingStub->RunScript(&context2, req, &res);
      if (status.ok())
          std::cout << "Return value: " << res.return_value();
  }

  otris::rpc::documents::CloseSessionRequest csReq;
  otris::rpc::documents::CloseSessionResponse csRes;

  grpc::ClientContext context3;
  context3.AddMetadata("principal", "dopaag");
  context3.AddMetadata("username", "schreiber");
  context3.AddMetadata("session_id", sessionRes.session_id());
  // Close the session
  grpc::Status status = sessionStub->CloseSession(&context3, csReq, &csRes);
}