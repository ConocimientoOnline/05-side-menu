function mostrarOcultarMenu(){
	if(document.getElementById('container-menu').style.right == '0px'){
		document.getElementById('container-menu').style.right = '-120%';
	}else{
		document.getElementById('container-menu').style.right = '0px';
	}
}