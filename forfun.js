document.addEventListener('click', function(event){
    if (event.target.tagName === 'SPAN') {
        var headings = document.getElementsByTagName("h1");
        for (var i = 0; i < headings.length; i++) {
            headings[i].style.transform = "translateY(50px)";
        }
    }
});
