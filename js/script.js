var btn = document.querySelector('.btn-mobile-nav');
var header = document.querySelector('.header');

btn.addEventListener("click", function(){
    header.classList.toggle('nav-open');
})

//Sticky navigation

var sectionHero = document.querySelector('.section-hero');

var obs = new IntersectionObserver(function(entries){
    var ent = entries[0];
    if(ent.isIntersecting === false){
        document.body.classList.add('sticky');
    }
    if(ent.isIntersecting){
        document.body.classList.remove('sticky');
    }
}, {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px"
})
obs.observe(sectionHero);