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
            iframeTag: '<iframe width="560" height="315" src="https://www.youtube.com/embed/w4ClQO0FFQg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
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
                seriesName: "MORTAL GLITCH",
                totalEpisodes: 5,
                image: 'https://img.youtube.com/vi/sRVJ9rEqiAQ/mqdefault.jpg',
                iframeTagTrailer: '<iframe width="560" height="315" src="https://www.youtube.com/embed/sRVJ9rEqiAQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
            },
            {
                title: "Only The Hero Can Defeat The Beast",
                image: 'https://img.youtube.com/vi/yHM2JuYjDN0/mqdefault.jpg',
                iframeTag: '<iframe width="560" height="315" src="https://www.youtube.com/embed/yHM2JuYjDN0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
            },
            {
                title: "Your Squire Will Guide and Protect You",
                image: 'https://img.youtube.com/vi/zclGUt3NvfM/mqdefault.jpg',
                iframeTag: '<iframe width="560" height="315" src="https://www.youtube.com/embed/zclGUt3NvfM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
            },
            {
                title: "Strength Does Not Defeat The Beast",
                image: 'https://img.youtube.com/vi/-uFsDvaGLEY/mqdefault.jpg',
                iframeTag: '<iframe width="560" height="315" src="https://www.youtube.com/embed/-uFsDvaGLEY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
            },
            {
                title: "Sibaris, City of Thieves",
                image: 'https://img.youtube.com/vi/wBRthE7C5Ns/mqdefault.jpg',
                iframeTag: '<iframe width="560" height="315" src="https://www.youtube.com/embed/wBRthE7C5Ns" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
            },
            {
                title: "There Is Always A Way",
                image: 'https://img.youtube.com/vi/mjScU2LYUeE/mqdefault.jpg',
                iframeTag: '<iframe width="560" height="315" src="https://www.youtube.com/embed/mjScU2LYUeE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
            }
        ],
        [
            {
                seriesName: "RETRO TECH - Season 1",
                totalEpisodes: 6,
                image: 'https://img.youtube.com/vi/mXgG8k5tTFM/mqdefault.jpg',
                iframeTagTrailer: '<iframe width="560" height="315" src="https://www.youtube.com/embed/mXgG8k5tTFM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
            },
            {
                title: "CAMCORDER",
                image: 'https://img.youtube.com/vi/kMtN9KJHn5Y/mqdefault.jpg',
                iframeTag: '<iframe width="560" height="315" src="https://www.youtube.com/embed/kMtN9KJHn5Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
            },
            {
                title: "MACINTOSH",
                image: 'https://img.youtube.com/vi/VJI88QIW7H4/mqdefault.jpg',
                iframeTag: '<iframe width="560" height="315" src="https://www.youtube.com/embed/VJI88QIW7H4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
            },
            {
                title: "SEGA GENESIS",
                image: 'https://img.youtube.com/vi/PRVr1heimY8/mqdefault.jpg',
                iframeTag: '<iframe width="560" height="315" src="https://www.youtube.com/embed/PRVr1heimY8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
            },
            {
                title: 'WALKMAN',
                image: 'https://img.youtube.com/vi/AjQ7CEeONb4/mqdefault.jpg',
                iframeTag: '<iframe width="560" height="315" src="https://www.youtube.com/embed/AjQ7CEeONb4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
            },
            {
                title: 'POLAROID',
                image: 'https://img.youtube.com/vi/6oHrNuXPVck/mqdefault.jpg',
                iframeTag: '<iframe width="560" height="315" src="https://www.youtube.com/embed/6oHrNuXPVck" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
            },
            {
                title: 'DYNATAC',
                image: 'https://img.youtube.com/vi/kOEXcMoh2II/mqdefault.jpg',
                iframeTag: '<iframe width="560" height="315" src="https://www.youtube.com/embed/kOEXcMoh2II" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
            }
        ],
        [
            {
                seriesName: 'RETRO TECH - Season 2',
                totalEpisodes: 5,
                image: 'https://img.youtube.com/vi/46ZIEyPkyzA/mqdefault.jpg',
                iframeTagTrailer: '<iframe width="560" height="315" src="https://www.youtube.com/embed/46ZIEyPkyzA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
            },
            {
                title: 'Flying Cars',
                image: 'https://img.youtube.com/vi/ifI_fwg55k8/mqdefault.jpg',
                iframeTag: '<iframe width="560" height="315" src="https://www.youtube.com/embed/ifI_fwg55k8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
            },
            {
                title: 'Teleportation',
                image: 'https://img.youtube.com/vi/tEmLMCPK8OE/mqdefault.jpg',
                iframeTag: '<iframe width="560" height="315" src="https://www.youtube.com/embed/tEmLMCPK8OE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
            },
            {
                title: 'Robots',
                image: 'https://img.youtube.com/vi/nLeScEdf550/mqdefault.jpg',
                iframeTag: '<iframe width="560" height="315" src="https://www.youtube.com/embed/nLeScEdf550" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
            },
            {
                title: 'Hyperconnectivity',
                image: 'https://img.youtube.com/vi/MhKiMPiZOdE/mqdefault.jpg',
                iframeTag: '<iframe width="560" height="315" src="https://www.youtube.com/embed/MhKiMPiZOdE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
            },
            {
                title: 'Smart Homes',
                image: 'https://img.youtube.com/vi/ccnlAVDXd7k/mqdefault.jpg',
                iframeTag: '<iframe width="560" height="315" src="https://www.youtube.com/embed/ccnlAVDXd7k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
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
                image: 'https://img.youtube.com/vi/UwsrzCVZAb8/mqdefault.jpg',
                iframeTag: '<iframe width="560" height="315" src="https://www.youtube.com/embed/UwsrzCVZAb8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
            },
            {
                title: "Healed through A.I.",
                image: 'https://img.youtube.com/vi/V5aZjsWM2wo/mqdefault.jpg',
                iframeTag: '<iframe width="560" height="315" src="https://www.youtube.com/embed/V5aZjsWM2wo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
            },
            {
                title: "Using A.I. to build a better human",
                image: 'https://img.youtube.com/vi/lrv8ga02VNg/mqdefault.jpg',
                iframeTag: '<iframe width="560" height="315" src="https://www.youtube.com/embed/lrv8ga02VNg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
            },
            {
                title: "Love, art and stories: decoded",
                image: 'https://img.youtube.com/vi/Kr1fmKVY3cA/mqdefault.jpg',
                iframeTag: '<iframe width="560" height="315" src="https://www.youtube.com/embed/Kr1fmKVY3cA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
            },
            {
                title: "The 'Space Architects' of Mars",
                image: 'https://img.youtube.com/vi/lIvrIKaNCRE/mqdefault.jpg',
                iframeTag: '<iframe width="560" height="315" src="https://www.youtube.com/embed/lIvrIKaNCRE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
            },
            {
                title: "Will a robot take my job?",
                image: 'https://img.youtube.com/vi/f2aocKWrPG8/mqdefault.jpg',
                iframeTag: '<iframe width="560" height="315" src="https://www.youtube.com/embed/f2aocKWrPG8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
            },
            {
                title: "Saving the world one algorithm at a time",
                image: 'https://img.youtube.com/vi/0wy4u34fii4/mqdefault.jpg',
                iframeTag: '<iframe width="560" height="315" src="https://www.youtube.com/embed/0wy4u34fii4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
            },
            {
                title: "How A.I. is searching for Aliens",
                image: 'https://img.youtube.com/vi/VwtC_4t2g5M/mqdefault.jpg',
                iframeTag: '<iframe width="560" height="315" src="https://www.youtube.com/embed/VwtC_4t2g5M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
            }
        ],
        [
            {
                seriesName: "Growing with Lottie Dottie",
                totalEpisodes: 7,
                image: 'https://img.youtube.com/vi/7h3aVHhK2C0/mqdefault.jpg',
                iframeTagTrailer: '<iframe width="560" height="315" src="https://www.youtube.com/embed/7h3aVHhK2C0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
            },
            {
                title: "The Great Treasure", 
                image: 'https://img.youtube.com/vi/TG-Cb8SOuNQ/mqdefault.jpg',
                iframeTag: '<iframe width="560" height="315" src="https://www.youtube.com/embed/TG-Cb8SOuNQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
            },
            {
                title: "Little Chickadee Makes A Friend",
                image: 'https://img.youtube.com/vi/dCBeRO2bEnY/mqdefault.jpg',
                iframeTag: '<iframe width="560" height="315" src="https://www.youtube.com/embed/dCBeRO2bEnY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
            },
            {
                title: "The Enchanted Island",
                image: 'https://img.youtube.com/vi/k-3Qwbharwg/mqdefault.jpg',
                iframeTag: '<iframe width="560" height="315" src="https://www.youtube.com/embed/k-3Qwbharwg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
            },
            {
                title: "Little Chickadee Builds A Kite",
                image: 'https://img.youtube.com/vi/cuQ5imFJlkQ/mqdefault.jpg',
                iframeTag: '<iframe width="560" height="315" src="https://www.youtube.com/embed/cuQ5imFJlkQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
            },
            {
                title: "Lost In The Mountain",
                image: 'https://img.youtube.com/vi/e0UlDdeQcm0/mqdefault.jpg',
                iframeTag: '<iframe width="560" height="315" src="https://www.youtube.com/embed/e0UlDdeQcm0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
            },
            {
                title: 'Tidy Room',
                image: 'https://img.youtube.com/vi/NHQc-tRkkVg/mqdefault.jpg',
                iframeTag: '<iframe width="560" height="315" src="https://www.youtube.com/embed/NHQc-tRkkVg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
            },
            {
                title: 'I Didn’t Mean To!',
                image: 'https://img.youtube.com/vi/bK6_8drMD9o/mqdefault.jpg',
                iframeTag: '<iframe width="560" height="315" src="https://www.youtube.com/embed/bK6_8drMD9o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
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
    document.querySelector(".modal").style.pointerEvents = 'none';
    document.querySelector(".modal-dialog").style.pointerEvents = 'auto';
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
    document.querySelector(".modal").style.pointerEvents = 'none';
    document.querySelector(".modal-dialog").style.pointerEvents = 'auto';
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
    document.querySelector(".modal").style.pointerEvents = 'none';
    document.querySelector(".modal-dialog").style.pointerEvents = 'auto';
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
    document.querySelector(".modal").style.pointerEvents = 'none';
    document.querySelector(".modal-dialog").style.pointerEvents = 'auto';
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
    document.querySelector(".modal").style.pointerEvents = 'none';
    document.querySelector(".modal-dialog").style.pointerEvents = 'auto';
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
    document.querySelector(".modal").style.pointerEvents = 'none';
    document.querySelector(".modal-dialog").style.pointerEvents = 'auto';
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
    document.querySelector(".modal").style.pointerEvents = 'none';
    document.querySelector(".modal-dialog").style.pointerEvents = 'auto';
    document.querySelector('.close').onclick = delSearchSeriesModal;
    document.querySelector('.delMod').onclick = delSearchSeriesModal;
}

function delSearchSeriesModal() {
    var parent = document.querySelector('.search-result');
    parent.removeChild(parent.childNodes[parent.childNodes.length - 1]);    
}