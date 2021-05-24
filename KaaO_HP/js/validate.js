function check(){

    var result = true;

    var name = document.getElementById("name").value;
    var tel = document.getElementById("tel").value.replace(/[━.*‐.*―.*－.*\–.*ー.*\-]/gi,'');
    var mailaddress = document.getElementById("mailaddress").value;
    var subject = document.getElementById("subject").value;
    var remarks = document.getElementById("remarks").value;

    console.log(name);
    console.log(mailaddress);
    console.log(tel);
    console.log(subject);
    console.log(remarks);

    var name_err_txt = document.getElementById("name_error");
    var tel_err_txt = document.getElementById("tel_error");
    var mailaddress_err_txt = document.getElementById("mailaddress_error");
    var subject_err_txt = document.getElementById("subject_error");
    var remarks_err_txt = document.getElementById("remarks_error");
    var result_err_txt = document.getElementById("result_error");
    // console.log(name_err_txt);
    // console.log(mailaddress_err_txt);
    // console.log(tel_err_txt);
    // console.log(subject_err_txt);
    // console.log(remarks_err_txt);

    name_err_txt.innerText = "";
    mailaddress_err_txt.innerText= "";
    tel_err_txt.innerText = "";
    subject_err_txt.innerText = "";
    remarks_err_txt.innerText = "";
    result_err_txt.innerText = "";

    if(!name){
        name_err_txt.innerText = "名前を入力してください";
        result = false;
    }else if(name.length>25){
        name_err_txt.innerText = "名前は25文字以内で入力してください";
        result = false;
    }

    if(!tel){
        tel_err_txt.innerText = "電話番号を入力してください";
        result = false;
    }
    else if((!tel.match(/^(0[5-9]0[0-9]{8}|0[1-9][1-9][0-9]{7})$/))||(tel.length < 10)){        tel_err_txt.innerText = "正しい電話番号を入力してください";
        tel_err_txt.innerText = "正しい電話番号を入力してください";
        result = false;
    }

    if(!mailaddress){
        mailaddress_err_txt.innerText = "メールアドレスを入力してください";
        result = false;
    }else if(!mailaddress.match( /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}\.[A-Za-z0-9]{1,}$/)){
        mailaddress_err_txt.innerText = "正しいメールアドレスを入力してください";
        result = false;
    }else if(mailaddress.length > 255){
        mailaddress_err_txt.innerText = "正しいメールアドレスを入力してください";
        result = false;
    }
    console.log(result);
    if(!result){
        result_err_txt.innerText = "※入力内容に問題があります。確認して再度お試しください。"
    }
    return result;
}