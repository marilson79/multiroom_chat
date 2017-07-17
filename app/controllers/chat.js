module.exports.iniciaChat = function(application, req, res){
    
    var dadosForm = req.body;

    req.assert('apelido','Nome é obrigatório.').notEmpty();
    req.assert('apelido','Nome deve conter entre 3 e 15 caracteres').len(3,15);

    var erros = req.validationErrors();

    if(erros){
        //res.send('Existem erros no formulário.');
        res.render("index",{validacao : erros});
        return;
    }

    application.get('io').emit(
        'msgParaCliente',
        {apelido: dadosForm.apelido, mensagem: 'acobou de entrar no chat'}
    );

    res.render('chat',{dadosForm: dadosForm});
}


