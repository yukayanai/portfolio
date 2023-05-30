# Portfolio

Portfolio website

## Install

**Clone repository**

This project requires node8 which is not supported on M1.

Make sure Terminal is running in rosetta
- go to Application (-> utilities)
- right click on terminal app
- get Info
- Select "Open using Rosetta" 
- Restart Terminal if it's running

The above steps need to be done once.

Start terminal

Type below to get zsh running in rosetta
```
arch -x86_64 zsh 
export PATH=/Users/yukayanai/.local/share/rtx/installs/node/8.17.0/bin:$PATH
```

Clone repo

```
git clone https://github.com/yukayanai/portfolio.git
cd portfolio
yarn install
```

Requires node 8

## Making changes

**Go to project folder then checkout new branch**
```
cd portfolio
git checkout -b my-new-update
```
Update files
```
git add . 
git commit -m"What has changed"
git push
```

**Live edit**

The below command will open the site on a new window and update it whenever a file has been changed. 
```
yarn run blendid
```
Servers unmodified -no compression, versioning etc - files from /public folder.

**Production build**

Creates versioned and optimized files in public folder.
```
yarn run blendid -- build
```

**Serve prod code (public folder) on localhost**

_First time_
```
cd public
python3  -m http.server 1337
```

_Afterwards_
```
cd ../ && cd public && python3 -m http.server 1337
```


**Going live**

The below will run production build then pushes /public folder content to the repsitory's gh-pages branch
```
yarn run blendid -- gh-pages
```

Check below if commiter = null issues arise when running gh-pages task:

```
https://github.com/shinnn/gulp-gh-pages/issues/116#issuecomment-342982109

cd node_modules/gulp-gh-pages/
npm install --save gift@0.10.2
cd ../../
gulp deploy
``` 

**Check locally what would look live site from Au**

http://localhost:3000/index.html?hideau


**Delete country**

The page saves current country it was visited from in localstorage.
To remove it, call http://localhost:3000/index.html?clearcountry
