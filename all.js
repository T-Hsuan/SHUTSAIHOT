// searchbar start
const searchIcon = document.getElementById('search-icon');
const searchBar = document.getElementById('search-bar');
searchIcon.addEventListener('click', function() {
    if (searchBar.style.display === 'none') {
    searchBar.style.display = 'block';
    } 
    else {
        searchBar.style.display = 'none';
    }
})
// searchbar end
//phone hamburger start
const Menu = document.getElementById('hamburger');
Menu.addEventListener('click',
    function (){
        const menuList = document.getElementById('menu-list');
        const menuListBG = document.getElementById('menu-list_bg');        
        const menuTxt= document.getElementById('menu-txt'); 
        const hamMenu = document.getElementById('ham-menu');
        const hamLineT = document.getElementById('ham-line_t');
        const hamLineC = document.getElementById('ham-line_c');
        if(menuTxt.innerText === 'menu'){
        hamMenu.src = 'pictures/hamburger-close.png'        
        menuTxt.innerText = 'close' ;
        hamLineT.style.top = '16px';
        hamLineC.style.top = '16px';
        hamLineT.style.transform = 'rotate(45deg)';
        hamLineC.style.transform = 'rotate(-45deg)';
        hamLineT.style.transition = '.6s';
        hamLineC.style.transition = '.6s';
        menuListBG.classList.remove("hide");
        menuList.classList.remove("hide");
        }
        else{
            hamMenu.src = 'pictures/hamburger-menu.png' ;
            menuTxt.innerText = 'menu' ;
            hamLineT.style.top = '15px';
            hamLineC.style.top = '23px';
            hamLineT.style.transform = 'rotate(0deg)';
            hamLineC.style.transform = 'rotate(0deg)';
            menuListBG.classList.add("hide");
            menuList.classList.add("hide");
        }
    }
);
//phone hamburger end
//pagetop script start
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
// pagetop script end
// FAQ start
function memberFAQ(){
    const FAQZone = document.getElementsByClassName('FAQ-zone')[0];
    FAQZone.innerHTML = ''; 
    const FAQ1 = createFAQ('忘記密碼怎麼辦?', '請至會員登入畫面，點選忘記密碼，系統會寄送重設網址制您的手機及信箱。');
    const FAQ2 = createFAQ('如何修改個人資料?', '請先登入會員，點選會員資料即可進行修改。');
    FAQZone.appendChild(FAQ1);
    FAQZone.appendChild(FAQ2);
    $('.FAQ-Q').click(function(){        
        $(this).toggleClass('open');
        $(this).next('.FAQ-A').slideToggle();
    });
}
function shoppingFAQ(){
    const FAQZone = document.getElementsByClassName('FAQ-zone')[0];
    FAQZone.innerHTML = '';  
    const FAQ1 = createFAQ('商品何時寄出呢?', '一般商品於3天內寄出，訂閱制蔬菜盒有固定寄送時間，詳情請參閱蔬菜盒相關問題');
    const FAQ2 = createFAQ('有哪些付款方式呢?', '1.「線上刷卡:刷卡系統之各家銀行的VISA、Master Card、JCB、銀聯卡之信用卡皆可使用。<br>2.「ATM匯款:完成訂購動作時，您將取得當筆訂單的(專屬虛擬帳號)一組，請於期限內付款，匯款完成系統將自動對帳，款項確認後將安排出貨。<br>3.「超商取貨」:寄出後約3~5天可送達門市。<br><span style="color: red;">請注意:我們不提供貨到付款服務。</span>');
    const FAQ3 = createFAQ('有什麼寄送方式呢?', '一般商品可選擇超商取貨或者宅配，蔬菜箱採用生鮮宅配方式。');
    const FAQ4 = createFAQ('運費怎麼計算呢?', '超商取貨運費99元，滿499免運。<br>宅配運費150元，滿999免運。');
    FAQZone.appendChild(FAQ1);
    FAQZone.appendChild(FAQ2);
    FAQZone.appendChild(FAQ3);
    FAQZone.appendChild(FAQ4);
    $('.FAQ-Q').click(function(){
        $(this).toggleClass('open');
        $(this).next('.FAQ-A').slideToggle();
    });
}
function vegboxFAQ(){
    const FAQZone = document.getElementsByClassName('FAQ-zone')[0];
    FAQZone.innerHTML = '';
    const FAQ1 = createFAQ('蔬菜盒大概都會有什麼內容物呢?', '您可以<a href="index.html#recipe">點擊此處</a>查詢每期菜單，菜單於每周一更新。');       
    const FAQ2 = createFAQ('蔬菜盒內容是可以自己挑選的嗎?', '非常抱歉，我們的內容都是經過營養師精心搭配好的，保證您每周都收到不一樣的食材與蔬果汁。');
    const FAQ3 = createFAQ('蔬菜盒內容有我不喜歡的怎麼辦?', '我們的內容都是經過營養師精心搭配好的，若是您真的有不喜歡的項目，可提前於蔬菜箱寄送前3天(不包含寄送當天)連絡客服人員更換品項。');
    const FAQ4 = createFAQ('蔬菜盒分量是多少呢?', '我們有個人號、家庭號，家庭號依據人數再分為3~4人以及4~6人，若人數眾多額外有豪華版蔬菜盒，可供應6~10人。');
    const FAQ5 = createFAQ('我需要哪時候訂購蔬菜盒下禮拜才可以收到?', '您需要在每周三前預訂，也可使用長期訂閱制，這樣不僅價格更實惠還不怕忘記訂購唷。');
    const FAQ6 = createFAQ('現在訂購蔬菜盒哪時候可以收到?', '我們的蔬菜盒皆為每周五或六寄出，最晚周一收到。');
    FAQZone.appendChild(FAQ1);
    FAQZone.appendChild(FAQ2);
    FAQZone.appendChild(FAQ3);
    FAQZone.appendChild(FAQ4);
    FAQZone.appendChild(FAQ5);
    FAQZone.appendChild(FAQ6);
    $('.FAQ-Q').click(function(){
        $(this).toggleClass('open');
        $(this).next('.FAQ-A').slideToggle();
    });
}
function otherFAQ(){
    const FAQZone = document.getElementsByClassName('FAQ-zone')[0];
    FAQZone.innerHTML = '';
    const FAQ1 = createFAQ('我可以取消訂單嗎?', '當您訂購完成後是無法取消訂單的，由於我們許多商品保存期限都是較短的，為保持產品新鮮度，不提供取消，請謹慎考慮後再下單。');
    const FAQ2 = createFAQ('我可以修改訂單嗎?', '若寄送進度已至「開始準備商品中」，則無法修改');
    FAQZone.appendChild(FAQ1);
    FAQZone.appendChild(FAQ2);
    $('.FAQ-Q').click(function(){
        $(this).toggleClass('open');
        $(this).next('.FAQ-A').slideToggle();
    });
}
function createFAQ(questionText, answerText){
    const FAQ = document.createElement('div');
    FAQ.classList.add('FAQ');
    const Q = document.createElement('div');
    Q.classList.add('FAQ-Q');
    Q.innerHTML = questionText;
    const A = document.createElement('div');
    A.classList.add('FAQ-A');
    A.innerHTML = answerText;

    FAQ.appendChild(Q);
    FAQ.appendChild(A);
    return FAQ;
}
$(document).ready(function() {
    $('button').click(function() {
        $('button').removeClass('color');
        $(this).addClass('color');      
    });
  });
$(document).ready(function() {
    $('.FAQ-Q').click(function(){
    $(this).toggleClass('open');
    $(this).next('.FAQ-A').slideToggle();
    });
});
//FAQ end
// carousal start
$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        loop:true,
        margin:0,
        nav:false,
        items:1,
        center:true,
        autoplay:true,
        dots:false,
        responsive:{
            0:{items:1},
            768:{items:1},
            1200:{items:1}
        }
    });
});
// carousal end