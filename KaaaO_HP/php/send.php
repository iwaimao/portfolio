
<?php


session_start();
mb_language('japanese');
mb_internal_encoding('UTF-8');

function h($s) {
    $s =  htmlspecialchars($s, ENT_QUOTES, "UTF-8");
    return $s;
}



use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

$mail = new PHPMailer(true);

try{
    //KaaO Gmail認証情報
    $host = 'smtp.gmail.com';
    $username = 'kaao.mailmaster@gmail.com';
    $password = 'pauojcqqycltpzgs';

    //エラー時 gmail認証情報
    $err_username = 'mao.iwai.5020@gmail.com';
    $err_password = 'wubgcqzaqmtlshxr';
    $err_to = 'fffmao.5252@gmail.com';


    //メール記載情報
    $name = h($_SESSION['name']);
    $tel = h($_SESSION['tel']);
    $email = h($_SESSION['email']);
    $title = '【KaaO-Web】';
    $subject = h($_SESSION['subject']);
    $remarks = h($_SESSION['remarks']);
    $from = 'kaao.webmaster@gmail.com';
    $to = 'otsuki1016@gmail.com';
//    $to = 'mao.iwai.5020@gmail.com'; //デバッグ用
    $fromname = 'KaaO';
    //メール本文
    $content =
        'お客様氏名：'.$name.
        "\n".'メールアドレス：'.$email.
        "\n".'電話番号：'.$tel.
        "\n".'お問い合わせ内容：'.$subject.
        "\n".'お問い合わせ内容詳細：'."\n".$remarks;

//    $mail->SMTPDebug = 2; //デバッグ用
    $mail->isSMTP();
    $mail->SMTPAuth = true;
    $mail->Host = $host;
    $mail->Username = $username;
    $mail->Password = $password;
    $mail->SMTPSecure = 'tls';
    $mail->Port = 587;
    $mail->CharSet = "utf-8";
    $mail->Encoding = "base64";
    $mail->setFrom($from, $fromname);
    $mail->addAddress($to);

    $mail->Subject = $title.h($_SESSION['subject']);
    $mail->Body = $content;


    $mail->send();
}catch(Exception $e){
    //メールが送信できない際は'mao.iwai.5020@gmail.com'宛に問い合わせ内容とエラー内容を送信
    $mail->ClearAddresses();
    $err_text = $mail->ErrorInfo;
    $mail->Username = $err_username;
    $mail->Password = $err_password;
    $content = $content."\n".'------------------------'."\n".$err_text."\n".'------------------------';
    $mail->Subject=$title.'送信エラーが発生しています';
    $mail->Body = $content;
    $mail->addAddress($err_to);
    $mail->send();
}


?>

<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>株式会社KaaO｜革バッグ 雑貨 のOEM・ODM生産</title>
    <meta name="description" content="株式会社カオは革バッグ、雑貨製品の企画からOEM・ODM生産を承ります。小ロットでのご対応可能。豊富な生産ラインでご対応いたします。お気軽にご相談ください。" />
    <meta property="og:title" content="株式会社KaaO｜革バッグ 雑貨 のOEM・ODM生産" />
    <meta property="og:image" content="http://green-beppu-3004.sadist.jp/KaaO_project/img/kaaoico.png" />
    <meta property="og:description" content="株式会社カオは革バッグ、雑貨製品の企画からOEM・ODM生産を承ります。小ロットでのご対応可能。豊富な生産ラインでご対応いたします。お気軽にご相談ください。" />
    <link rel="stylesheet" href="./css/style.css">
    <link href="https://fonts.googleapis.com/css2?family=Philosopher&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Sawarabi+Mincho&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Philosopher&display=swap" rel="stylesheet">
    <link href="./css/slick.css" rel="stylesheet" type="text/css">
    <link href="./css/slick-theme.css" rel="stylesheet" type="text/css">
    <link href="./css/lightbox.css" rel="stylesheet" />
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.4/css/all.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

