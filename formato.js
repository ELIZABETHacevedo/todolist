counter=1;

// function crearDiv(){
//     let lista= document.querySelector('input').value;
//     let div1=document.createElement("div");
//     var idE = '#'+counter;
//     div1.id=idE;
    
//     div1 =Document.querySelector(idE).innerHtml=lista;
//     document.body.appendChild(div1);
//     counter++;
// }


// document.addEventListener("DOMContentLoaded",function(){
//      document.getElementById('#agregar').onclick = crearDiv;
   

// });


function crearDiv(){
    // const div1 = document.createElement("div");
    
    // document.querySelector("div") = document.append(div1);
    const todo=document.createElement('div');
    todo.className="td";
    todo.innerHTML=document.querySelector('#entrada').value;
    const but=document.createElement('button');
    but.className="borrar";
    but.innerHTML="Borrar";
    but.id="#"+counter;
    counter++;
    //  but.onclick=borrador(counter);
    todo.append(but);
    document.querySelector('#lista').append(todo);
    
}


document.addEventListener('click', event => {
    const element = event.target;
    if (element.className === 'borrar') {
       element.parentElement.style.animationPlayState='running';
       element.parentElement.addEventListener('animationend', () =>  {
        element.parentElement.remove();
    });
        // element.parentElement.style.animationPlayState = 'running';
        // element.parentElement.addEventListener('animationend', () =>  {
        //     element.parentElement.remove();
        // });
    }
});


// function borrador(_id){
//        const botonBorrado =document.getElementById(_id);
//        botonBorrado.parentNode.style.animationPlayState='running';
//         // botonBorrado.parentElement.style.animationPlayState='running';
//         botonBorrado.parentElement.addEventListener('animationend', () =>  {
//             botonBorrado.parentElement.remove();
//         });
    
// }


// document.getElementById('agregar').addEventListener("click",crearDiv);


