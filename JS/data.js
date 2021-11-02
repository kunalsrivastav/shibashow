const data = {
    movies: [{
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
    ],
    songs: [{
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
        [{
                seriesName: "Roomies | Season 2",
                totalEpisodes: 5
            },
            {
                title: "Roomies In mafialand | Official Trailer",
                duration: '1:57',
                iframeTag: '<iframe width="560" height="315" src="https://www.youtube.com/embed/C8RKIBQoEng" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
            },
            {
                title: "Roomies Vs Police",
                duration: "17:33",
                iframeTag: '<iframe width="560" height="315" src="https://www.youtube.com/embed/X79turRdcM4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
            },
            {
                title: "Roomies Vs Love",
                duration: "20:11",
                iframeTag: '<iframe width="560" height="315" src="https://www.youtube.com/embed/kf5nERp-sIM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
            },
            {
                title: "Roomies Vs Scam",
                duration: "20:31",
                iframeTag: '<iframe width="560" height="315" src="https://www.youtube.com/embed/qgUDJ0sC_xw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
            },
            {
                title: "Roomies In Scamland",
                duration: "1:56",
                iframeTag: '<iframe width="560" height="315" src="https://www.youtube.com/embed/WbMlxHTgDp4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
            }
        ],
        [{
                seriesName: "Dating In Office",
                totalEpisodes: 3
            },
            {
                title: "Dating In Office | EP 1",
                duration: '13:49',
                iframeTag: '<iframe width="560" height="315" src="https://www.youtube.com/embed/cVaWQc0HyBk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
            },
            {
                title: "Dating In Office | EP 2",
                duration: '13:10',
                iframeTag: '<iframe width="560" height="315" src="https://www.youtube.com/embed/sfraFm-f_5w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
            },
            {
                title: "Dating In Office | EP 3",
                duration: '11:50',
                iframeTag: '<iframe width="560" height="315" src="https://www.youtube.com/embed/_Iv_WUkNW7g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
            }
        ]

        [{
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
                iframeTag: '<iframe width="560" height="315" src="https://www.youtube.com/embed/WeWXC_ivl5s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
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
        [{
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
        [{
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
        [{
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


// Movies Section
var movieBox = document.querySelector(".movie-box");
const totalMovies = data.movies.length;
for (var i = 0; i < totalMovies; i++) {
    var movieCard = document.createElement("div");
    if (i !== totalMovies - 1) {
        movieCard.style.marginRight = "10px";
    }
    movieCard.classList.add("movie-card");
    movieCard.style.backgroundImage = "url(" + data.movies[i].image + ")";
    var watchBtn = document.createElement("button");
    watchBtn.innerHTML = '<i class="fa fa-play"></i> Watch Now';
    watchBtn.classList.add("watch-btn");
    watchBtn.setAttribute('id', i);
    watchBtn.setAttribute('data-toggle', 'modal');
    watchBtn.setAttribute('data-target', '#myModal');
    watchBtn.setAttribute('onclick', 'openMovieModal(' + i + ')');
    movieCard.appendChild(watchBtn);
    movieBox.appendChild(movieCard);
}

function openMovieModal(id) {
    var index = parseInt(id);
    var main = document.querySelector(".movie-section");
    var newDiv = document.createElement('div');
    newDiv.classList.add("player");
    newDiv.innerHTML =  '<div class="modal fade" id="myModal" role="dialog">' + 
                            '<div class="modal-dialog">' +
                                '<div class="modal-content">' +
                                    '<div class="modal-header">' +
                                        '<button type="button" class="close" data-dismiss="modal">&times;</button>' + 
                                        '<h4 class="modal-title">' + data.movies[index].title + '</h4>' + 
                                    '</div>' + 
                                    '<div class="modal-body">' + 
                                        data.movies[index].iframeTag + 
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
    var parent = document.querySelector('.movie-section');
    parent.removeChild(parent.childNodes[5]);
    
}