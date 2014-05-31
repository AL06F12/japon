// JavaScript Document
// JavaScript Document
	var panel ='<div data-role="panel" id="defaultpanel" data-theme="a" data-display="overlay">    <div class="panel-content" align="center">      <h3>Menú</h3><img src="imagenes/Japon_by_Hatchikoo.png" width="100" height="100"><div data-role="controlgroup"><a data-role="button" id="ECONOMIA">ECONOMIA</a> <a data-role="button" id="GEOGRAFIA">GEOGRAFIA</a><a data-role="button" id="HISTORIA">HISTORIA</a><a data-role="button" id="EDUCACION">EDUCACION</a> <a data-role="button" id="CRIMEN">CRIMEN</a><a data-role="button" id="CULTURA">CULTURA</a><a data-role="button" id="LTURISTICOS">TURISMO</a></div>      <a href="#demo-links" data-rel="close" data-role="button" data-theme="a" data-icon="delete" data-inline="true">Cerrar</a>    </div>  </div>';
		
		$(document).on('pagebeforecreate', '[data-role=page]', function () {
  if ($(this).find('[data-role=panel]').length === 0) {
    $('[data-role=header]').before(panel);
  }
});

	$(document).ready(function(e){

    $('#logo img').tap(function(e){	
    $('#logo img').toggleClass('clicked');
	$('#vista img').toggleClass('clicked');
});//click 

    $('#vista img').tap(function(e){	
	 $("#roar")[0].play();	
	 $.mobile.navigate( "#principal" );
	});
	
	$('#ECONOMIA').tap(function (e) {
 	 $.mobile.navigate( "#ECO" );
	});
	
	$('#GEOGRAFIA').tap(function (e) {
 	 $.mobile.navigate( "#GEO" );
	});
	
	$('#HISTORIA').tap(function (e) {
 	 $.mobile.navigate( "#HISTO" );
	 });
	 $('#EDUCACION').tap(function (e) {
 	 $.mobile.navigate( "#EDU" );
	});
	
	$('#CRIMEN').tap(function (e) {
 	 $.mobile.navigate( "#CRI" );
	});
	
	$('#CULTURA').tap(function (e) {
 	 $.mobile.navigate( "#CULT" );
	 });
	 $('#LTURISTICOS').tap(function (e) {
 	 $.mobile.navigate( "#TUR" );
	 
	});
});//ready
