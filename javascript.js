document.getElementById('contact-form').addEventListener(
    'submit',function (event){
        event.preventDefault();
        var data = new FormData(event.target);
        fetch("https://formspree.io/f/mkgwbjzw",{
            method: 'POST',
            body: data,
        }).then(response => {
            if (response.ok){
                alert('massage send success');
            }
            else{
                alert('error');
            }
        });
        document.getElementById
        ('contact-form').requestFullscreen();

});