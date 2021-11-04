const data = {
    movies : [{
        title: "Khiladi 786",
        image: 'https://media2.bollywoodhungama.in/wp-content/uploads/2016/03/59162871.jpg',
        iframeTag: '<iframe width="560" height="315" src="https://www.youtube.com/embed/yP80amXMnEc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    },
    {
        title: "2 States",
        image: 'https://wallpapercave.com/wp/wp8054489.jpg',
        iframeTag: '<iframe width="560" height="315" src="https://www.youtube.com/embed/neB7WugMKT4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    },
    {
        title: "Welcome Back",
        image: 'https://i.ytimg.com/vi/tiU3ZrydhHU/maxresdefault.jpg',
        iframeTag: '<iframe width="560" height="315" src="https://www.youtube.com/embed/GhZufxyGO-E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    },
    {
        title: "Barfi",
        image: 'https://lh3.googleusercontent.com/proxy/QtSXqodLwGgX-f9T_CJobb7K__225rtM6dXexIorIAlK-OU4H4rEU7RNqRmmCMY6xZKM0mWGLFpKIE7_wCT12Z49zPc_JpYZO3pYNgus1R1N67I2xFi-MC1bqcrTqwKAP0riS9aw4Q16ExU=w1200-h630-p-k-no-nu',
        iframeTag: '<iframe width="560" height="315" src="https://www.youtube.com/embed/TcDmarWK68c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    },
    {
        title: "Jolly LLB 2",
        image: 'https://i.ytimg.com/vi/Ae0gPm1wW8s/maxresdefault.jpg',
        iframeTag: '<iframe width="560" height="315" src="https://www.youtube.com/embed/uhiWdRBwSQo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    },
    {
        title: "Jodha Akbar",
        image: "https://wallpapercave.com/wp/wp6936628.jpg",
        iframeTag: '<iframe width="560" height="315" src="https://www.youtube.com/embed/wgDo0dLm1V4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    },
    {
        title: "Entertainment",
        image: 'https://i.ytimg.com/vi/xs61DNG9DF0/maxresdefault.jpg',
        iframeTag: '<iframe width="560" height="315" src="https://www.youtube.com/embed/smLNCbYNQP4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    },
    {
        title: "Bhootnath",
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6Os4aK3c99QxA0gRc96Qk0IXSENsa35em4g&usqp=CAU',
        iframeTag: '<<iframe width="560" height="315" src="https://www.youtube.com/embed/nICDrYQEiVg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    },
    {
        title: "Kaabil",
        image: 'https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_2_5x/sources/r1/cms/prod/517/260517-h',
        iframeTag: '<iframe width="560" height="315" src="https://www.youtube.com/embed/MrU7NK8U6JU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    },
    {
        title: 'Khoobsurat',
        image: 'https://i.ytimg.com/vi/Z-OzON9uiN8/maxresdefault.jpg',
        iframeTag: '<iframe width="560" height="315" src="https://www.youtube.com/embed/Z-OzON9uiN8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    },
    {
        title: 'Jagga Jasoos',
        image: 'https://i.pinimg.com/originals/03/2e/1d/032e1d49f8cc814c381483cf2c59a28a.jpg',
        iframeTag: '<iframe width="560" height="315" src="https://www.youtube.com/embed/ss7Q98Xd5-0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    },
    {
        title: 'Luka Chuppi',
        image: 'https://img.youtube.com/vi/P82Vp6Ww4mc/mqdefault.jpg',
        iframeTag: '<iframe width="560" height="315" src="https://www.youtube.com/embed/P82Vp6Ww4mc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    },
    {
        title: 'Humshakal',
        image: 'https://im.rediff.com/movies/2014/jun/20humshakals1.jpg',
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
    ,
    songs: [
        {
            title: "Param Sundari",
            image: 'https://img.youtube.com/vi/w4ClQO0FFQg/mqdefault.jpg',
            iframeTag: '<iframe width="560" height="315" src="https://www.youtube.com/embed/w4ClQO0FFQg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>>'
        },
        {
            title: "Manike Mage Hithe",
            image: 'https://img.youtube.com/vi/PgCliOxl41o/mqdefault.jpg',
            iframeTag: '<iframe width="560" height="315" src="https://www.youtube.com/embed/PgCliOxl41o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
        },
        {
           title: "Kabhi Tumhe",
           image: 'https://img.youtube.com/vi/ByIZIKFmHOA/mqdefault.jpg',
           iframeTag: '<iframe width="560" height="315" src="https://www.youtube.com/embed/ByIZIKFmHOA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>' 
        },
        {
            title: "Mann Bharryaa",
            image: 'https://img.youtube.com/vi/1poXN3jF3Bw/mqdefault.jpg',
            iframeTag: '<iframe width="560" height="315" src="https://www.youtube.com/embed/1poXN3jF3Bw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
        },
        {
            title: 'Nadiyon Paar',
            image: 'https://img.youtube.com/vi/DKj5m9cSMZs/mqdefault.jpg',
            iframeTag: '<iframe width="560" height="315" src="https://www.youtube.com/embed/DKj5m9cSMZs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
        },
        {
            title: 'Ranjha',
            image: 'https://img.youtube.com/vi/V7LwfY5U5WI/mqdefault.jpg',
            iframeTag: '<iframe width="560" height="315" src="https://www.youtube.com/embed/V7LwfY5U5WI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
        },
        {
            title: 'I Want You Back',
            image: 'https://img.youtube.com/vi/IQ9FYNbeBHo/mqdefault.jpg',
            iframeTag: '<iframe width="560" height="315" src="https://www.youtube.com/embed/IQ9FYNbeBHo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
        },
        {
            title: 'Safari',
            image: 'https://img.youtube.com/vi/lpeuIu-ZYJY/mqdefault.jpg',
            iframeTag: '<iframe width="560" height="315" src="https://www.youtube.com/embed/lpeuIu-ZYJY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
        },
        {
            title: 'Baarish Lete Aana',
            image: 'https://img.youtube.com/vi/EFqkHIMbhQg/mqdefault.jpg',
            iframeTag: '<iframe width="560" height="315" src="https://www.youtube.com/embed/EFqkHIMbhQg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
        },
        {
            title: 'Mehrama',
            image: 'https://img.youtube.com/vi/HYUpNJJELeE/mqdefault.jpg',
            iframeTag: '<iframe width="560" height="315" src="https://www.youtube.com/embed/HYUpNJJELeE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
        },
        {
            title: 'Shayad',
            image: 'https://img.youtube.com/vi/MJyKN-8UncM/mqdefault.jpg',
            iframeTag: '<iframe width="560" height="315" src="https://www.youtube.com/embed/MJyKN-8UncM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
        },
        {
            title: 'Tera Zikr',
            image: 'https://img.youtube.com/vi/eK0IIyBlYew/mqdefault.jpg',
            iframeTag: '<iframe width="560" height="315" src="https://www.youtube.com/embed/eK0IIyBlYew" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
        },
        {
            title: 'Asal Mein',
            image: 'https://img.youtube.com/vi/beqprrnaKFc/mqdefault.jpg',
            iframeTag: '<iframe width="560" height="315" src="https://www.youtube.com/embed/beqprrnaKFc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
        },
        {
            title: 'Rabba Mehar Kari',
            image: 'https://img.youtube.com/vi/7zEx0AJguSM/mqdefault.jpg',
            iframeTag: '<iframe width="560" height="315" src="https://www.youtube.com/embed/7zEx0AJguSM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
        },
        {
            title: 'Ek Tarfa',
            image: 'https://img.youtube.com/vi/fIip0BH6z7I/mqdefault.jpg',
            iframeTag: '<iframe width="560" height="315" src="https://www.youtube.com/embed/fIip0BH6z7I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
        },
        {
            title: 'Tera Ghata',
            image: 'https://img.youtube.com/vi/0KNk-Joi-NM/mqdefault.jpg',
            iframeTag: '<iframe width="560" height="315" src="https://www.youtube.com/embed/0KNk-Joi-NM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
        },
        {
            title: 'Kya Baat Ay',
            image: 'https://img.youtube.com/vi/G0Hx6uN2AJE/mqdefault.jpg',
            iframeTag: '<iframe width="560" height="315" src="https://www.youtube.com/embed/G0Hx6uN2AJE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
        },
        {
            title: 'NAAH',
            image: 'https://img.youtube.com/vi/8qs2dZO6wcc/mqdefault.jpg',
            iframeTag: '<iframe width="560" height="315" src="https://www.youtube.com/embed/8qs2dZO6wcc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
        },
        {
            title: 'Daru Badnaam',
            image: 'https://img.youtube.com/vi/bzW9fmwcmG4/mqdefault.jpg',
            iframeTag: '<iframe width="560" height="315" src="https://www.youtube.com/embed/bzW9fmwcmG4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
        },
        {
            title: 'Raataan Lambiyan',
            image: 'https://img.youtube.com/vi/gvyUuxdRdR4/mqdefault.jpg',
            iframeTag: '<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/gvyUuxdRdR4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
        },
        {
            title: 'Waalian',
            image: 'https://img.youtube.com/vi/pD4QTNbMwbc/mqdefault.jpg',
            iframeTag: '<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/pD4QTNbMwbc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
        },
        {
            title: 'Chand Sifarish',
            image: 'https://img.youtube.com/vi/zWEOx7TSM6I/mqdefault.jpg',
            iframeTag: '<iframe width="560" height="315" src="https://www.youtube.com/embed/zWEOx7TSM6I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
        },
        {
            title: 'Bewajah',
            image: 'https://img.youtube.com/vi/gBvwiYnzlhw/mqdefault.jpg',
            iframeTag: '<iframe width="560" height="315" src="https://www.youtube.com/embed/gBvwiYnzlhw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
        },
        {
            title: 'Gulabi Aankhen',
            image: 'https://img.youtube.com/vi/hgi2MYAFgE8/mqdefault.jpg',
            iframeTag: '<iframe width="560" height="315" src="https://www.youtube.com/embed/hgi2MYAFgE8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
        },
        {
            title: 'Temporary Pyar',
            image: 'https://img.youtube.com/vi/2lfETGiIDf8/mqdefault.jpg',
            iframeTag: '<iframe width="560" height="315" src="https://www.youtube.com/embed/2lfETGiIDf8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
        },
        {
            title: 'Ae Dil Hai Mushkil',
            image: 'https://img.youtube.com/vi/vUCM_0evdQY/mqdefault.jpg',
            iframeTag: '<iframe width="560" height="315" src="https://www.youtube.com/embed/vUCM_0evdQY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
        },
        {
            title: 'Teri Aadat',
            image: 'https://img.youtube.com/vi/U41-rSXvrV0/mqdefault.jpg',
            iframeTag: '<iframe width="560" height="315" src="https://www.youtube.com/embed/U41-rSXvrV0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
        }
    ],
    webseries: [
        [
            {
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
        [
            {
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
        ],
        [
            {
                seriesName: "Aspirants",
                totalEpisodes: 5,
                image: 'https://img.youtube.com/vi/ViOutJ0kuJY/mqdefault.jpg',
                iframeTagTrailer: '<iframe width="560" height="315" src="https://www.youtube.com/embed/ViOutJ0kuJY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
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
                totalEpisodes: 5,
                image: 'https://img.youtube.com/vi/pNZQ6msbOvM/mqdefault.jpg',
                iframeTagTrailer: '<iframe width="560" height="315" src="https://www.youtube.com/embed/pNZQ6msbOvM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
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
                totalEpisodes: 8,
                image: 'https://img.youtube.com/vi/5IvQ3fYKnfM/mqdefault.jpg',
                iframeTagTrailer: '<iframe width="560" height="315" src="https://www.youtube.com/embed/5IvQ3fYKnfM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
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
                totalEpisodes: 5,
                image: 'https://img.youtube.com/vi/y5NutvTDpHQ/mqdefault.jpg',
                iframeTagTrailer: '<iframe width="560" height="315" src="https://www.youtube.com/embed/y5NutvTDpHQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
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

// Songs Section
var songBox = document.querySelector(".song-box");
const totalSongs = data.songs.length;
for (var i = 0; i < totalSongs; i++) {
    var songCard = document.createElement("div");
    if (i !== totalSongs - 1) {
        songCard.style.marginRight = "10px";
    }
    songCard.classList.add("song-card");
    songCard.style.backgroundImage = "url(" + data.songs[i].image + ")";
    var watchBtn = document.createElement("button");
    watchBtn.innerHTML = '<i class="fa fa-play"></i> Watch Now';
    watchBtn.classList.add("watch-btn");
    watchBtn.setAttribute('id', i);
    watchBtn.setAttribute('data-toggle', 'modal');
    watchBtn.setAttribute('data-target', '#myModal');
    watchBtn.setAttribute('onclick', 'openSongModal(' + i + ')');
    songCard.appendChild(watchBtn);
    songBox.appendChild(songCard);
}

function openSongModal(id) {
    var index = parseInt(id);
    var main = document.querySelector(".songs-section");
    var newDiv = document.createElement('div');
    newDiv.classList.add("player");
    newDiv.innerHTML =  '<div class="modal fade" id="myModal" role="dialog">' + 
                            '<div class="modal-dialog">' +
                                '<div class="modal-content">' +
                                    '<div class="modal-header">' +
                                        '<button type="button" class="close" data-dismiss="modal">&times;</button>' + 
                                        '<h4 class="modal-title">' + data.songs[index].title + '</h4>' + 
                                    '</div>' + 
                                    '<div class="modal-body">' + 
                                        data.songs[index].iframeTag + 
                                    '</div>' + 
                                    '<div class="modal-footer">' +
                                        '<button type="button" class="btn btn-default delMod" data-dismiss="modal">Close</button>' +
                                    '</div>' +
                                '</div>' + 
                            '</div>' + 
                        '</div>';
    main.appendChild(newDiv);
    document.querySelector('.close').onclick = delSongModal;
    document.querySelector('.delMod').onclick = delSongModal;
}

function delSongModal() {
    var parent = document.querySelector('.songs-section');
    parent.removeChild(parent.childNodes[5]);
}

// Web Series Section
var webSeriesBox = document.querySelector(".webseries-box");
const totalWebSeries = data.webseries.length;
for (var i = 0; i < totalWebSeries; i++) {
    var webSeriesCard = document.createElement("div");
    if (i !== totalWebSeries - 1) {
        webSeriesCard.style.marginRight = "10px";
    }
    webSeriesCard.classList.add("webseries-card");
    webSeriesCard.style.backgroundImage = "url(" + data.webseries[i][0].image + ")";
    var watchBtn = document.createElement("button");
    watchBtn.innerHTML = '<i class="fa fa-play"></i> Watch Now';
    watchBtn.classList.add("watch-btn");
    watchBtn.setAttribute('id', i);
    watchBtn.setAttribute('data-toggle', 'modal');
    watchBtn.setAttribute('data-target', '#myModal');
    watchBtn.setAttribute('onclick', 'openWebSeriesModal(' + i + ')');
    webSeriesCard.appendChild(watchBtn);
    webSeriesBox.appendChild(webSeriesCard);
}

function openWebSeriesModal(id) {
    var index = parseInt(id);
    var main = document.querySelector(".webseries-section");
    var newDiv = document.createElement('div');
    newDiv.classList.add("episodelist");
    newDiv.innerHTML =   '<div class="modal fade" id="myModal" role="dialog">' + 
                            '<div class="modal-dialog">' +
                                '<div class="modal-content">' +
                                    '<div class="modal-header">' +
                                        '<button type="button" class="close" data-dismiss="modal">&times;</button>' + 
                                        '<h4 class="modal-title">' + data.webseries[index][0].seriesName + '</h4>' + 
                                    '</div>' + 
                                    '<div class="modal-body">' + 
                                        returnList(index).innerHTML + 
                                    '</div>' + 
                                    '<div class="modal-footer">' +
                                        '<button type="button" class="btn btn-default delMod" data-dismiss="modal">Close</button>' +
                                    '</div>' +
                                '</div>' + 
                            '</div>' + 
                        '</div>';
    main.appendChild(newDiv);
    document.querySelector('.close').onclick = delDisplayListModal;
    document.querySelector('.delMod').onclick = delDisplayListModal;
}

function delDisplayListModal() {
    var web = document.querySelector(".webseries-section");
    web.removeChild(web.childNodes[5]);
}

function returnList(index) {
    var totalEpisodes = data.webseries[index][0].totalEpisodes;
    var displayList = document.createElement("div");
    for (var episodes = 0; episodes <= totalEpisodes; episodes++) {
        var episodeBtn = document.createElement("button");
        episodeBtn.setAttribute('id', index + '' + episodes);
        episodeBtn.setAttribute('class', 'episode-button');
        if (episodes === 0) {
            episodeBtn.innerText = "Trailer: " + data.webseries[index][episodes].seriesName;
        } else {
            episodeBtn.innerText = "Episode " + episodes + ": " + data.webseries[index][episodes].title;
        }
        episodeBtn.setAttribute('onclick', 'openEpisodeModal(' + index + ", " + episodes + "" + ')')
        displayList.appendChild(episodeBtn);
    }
    return displayList;
}

function openEpisodeModal(index, episode) {
    var index = parseInt(index);
    var episode = parseInt(episode);
    var modal = document.querySelector(".modal-body");
    if (modal.childNodes[modal.children.length - 1].classList.value === 'player') {
        modal.removeChild(modal.childNodes[modal.children.length - 1]);
    }
    var player = document.createElement('div');
    player.setAttribute("class", 'player');
    if (episode === 0) {
        player.innerHTML = data.webseries[index][episode].iframeTagTrailer;
    } else {
        player.innerHTML = data.webseries[index][episode].iframeTag;
    }
    modal.appendChild(player);
}


/**
 * CAROUSEL SECTION WORKING
 */

//  PURE CAROUSEL USING JAVASCRIPT
function createCarousel() {
    var slider = document.querySelector('.slider');
    const moviesLength = data.movies.length;
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
        img.setAttribute('src', data.movies[i].image);
        var content = document.createElement('div');
        content.classList.add('content');
        content.innerHTML = '<h1>' + data.movies[i].title + '</h1>' +
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
    }, 3500);
}

//AUTOPLAY ON HOVER
slider.addEventListener('mouseover', () => {
    clearInterval(playSlider);
})

slider.addEventListener('mouseout', () => {
    repeater();
})

repeater();





// Search Page
function search() {
    var searchBox = document.getElementById("searchQuery");
    var searchData = searchBox.value.trim().toLowerCase();
    searchBox.value = "";
    if (searchData.length == 0) {
        return;
    }
    var searchResults = document.querySelector(".search-result");
    searchResults.innerHTML = "";
    var found = false;
    // Searching Movies
    for (var i = 0; i < data.movies.length; i++) {
        var movieName = data.movies[i].title.toLowerCase();
        if (movieName.includes(searchData)) {
            found = true;
            var searchCard = document.createElement("div");
            searchCard.setAttribute("class", "search-card");
            searchCard.style.backgroundImage = "url(" + data.movies[i].image + ")";
            var watchBtn = document.createElement("button");
            watchBtn.innerHTML = '<i class="fa fa-play"></i> Watch Now';
            watchBtn.classList.add("watch-btn");
            watchBtn.setAttribute('id', i);
            watchBtn.setAttribute('data-toggle', 'modal');
            watchBtn.setAttribute('data-target', '#myModal');
            watchBtn.setAttribute('onclick', 'openSearchMovieModal(' + i + ')');
            searchCard.appendChild(watchBtn);
            searchResults.appendChild(searchCard);
        }
    }
    // Searching Songs
    for (var i = 0; i < data.songs.length; i++) {
        var songName = data.songs[i].title.toLowerCase();
        if (songName.includes(searchData)) {
            found = true;
            var searchCard = document.createElement("div");
            searchCard.setAttribute("class", "search-card");
            searchCard.style.backgroundImage = "url(" + data.songs[i].image + ")";
            var watchBtn = document.createElement("button");
            watchBtn.innerHTML = '<i class="fa fa-play"></i> Watch Now';
            watchBtn.classList.add("watch-btn");
            watchBtn.setAttribute('id', i);
            watchBtn.setAttribute('data-toggle', 'modal');
            watchBtn.setAttribute('data-target', '#myModal');
            watchBtn.setAttribute('onclick', 'openSearchSongModal(' + i + ')');
            searchCard.appendChild(watchBtn);
            searchResults.appendChild(searchCard);
        }
    }
    // Searching Webseries
    for (var index = 0; index < data.webseries.length; index++) {
        for (var j = 0; j < data.webseries[index].length; j++) {
            var title = "";
            if (j === 0) {
                title = data.webseries[index][j].seriesName.toLowerCase();
            } else {
                title = data.webseries[index][j].title.toLowerCase();
            }
            if (title.includes(searchData)) {
                found = true;
                var searchCard = document.createElement("div");
                searchCard.setAttribute("class", "search-card");
                searchCard.style.backgroundImage = "url(" + data.webseries[index][j].image + ")";
                var watchBtn = document.createElement("button");
                watchBtn.innerHTML = '<i class="fa fa-play"></i> Watch Now';
                watchBtn.classList.add("watch-btn");
                watchBtn.setAttribute('id', i);
                watchBtn.setAttribute('data-toggle', 'modal');
                watchBtn.setAttribute('data-target', '#myModal');
                watchBtn.setAttribute('onclick', 'openSearchSeriesModal(' + index + ", " + j + ')');
                searchCard.appendChild(watchBtn);
                searchResults.appendChild(searchCard);
            }
        }
    }
    if (!found) {
        searchResults.innerHTML = '<h1>Sorry, No Results Found.</h1>';
    }
}


function openSearchMovieModal(id) {
    var index = parseInt(id);
    var main = document.querySelector(".search-result");
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
    document.querySelector('.close').onclick = delSearchMovieModal;
    document.querySelector('.delMod').onclick = delSearchMovieModal;
}

function delSearchMovieModal() {
    var parent = document.querySelector('.search-result');
    parent.removeChild(parent.childNodes[parent.childNodes.length - 1]);    
}

function openSearchSongModal(id) {
    var index = parseInt(id);
    var main = document.querySelector(".search-result");
    var newDiv = document.createElement('div');
    newDiv.classList.add("player");
    newDiv.innerHTML =  '<div class="modal fade" id="myModal" role="dialog">' + 
                            '<div class="modal-dialog">' +
                                '<div class="modal-content">' +
                                    '<div class="modal-header">' +
                                        '<button type="button" class="close" data-dismiss="modal">&times;</button>' + 
                                        '<h4 class="modal-title">' + data.songs[index].title + '</h4>' + 
                                    '</div>' + 
                                    '<div class="modal-body">' + 
                                        data.songs[index].iframeTag + 
                                    '</div>' + 
                                    '<div class="modal-footer">' +
                                        '<button type="button" class="btn btn-default delMod" data-dismiss="modal">Close</button>' +
                                    '</div>' +
                                '</div>' + 
                            '</div>' + 
                        '</div>';
    main.appendChild(newDiv);
    document.querySelector('.close').onclick = delSearchSongModal;
    document.querySelector('.delMod').onclick = delSearchSongModal;
}

function delSearchSongModal() {
    var parent = document.querySelector('.search-result');
    parent.removeChild(parent.childNodes[parent.childNodes.length - 1]);    
}

function openSearchSeriesModal(index, j) {
    var index = parseInt(index);
    var j = parseInt(j);
    console.log(index+  " " + j);
    var main = document.querySelector(".search-result");
    var newDiv = document.createElement('div');
    newDiv.classList.add("player");
    newDiv.innerHTML =  '<div class="modal fade" id="myModal" role="dialog">' + 
                            '<div class="modal-dialog">' +
                                '<div class="modal-content">' +
                                    '<div class="modal-header">' +
                                        '<button type="button" class="close" data-dismiss="modal">&times;</button>' + 
                                        '<h4 class="modal-title">' + 
                                            (j === 0 ? data.webseries[index][j].seriesName : data.webseries[index][j].title) + 
                                        '</h4>' + 
                                    '</div>' + 
                                    '<div class="modal-body">' + 
                                        (j === 0 ? data.webseries[index][j].iframeTagTrailer : data.webseries[index][j].iframeTag) + 
                                    '</div>' + 
                                    '<div class="modal-footer">' +
                                        '<button type="button" class="btn btn-default delMod" data-dismiss="modal">Close</button>' +
                                    '</div>' +
                                '</div>' + 
                            '</div>' + 
                        '</div>';
    main.appendChild(newDiv);
    document.querySelector('.close').onclick = delSearchSeriesModal;
    document.querySelector('.delMod').onclick = delSearchSeriesModal;
}

function delSearchSeriesModal() {
    var parent = document.querySelector('.search-result');
    parent.removeChild(parent.childNodes[parent.childNodes.length - 1]);    
}