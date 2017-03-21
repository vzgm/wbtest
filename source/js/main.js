var sayHello = require( './hello' );

require( 'style-loader!css-loader!../css/style.css' ); 

sayHello( 'World!', document.querySelector( 'h2' ) );