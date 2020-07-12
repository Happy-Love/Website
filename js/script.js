// топорно но пойдёт
// Функция для открытия закрытия листа
// Извините за плохой фронтэнд
// Вариант №2 использовать цикл для поиска родителя в случае если сайт будет изменяться.
let coll=document.getElementsByClassName('collapsible');
for (let i = 0; i < coll.length; i++) {
   
    coll[i].addEventListener('click', function () { 
    let parent =coll[i].parentNode;
    let ancestor = parent.parentNode;
    
    // console.log(ancestor.lastChild);
    
    let content=ancestor.lastElementChild;
    console.log(content);
    // for(var i=0;i<ancestor.childNodes.length;i++){
    //     if(ancestor.childNodes[i].className=="content"){
    //         notes=ancestor.childNodes[i];
    //         break;
    //     }
    // }
    if(content.style.maxHeight)
        content.style.maxHeight=null;
    else
        content.style.maxHeight=content.scrollHeight+'px'
    });
    
}
 
 
 