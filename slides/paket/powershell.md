## Nuget Issues
### Solution to: (un)install.ps1

* Don't run scripts at all
* Force some manual work for certain packages

Some workarounds:
* Add any `*.targets` to csproj
* Possibility to [execute XML Transformations](https://github.com/fsprojects/Paket/issues/614)