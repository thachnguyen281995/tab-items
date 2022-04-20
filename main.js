
// const $ = document.querySelector.bind(document)
// const $$ = document.querySelectorAll.bind(document)

// var tabs = $$('.tab-item')
// var panes =$$('.tab-pane')

// var tabActive =$('.tab-item.active');
// var line =$('.tabs .line')

// line.style.left = tabActive.offsetLeft + "px";
// line.style.width = tabActive.offsetWidth + "px";
// tabs.forEach((tab,index) => {
//     const pane =panes[index]
//     tab.onclick = function(){
//         $('.tab-pane.active').classList.remove('active');
//         $('.tab-item.active').classList.remove('active');
//         line.style.left = this.offsetLeft + "px";
//         line.style.width = this.offsetWidth + "px";
//         tab.classList.add('active')
//         pane.classList.add('active')

//     }
// })
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const tab = $$('.tab-item')
const pane = $$('.tab-pane')
const tabActive = $('.tab-item.active');
const line = $('.line')
line.style.left = tabActive.offsetLeft + 'px'
line.style.width = tabActive.offsetWidth + 'px'
// const a = $('.tab-item.active')
tab.forEach((e,index)=>{
    const c = pane[index]
    e.onclick = function(){
       $('.tab-item.active').classList.remove('active')
       $('.tab-pane.active').classList.remove('active')
       c.classList.add('active')
       e.classList.add('active')   
       line.style.left = e.offsetLeft + 'px'
        line.style.width = e.offsetWidth + 'px'     


    }
})