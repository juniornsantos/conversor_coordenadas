/* 
Converter coordenadas UTM em Longitude e latitude em metros
Att - Junior Nogueira
Versão 1.0
*/
 /* Exemplo de variaveis */
// let x = 553358.734; // Coordenada X
// let y = 9579869.74; // Coordenada Y
// let ay = 6378160.0000000; //coorenada do seEmi eixo maior (m)
// let f = 298.25; //se for conhecido f, temos: bx=(1-f)*ay
// let fuso = 24; //fuso horario(brasil - 22 ao 25 ++ fernando de noronha)
// let hmsf = "s"; // hemisferio "N" para norte e "S" para sul

function utmtogeo (x, y, ay, f, fuso, hmsf ){
    /* Pode passar direto os parametos, variaveis não necessarias */
    var hmsf = hmsf
    var fuso = fuso
    var ay = ay;
    var f = f;
    var x = x;
    var y = y;
    /* ------------------------------------------------ */
    var bx = (((1.0 / 298.25) -1)* ay)
    var raiodaterra = 6366197.724; //raio da terra
    var fatorescala = 0.9996; //fator de escala
    var tmp = Math.sqrt(Math.pow (ay, 2) - Math.pow (bx, 2));
    var e =  tmp / ay; // (não usada ) - excentricidade no sistema de Ptolomeu, a distância entre o centro da Terra e o do excêntrico do astro que se observa.
    var el = tmp / bx; // 2ª excentricidade
    var el2 = Math.pow(el , 2);
    var c = Math.abs (Math.pow (ay, 2) / bx); //raio polar de curvatura
    // rever função acima não era para gerar negaivo
    var x1 = x - 500000.0;
    if (hmsf == "n" || hmsf == "N"){
        var y1 = y;
    }else{
        var y1 = y - 10000000.0;
    }
    var phil = (y1 / (raiodaterra * fatorescala) );
    var lo = (6 * fuso) - 183;
    var nu = (c * fatorescala) / Math.sqrt ((Math.pow ((Math.cos (phil)),2) * el2) + 1);    
    var a = x1 / nu;
    var a1 = Math.sin(2 * phil);
    var a2 = a1 * Math.pow((Math.cos (phil)), 2);
    var j2 = phil + (a1 / 2);
    var j4 = ((j2 *3 ) + a2) / 4;
    var j6 = ((5 * j4) + (a2 * (Math.pow ( Math.cos(phil),2)))) / 3;
    var alpha = (3 * el2) /4;
    var beta = (5 / 3) * (Math.pow (alpha, 2));
    var gama = (35.0 / 27.0) * (Math.pow (alpha, 3));
    //var bo = fe * c * (phil + ( (- alpha * j2) * (beta * j4) (- gama * j6)) );
    var bo = fatorescala * c * (phil + (-alpha * j2) + (beta * j4) + (-gama * j6));
    var b = (y1 - bo) / nu;
    var zeta = ((Math.pow (a, 2) * el2) / 2) * (Math.pow (Math.cos(phil),2));
    var xi = a * ( (zeta / 3) -1.0);
    var eta = (b * (1.0 - zeta )) + phil;
    var sinhxi = (Math.exp(xi) - Math.exp(- xi)) / 2.0;
    var dl = Math.abs (Math.atan (sinhxi / (Math.cos(eta) ) ));
    // rever função acima não era para gerar negaivo
    var tau = Math.atan(Math.cos(dl) * Math.tan(eta));
    var lon = ( ( 180 / Math.PI) * dl) + lo;
    // var jr1= (el2 * (Math.pow (Math.cos(phil),2)) );
    // var jr2= (-3.0 / 2.0) * el2 * Math.sin(phil) * Math.cos(phil) * (tau - phil)
    var lat = ( 180 / Math.PI) * (phil + ( ( 1 + (el2 * (Math.pow (Math.cos(phil),2)) ) + (-3.0 / 2.0) * el2 * Math.sin(phil) * Math.cos(phil) * (tau - phil) ) * (tau - phil)));

    let arr = [lat, lon];
    return arr;
    //console.log(arr);
}
//utmtogeo(x, y, ay, f, fuso, hmsf);