document.write("<h2>Uzdavinys nr.1</h2>");

var vardas = "Kestutis";
var amzius = 30;
var hobis = "groti bugnais";

console.log("Mano vardas " + vardas + ", man " + amzius + " metu. Mano hobis " + hobis + ".");

document.write("<h4>Mano vardas " + vardas + ", man " + amzius + " metu. Mano hobis " + hobis + ".</h4>");



document.write("<h2>Uzdavinys nr.2</h2>");

var gimimoMetai = 1990;
var ateitiesData = 2034;

document.write("<h4>" + ateitiesData + " metais  man bus " + (ateitiesData - gimimoMetai) + " arba " + ((ateitiesData - gimimoMetai)-1) + " metu/metai.</h4>");



document.write("<h2>Uzdavinys nr.3</h2>");


var skersmuo = 14;
var spindulys = skersmuo / 2;
var plotas = Math.PI * Math.pow(spindulys, 2);

document.write("<h4>Apskritimo kurio skersmuo yra " + skersmuo + "cm , plotas yra " + Math.round(plotas) + " kvad.cm.</h4>");



document.write("<h2>Uzdavinys nr.4</h2>");

var laipsniai = 23;
var faren = laipsniai * 1.8 + 32;

document.write("<h4>" + laipsniai + "°C yra " + faren + " °F.</h4>");



document.write("<h2>Uzdavinys nr.5</h2>");


var sakinys = "Mes kalbame mažai, jeigu nekalbame apie save.";

document.write("<h4>Teksto ilgis = " + sakinys.length + ".</h4>");


document.write("<h4>" + sakinys.toUpperCase() + "</h4>");


document.write("<h4>Be (apie save) = " + sakinys.substr(0, sakinys.length - 11) + ".</h4>");



let words = sakinys.split(" ");
let treciasElementas = words[2];
let paskutinis = words[words.length - 1]

words[2]= treciasElementas.substr(0, treciasElementas.length - 1);
words[words.length - 1] = paskutinis.substr(0, paskutinis.length - 1);

document.write("<h4>" + words.toString() + "</h4>");



let mazai = sakinys.split("mažai");
let mazaiMIndex = mazai[0].length;

document.write("<h4>Zodzio mazai m raides indeksas = " + mazaiMIndex + "</h4>");


sakinys = sakinys.replace("kalbame", "šnekame");

document.write("<h4>" + sakinys + "</h4>");



document.write("<h2>Uzdavinys nr.6</h2>");


let labas = "laBa8s rYta56s, lIEtuva"

labas = labas.replace("56", "-");
labas = labas.replace("8", "-");
labas = labas.replace(/-/g, "");
labas = labas.toLowerCase().replace(/l/g, "L");

document.write("<h4>" + labas + "</h2>");



document.write("<h2>Uzdavinys nr.7</h2>");

let array = new Array(10).fill("element",0, 10);

document.write("<h4>Visas masyvas = " + array.toString() + "</h4>");

array.length = 9;
document.write("<h4>Be paskutinio elemento = " + array.toString() + "</h4>");

array.shift();
document.write("<h4>Be pirmo elemento = " + array.toString() + "</h4>");

array[4] = "new";
document.write("<h4>Be penktas elementas 'new' = " + array.toString() + "</h4>");

let array2 = new Array(5).fill("Array2Element",0, 5);
document.write("<h4>Naujas masyvas = " + array2.toString() + "</h4>");

let newArray = array.concat(array2);
document.write("<h4>newArray = " + newArray.toString() + "</h4>");

let masyvoString = newArray.toString().replace(/,/g, ", ");

document.write("<h4>String is masyvo su tarpu po kablelio = " + masyvoString + "</h4>");



document.write("<h2>Uzdavinys nr.8</h2>");

let martynas = {vardas:"Martynas", pavarde:"Lubys", amzius:16, vidurkis:4.5, stipendija:false};

let alina = {vardas:"Alina", pavarde: "Alijeva", amzius:16, vidurkis:9, stipendija: true};

let kazimieras = {vardas:"Kazimieras", pavarde:"Bakstys", amzius:17, vidurkis:9.3, stipendija:true};

let algimantas = {vardas:"Algimantas", pavarde:"Peraitis", amzius:16, vidurkis:6.5, stipendija:true};

let kotryna = {vardas:"Kotryna", pavarde:"Petraityte", amzius:16, vidurkis:4, stipendija:false};

document.write("<h4>Alinos amzius = " + alina.amzius + "</h4>");

document.write("<h4>Algimanto vidurkis = " + algimantas.vidurkis + "</h4>");

document.write("<h4>Martyno info = " + Object.values(martynas) + "</h4>");