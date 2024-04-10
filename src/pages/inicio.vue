<template>
    <nav>
        <ul>
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Documentos</a></li>
            <li><a href="#">Seguimiento</a></li>
            <li><a href="#">Configuraciones</a></li>
        </ul>
    </nav>
    <div id="main-container"></div>
    <table>
        <caption></caption>
        <thead>
            <tr>
                <th colspan="9">DOCUMENTOS POR REVISAR</th> 
              </tr>
          <tr>
            <th>ID Documento</th>
            <th>Nombre</th>
            <th>Estado</th>
            <th>Referencia</th>
            <th>Registrada Por:</th>
            <th>Fecha de Recepcion</th>
            <th>Fecha de Revision</th>
            <th>Archivo</th>
            <th>Revisar</th>
          </tr>
        </thead>
       
          <tr>
            <th>Ejemplo1</th>
            <th>Ejemplo1</th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
          </tr>
          <tr>
            <th>Ejemplo2</th>
            <th>Ejemplo2</th>
            <th>Ejemplo2</th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
          </tr>
          <tr>
            <th>Ejemplo3</th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
          </tr>
          <tr>
            <th>Ejemplo4</th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
          </tr>
        
      </table>
</template>
<style>
body{
    font-family: 'Calibri';
}
*{
    margin: 0;
    padding: 0;
    list-style: none;
    text-decoration: none;
}
nav{
    height: 90px;
    background: #000;
}
nav ul{
    float: rigth;
    margin-right:15px;
    text-align: right;
}
nav ul li{
    display: inline-block;
    line-height: 80px;
    margin: 0 15 px;
    margin-right:50px;
}
nav ul li a{
    position: relative;
    color: white;
    font-size: 22px; 
}
nav ul li a:before{
    position: absolute;
    content:'';
    left:0;
    bottom: 0;
    height: 2px;
    width: 100%;
    background: white;
    transform: scaleX(0);
    transform-origin: right;
}
nav ul li a:hover:before{
    transform: scaleX(1);
    transform-origin: left;
}
body {
    
    background-color: steelblue;
    background: url(imag.avif) no-repeat;
    background-size: cover;
}
#main-container{
    margin:150px auto;
    width: 50%;
      
}
table{
    background-color: white;
    text-align: left;
    width: 80%;  
    border-collapse: collapse;
    float:center;
    margin-left: 120px;
    margin-right: 50px;
   
}
th, td{
    padding: 10px; 
    border: 0.2px solid #7a7a7a;
    
}
thead{
    background-color: #bababa;
    border-bottom: solid 5px #bababa;
    color: rgb(2, 2, 2);
}
</style>