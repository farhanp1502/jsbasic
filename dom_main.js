var element;
element = document;
console.log(element);//it shows all the document


element = document.all;
console.log(element);// it shows all the elments of the document in an array form


element = document.head; // target head tag
console.log(element);

element = document.title; // returns the title name
console.log(element);


element = document.body; // returns all the element presents under the body section
console.log(element);

element = document.links; // returns the links used in the html file
console.log(element);

element = document.images; // returns the images present in the html file
console.log(element);

element = document.forms; // returns the forms used in html file
console.log(element);

element = document.doctype; // returns the document type
console.log(element);

element = document.URL; // returns the url of the website
console.log(element);

element = document.domain; // returns the domain name 
console.log(element);

element = document.baseURI; // retruns the url of the website
console.log(element);

element = document.getElementById("header"); 
console.log(element);// target by id


element = document.getElementsByClassName("ul1"); 
console.log(element);//  target by class name


element = document.getElementsByTagName("ul"); 
console.log(element);// target by tag names