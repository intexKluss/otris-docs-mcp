---
title: "Protocol Buffers und .proto-Dateien"
source: "https://otris.software/documents/manuals/books/grpc/protocol-buffers.html"
---

# Protocol Buffers und .proto-Dateien

Wie bereits erwähnt, werden die `Protocol Buffers` in einer .proto-Datei gespeichert. Sie definieren die vorgesehenen Services und bereitgestellten Operationen. Für jede Operation kann angegeben werden, welche Parameter mit einer Anfrage (`Request`) geschickt werden und was als Rückgabewert (`Response`) erwartet werden kann. Aus der .proto-Datei generiert der Protobuf-Compiler `protoc` den operativen Code mit den entsprechenden Klassen für eine gewünschte Zielsprache (z.B. C++). Anhand des generierten Code wird der Server implementiert bzw. werden die Client-Stubs erstellt, die die Operationen des Services aufrufen.

![gRPC_workflow](img/workflow.png)


Alle .proto-Dateien der gRPC-Schnittstelle im DOCUMENTS befinden sich im Verzeichnis `[INSTALLDIR]\grpc\protos`. Als Beispiel dient hier die .proto-Datei `scripting.proto`, in der der Service `Scripting` definiert ist:


```protobuf
syntax = "proto3";
package otris.rpc;

service Scripting {
  rpc RunScript (RunScriptRequest) returns (RunScriptResponse);
}

message RunScriptRequest {
  string file_id = 1;
  string script_name = 2;

  //pairs of name and value
  map<string, string> parameters = 3;
}

message RunScriptResponse {
  string return_value = 1;
  int32 return_status = 2;
  string error_message = 3;
}
```

syntax = "proto3";
package otris.rpc;

service Scripting {
  rpc RunScript (RunScriptRequest) returns (RunScriptResponse);
}

message RunScriptRequest {
  string file_id = 1;
  string script_name = 2;

  //pairs of name and value
  map<string, string> parameters = 3;
}

message RunScriptResponse {
  string return_value = 1;
  int32 return_status = 2;
  string error_message = 3;
}In der ersten Zeile ist die verwendete Syntaxversion `proto3` festgelegt. Der Service `Scripting` enthält nur eine Operation `Runscript`. Die Parameter der Anfrage (`RunScriptRequest`) und die Rückgabewerte (`RunScriptResponse`) werden jeweils als ein Feld deklariert. Jedes Feld verfügt über einen Typ, einen Namen und eine Feldnummer. Weitere Informationen über `Protocol Buffers` findet man [hier (https://protobuf.dev/)](https://protobuf.dev/).