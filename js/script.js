const observer = new IntersectionObserver(entries => {

entries.forEach(entry => {

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

document.querySelectorAll(".project").forEach(project => {

observer.observe(project);

});