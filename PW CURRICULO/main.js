// Define as informações do currículo
var nome = "Marcos";
var cargo = "Desenvolvedor FullStack";
var resumo = "Desenvolvedor Front-end com mais de 5 anos de experiência em projetos web. Possuo conhecimentos em HTML, CSS, JavaScript, React, Angular e Vue.";
var experiencia = [
	{
		empresa: "Empresa X",
		cargo: "Desenvolvedor Front-end",
		periodo: "2018 - atualmente",
		descricao: "Desenvolvimento de interfaces web utilizando as tecnologias React e Angular."
	},
	{
		empresa: "Empresa Y",
		cargo: "Desenvolvedor Front-end",
		periodo: "2015 - 2018",
		descricao: "Desenvolvimento de interfaces web utilizando as tecnologias HTML, CSS e JavaScript."
	}
];
var formacao = [
	{
		instituicao: "Universidade Z",
		curso: "Bacharelado em Sistemas de Informação",
		conclusao: "2014"
	},
	{
		instituicao: "Faculdade W",
		curso: "Tecnólogo em Desenvolvimento de Sistemas",
		conclusao: "2010"
	}
];
var habilidades = [
	"HTML",
	"CSS",
	"JavaScript",
	"React",
	"Angular",
	"Vue"
];

// Seleciona os elementos do HTML
var nomeElement = document.getElementById("nome");
var cargoElement = document.getElementById("cargo");
var resumoElement = document.getElementById("resumo");
var experienciaElement = document.getElementById("experiencia");
var formacaoElement = document.getElementById("formacao");
var habilidadesElement = document.getElementById("habilidades");

// Atualiza os elementos com as informações do currículo
nomeElement.textContent = nome;
cargoElement.textContent = cargo;
resumoElement.textContent = resumo;

experiencia.forEach(function(exp) {
	var li = document.createElement("li");
	var h3 = document.createElement("h3");
	var p = document.createElement("p");

	h3.textContent = exp.empresa + " - " + exp.cargo;
	p.textContent = exp.periodo + " - " + exp.descricao;

	li.appendChild(h3);
	li.appendChild(p);

	experienciaElement.appendChild(li);
});

formacao.forEach(function(edu) {
	var li = document.createElement("li");
	var h3 = document.createElement("h3");
	var p = document.createElement("p");

	h3.textContent = edu.instituicao + " - " + edu.curso;
	p.textContent = "Conclusão em " + edu.conclusao;

	li.appendChild(h3);
	li.appendChild(p);

	formacaoElement.appendChild(li);
});

habilidades.forEach(function(habilidade) {
	var li = document.createElement("li");

	li.textContent = habilidade;

	habilidadesElement.appendChild(li);
});
