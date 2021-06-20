(function(){
    document.querySelectorAll('area:not([data-toggle="close"]').forEach(function(element){
        element.addEventListener('click',function(){
            let id=element.getAttribute('data-toggle');
            document.querySelector('.frame2__modal').style.visibility = 'visible';
            document.querySelector(id).style.transform = 'scale(1)';
        })
    })
    window.addEventListener('click',function(event){
        if(event.target.nodeName!="AREA"){
            document.querySelector('.frame2__modal').style.visibility  = 'hidden';
            document.querySelectorAll('.frame2__modal img').forEach(function(item){
                item.removeAttribute('style');
            })
        }
    });
    document.onkeydown = function(evt) {
        evt = evt || window.event;
        if(evt.keyCode == 27 || evt.which == 27){
            document.querySelector('.frame2__modal').style.visibility  = 'hidden';
            document.querySelectorAll('.frame2__modal img').forEach(function(item){
                item.removeAttribute('style');
            })
        }
    }
    document.querySelector('[data-toggle="close"]').addEventListener('click',function(){
        document.querySelector('.frame2__modal').style.visibility  = 'hidden';
        document.querySelectorAll('.frame2__modal img').forEach(function(item){
            item.removeAttribute('style');
        })
    })
    document.querySelector('.frame2__modal img').addEventListener('click',function(event){
        event.stopPropagation();
    })
})()