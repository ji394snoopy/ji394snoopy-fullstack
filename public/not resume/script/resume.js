$(document).ready(function() {
    // $('.hamburger').on('click', function() {
    //     changeStatus();
    // });

    // $('.menu .item').on('click', function() {
    //     if ($('.hamburger').is(":visible")) {
    //         changeStatus();
    //     }
    // });

    // function changeStatus() {
    //     $('.Nav').fadeToggle();
    //     $('.hamburger').toggleClass("active");
    // }

    var vResume = new Vue({
        el: "#resume",
        data: {
            isMobile: false,
            circlePercentageColor: "#31b0d5",
            menu: ["ABOUT", "INTRODUCTION", "SKILLS", "EXPERIENCE", "EDUCATION"],
            aboutme: {
                name: "黃俊諺",
                school: "中興大學 NCHU",
                department: "資訊管理學系",
                facebook: "https://www.facebook.com",
                linkedin: "https://www.linkedin.com",
                mail: "eric60513@gmail.com",
                phone: "0975-220-827",
                birth: "1994-08-08"
            },
            skills: [{
                name: "Html5/Css3",
                percentage: 85,
                isBase: true,
                count: 0
            }, {
                name: "JavaScript",
                percentage: 85,
                isBase: true,
                count: 0
            }, {
                name: "Vue.js",
                percentage: 75,
                isBase: false,
                count: 0
            }, {
                name: "Node.js",
                percentage: 70,
                isBase: false,
                count: 0
            }, {
                name: "Swift",
                percentage: 70,
                isBase: true,
                count: 0
            }, {
                name: "Ios Develop",
                percentage: 65,
                isBase: false,
                count: 0
            }, {
                name: "Java",
                percentage: 70,
                isBase: true,
                count: 0
            }, {
                name: "Android Develop",
                percentage: 65,
                isBase: false,
                count: 0
            }],
            experience: [{
                company: "LifeLine 生命連線",
                job: "前端工程師",
                time: "2016-2017",
                detail: ["進行網站前台和後台設計及編寫", "維護及更新現有網站", "進行Android系統開發 (1month)", "進行Ios系統開發 (1month)"],
                tech: ["Html / Css", "JavaScript / Ajax / Vue.js / Jquery", "Bootstrap / W3.css", "Swift / Xcode", "Java / Xml /Android Studio"],
                works: [{
                    title: '基金會官網',
                    href: 'http://www.lifecare.org.tw'
                }]
            }, {
                company: "DreamLearn",
                job: "Ios工程師",
                time: "2015-2016",
                detail: ["進行現有Objecive-C程式維護", "嘗試用Swift語言重新編寫(畢業後交接)"],
                tech: ["Swift / Xcode", "Objective-C"]
            }, {
                company: "碳基科技",
                job: "實習生",
                time: "2015-2015",
                detail: ["2個月實習經驗", "以Html5+PhoneGap製作產品介紹及客服服務App(未上架)"],
                tech: ["Html / Css", "JavaScript / Jquery", "PhoneGap"],
                works: [{
                    title: 'Uaver App',
                    modal: 'picture',
                    bind: 'uaver'
                }]
            }],
            education: {
                school: "NCHU 國立中興大學",
                department: "資訊管理學系",
                time: "2012-2016",
                detail_list: [{
                    title: "系所課程內容資訊和管理參半 :",
                    items: ["管理課程: 經濟學、管理學、統計學、初等會計學、財務管理 ... ...", "資訊課程: Java、Mysql(PHP)、Html/JavaScript、XML、專案管理 ... ...", "個人選擇: C++/Cli(資工)、SAS ... ..."]
                }, {
                    title: "獲得獎項 :",
                    items: ["103學年度第十屆中興大學資訊管理實務專題成果展 B組第二名", "2015精誠盃APP創意競賽 佳作", "2015軟體創作達人暑期成長營 優勝團隊", "2015Open Data創新應用競賽開放資料應用組 銀獎", "2015第20屆全國大專校院資訊應用服務創新競賽: 資訊技術應用組(一) 第一名", "2015第20屆全國大專校院資訊應用服務創新競賽: 臺北生活好友善創新應用組 第三名"]
                }, {
                    title: "其他事蹟 :",
                    items: ["擔任2年系學會幹部，並曾擔任系上大型活動總召和多個小活動組長", "曾參加咖啡研究社"]
                }],
                detail_p: ["大三專題三人團隊，以街頭藝人為出發點開發行動App--iBusker。以Html5、Css、JavaScript為基礎並由PhoneGap把網頁包裝成行動App，後端以雲端SAAS平台Parse.com(已關閉)和Heroku建立，並結合Beacon和定位技術發送通知給使用者。 此構想獲得教授們的青睞，也參加許多比賽獲得佳績。"]
            },
            modal: {
                ibusker: false,
                lifeline: false,
                dreamlearn: false,
                uaver: false
            },
            uaverPics: [{
                name: 'Screen Shot 0',
                href: '/img/uaver_screenshot_0.jpg'
            }, {
                name: 'Screen Shot 1',
                href: '/img/uaver_screenshot_1.jpg'
            }],
            ibuskerPics: [
                // {
                //     name: 'Use Case Diagram',
                //     href: '/img/ibusker_use_case_diagram.jpg'
                // }, {
                //     name: 'Activity Diagram 主功能',
                //     href: '/img/ibusker_activity_diagram_main.jpg'
                // }, {
                //     name: 'Activity Diagram 列表',
                //     href: '/img/ibusker_activity_diagram_client.jpg'
                // }, {
                //     name: 'Activity Diagram 街頭藝人',
                //     href: '/img/ibusker_activity_diagram_busker.jpg'
                // }, {
                //     name: 'Activity Diagram 社交功能',
                //     href: '/img/ibusker_activity_diagram_social.jpg'
                // }
                {
                    "name": "Screen Shot 0",
                    "href": "/img/ibusker_screenshot_0.png"
                }, {
                    "name": "Screen Shot 1",
                    "href": "/img/ibusker_screenshot_1.png"
                }, {
                    "name": "Screen Shot 2",
                    "href": "/img/ibusker_screenshot_2.png"
                }, {
                    "name": "Screen Shot 3",
                    "href": "/img/ibusker_screenshot_3.png"
                }, {
                    "name": "Screen Shot 4",
                    "href": "/img/ibusker_screenshot_4.png"
                }, {
                    "name": "Screen Shot 5",
                    "href": "/img/ibusker_screenshot_5.png"
                }, {
                    "name": "Screen Shot 6",
                    "href": "/img/ibusker_screenshot_6.png"
                }, {
                    "name": "Screen Shot 7",
                    "href": "/img/ibusker_screenshot_7.png"
                }, {
                    "name": "Screen Shot 8",
                    "href": "/img/ibusker_screenshot_8.png"
                }, {
                    "name": "Screen Shot 9",
                    "href": "/img/ibusker_screenshot_9.png"
                }, {
                    "name": "Screen Shot 10",
                    "href": "/img/ibusker_screenshot_10.png"
                }, {
                    "name": "Screen Shot 11",
                    "href": "/img/ibusker_screenshot_11.png"
                }, {
                    "name": "Screen Shot 12",
                    "href": "/img/ibusker_screenshot_12.png"
                }, {
                    "name": "Screen Shot 13",
                    "href": "/img/ibusker_screenshot_13.png"
                }, {
                    "name": "Screen Shot 14",
                    "href": "/img/ibusker_screenshot_14.png"
                }, {
                    "name": "Screen Shot 15",
                    "href": "/img/ibusker_screenshot_15.png"
                }, {
                    "name": "Screen Shot 16",
                    "href": "/img/ibusker_screenshot_16.png"
                }, {
                    "name": "Screen Shot 17",
                    "href": "/img/ibusker_screenshot_17.png"
                }, {
                    "name": "Screen Shot 18",
                    "href": "/img/ibusker_screenshot_18.png"
                }, {
                    "name": "Screen Shot 19",
                    "href": "/img/ibusker_screenshot_19.png"
                }, {
                    "name": "Screen Shot 20",
                    "href": "/img/ibusker_screenshot_20.png"
                }, {
                    "name": "Screen Shot 21",
                    "href": "/img/ibusker_screenshot_21.png"
                }, {
                    "name": "Screen Shot 22",
                    "href": "/img/ibusker_screenshot_22.png"
                }, {
                    "name": "Screen Shot 23",
                    "href": "/img/ibusker_screenshot_23.png"
                }, {
                    "name": "Screen Shot 24",
                    "href": "/img/ibusker_screenshot_24.png"
                }, {
                    "name": "Screen Shot 25",
                    "href": "/img/ibusker_screenshot_25.png"
                }, {
                    "name": "Screen Shot 26",
                    "href": "/img/ibusker_screenshot_26.png"
                }, {
                    "name": "Screen Shot 27",
                    "href": "/img/ibusker_screenshot_27.png"
                }, {
                    "name": "Screen Shot 28",
                    "href": "/img/ibusker_screenshot_28.png"
                }, {
                    "name": "Screen Shot 29",
                    "href": "/img/ibusker_screenshot_29.png"
                }, {
                    "name": "Screen Shot 30",
                    "href": "/img/ibusker_screenshot_30.png"
                }, {
                    "name": "Screen Shot 31",
                    "href": "/img/ibusker_screenshot_31.png"
                }, {
                    "name": "Screen Shot 32",
                    "href": "/img/ibusker_screenshot_32.png"
                }, {
                    "name": "Screen Shot 33",
                    "href": "/img/ibusker_screenshot_33.png"
                }, {
                    "name": "Screen Shot 34",
                    "href": "/img/ibusker_screenshot_34.png"
                }, {
                    "name": "Screen Shot 35",
                    "href": "/img/ibusker_screenshot_35.png"
                }, {
                    "name": "Screen Shot 36",
                    "href": "/img/ibusker_screenshot_36.png"
                }, {
                    "name": "Screen Shot 37",
                    "href": "/img/ibusker_screenshot_37.png"
                }, {
                    "name": "Screen Shot 38",
                    "href": "/img/ibusker_screenshot_38.png"
                }
            ]
        },
        mounted: function() {
            this.isMobile = document.clientWidth <= 768;
            var skills = this.skills;
            var animate = function(percent, index) {
                var counter = skills[index].count;
                if (percent > counter) {
                    skills[index].count++;
                    setTimeout(function() {
                        animate(percent, index);
                    }, 1);
                }
            }
            setTimeout(function() {
                for (index in skills) {
                    var percent = skills[index].percentage / 100 * 360;
                    animate(percent, index);
                }
            }, 250)
        }
    });

    var vBanner = new Vue({
        el: "#banner",
        data: {
            menuIsActive: false
        },
        methods: {
            changeStatus: function() {
                this.menuIsActive = !this.menuIsActive;
            }
        }
    });


});

