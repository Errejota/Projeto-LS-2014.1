	//CONTROLE DE ABAS - JQUERY /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	
	for(var count=1; count<=10; count++){
		$("#conteudo-"+count).hide();
	}
	$("label[for=link-1]").css("text-shadow","0 0 6px #33F");
	$("#conteudo-1").show();
	
	$("input").click(function(){
		var radio = $(this).attr("id").split("-")[1];
		$("label").css("text-shadow","0");
		$("label[for=link-"+radio+"]").css("text-shadow","0 0 8px #33F");
		for(var count=1; count<=10; count++){
			$("#conteudo-"+count).hide();
		}
		$("#conteudo-"+radio).show();
	});
	//FIM DE CONTROLE DE ABAS