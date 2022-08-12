function calcularSalarioNeto() {
    let puesto=(document.getElementById('puesto').value);
    let horas=(document.getElementById('horas').value);
    let anios=(document.getElementById('anios').value);
    let sueldoHora=0
    switch(puesto){
        case 1: sueldoHora=300;break;
        case 2: sueldoHora=200;break;
        case 3: sueldoHora=100;break;
    }
    let sueldoBase=sueldoHora*horas;
    let canastaBasica=parseFloat(sueldoBase*0.025);
    let antiguedad=parseFloat(sueldoBase*0.05)
    let totalDinero=sueldoBase+canastaBasica+antiguedad;
    let aporteJubilatorios=parseFloat(sueldoBase*0.3);
    let obraSocial=parseFloat(sueldoBase*0,13);
    let jubilacion=parseFloat(sueldoBase*0,13);
    let totalDescuentos=aporteJubilatorios+obraSocial+jubilacion;
    let salarioNeto=parseFloat(totalDinero-totalDescuentos);
    document.getElementById("sueldoBase").innerHTML="<h3>$"+sueldoBase.toFixed(2)+"</h3>";
    document.getElementById("canastaBasica").innerHTML="<h3>$"+sueldoBase.toFixed(2)+"</h3>";
    document.getElementById("antiguedad").innerHTML="<h3>$"+sueldoBase.toFixed(2)+"</h3>";
    document.getElementById("totalDinero").innerHTML="<h3>$"+sueldoBase.toFixed(2)+"</h3>";
    document.getElementById("aporteJubilatorios").innerHTML="<h3>$"+sueldoBase.toFixed(2)+"</h3>";
    document.getElementById("obraSocial").innerHTML="<h3>$"+sueldoBase.toFixed(2)+"</h3>";
    document.getElementById("jubilacion").innerHTML="<h3>$"+sueldoBase.toFixed(2)+"</h3>";
    document.getElementById("totalDescuentos").innerHTML="<h3>$"+sueldoBase.toFixed(2)+"</h3>";
    document.getElementById("salarioNeto").innerHTML="<h3>$"+sueldoBase.toFixed(2)+"</h3>";
}