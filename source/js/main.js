var sayHello = require( './hello' );

//require( '../css/style.css' ); 
require( '../sass/style.scss' ); 

sayHello( 'World!', document.querySelector( 'h2' ) );