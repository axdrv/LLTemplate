export let XY = {
    dh: document.documentElement.scrollHeight,//dh-document height 
    wh: document.documentElement.clientHeight,//wh-window height
    offset: window.pageYOffset,//offset-pageYOffset
    k: 0,//coefficient nullifies difference between dh and max offset
    initXY () {
        this.dh = document.documentElement.scrollHeight;
        this.wh = document.documentElement.clientHeight;
        this.offset = window.pageYOffset;
        this.k = (1/((this.dh/this.wh)-1))+1;
        if (!isFinite(this.k)) k=0;
    }
}