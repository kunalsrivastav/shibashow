const movies = [{
    title: "Khiladi 786",
    image: 'https://img.youtube.com/vi/yP80amXMnEc/mqdefault.jpg',
    iframeTag: '<iframe width="560" height="315" src="https://www.youtube.com/embed/yP80amXMnEc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
},
{
    title: "2 States",
    image: 'https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/old_images/MOVIE/4502/1000034502/1000034502-h',
    iframeTag: '<iframe width="560" height="315" src="https://www.youtube.com/embed/neB7WugMKT4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
},
{
    title: "Welcome Back",
    image: 'https://img.youtube.com/vi/GhZufxyGO-E/mqdefault.jpg',
    iframeTag: '<iframe width="560" height="315" src="https://www.youtube.com/embed/GhZufxyGO-E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
},
{
    title: "Barfi",
    image: 'https://img.youtube.com/vi/TcDmarWK68c/mqdefault.jpg',
    iframeTag: '<iframe width="560" height="315" src="https://www.youtube.com/embed/TcDmarWK68c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
},
{
    title: "Jolly LLB 2",
    image: 'https://img.youtube.com/vi/uhiWdRBwSQo/mqdefault.jpg',
    iframeTag: '<iframe width="560" height="315" src="https://www.youtube.com/embed/uhiWdRBwSQo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
},
{
    title: "Jodha Akbar",
    image: "https://wallpapercave.com/wp/wp6936628.jpg",
    iframeTag: '<iframe width="560" height="315" src="https://www.youtube.com/embed/wgDo0dLm1V4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
},
{
    title: "Entertainment",
    image: 'https://img.youtube.com/vi/smLNCbYNQP4/mqdefault.jpg',
    iframeTag: '<iframe width="560" height="315" src="https://www.youtube.com/embed/smLNCbYNQP4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
},
{
    title: "Bhootnath",
    image: 'https://img.youtube.com/vi/nICDrYQEiVg/mqdefault.jpg',
    iframeTag: '<<iframe width="560" height="315" src="https://www.youtube.com/embed/nICDrYQEiVg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
},
{
    title: "Kaabil",
    image: 'https://img.youtube.com/vi/MrU7NK8U6JU/mqdefault.jpg',
    iframeTag: '<iframe width="560" height="315" src="https://www.youtube.com/embed/MrU7NK8U6JU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
},
{
    title: 'Khoobsurat',
    image: 'https://img.youtube.com/vi/Z-OzON9uiN8/mqdefault.jpg',
    iframeTag: '<iframe width="560" height="315" src="https://www.youtube.com/embed/Z-OzON9uiN8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
},
{
    title: 'Jagga Jasoos',
    image: 'https://img.youtube.com/vi/ss7Q98Xd5-0/mqdefault.jpg',
    iframeTag: '<iframe width="560" height="315" src="https://www.youtube.com/embed/ss7Q98Xd5-0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
},
{
    title: 'Luka Chuppi',
    image: 'https://img.youtube.com/vi/P82Vp6Ww4mc/mqdefault.jpg',
    iframeTag: '<iframe width="560" height="315" src="https://www.youtube.com/embed/P82Vp6Ww4mc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
},
{
    title: 'Humshakal',
    image: 'https://img.youtube.com/vi/KcxTtbZRrxs/mqdefault.jpg',
    iframeTag: '<iframe width="560" height="315" src="https://www.youtube.com/embed/KcxTtbZRrxs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
},
{
    title: 'Race 2',
    image: 'https://img.youtube.com/vi/61A0l4PU8c0/mqdefault.jpg',
    iframeTag: '<iframe width="560" height="315" src="https://www.youtube.com/embed/61A0l4PU8c0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
},
{
    title: 'Kick',
    image: 'https://img.youtube.com/vi/AD6h-jpLWZo/mqdefault.jpg',
    iframeTag: '<iframe width="560" height="315" src="https://www.youtube.com/embed/AD6h-jpLWZo?start=5712" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
},
{
    title: 'Housefull',
    image: 'https://img.youtube.com/vi/7oBJRc4_tQw/mqdefault.jpg',
    iframeTag: '<iframe width="560" height="315" src="https://www.youtube.com/embed/7oBJRc4_tQw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
},
{
    title: 'ABCD 2',
    image: 'https://img.youtube.com/vi/ySnKGxhA1fA/mqdefault.jpg',
    iframeTag: '<iframe width="560" height="315" src="https://www.youtube.com/embed/ySnKGxhA1fA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
},
{
    title: "Shoot At Wadala",
    image: 'https://img.youtube.com/vi/NYnH5mcGBmg/mqdefault.jpg',
    iframeTag: '<iframe width="560" height="315" src="https://www.youtube.com/embed/NYnH5mcGBmg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
}
]


