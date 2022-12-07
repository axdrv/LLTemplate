import {isTouchDevice} from '/assets/modules/isTouch.js';
export let Elements = {
    //this section define elements to operate with
    globalBgnd: document.querySelector('global-background-item'),
    headerSection: document.querySelector('header-section'), 
    main: document.querySelector('main'),

    // this section defines variable switchers need to be available for whole document
    isTouch: isTouchDevice(), //return 'true' when client uses touch device;
    lastScrollTop: 0, // watch scroll direction
    upDown: 'down',
    
}