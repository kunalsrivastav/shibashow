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
        [
            {
                seriesName: "Aspirants",
                totalEpisodes: 5
            },
            {
                title: "UPSC - Optional Me Kya Hai?",
                duration: '46:16',
                iframeTag: '<iframe width="560" height="315" src="https://www.youtube.com/embed/0Kl1ucZuSZ8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
            },
            {
                title: "Teacher Sahi Hona Chahiye",
                duration: "39:00",
                iframeTag: '<iframe width="560" height="315" src="https://www.youtube.com/embed/7xdt3z85hu4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
            },
            {
                title: "Positive Approach Rakh Yaar",
                duration: "45:36",
                iframeTag : '<iframe width="560" height="315" src="https://www.youtube.com/embed/WeWXC_ivl5s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
            },
            {
                title: "Plan B Kya Hai?",
                duration: "49:41",
                iframeTag: '<iframe width="560" height="315" src="https://www.youtube.com/embed/MYQB8SNy8Gc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
            },
            {
                title: "Pre... Mains Aur Life",
                duration: "39:59",
                iframeTag: '<iframe width="560" height="315" src="https://www.youtube.com/embed/5H8xQF0PwvA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
            }
        ],
        [
            {
                seriesName: "Kota Factory",
                totalEpisodes: 5
            },
            {
                title: "Inventory",
                duration: "47:42",
                iframeTag: '<iframe width="560" height="315" src="https://www.youtube.com/embed/JWbnEt3xuos" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
            },
            {
                title: "Assembly Line",
                duration: "30:26",
                iframeTag: '<iframe width="560" height="315" src="https://www.youtube.com/embed/zW-fcAGzEew" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
            },
            {
                title: "Optimization",
                duration: "36:51",
                iframeTag: '<iframe width="560" height="315" src="https://www.youtube.com/embed/gIwgSpEg6ZY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
            },
            {
                title: "Shutdown",
                duration: "39:54",
                iframeTag: '<iframe width="560" height="315" src="https://www.youtube.com/embed/SaCgKXQiXGE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
            },
            {
                title: "Overhaul",
                duration: "40:05",
                iframeTag: '<iframe width="560" height="315" src="https://www.youtube.com/embed/923ks1pc0LQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
            }
        ],
        [
            {
                seriesName: "The Age of A.I.",
                totalEpisodes: 8
            },
            {
                title: "How Far is Too Far?",
                duration: "34:39",
                iframeTag: '<iframe width="560" height="315" src="https://www.youtube.com/embed/UwsrzCVZAb8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
            },
            {
                title: "Healed through A.I.",
                duration: "39:54",
                iframeTag: '<iframe width="560" height="315" src="https://www.youtube.com/embed/V5aZjsWM2wo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
            },
            {
                title: "Using A.I. to build a better human",
                duration: "44:26",
                iframeTag: '<iframe width="560" height="315" src="https://www.youtube.com/embed/lrv8ga02VNg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
            },
            {
                title: "Love, art and stories: decoded",
                duration: "38:56",
                iframeTag: '<iframe width="560" height="315" src="https://www.youtube.com/embed/Kr1fmKVY3cA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
            },
            {
                title: "The 'Space Architects' of Mars",
                duration: "30:10",
                iframeTag: '<iframe width="560" height="315" src="https://www.youtube.com/embed/lIvrIKaNCRE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
            },
            {
                title: "Will a robot take my job?",
                duration: "36:13",
                iframeTag: '<iframe width="560" height="315" src="https://www.youtube.com/embed/f2aocKWrPG8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
            },
            {
                title: "Saving the world one algorithm at a time",
                duration: "46:36",
                iframeTag: '<iframe width="560" height="315" src="https://www.youtube.com/embed/0wy4u34fii4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
            },
            {
                title: "How A.I. is searching for Aliens",
                duration: "36:11",
                iframeTag: '<iframe width="560" height="315" src="https://www.youtube.com/embed/VwtC_4t2g5M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
            }
        ],
        [
            {
                seriesName: "Cubicles",
                totalEpisodes: 5
            },
            {
                title: "Access Denied", 
                duration: "25:33",
                iframeTag: '<iframe width="560" height="315" src="https://www.youtube.com/embed/JbBsqmKclXE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
            },
            {
                title: "CTC",
                duration: "25:25",
                iframeTag: '<iframe width="560" height="315" src="https://www.youtube.com/embed/avbzjWknugI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
            },
            {
                title: "Standby",
                duration: "27:35",
                iframeTag: '<iframe width="560" height="315" src="https://www.youtube.com/embed/KuG18GtLf5w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
            },
            {
                title: "Reconfiguration",
                duration: "30:48",
                iframeTag: '<iframe width="560" height="315" src="https://www.youtube.com/embed/doGwuGjX-ME" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
            },
            {
                title: "System Down",
                duration: "27:47",
                iframeTag: '<iframe width="560" height="315" src="https://www.youtube.com/embed/DQUwWbKCaa8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
            }
        ]
    ],
};