// PLAY MOVIES IN A MODAL


function openMovieModal(id) {
    var index = parseInt(id);
    var main = document.querySelector('body');
    var newDiv = document.createElement('div');
    newDiv.classList.add("player");
    newDiv.innerHTML =  '<div class="modal fade" id="myModal" role="dialog">' + 
                            '<div class="modal-dialog">' +
                                '<div class="modal-content">' +
                                    '<div class="modal-header">' +
                                        '<button type="button" class="close" data-dismiss="modal">&times;</button>' + 
                                        '<h4 class="modal-title">' + movies[index].title + '</h4>' + 
                                    '</div>' + 
                                    '<div class="modal-body">' + 
                                        movies[index].iframeTag + 
                                    '</div>' + 
                                    '<div class="modal-footer">' +
                                        '<button type="button" class="btn btn-default delMod" data-dismiss="modal">Close</button>' +
                                    '</div>' +
                                '</div>' + 
                            '</div>' + 
                        '</div>';
    main.appendChild(newDiv);
    document.querySelector('.close').onclick = delMovieModal;
    document.querySelector('.delMod').onclick = delMovieModal;
}

function delMovieModal() {
    var parent = document.querySelector('body');
    console.log(parent);
    parent.removeChild(parent.childNodes[2]);    
}




//  PURE CAROUSEL USING JAVASCRIPT
function createCarousel() {
    var slider = document.querySelector('.slider');
    const moviesLength = movies.length;
    for (let i = 0; i < moviesLength; i++) {
        var slide = document.createElement('div');
        slide.setAttribute('id', i);
        slide.setAttribute('data-toggle', 'modal');
        slide.setAttribute('data-target', '#myModal');
        slide.setAttribute('onClick', 'openMovieModal(' + i + ')');
        if (i == 0) {
            slide.classList.add('active');   
        }
        slide.classList.add('slide');
        var img = document.createElement('img');
        img.setAttribute('src', movies[i].image);
        var content = document.createElement('div');
        content.classList.add('content');
        content.innerHTML = '<h1>' + movies[i].title + '</h1>' +
            '<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus magni perferendis perspiciatis.</p>';

        slide.appendChild(img);
        slide.appendChild(content);
        slider.appendChild(slide);

    }
}

window.onload = createCarousel();

const slider = document.querySelector('.slider');

var navigation = document.createElement('div');
navigation.classList.add('navigation');
navigation.innerHTML = '<i class = "fas fa-chevron-left prevBtn"></i>' +
    '<i class = "fas fa-chevron-right nextBtn"></i>';

slider.appendChild(navigation);

const nextBtn = document.querySelector('.nextBtn');
const prevBtn = document.querySelector('.prevBtn');
const slides = document.querySelectorAll('.slide');
const numberOfSlides = slides.length;
let slidesNumber = 0;


// BUTTONS FUNCTIONING

nextBtn.addEventListener("click", () => {

    slides.forEach((slide) => {
        slide.classList.remove('active');
    })
    slidesNumber++;
    if (slidesNumber > numberOfSlides - 1)
        slidesNumber = 0;
    slides[slidesNumber].classList.add('active');
});

prevBtn.addEventListener('click', () => {
    slides.forEach((slide) => {
        slide.classList.remove('active');
    })
    slidesNumber--;
    if (slidesNumber < 0)
        slidesNumber = numberOfSlides - 1;
    slides[slidesNumber].classList.add('active');
})


// SLIDER AUTOPLAY

let playSlider;

function repeater() {
    playSlider = setInterval(function () {

        slides.forEach((slide) => {
            slide.classList.remove('active');
        })
        slidesNumber++;
        if (slidesNumber > numberOfSlides - 1)
            slidesNumber = 0;
        slides[slidesNumber].classList.add('active');
    }, 4000);
}

//AUTOPLAY ON HOVER
slider.addEventListener('mouseover', () => {
    clearInterval(playSlider);
})

slider.addEventListener('mouseout', () => {
    repeater();
})

repeater();



