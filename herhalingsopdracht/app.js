document.addEventListener('DOMContentLoaded', function(){

    var bodyId = document.body.id;
    
    if(bodyId == "index"){

        var form = document.getElementById('formulier');

        var fname = document.getElementById('fname');
        var email = document.getElementById('email');
        var geslacht = form.elements.namedItem('geslacht');
        var text = document.getElementById('text');
        var file = document.getElementById('file');

        var fields = [fname, email, text, file];

        form.addEventListener('submit', function(event){
            // console.log(fname.value);

            fields.forEach(function(field){
                // console.log(field);

                if(field.value == ""){
                    event.preventDefault();
                    var nextElement = field.nextElementSibling;
                    nextElement.classList.add('visible');
                }
            });

            if(geslacht.value == ""){
                event.preventDefault();
                document.getElementById('geslachtError').classList.add('visible');
            }

        });

    }else if(bodyId == "bedankt"){
        
        var urlWaarden = new URLSearchParams(window.location.search);

        document.getElementById('title').innerHTML += " " + urlWaarden.get('fname');
        document.getElementById('mail').innerHTML += "E-mailadres: " + urlWaarden.get('email');
        document.getElementById('geslacht').innerHTML += " " + urlWaarden.get('geslacht');
        document.getElementById('text').innerHTML += " " + urlWaarden.get('text');
        document.getElementById('file').innerHTML += " " + urlWaarden.get('file');
    }

});