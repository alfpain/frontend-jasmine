var title = "Learning Jasmine";

function helloWorld() {
  return "hello world";
}

function Titulo(){
document.write("<h1>"+title+"</h1>");

};

Titulo();
function Suma(numero1,numero2){

	if(isNaN(numero1)||isNaN(numero2)){
		return null;
	}else{
		numero1 = parseInt(numero1);
		numero2 = parseInt(numero2)
		return numero1+numero2;
	}
};
