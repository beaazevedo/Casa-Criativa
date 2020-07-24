addEventListener('DOMContentLoaded', function() { 
    document.querySelector('.button-first').addEventListener('click', function(ev) { 
        ev.preventDefault();
        document.querySelector('.modal').classList.add('is--active');
        console.log("Modal aberto");    
    }); 

    document.querySelector('.button-return').addEventListener('click', function() {
        event.preventDefault();
        document.querySelector('.modal.is--active').classList.remove('is--active');
        console.log("Modal fechado");  
    });

    document.querySelector('.other').addEventListener('click', function(ev) { 
        ev.preventDefault();
        document.querySelector('.modal').classList.add('is--active');
        console.log("Modal aberto");    
    }); 

});



