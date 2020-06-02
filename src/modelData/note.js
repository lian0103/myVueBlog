export default {
    "cardtopic":"learnning notes",
    "rowdata":[
        {
            "id":1,
            "title":"使用githubPage&vue cli設新專案",
            "cratetime":"2019-11-30",
            "enTitle":"githubPageAndVue",
            "year":"2019",
            "mIndex":"10",
            "txt":"主要步驟:<br>1.在本機建立開發環境，透過vue create '專案'<br>2. 使用vue開發頁面組件 <br> 3.local透過npm run build打包成可部署的檔案 <br>4.推送至github<br> ",
            "img":"https://tva1.sinaimg.cn/large/006tNbRwgy1g9phwm430dj30ps0f6779.jpg",
            "relateLink":"https://pages.github.com/",
            "tags":["vue"],
            "url":"/notes/2019/11/30/githubPageAndVue"
        },
        {
            "id":2,
            "title":"將vue cli創建的專案打包與上傳",
            "cratetime":"2019-11-30",
            "enTitle":"vueCliBuild",
            "year":"2019",
            "mIndex":"10",
            "txt":"1.因為在各個組件有使用import來使用資源，所以需要透過打包動作將資源整合<br> 2.設置一個vue.config.js 將publicPath: './'，則打包後的資源會以相對路徑存取<br>3.打包後產生dist資料，即可將佈署好的檔案上傳",
            "img":"https://tva1.sinaimg.cn/large/006tNbRwgy1g9pi18m1n9j313g0tq0v8.jpg",
            "relateLink":"https://webpack.js.org/",
            "tags":["vue","setting"],
            "url":"/notes/2019/11/30/vueCliBuild"
        },
        {
            "id":3,
            "title":"vue組建引用圖片資源tips",
            "cratetime":"2019-12-01",
            "enTitle":"vueUseImgSource",
            "year":"2019",
            "mIndex":"11",
            "txt":"由於尚未有後端提供圖檔資源，可先取用網路上免費的\"圖床\"分享服務<br>1.至該網頁先上傳圖片<br>2.使用mac appstore下載 將圖檔拖拉入icon即可獲得連結<br>",
            "img":"https://tva1.sinaimg.cn/large/006tNbRwgy1g9pi347aqwj315q0u0qne.jpg",
            "relateLink":"https://toolinbox.net/iPic/",
            "tags":["vue","plugins"],
            "url":"/notes/2019/12/01/vueUseImgSource"
        },
        {
            "id":4,
            "title":"GSAP3套件引用 畫面動態效果",
            "cratetime":"2019-12-04",
            "enTitle":"useGSAP3",
            "year":"2019",
            "mIndex":"11",
            "txt":"1.npm install gsap<br>2.在vue引用後 gsap的js寫在畫面組合的根組件的mounted(){}中，讓動畫效果渲染的時間點控制在組件渲染到畫面之後才執行<br>3.補充:DOM的選取寫法與jQuery相似，擷取範例gsap.timeline().from('.carditem', { duration: 2, opacity: 0,scale:0.3 })",
            "img":"https://tva1.sinaimg.cn/large/006tNbRwgy1g9pi5k58s4j31pc0u0q70.jpg",
            "relateLink":"https://greensock.com/",
            "tags":["plugins"],
            "url":"/notes/2019/12/04/useGSAP3"
        },
        {
            "id":5,
            "title":"blog中vue動態路由設定",
            "cratetime":"2020-02-02",
            "enTitle":"vueRouterSetting",
            "year":"2020",
            "mIndex":"1",
            "txt":"在瀏覽器網址中的hash值的改變，讓vue工具可以製作渲染新的頁面組件但不reload的效果。首先注入需要的Vue與Router物件的資源，以及改變url hash狀態要對應的各個組件。<img src='https://tva1.sinaimg.cn/large/006tNbRwgy1gbizwatxajj30u00ae40r.jpg'><br>1.在routes陣列中，每一個物件可設定hash靜態與動態的對應名稱，並呼叫指定的component<br>2.動態的設計方式，我這邊參考其他部落客換頁時的hash變化，設定的變項是「:year、:month、:day、:name」，透過此方式讓載入組件後能用這些值當key值去抓對應的文章資料<br>3.最後再將這些設定值給vueRouter物件去產生一個router物件，這個物件即是根組件將拿來使用設定路由的物件<img src='https://tva1.sinaimg.cn/large/006tNbRwgy1gbizome2lzj313e0kyadz.jpg'><br>4.注入到main.js要實作一個vue實例即可引入。若未有設定，改變url的hash值時則是讓瀏覽器去抓相對應id名稱html元件，是不同的應用情況。<img src='https://tva1.sinaimg.cn/large/006tNbRwgy1gbj0rr8d28j30wg0fuq4n.jpg'>",
            "img":"https://tva1.sinaimg.cn/large/006tNbRwgy1gbj0l9hyzyj30xc0dwmxo.jpg",
            "relateLink":"https://greensock.com/",
            "tags":["plugins"],
            "url":"/notes/2020/02/02/vueRouterSetting"
        }
    ],
    "tags":[
        {
            "id":1,
            "name":"vue",
            "Icon":"<i class='fab fa-vuejs'></i>"
        },
        {
            "id":2,
            "name":"plugins",
            "Icon":"<i class='fas fa-cube'></i>"
        },
        {
            "id":3,
            "name":"js",
            "Icon":"<i class='fab fa-js'></i>"
        },
        {
            "id":4,
            "name":"setting",
            "Icon":"<i class='fas fa-cog'></i>"
        }
    ]
}