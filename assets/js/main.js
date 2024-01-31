window.onload = function(){
    window.addEventListener('scroll', function (e){
        if(this.scrollY > 1){
            this.document.getElementById('head').classList.add('active')
            this.document.getElementById('to-top').classList.add('active')
        }
        else{
            this.document.getElementById('head').classList.remove('active')
            this.document.getElementById('to-top').classList.remove('active')
        }
    })

    document.getElementById('to-top').addEventListener("click", function(){
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    });

    const menu_btn = document.getElementById('menuToggle');
    const menu = document.getElementById('mobile-nav')

    menu_btn.addEventListener("click", function(){
        menu.classList.toggle('active')
    })
}
