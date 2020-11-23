// Header Mobile Nav
try {
    function headerNavFunc(){
        const menuMain = document.querySelector('.header__nav__main');
        menuMain.classList.toggle('active');
    }
} catch (err) {
    console.log(err);
}
// product Func
try {
    var listItem = document.querySelectorAll('.nav__links');
    var tabContent = document.querySelectorAll('.tab-pane');
    function changeMenu(link){
        if(link == 'first'){
            document.querySelectorAll('.nav__links').forEach(item => { item.classList.remove('active') });
            document.querySelectorAll('.tab-pane').forEach(item => { item.classList.remove('active') });
            document.querySelectorAll('.tab-pane').forEach(item => { item.classList.remove('show') });
            var currentLink = document.querySelectorAll('.first');
            currentLink.forEach(item => { item.classList.add('active'); });
            var tab = document.querySelector('.first');
            currentLink.forEach(item => { item.classList.add('show'); });
        }
        if(link == 'second'){
            document.querySelectorAll('.nav__links').forEach(item => { item.classList.remove('active') });
            document.querySelectorAll('.tab-pane').forEach(item => { item.classList.remove('active') });
            document.querySelectorAll('.tab-pane').forEach(item => { item.classList.remove('show') });
            var currentLink = document.querySelectorAll('.second');
            currentLink.forEach(item => { item.classList.add('active'); });
            var tab = document.querySelector('.second');
            currentLink.forEach(item => { item.classList.add('show'); });
        }
        if(link == 'third'){
            document.querySelectorAll('.nav__links').forEach(item => { item.classList.remove('active') });
            document.querySelectorAll('.tab-pane').forEach(item => { item.classList.remove('active') });
            document.querySelectorAll('.tab-pane').forEach(item => { item.classList.remove('show') });
            var currentLink = document.querySelectorAll('.third');
            currentLink.forEach(item => { item.classList.add('active'); });
            var tab = document.querySelector('.third');
            currentLink.forEach(item => { item.classList.add('show'); });
        }
        if(link == 'fourth'){
            document.querySelectorAll('.nav__links').forEach(item => { item.classList.remove('active') });
            document.querySelectorAll('.tab-pane').forEach(item => { item.classList.remove('active') });
            document.querySelectorAll('.tab-pane').forEach(item => { item.classList.remove('show') });
            var currentLink = document.querySelectorAll('.fourth');
            currentLink.forEach(item => { item.classList.add('active'); });
            var tab = document.querySelector('.fourth');
            currentLink.forEach(item => { item.classList.add('show'); });
        }
    }
    function deacMenu() {
        listItem.forEach(item => { item.classList.remove('active') });
    }
    function tabContentDiv() {
        tabContent.forEach(item => { item.classList.remove('active') });
    }

} catch (err) {
    console.log(err);
}

// product Desc
try {
    function productDesFunc(path){
        const bodyScroll = document.querySelector('body');
        const mainPopupBox = document.querySelector('.popupdetail');
        const img = document.querySelector('.popup__img__main img');
        img.src = path;
        bodyScroll.classList.toggle('active');
        mainPopupBox.classList.toggle('active');
    }
} catch (err) {
    console.log(err);
}
