
 /* * * Funciones Front End * * */

 	// Ajuste Height //

 	function height(){
 		var height = $(window).height();
 			$('section').css('min-height', height);
 			$('.col-xs-12').css('height', height);
 	}




/* Funciones de Flujo */
	

	// Bloquea el input de monto, permitiendo sólo números //

	function format(input){
		var num = input.value.replace(/\./g,'');
		if(!isNaN(num)){
		}
 
		else{ 
			alert('Solo se permiten números');
			input.value = input.value.replace(/[^\d\.]*/g,'');
		}
	}

	
	// Validador de campos //

	$(document).on('click', '.submit-btn', function(){
		
		$('input').removeClass('error');

			if($('input[name="nombre"]').val() == ''){
				$('input[name="nombre"]').addClass('error').focus();
				return false;
			}
			else if($('input[name="monto"]').val() == ''){
				$('input[name="monto"]').addClass('error').focus();
				return false;
			}
			else if($('input[name="fecha"]').val() == ''){
				$('input[name="fecha"]').addClass('error').focus();
				return false;
			}
			else{

				// Submit de los datos a una BDD en Ajax(Simulación) //

				// Response OK //

				var monto = $('input[name="monto"]').val(),
					destinatario = $('input[name="nombre"]').val(),
					fecha = $('input[name="fecha"]').val(),
					cifra = NumeroALetras($('input[name="monto"]').val());

				$('#formulario').addClass('animated fadeOut');
				setTimeout(function(){
					

					$('p.monto').html('$'+monto);
					$('p.destinatario').html(destinatario);
					$('p.fecha').html(fecha);
					$('p.cifra').html(cifra);
					
					$('#formulario').hide();
					$('#cheque').show();
					height();
					$('#cheque').addClass('animated fadeIn');
				},500);
			}
	});
	

	// Mask Campo Fecha //

		function fecha_mask(){
	   		$('input[name="fecha"]').mask("99/99/9999",{placeholder:"dd/mm/yyyy"});
		}

$(document).ready(function(){
	fecha_mask();
	height();
});


$(window).resize(function(){
	height();
});