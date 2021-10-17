const data = {
    movies: [{
            title: "DJ",
            image: 'https://wallpaperaccess.com/full/3483788.jpg',
            duration: "2:24",
            iframeTag: '<iframe width="560" height="315" src="https://www.youtube.com/embed/OOQlCD5qMPY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        },
        {
            title: "2 States",
            image: 'https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/old_images/MOVIE/4502/1000034502/1000034502-h',
            duration: "2:00",
            iframeTag: '<iframe width="560" height="315" src="https://www.youtube.com/embed/neB7WugMKT4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
        },
        {
            title: "Welcome Back",
            image: 'https://www.themoviedb.org/t/p/w780/qq9LLjycYRL20hWjLtnvksEAjum.jpg',
            duration: "2:03",
            iframeTag: '<iframe width="560" height="315" src="https://www.youtube.com/embed/GhZufxyGO-E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
        },
        {
            title: "Kis Kisko Pyaar Karoon",
            image: 'https://www.deccanherald.com/sites/dh/files/styles/article_detail/public/article_images/2015/09/25/502789.jpg?itok=vEp3njAu',
            duration: "2:12",
            iframeTag: '<iframe width="560" height="315" src="https://www.youtube.com/embed/kGun5Mx5-oI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
        },
        {
            title: "Garam Masala",
            image: "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/old_images/MOVIE/257/1000100257/1000100257-h",
            duration: "2:18",
            iframeTag: '<iframe width="560" height="315" src="https://www.youtube.com/embed/gxBERAhEU7w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
        },
        {
            title: "Jodha Akbar",
            image: "https://wallpapercave.com/wp/wp6936628.jpg",
            duration: "3:07",
            iframeTag: '<iframe width="560" height="315" src="https://www.youtube.com/embed/wgDo0dLm1V4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
        },
        {
            title: "Border",
            image: 'https://i.ytimg.com/vi/puqx55lIWN4/hqdefault.jpg',
            duration: "3:07",
            iframeTag: '<iframe width="560" height="315" src="https://www.youtube.com/embed/glV9AaLTMZU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
        },
        {
            title: "LOC Kargil",
            image: "https://loverays.com/movies/LOC_Kargil_Bollywood_Movie_2003.jpg",
            duration: "4:02",
            iframeTag: '<iframe width="560" height="315" src="https://www.youtube.com/embed/diBHXLm052o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
        }
    ],
    songs: [
        {
            title: "Suna Hai",
            duration: "3:28",
            iframeTag: '<iframe width="560" height="315" src="https://www.youtube.com/embed/FU3bJe2TDAw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
        },
        {
            title: "Levitating",
            duration: "3:50",
            iframeTag: '<iframe width="560" height="315" src="https://www.youtube.com/embed/TUVcZfQe-Kw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
        },
        {
           title: "Kabhi Tumhe",
           duration: "3:40",
           iframeTag: '<iframe width="560" height="315" src="https://www.youtube.com/embed/ByIZIKFmHOA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>' 
        },
        {
            title: "Zaroori Tha",
            duration: "5:16",
            iframeTag: '<iframe width="560" height="315" src="https://www.youtube.com/embed/6-n_szx2XRE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
        },
        {
            title: "Ziddi",
            duration: "5:04",
            iframeTag: '<iframe width="560" height="315" src="https://www.youtube.com/embed/puKD3nkB1h4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
        },
        {
            title: "Besabriyaan",
            duration: "3:29",
            iframeTag: '<iframe width="560" height="315" src="https://www.youtube.com/embed/UBBHpoW3AKA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
        },
        {
            title: "Aashayein",
            duration: '4:46',
            iframeTag: '<iframe width="560" height="315" src="https://www.youtube.com/embed/bmyv0nRkDmc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
        },
        {
            title: "Believer",
            duration: "3:36",
            iframeTag: '<iframe width="560" height="315" src="https://www.youtube.com/embed/7wtfhZwyrcc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
        },
        {
            title: "Dusk Till Dawn",
            duration: '5:38',
            iframeTag: '<iframe width="560" height="315" src="https://www.youtube.com/embed/tt2k8PGm-TI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
        },
        {
            title: "Unstoppable",
            duration: '3:38',
            iframeTag: '<iframe width="560" height="315" src="https://www.youtube.com/embed/1Pg1RguhqxY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
        },
        {
            title: "Let Me Down Slowly",
            duration: '2:27',
            iframeTag: '<iframe width="560" height="315" src="https://www.youtube.com/embed/50VNCymT-Cs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
        },
        {
            title: "Friends",
            duration: "3:51",
            iframeTag: '<iframe width="560" height="315" src="https://www.youtube.com/embed/jzD_yyEcp0M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
        },
        {
            title: "Naina Da Kya Kassor",
            duration: "3:38",
            iframeTag: '<iframe width="560" height="315" src="https://www.youtube.com/embed/zdXiSlRrgWQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
        },
        {
            title: "Give Me Some Sunshine",
            duration: '4:14',
            iframeTag: '<iframe width="560" height="315" src="https://www.youtube.com/embed/lbCRtrrMvSw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
        },
        {
            title: "Sau Aasmaan",
            duration: '3:51',
            iframeTag: '<iframe width="560" height="315" src="https://www.youtube.com/embed/mpjNh-uGBY4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
        }

    ],
    webseries: [

        
    ],
};

