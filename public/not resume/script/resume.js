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
            circlePercentageColor: "#31b0d5",
            menu: ["ABOUT", "INTRODUCTION", "SKILLS", "EXPERIENCE", "EDUCATION"],
            aboutme: {
                name: "黃俊諺",
                facebook: "facebook/uid",
                linkedin: "linkedin/uid",
                mail: "eric60513@gmail.com",
                phone: "0975-220-827",
                birth: "1994"
            },
            introduction: ["喜歡學習技術和充實自己，在求學期間除了本科之外的課程，也常常去選修資工系或企管系的課程。大三以 <具人文內涵的城市旅遊APP>參加許多比賽，大四暫時性接下維護Ios App的工作，也因此進入撰寫行動App的世界。", "現今是前端工程師，但目標成為全端工程師，在閒暇的時間也會學習新的語言充實自己。自行研究Node.js和Vue.js等後端技術和前端框架，以備未來有機會時可以用上。除了網頁，也因為工作更深入原生Android開發和Ios Swift3，皆有一些學習經驗。工作絕大部分皆為獨立開發，但希望能有合得來的夥伴能互相切磋進步。"],
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
                percentage: 75,
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
                percentage: 75,
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
                tech: ["Html / Css", "JavaScript / Ajax / Vue.js / Jquery", "Bootstrap / W3.css", "Swift / Xcode", "Java / Xml /Android Studio"]
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
                tech: ["Html / Css", "JavaScript / Jquery", "PhoneGap"]
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
            }
        },
        mounted: function() {
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
