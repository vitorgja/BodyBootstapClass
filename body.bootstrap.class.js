(function($, document, window, viewport){
    
    var bodyClass = function( className ){
        $("body").removeClass("xs sm md lg").addClass(className);
    }

    var changeResolution = function() {
        
        if( viewport.is("xs") ) {
            bodyClass('xs');
        }

        if( viewport.is("sm") ) {
            bodyClass('sm');
        }

        if( viewport.is("md") ) {
            bodyClass('md');
        }
        
        if( viewport.is("lg") ) {
            bodyClass('lg');
        }
    }

    // Executes once whole document has been loaded
    $(document).ready(function() {

        changeResolution();

        console.log('Current breakpoint:', viewport.current());

    });

    $(window).resize(
        viewport.changed(function(){
            changeResolution();

            console.log('Current breakpoint:', viewport.current());
        })
    );

})(jQuery, document, window, ResponsiveBootstrapToolkit);
