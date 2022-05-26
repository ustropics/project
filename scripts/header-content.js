var scripts = ['jquery.min.js','bootstrap.min.js','jquery.mask.min.js','jquery.ui.min.js', 'coloris.js'];
var styles = ['bootstrap.min.css','fontawesome.css','progress-bar.css','main.css','bootstrap.min.css.map', 'coloris.css'];
var header_items = [
    '<meta charset="UTF-8">',
    '<meta name="viewport" content="width=device-width, initial-scale=1.0">',
    '<title>MW Designs | COP4813</title>',
    '<link rel="icon" href="../images/mw-logo-light.png">',
    '<link rel="preconnect" href="https://fonts.googleapis.com">',
    '<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>',
    '<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap" rel="stylesheet">',
    '<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300&display=swap" rel="stylesheet"></link>'
]

document.head.innerHTML = header_items.join("") + document.head.innerHTML;

for (let i = 0; i < scripts.length; ++i) {
    var script = document.createElement('script');
    script.src = 'scripts/' + scripts[i];
    script.type = 'text/javascript';
    var done = false;
    script.onload = script.onreadystatechange = function() {
        if (!done && (!this.readyState || this.readyState == "loaded" || this.readyState == "complete")) {
            done = true;
        }
    };  
    document.getElementsByTagName("head")[0].appendChild(script);
}

for (let i = 0; i < styles.length; ++i) {
    var style = document.createElement('link');
    style.href = 'styles/' + styles[i];
    style.rel = 'stylesheet';
    var done = false;
    script.onload = script.onreadystatechange = function() {
        if (!done && (!this.readyState || this.readyState == "loaded" || this.readyState == "complete")) {
            done = true;
        }
    };  
    document.getElementsByTagName("head")[0].appendChild(style);
}

function loadContent() {
    $( "#navbarContainer" ).load( "/includes/navbar.html" );
    $( "#footerContainer" ).load( "/includes/footer.html");
    $( "#homeContainer" ).load( "/apps/home_app.html");
    $( "#contactContainer" ).load( "/apps/contact_app.html");
    $( "#weatherMapContainer" ).load( "/apps/weather_map_app.html");
    $( "#spirographContainer" ).load( "/apps/spirograph_app.html");
    $( "#jsonContainer" ).load("/apps/json_app.html");
    $( "#cardsContainer" ).load("/apps/cards_app.html");
    $( "#bouncingObjectContainer" ).load("/apps/bouncing_object_app.html");
    
}
