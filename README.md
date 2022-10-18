# Projeto conversor de coordenadas UTM para Geograficas Lat/Long
Esta é a versão 1.2.0 da função em JavaScript para converter coordenadas UTM em Geograficas.

## Funcionamento
A função tem quatro parametros:
<br/> *Coordenada X, Coordenada Y, coorenada do seEmi eixo maior (m), se for conhecido f, temos: bx=(1-f)*ay, fuso horario(brasil - 22 ao 25 ++ fernando de noronha), hemisferio "N" para norte e "S" para sul**
<br/>
<br />Você pode definir as variavel e chamar como quiser, Exemplo abaixo:

```go
 /* Exemplo de variaveis */
 let x = 553358.734; // Coordenada X
 let y = 9579869.74; // Coordenada Y
 let ay = 6378160.0000000; //coorenada do seEmi eixo maior (m)
 let f = 298.25; //se for conhecido f, temos: bx=(1-f)*ay
 let fuso = 24; //fuso horario(brasil - 22 ao 25 ++ fernando de noronha)
 let hmsf = "s"; // hemisferio "N" para norte e "S" para sul**
```
## Modo de uso e retorno
```go
utmtogeo(x, y, ay, f, fuso, hmsf);
```

## Support
Você pode obter suporte da comunidade por meio de:

<a href = "https://api.whatsapp.com/send?phone=5588998686890"><img src="https://img.shields.io/badge/WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white" target="_blank"></a>
<a href = "https://t.me/JuniorNogueira"><img src="https://img.shields.io/badge/Telegram-2CA5E0?style=for-the-badge&logo=telegram&logoColor=white" target="_blank"></a>

## Contagem de Visitantes
<img align="left" src = "https://profile-counter.glitch.me/conversor_coordenadas/count.svg" alt ="Loading">
