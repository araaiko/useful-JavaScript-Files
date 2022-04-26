jQuery(function ($) { 
    
    $("input").blur(function () {
        changeZen($(this));
    });
    
    const changeZen = function(ele){
        const val = ele.val();
        const han = val.replace( /[Ａ-Ｚａ-ｚ０-９－！”＃＄％＆’（）＝＜＞，．？＿［］｛｝＠＾～￥]/g, function(s){return String.fromCharCode(s.charCodeAt(0) - 65248)});
        $(ele).val(han);
    }
});