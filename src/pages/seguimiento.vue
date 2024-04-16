<template>
    <table>
        <caption></caption>
        <thead>
            <tr>
                <th colspan="5">Lista de Documentos</th> 
              </tr>
        <tr>
            <th>Categoria</th>
            <th>Etiqueta</th>
            <th>Nombre</th>
            <th>Version</th>
            <th>Descarga</th>
        </tr>
        </thead>
       
          <tr>
            <th>planear</th>
            <th>Analisis Foda</th>
            <th>Recursos 2024</th>
            <th>3</th>
            <th>
              <button type ="submit" class="btn">Descargar</button>
            </th>
          </tr>
          <tr>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
           
          </tr>
          <tr>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
          </tr>
          <tr>
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