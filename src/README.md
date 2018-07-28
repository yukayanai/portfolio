# Portfolio

Portfolio website

## Install

**Clone repository**

```
git clone https://github.com/yukayanai/portfolio.git
cd portfolio
yarn install
```

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


**Going live**

The below will run production build then pushes /public folder content to the repsitory's gh-pages branch
```
yarn run blendid -- gh-pages
```
