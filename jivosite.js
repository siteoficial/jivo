
/*
	Função callback que é chamada imediatamente após o carregamento do JivoChat
*/
function jivo_onLoadCallback(){
	// Crie um elemento DIV para o rótulo
	window.jivo_cstm_widget = document.createElement('div');
	jivo_cstm_widget.setAttribute('id', 'jivo_custom_widget');
	document.body.appendChild(jivo_cstm_widget);
	
	// Adiciona manipuladores, clique no ícone - para maximizar a janela quando clicado
	jivo_cstm_widget.onclick = function(){
		jivo_api.open();
	}
	
	// Altere a classe CSS se houver agentes online
	if (jivo_config.chat_mode == "online"){
		jivo_cstm_widget.setAttribute("class", "jivo_online");
	}
	
	// Agora você pode mostrar ao usuário um atalho
	window.jivo_cstm_widget.style.display='block';
}

/*
	As funções de callback jivo_onOpen e jivo_onClose são chamadas sempre que a janela de chat JivoChat é expandida ou recolhida pelo usuário ou pela regra de convites proativos.
*/
function jivo_onOpen(){
	// Se o bate-papo for implantado - ocultar o atalho
	if (jivo_cstm_widget)
		jivo_cstm_widget.style.display = 'none';
}
function jivo_onClose(){
	// Se o bate-papo estiver minimizado - mostrar rótulo
	if (jivo_cstm_widget)
		jivo_cstm_widget.style.display = 'block';
}