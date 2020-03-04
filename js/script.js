$( document ).ready(function() {
    //share_shadow
    //share_block
    $('.button_share').on('click', function() {
        $('.share_shadow').show(200);
        $('.share_block').show(200);
    });
    $('.share_button_close').on('click', function() {
        closeBox();
    });
    $('.share_shadow').on('click', function() {
        closeBox();
    });
    function closeBox() {
        $('.share_shadow').hide(200);
        $('.share_block').hide(200);
    }
});