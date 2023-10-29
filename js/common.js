window.addEventListener('DOMContentLoaded', function () {
    window.addEventListener('scroll',function() {
        const banner = this.document.querySelector('#banner')
        const head = this.document.querySelector('#header2')
        // const n = banner.offsetTop
        const n = document.documentElement.scrollTop
        
        // head.style.top = n > banner.offsetTop ? 0 : "-80px"
        console.log(n)
        if( n >= 220){
            head.style.top = 0
        }else{
            head.style.top = '-80px'
        }
    })
})