var Index = {

  init: function() {
  },
  
  buscarEndereco: function() {
    //remove qualquer coisa q não seja um digito.
 var form = document.forms['frmCEP'];
    var CEP = form.cep.value.replace(/\D/g, "");

    if(CEP.length != 8) {
      alert("Preencha corretamente seu CEP."); 
      return form.cep.focus();
    }

    Ajax.request({
      url      : "cep/endereco.php?cep=" + CEP,
      params   : form,
      callback : Index.preencherCampos,
      callerro : Index.limparCampo
    });
    
    Index.disabledCampos(form, true);
  },


  preencherCampos: function(response, form) {
    try {
      var cep = eval('(' + response + ')');
      Index.disabledCampos(form, false);
      form.rua.value    = unescape(cep.logradouro);
      form.bairro.value = unescape(cep.bairro);
      form.cidade.value = unescape(cep.cidade);
      form.estado.value = unescape(cep.uf);
      form.numero.focus();
    }
    catch(e) {
      Index.disabledCampos(form, false);
      alert("Servidor sobrecarregado!");
    }

  },
  
  
  limparCampo: function(httpStatus, message, form) {
    Index.disabledCampos(form, false);
    form.rua.focus();
  },
  
  
  disabledCampos: function(form, disabled) {
    with(form) {
      rua.disabled = disabled;
      bairro.disabled = disabled;
      cidade.disabled = disabled;
      estado.disabled = disabled;
      
      rua.value    = (disabled) ? "aguarde, carregando..." : rua.value = "";
      bairro.value = (disabled) ? "aguarde, carregando..." : bairro.value = "";
      cidade.value = (disabled) ? "aguarde, carregando..." : cidade.value = "";
      estado.value = (disabled) ? "aguarde, carregando..." : estado.value = "";
    }
  },

};