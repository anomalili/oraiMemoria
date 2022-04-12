window.addEventListener("load", init);

function ID(elem) {
  return document.getElementById(elem);
}
function $(elem) {
  return document.querySelectorAll(elem);
}

function CLASS(elem) {
  return document.getElementsByClassName(elem);
}

var kartya = "";
var kepek = ["kepek/kep1.jpg", "kepek/kep2.jpg", "kepek/kep3.jpg", "kepek/kep4.jpg", "kepek/kep5.jpg", "kepek/kep6.jpg", "kepek/kep7.jpg", "kepek/kep8.jpg", "kepek/kep9.jpg", "kepek/kep10.jpg", "kepek/kep11.jpg", "kepek/kep12.jpg", "kepek/kep13.jpg", "kepek/kep14.jpg", "kepek/kep15.jpg", "kepek/kep16.jpg", "kepek/kep17.jpg", "kepek/kep18.jpg", "kepek/kep19.jpg", "kepek/kep20.jpg"];

const hatter = "kepek/hatter.jpg";
function init() {
let txt;
/*   const galeria=document.getElementById("galeria");
  let txt =""
  for (let index = 0; index < kepek.length; index++) {
    txt += `<div><img id="${index}>" src="${kepek[index]}" alt="szorny"></div>`
  }
  galeria.innerHTML=txt;
 */
for (let index = 0; index < 2; index++) {

  kepek.forEach(function(elem, index){
    txt+= `<div><img id="${index}" src="${hatter}" alt="szorny"></div>`
  })
}
  
  galeria.innerHTML=txt; 

  const kepElemek = document.querySelectorAll("#galeria div img")
  console.log(kepElemek)

  kepElemek.forEach(function(elem){
    elem.addEventListener("click", Felfordit);
    
});
  
}

const felforditott = [];
function Felfordit() {
  console.log(event.target);
    /* kártyák id-jait össszehasonlítja, ha stimmel akkor úgy marad*/
/* felforditott.push(event.target)
    event.target.className = "latszodik";   */

    let aktualisElem = Number(event.target.id);
    event.target.src = kepek[aktualisElem];
    /* document.target.style.backgroundImage = kepek[aktualisElem]; */
    felforditott.push(aktualisElem);
    event.target.removeEventListener("click", Felfordit);
    console.log(felforditott);
      if (felforditott.length == 2) {
        /* elso = felforditott[0]
        masodik = felforditott[1]
         */

        let feltetel = kepek[felforditott[0]]===kepek[felforditott[1]]

        console.log(feltetel)
        console.log(kepek[felforditott[0]])
        console.log(kepek[felforditott[1]])

        if (!feltetel) {

          setTimeout(function(){

            felforditott.forEach(function(elem){
              event.target.EventListener("click", Felfordit);

              document.getElementById(elem).src = hatter;
            })
            felforditott.splice(0)
          }, 1000);
          
        } else {
                felforditott.forEach(function (elem){
                    document.getElementById(elem).style.display = "none";       
                 
        });
           
         
        
          
        }
        

      }

  }
