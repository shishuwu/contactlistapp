This is a demo of MEAN (Mongo, Express, AngularJS, Node.js) stack development.
==============================================================================
1. Node.js
    a) Installation: 
        https://nodejs.org/en/        

    b) npm:
    It is the package manager for javascript. (integrated in Node installer)
        - Install express by npm
        $ npm install express

    Folders
    a) /public: Usually as front-end folder: angularjs
    b) /router
    c) /bin
    d) /node_modules
    e) /views: templates
    
    

2. AngularJS
    a) url: 
        https://www.angularjs.org/
    b) Got to download and copy the CDS to html <script scr="...">
    
    
3. Bootstrap
    a) url: 
        http://getbootstrap.com/
        
    b) Go to get started and copy the ref
    
    
    
    
4. MongoDB
    a) url: www.mongodb.com
        - there is mooc cource on internet.
    b) usage:
        - start server: mongod
        - start client: mongo
        
        - operate db: 
            * show dbs
            * use xxdb
            * db.contactlist.insert({json: 'json'});
            * db.contactlist.find().pretty();
        
    c) install it in node
        - $ node install mongojs
