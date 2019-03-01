# SourceCheck POC: Sign content

Sign content using uPort Ethr-DID

### Usage

```
node ./signContent.js <filename>
```

The result will be the signed JWT, something like this:

```
eyJ0eXAiOiJKV1QiLCJhbGciOiJFUzI1NkstUiJ9.eyJpYXQiOjE1NTE0NDAzMjAsImNsYWltcyI6eyJuYW1lIjoiSmVmZmVyc29uIFNvZmFyZWxsaSIsImF1dGhvciI6ImU4ZTU1ZmQ1NWI5NTBmMTMyYjI5NzFlMTMxYzQwZGEyYzIwN2JmNzk2NDU0NWI1OTZlYTMwMTBlYmJiZWUwZDkifSwiaXNzIjoiZGlkOmV0aHI6MHhhYWMyZGI1ODkyZGRmYWFkNmJiYzRlZWRmMDU1ZjIyZDYwZDYzZTlmIn0.wIdvY9Is3qvnMFGxvtiNK0__EiP1kTYsO_GU1APX5lOijoc4-BjcX_XKwYwepuqrv01OtBN2owTObyk9rO-D7wA
```