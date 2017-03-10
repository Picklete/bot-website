(function ($) {
  $('body').on('submit', 'form', function(e) {
    var $this = $(this);
    $.ajax({
        type: "GET", // GET & url for json slightly different
        url: $this.attr("action").replace(/\post?.*/, "post-json?c=?"),
        data: $this.serialize(),
        dataType    : 'json',
        contentType: "application/json; charset=utf-8",
        error       : function(err) { 
          return alert("填寫資料有誤，麻煩請進行確認"); 
        },
        success     : function(data) {
          if (data.msg && data.msg.indexOf('subscribed') > -1)
            return alert("資料已經填寫過，麻煩請到電子信箱進行確認");

          if (data.result === "error")
            return alert("填寫資料有誤，麻煩請進行確認");
              
          return alert("申請成功，請到電子郵件收件按下 Yes, subscribe me to this list. 完成申請流程");
        }
    });
    return false;
  });
  
}(jQuery));