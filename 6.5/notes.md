## Webpack Notes
1.  open a new project folder
2.  cd into project folder
3.  type this into the terminal: npm init -y
4.  in terminal inside of your project folder: npm install webpack webpack-cli --save-dev
5.  in the terminal:
    create a new js folder:
    mkdir javascript
6.  in the terminal: cd into your javascript folder
7.  in the terminal:
    mac: touch index.js
    not-mac: 1. cd into javascript folder 2. echo > index.js 3. cd into dist folder 4. echo > index.html

    ***

        mkdir name-of-your-folder (already done)
        cd name-of-your-folder
        mkdir javascript
        echo > /javascript/index.js

        mkdir dist
        echo > dist/index.html

        cmdlet Write-Output at command pipeline position 1
        Supply values for the following parameters:
        InputObject[0]:
        >> try command + c to get back to your terminal

8.  create a new 'dist' folder
9.  create an index.html file inside of your dist folder

---

project folder > dist, javascript, node_modules, package-lock.json, package.json <
dist > index.html
javascript > index.js

---

10. cd into main project folder
11. run this in the terminal:
    npx webpack --entry ./javascript/index.js

    ***

    add the two 'require" statements inside your index.js file

    - cd into your main project folder
    - npx webpack --entry ./javascript/index.js
