
$(function(){
    $('#textinput').on('input', function(){
        var input_text = $(this).val();
        
        let img1 = "向日葵　ひまわり　himawari";
        let img2 = "光　ひかり　hikari";
        let img3 = "飛行機　ひこうき　hikouki";
        let img4 = "海　うみ　sea";
        
        let result1 = img1.includes(input_text);
        if(result1){
          $("#img1").removeClass("hidden");
        }else{
          $("#img1").addClass("hidden");
        }
        
        let result2 = img2.includes(input_text);
        if(result2){
          $("#img2").removeClass("hidden");
        }else{
          $("#img2").addClass("hidden");
        }
        
        let result3 = img3.includes(input_text);
        if(result3){
          $("#img3").removeClass("hidden");
        }else{
          $("#img3").addClass("hidden");
        }
        
        let result4 = img4.includes(input_text);
        if(result4){
          $("#img4").removeClass("hidden");
        }else{
          $("#img4").addClass("hidden");
        }
    })
});
