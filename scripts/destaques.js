(function($){	
	$(document).ready(function() {
		// Cria uma div.paginas que receberá os paginadores
		var div = $('<div></div>').addClass('paginas');
		// Insere a div criada antes da lista de destaques
		$('#destaques ul').before(div);		
		// roda o jcycle na ul dentro da div destaques
		$('#destaques ul').cycle({
			pager: 'div.paginas', // paginação
			pause: true, // pausa ao deixar o mouse sobre a imagens
			pauseOnPagerHover: true, // pausa ao deixar o mouse sobre a paginação
			fx:     'slideY',
			speed:  2000,
			timeout: 5000, 			
			// Executa uma função antes de cada troca de slide
			before: function(atual, proximo, opcoes, avancando) {
				 // Esconde o parágrafo e a div.fundo que estão no slide atual
				$('p, div.fundo', atual).slideUp('fast');
			},			
			// Executa uma função depois de cada troca de slide
			after: function(atual, proximo, opcoes, avancando) {
				// coloca o mesmo titulo do link na etiqueta destaques
				$('a.faixa', '#destaques').attr({
					title: $('a', proximo).attr('title'),
					href: $('a', proximo).attr('href')
				});				
				// mostra o parágrafo e a div.fundo do slide atual
				$('p, div.fundo', proximo).slideDown('fast');
			}
		});		
	});	
})(jQuery);