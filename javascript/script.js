		let a;
		var contador = 1; //variável pública criada fora da function
		var img1="moto1_pg1.png";
		var img2="moto1_pg2-removebg-preview.png";
		var img3="moto2_pg1.png";
		var tempo=2000; //2000(milessegundos) : 1000 (milessegundo) = 2s
		var exibir=setInterval("Exibindo()",tempo);
function Exibindo() 
		{  
			document.images["slide"].src=eval("img"+contador); 
			
            if (contador==1)
                {
                document.getElementById("v1").style.backgroundColor="#ff0000";
				document.getElementById("v1").style.boxShadow="0px 0px 5px 5px #dd0000";
                document.getElementById("v2").style.backgroundColor="#ffffff";
				document.getElementById("v2").style.boxShadow="0px 0px 5px 5px #ffffff";
                document.getElementById("v3").style.backgroundColor="#ffffff";
				document.getElementById("v3").style.boxShadow="0px 0px 5px 5px #ffffff";
                }
            else if (contador==2)
                {
                document.getElementById("v1").style.backgroundColor="#ffffff";
				document.getElementById("v1").style.boxShadow="0px 0px 5px 5px #ffffff";
                document.getElementById("v2").style.backgroundColor="#ff0000";
				document.getElementById("v2").style.boxShadow="2px 2px 5px 5px #dd0000";
                document.getElementById("v3").style.backgroundColor="#ffffff";
				document.getElementById("v3").style.boxShadow="0px 0px 5px 5px #ffffff";
                }
            else
                {
                document.getElementById("v1").style.backgroundColor="#ffffff";
				document.getElementById("v1").style.boxShadow="0px 0px 5px 5px #ffffff";
                document.getElementById("v2").style.backgroundColor="#ffffff";
				document.getElementById("v2").style.boxShadow="0px 0px 5px 5px #ffffff";
                document.getElementById("v3").style.backgroundColor="#ff0000";
				document.getElementById("v3").style.boxShadow="2px 2px 5px 5px #dd0000";  
                }
				  
			if (contador<3)
				contador++; /*contador=contador+1;*/
			else
				contador=1;
		}
				
	 	function Muda(x)
		{
			clearInterval(exibir);//interrompe o que está rodando no setInterval
			contador=x;
			exibir=setInterval("Exibindo()",tempo); //recomeçar o looping
		}