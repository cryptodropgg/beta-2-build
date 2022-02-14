/**
Create a lockup of all used libs
**/
function createLockup(force) {
    var versions = ["EaselJS", "TweenJS", "PreloadJS", "SoundJS"],
        versionList = [],
        logo = document.querySelector(".logo"),
        lockup = document.createElement("div"),
        libCount = 0;
    if (logo == null || createjs == null) { return false; }
    logo.firstChild && logo.removeChild(logo.firstChild);
    
    logo.appendChild(lockup);
    lockup.className = "lockup";
    for (var i=0, l=versions.length; i<l; i++) {
      var v = versions[i];
          library = createjs[v];
      if (library == null) { continue; }
      if (force != null && force.indexOf(v) == -1) { continue; }
      libCount++;
      var lib = document.createElement("div"),
          version = library.version,
          text = document.createTextNode(version);
      versionList.push(version);
      lib.className = "lib " + v.toLowerCase();
      lib.appendChild(text);
      lockup.appendChild(lib);
    }
    
    logo.addEventListener("mouseover", function() {
      lockup.classList.add("show");
    });
    logo.addEventListener("mouseout", function() {
      lockup.classList.remove("show");
    });
    
    // Replace with CreateJS if we can
    if (libCount == versions.length) {
      var list = versionList, v = list[0];
      if (v = list[1] && v == list[2] && v == list[3]) {
        while (lockup.childNodes.length > 1) {
          lockup.removeChild(lockup.firstChild);
        }
        lockup.firstChild.className = "lib createjs";
      }
    }
    
    return true;
  }
  
  var ok = createLockup();
  if (ok === false) {
    document.addEventListener("DOMContentLoaded", createLockup);
  }