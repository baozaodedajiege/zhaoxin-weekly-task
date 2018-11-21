$(function(){
    $('a[href*=#],area[href*=#]').click(function() {  
        console.log(this.pathname)  
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {  
            var $target = $(this.hash);  
            $target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']');  
            if ($target.length) {  
                var targetOffset = $target.offset().top-30;  
                $('html,body').animate({  
                            scrollTop: targetOffset  
                        },  
                        800);  
                return false;  
            }  
        }  
    });
        var backButton=$('.back_to_top');
    function backToTop() {
        $('html,body').animate({
            scrollTop: 0
        }, 800);
    }
    backButton.on('click', backToTop);
 
    $(window).on('scroll', function () {/*当滚动条的垂直位置大于浏览器所能看到的页面的那部分的高度时，回到顶部按钮就显示 */
        if ($(window).scrollTop() > $(window).height())
            backButton.fadeIn();
        else
            backButton.fadeOut();
    });
    $(window).trigger('scroll');/*触发滚动事件，避免刷新的时候显示回到顶部按钮*/
})