</head>
<body>
<div class="header">
    <div class="wrapper">
        <div class="head">
            <div class="logo">
                <a href="index.html"><img src="./img/logo_bk.png" alt="KaaO"></a>
            </div>
            <nav>
                <ul class="main-nav">
                    <li><a href="index.html">Home</a></li>
                    <li><a href="index.html#about">About</a></li>
                    <li><a href="index.html#ourworks">Our works</a></li>
                    <li><a href="index.html#orderflow">Order flow</a></li>
                    <li><a href="company.html">Company</a></li>
                    <li><a href="contact.html">Contact us</a></li>
                    <li><a href="https://www.instagram.com/kaao0107/"><img class="icon" src="./img/ico_instagram.png" alt="Instagram"></a></li>
                </ul>
            </nav>
        </div>
        <div class="el_humburger">
            <span class="top"></span>
            <span class="middle"></span>
            <span class="bottom"></span>
        </div>
        <div id="uq_spNavi" class="uq_spNavi">
            <div class="uq_spNavi_screen">
                <nav class="navigation">
                    <div class="navigation_item"><a href="index.html">Home</a></div>
                    <div class="navigation_item"><a href="index.html#about">About</a></div>
                    <div class="navigation_item"><a href="index.html#ourworks">Our works</a></div>
                    <div class="navigation_item"><a href="index.html#orderflow">Order flow</a></div>
                    <div class="navigation_item"><a href="company.html">Company</a></div>
                    <div class="navigation_item"><a href="contact.html">Contact us</a></div>
                    <div class="navigation_item"><a href="https://www.instagram.com/kaao0107/"><img class="icon" src="./img/ico_instagram.png" alt="Instagram"></a></div>
                </nav>
            </div>
        </div>
    </div>
</div>
<div class="contact-wrapper send-wrapper">
    <h1>送信が完了しました。</h1>
    <p>お問い合わせありがとうございます。</p>
    <p>追ってご連絡差し上げますのでお待ちください。</p>
</div>
<div class="form">
    <a href="index.html" class="button">
        Home
    </a>
</div>
<footer>
    <div class="footer-menu wrapper">
        <div class="footer-logo">
            <img src="./img/logo_wh.png" alt="KaaO">
            <p>KaaO Co., Ltd</p>
        </div>
        <nav>
            <ul class="footer-nav">
                <li><a href="index.html#about">About</a></li>
                <li><a href="index.html#ourworks">Our works</a></li>
                <li><a href="index.html#orderflow">Order flow</a></li>
            </ul>
            <ul class="footer-nav">
                <li><a href="company.html">Company</a></li>
                <li><a href="contact.html">Contact us</a></li>
            </ul>
        </nav>
        <div class="icon-menu">
            <nav>
                <ul class="footer-icon">
                    <li><a href="https://www.instagram.com/kaao0107/" target="_blank" rel="noopener noreferrer"><i class="fab fa-instagram fa-2x"></i></a></li>
                    <li><a href="https://quuuuu.tokyo/" target="_blank" rel="noopener noreferrer"><img src="./img/quuuuu_ico.jpg" alt="quuuuu"></a></li>
                </ul>
            </nav>
        </div>
        <div class="license">
            <h2>© 2017 KaaO Co., Ltd.</h2>
        </div>
    </div>
</footer>
<script src="js/validate.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
<script>
    //ハンバーガーメニュー
    $(function(){
        $('.el_humburger').on('click',function(){
            spNavInout();
        });
        $('.navigation_item a').on('click',function(){
            spNavInout();
        });
    });

    //spナビ開く処理

    function spNavIn(){
        $('body').removeClass('js_humburgerClose');
        $('body').addClass('js_humburgerOpen');
        $(".uq_spNavi").addClass("js_appear");
        $(".uq_spNavi").css({opacity:0});
        $(".uq_spNavi").animate({
            opacity: 1
        },200);
        scrollBlocker(true);
    }

    //spナビ閉じる処理
    function spNavOut(){
        $(".uq_spNavi").animate({
            opacity: 0
        },200)
        $('body').removeClass('js_humburgerOpen');
        $('body').addClass('js_humburgerClose');
        setTimeout(function(){
            $(".uq_spNavi").removeClass("js_appear");
        },200);
        scrollBlocker(false);
    }

    //spナビ開閉処理
    function spNavInout(){
        if($('body.spNavFreez').length){
            return false;
        }
        if($('body').hasClass('js_humburgerOpen')){
            spNavOut();
        } else {
            spNavIn();
        }
    }

    //ナビ向けスクロール無効化処理

    var scrollBlockerFlag;

    function scrollBlocker(flag){
        if(flag){
            scrollpos = $(window).scrollTop();
            $('body').addClass('js_fixed').css({'top': -scrollpos});
            scrollBlockerFlag = true;
        } else {
            $('body').removeClass('js_fixed').css({'top': 0});
            window.scrollTo( 0 , scrollpos );
            scrollBlockerFlag = false;
        }
    }

</script>
</body>
</html>