// modal

Vue.component('modal-wrapper', {
    template: `
    <div class="modal-mask ui" v-bind:class="{maskColor:hasColor,'mask-black':!hasColor}" v-show="isShow">
{{isShow}}
        <slot></slot>
    </div>
    `,
    data: function() {
        return {

        };
    },
    props: ['maskColor', 'isShow'],
    computed: {
        hasColor: function() {
            return this.maskColor != null;
        }
    }
})

Vue.component('picture-modal', {
    template: `
    <div class="modal">
        <div class="content ui" v-bind:class="{contentColor:hasColor,'white':!hasColor}">
            <div class="header">
                <a class="close word-white" v-on:click="$emit('close')"></a>
            </div>
            <div class="body padded">
                <div class="img-wrapper" v-for="(picture,index) in pictures" v-if="current===index">
                    <img v-bind:src="fullpath(picture.href)" alt="picture.name">
                </div>            
                <div class="navbar">
                    <a class="right word-white" v-on:click="rightslide"></a>
                    <a class="left word-white" v-on:click="leftslide"></a>
                </div>
            </div>
            <div class="footer padded">
                <ul>
                    <li v-for="(picture,index) in pictures" v-on:click="current = index"><span class="circle" v-bind:class="{'active':current===index}"></span></li>
                </ul>
            </div>
        </div>
    </div>
    `,
    data: function() {
        return {
            current: 0
        }
    },
    props: ['contentColor', 'pictures'],
    methods: {
        rightslide: function() {
            this.current + 1 < this.pictures.length ? this.current += 1 : this.current = 0;
        },
        leftslide: function() {
            this.current - 1 >= 0 ? this.current -= 1 : this.current = this.pictures.length - 1;
        },
        fullpath: function(path) {
            return './not resume' + path;
        }
    },
    computed: {
        hasColor: function() {
            return this.contentColor != null;
        }
    }
})
