var links = document.getElementsByTagName('a');
for(var i=0; i < links.length; i++){
    links[i].onclick = function(){
        this.href = 'http://google.com';
    };
}