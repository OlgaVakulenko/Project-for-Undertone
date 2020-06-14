$(document).ready(function(){
    const bunner = $('.bunner');
    setTimeout(()=>{
        $(bunner).removeClass('hide')
    },2000)

    $('.close').click(function(){
        $(bunner).hide();
    })
    $('.videoBtn').click(function(){
        $('.videoBlock').toggle();
        $('.videoBtn-txt').toggle();
        const posterFon = $('.poster-fon').css('opacity');
        if(posterFon === '0.7'){
            $('.poster-fon').css('opacity','0');
            $('.line1').css('transform','rotate(90deg)');
            $('.line2').css('transform','rotate(0deg)');
        } else {
            $('.poster-fon').css('opacity','0.7');
            $('.line1').css('transform','rotate(130deg)');
            $('.line2').css('transform','rotate(45deg)');
        }
        $('.video').get(0).pause();
        $('.video').get(0).currentTime = 0;
        $('.playBtn').show()
    })
    $('.videoBlock').click(()=>{
        $('.video').get(0).play();
        $('.playBtn').hide()
    })
    

    if($(bunner).hasClass('hide')){
        $('.cup-in-hands').removeClass('hide').addClass('slideUp');
    }
    if($('.cup-in-hands').hasClass('slideUp')){
        $('.confeti-bottom').removeClass('hide').addClass('half-slideUp');
    }
    setTimeout(()=>{
        $('.confeti-top').removeClass('hide').addClass('opacityOut')
    },1000)

    setTimeout(()=>{
        $('.team1').removeClass('hide').addClass('slideRight')
    },5000)
    setTimeout(()=>{
        $('.team2').removeClass('hide').addClass('slideLeft')
    },5000)
    setTimeout(()=>{
        $('.one').removeClass('hide').addClass('opacityOut')
    },6000)
    setTimeout(()=>{
        $('.game').removeClass('hide').addClass('opacityOut')
    },7000)
    setTimeout(()=>{
        $('.glory').removeClass('hide').addClass('opacityOut')
    },8000)
    setTimeout(()=>{
        $('.tl1').removeClass('hide').addClass('emergeRight');
        $('.tl2').removeClass('hide').addClass('emergeLeft')
    },10000)
    setTimeout(()=>{
        $('.poster').removeClass('hide')
    },11000)
    setTimeout(()=>{
        $('.text').addClass('opacityIn');
        $('.poster-fon').addClass('lightOut');
        $('.team1').removeClass('slideRight').addClass('slideOutRight');
        $('.team2').removeClass('slideLeft').addClass('slideOutLeft');
        $('.tl1').addClass('slideOutRight');
        $('.tl2').addClass('slideOutLeft');
    },15000)
    setTimeout(()=>{
        $('.cursor').removeClass('hide');
        $('.text').css('display','none');
    },17000)
    setTimeout(()=>{
        $('.videoBtn-txt').addClass('hide');
        $('.videoBlock').addClass('openPopUp').removeClass('hide');
        $('.video').css('display','block');
        $('.cursor').addClass('hide')
        $('.line1').css('transform','rotate(130deg)');
        $('.line2').css('transform','rotate(45deg)');
        $('.poster-fon').removeClass('lightOut').css('opacity','0.7');
    },21500)
    
    
    
})