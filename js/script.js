// топорно но пойдёт
// Функция для открытия закрытия листа
// Извините за плохой фронтэнд
let coll=document.getElementsByClassName('collapsible');
for (let i = 0; i < coll.length; i++) {
    coll[i].addEventListener('click', function () { 
    coll[i].firstElementChild.classList.toggle("fa-caret-right")
    coll[i].firstElementChild.classList.toggle("fa-caret-down");
    let parent=coll[i];
    let content=coll[i];
    while(content.className!='content' ){
        // Если мы дошли до эншиента(корня) выходим из цикла
        if(parent.parentNode==null)
            break;
        // Смотрим предыдущего    
        parent=parent.parentNode;
        // Cмотрим всех детей родителя и пытаемся обнаружить контент =)
        let children=parent.children
        for(let j = 0; j < children.length; j++)
            if(children[j].className=='content')
                content=children[j];
        
    } 
    console.log(content);
    if(content.style.maxHeight)
        content.style.maxHeight=null;
    else
        content.style.maxHeight=content.scrollHeight+'px'
    }); 
}

 
 
 