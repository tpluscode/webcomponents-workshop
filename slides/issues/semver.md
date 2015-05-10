## Nuget Issues
### Broken SemVer resolutions

By default installs oldest matching version

* [Some rant here](http://andreasohlund.net/2014/04/30/nuget-dependency-resolution-considered-harmful/)

```
PM> install-package Resourcer.Fody

Attempting to resolve dependency 'Fody (≥ 1.13.8)'.
Installing 'Fody 1.13.8.0'.

PM> update-package Fody

Removing 'Fody 1.13.8.0' from XYZ.
Successfully removed 'Fody 1.13.8.0' from XYZ.
Adding 'Fody 1.28.3' to XYZ.
Installing 'Fody 1.28.3'.
Successfully installed 'Fody 1.28.3'.
```