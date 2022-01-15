/* 
 * Count the left chars on textearea.
 * 
 * <textarea name="<input_name>" 
 *          id="<textarea id>" 
 *          data-length="<max chars>" >
 * </textarea>
 * 
 * 
 */
$.charsLeft = function( element ) {
        var max = parseInt( $( element ).data( "length" ), 10 );
        $( element ).after( '<div id="chars-left"></div>' );
        $( element ).keyup(function() {
           var textLength = $( this ).val().length;
           var remaining = max - textLength;
           $( "#chars-left" ).text( remaining );
           if( textLength > max ) {
               $( "#chars-left" ).addClass( "text-danger" );
           } else {
               $( "#chars-left" ).removeClass( "text-danger" );
           }
        });
    };

$(function() {
  $.charsLeft( "#message" );
});
