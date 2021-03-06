// Calcular quantidade de alimentos para a festa

var salgado = 12;
var bolo = 150;
var suco = 500;
var agua = 200;
var docinho = 5;
var batata = 100;
var sanduiche = 3;
var pipoca = 3;

function calcularQuantidade(adulto, crianca){

	var qtdSalgado = adulto * salgado + ((crianca * salgado) / 2);
	var qtdBolo = adulto * bolo + ((crianca * bolo) / 2);
	var qtdSuco = adulto * suco + ((crianca * suco) / 2);	
	var qtdAgua = adulto * agua + ((crianca * agua) / 2);
	var qtdDocinho = adulto * docinho + ((crianca * docinho) / 2);
	var qtdBatata = adulto * batata + ((crianca * batata) / 2);
	var qtdSanduiche = adulto * sanduiche + ((crianca * sanduiche) / 2);
	var qtdPipoca = adulto * pipoca + ((crianca * pipoca) / 2);

	var alimentos = {
		salgado : qtdSalgado,
		bolo : qtdBolo,
		suco : qtdSuco,
		agua : qtdAgua,
		docinho : qtdDocinho,
		batata : qtdBatata,
		sanduiche : qtdSanduiche,
		pipoca : qtdPipoca
	}

	return alimentos;

}

var botaoCalcular = document.querySelector("#calcular-quantidade");

botaoCalcular.addEventListener("click", function(event){

	event.preventDefault();

	var pessoas = montaPessoa();

	console.log(pessoas.adulto);


	var valorAlimentos = calcularQuantidade(pessoas.adulto, pessoas.crianca);

	console.log(calcularQuantidade(pessoas.adulto, pessoas.crianca));

	var idSalgado = document.getElementById("qtd-salgado");
	idSalgado.textContent = valorAlimentos.salgado+ ' un';

	if (valorAlimentos.bolo > 1000){
		var idBolo = document.getElementById("qtd-bolo");
		valorAlimentos.bolo = valorAlimentos.bolo/1000;
		idBolo.textContent = valorAlimentos.bolo + ' kg';
	}else{
		var idBolo = document.getElementById("qtd-bolo");
		idBolo.textContent = valorAlimentos.bolo + ' g';
	}
	
	if (valorAlimentos.suco > 1000){
		var idSuco = document.getElementById("qtd-suco");
		valorAlimentos.suco = Math.round(valorAlimentos.suco/1000); 
		idSuco.textContent = valorAlimentos.suco + ' l';
	}else{
		var idSuco = document.getElementById("qtd-suco");
		idSuco.textContent = valorAlimentos.suco + ' ml';
	}
	
	if(valorAlimentos.agua >1000){
		var idAgua = document.getElementById("qtd-agua");
		valorAlimentos.agua = Math.round(valorAlimentos.agua/1000);
		idAgua.textContent = valorAlimentos.agua + ' l';	
	}else{		
		var idAgua = document.getElementById("qtd-agua");
		idAgua.textContent = valorAlimentos.agua + ' ml';
	}
	var idDocinho = document.getElementById("qtd-docinho");
	idDocinho.textContent = Math.round(valorAlimentos.docinho)+ ' un';
	
	if(valorAlimentos.batata >1000){
		var idBatata = document.getElementById("qtd-batata");
		valorAlimentos.batata = valorAlimentos.batata/1000;
		idBatata.textContent = valorAlimentos.batata + ' kg';
	}else{
		var idBatata = document.getElementById("qtd-batata");		
		idBatata.textContent = valorAlimentos.batata + ' g';
	}

	var idSanduiche = document.getElementById("qtd-sanduiche");
	idSanduiche.textContent = Math.round(valorAlimentos.sanduiche)+ ' un';

	var idPipoca = document.getElementById("qtd-pipoca");
	idPipoca.textContent = Math.round(valorAlimentos.pipoca)+ ' un';

	document.getElementById("bloco-busca").className += " hide";

	document.getElementById("bloco-resultado").className =
    document.getElementById("bloco-resultado").className.replace(/\bhide\b/,'');

});

var botaoResetar = document.querySelector("#botao-resetar");

botaoResetar.addEventListener("click", function(event){ 

	document.getElementById("bloco-resultado").className += " hide";

	document.getElementById("bloco-busca").className =
    document.getElementById("bloco-busca").className.replace(/\bhide\b/,'');

    var campoAdulto = document.querySelector("#campo-adulto");
	var campoCrianca = document.querySelector("#campo-crianca");

	campoAdulto.value = "";
	campoCrianca.value = "";

});

function montaPessoa() {
	var campoAdulto = document.querySelector("#campo-adulto");
	var campoCrianca = document.querySelector("#campo-crianca");

	var pessoas = {
		adulto : campoAdulto.value,
		crianca : campoCrianca.value
	}

	return pessoas;

	//console.log(pessoas);
}
