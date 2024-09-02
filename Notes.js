/*
    package.json: is the npm configuration

    - whole code need to bunder before send to production, bundler help this.
    - wheat and parcel are provide bundling features.
    npm install -D parcel

    dev dependencies: required when develope app.
    normal dependencies: normal in development and in production


    -D : representae development dependencies, not production dependencies.
    ^ : (caret), miner version upgrade like 2.0.1 to 2.0.2 - 2.0.x
    ~ : (tilde), major upgrade like 2.0.1 to 3.0.1 

    npm install -D parcel : without -D it would be normal dependencies.


    package-lock.json: keep the track of exact version.[lock ther version and keep the track of the version]

    node_modules: fetch from npm init at the time of initialization
                  - contains actual package of dependencies we configured.
                  - each dependency is depend on another dependency that is called transitive dependencies.
                  

    - if we have package-lock.json, no need to put node_modules to put into github, when we will hit 
      npm init, it will install all node_modules.

    - npx parcel index.htm : parcel host our index.html on localhost:1234 server.
    - npx: executing packages. 
    
    
    - HMR[Hote module Replacement], read all file and have trace of everything parcel do to refresh the server live,
    - parcel use file watching algorithm - written in c++

    - parcel use caching, for faster build, when run again and again, it take lesser time.
    - parcel to image optimization
    - bundle all files 
    - minification
    - compress all files
    - consistent hashing
    - code splitting
    - differential bundling 
    - tree shaking: remove unused code.
    - different dev and prod bundles

npx parcel build index.html: generate production readyk app

    - index.html, index.fed.css index.e4.js in dist folder are main file.

    - that file can regenerate we should ignore them to put into server.

























*/