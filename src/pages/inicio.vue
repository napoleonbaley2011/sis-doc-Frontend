<template>
    <nav>
        <ul>
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Documentos</a></li>
            <li><a href="#">Seguimiento</a></li>
            <li><a href="#">Configuraciones</a></li>
        </ul>
    </nav>
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
</style>