// Assign all of the anchor elements to an array variable named "links"
var links = document.getElementsByTagName('a');
// Loop through all the anchor elements
for(var i=0; i < links.length; i++){
    // Change the "onclick" event of the anchor tags to
    // execute a function where the href element is changed
    // to reference google.com
    links[i].onclick = function(){
        this.href = 'http://google.com';
}
