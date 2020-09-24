$(document).ready(function(){
    $('.repair__slider').slick({
        dots: true,
        waitForAnimate: false,
        responsive:[
            {
                breakpoint:769,
                settings: {
                    dots: false
                }
            }
        ]
    });
    $('.brands__slider').slick({
        slidesToShow: 5,
        waitForAnimate: false,
        responsive:[
            {
                breakpoint:1074,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint:886,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint:858,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint:400,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
    $('.services__slider').slick({
        slidesToShow: 2,
        waitForAnimate: false,
        vertical: true,
        verticalSwiping: true,
        centerMode: true,
        responsive:[
            {
                breakpoint:1171,
                settings: {
                    slidesToShow: 1
                }
            },
            {
                breakpoint:769,
                settings: {
                    slidesToShow: 3
                }
            }
        ]
    });
    $(function() {
        $('ul.faq__tabs_caption').on('click', 'li:not(.active)', function() {
            $(this)
                .addClass('active').siblings().removeClass('active')
                .closest('div.faq__tabs').find('div.faq__tabs_content').removeClass('active').eq($(this).index()).addClass('active');
        });
    });
    $('#accordion .faq__tabs_content--second_li').on('click', f_acc);
});
function f_acc(){
    $('#accordion .faq__tabs_content--second_li_hide').not($(this).next()).slideUp(200);
    $(this).next().slideToggle(400);
}
function initMap() {
    var uluru = {lat: -25.344, lng: 131.036};
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 4, center: uluru});
    var marker = new google.maps.Marker({position: uluru, map: map});
}

const progress = document.querySelector('.progress');
window.addEventListener('scroll', progressBar)
function progressBar(e) {
    let windowScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let per = windowScroll / windowHeight * 100;

    progress.style.width = per + '%';
}