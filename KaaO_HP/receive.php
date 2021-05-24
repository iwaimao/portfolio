<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>KaaO｜Contact us</title>
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
                <a href="home.html"><img src="./img/logo_bk.png" alt="KaaO"></a>
            </div>
            <nav>
                <ul class="main-nav">
                    <li><a href="home.html">Home</a></li>
                    <li><a href="home.html#about">About</a></li>
                    <li><a href="home.html#ourworks">Our works</a></li>
                    <li><a href="home.html#orderflow">Order flow</a></li>
                    <li><a href="company.html">Company</a></li>
                    <li><a href="#">Contact us</a></li>
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
                    <div class="navigation_item"><a href="home.html">Home</a></div>
                    <div class="navigation_item"><a href="home.html#about">About</a></div>
                    <div class="navigation_item"><a href="home.html#ourworks">Our works</a></div>
                    <div class="navigation_item"><a href="home.html#orderflow">Order flow</a></div>
                    <div class="navigation_item"><a href="company.html">Company</a></div>
                    <div class="navigation_item"><a href="#">Contact us</a></div>
                    <div class="navigation_item"><a href="https://www.instagram.com/kaao0107/"><img class="icon" src="./img/ico_instagram.png" alt="Instagram"></a></div>
                </nav>
            </div>
        </div>
    </div>
</div>
<div class="contact-wrapper wrapper">
    <div class="content-title">
        <h1>Contact us</h1>
    </div>
    <div id="contact_form">
        <form action="http://localhost/validation/receive.php" method="post" name="demo_form">
            <div class="input_item">

                <div class="clearfix">
                    <div class="name-title">名前</div>
                    <div class="text-area">
                        <input type="text" id="name" name="name" placeholder="お名前">
                        <span id="name_error" class="error_m"></span>
                    </div>
                </div>

                <div class="clearfix">
                    <div class="name-title">電話番号</div>
                    <div class="text-area">
                        <input type="text" id="tel" name="tel" placeholder="03-1234-1234">
                        <span id="tel_error" class="error_m"></span>
                    </div>
                </div>

                <div class="clearfix">
                    <div class="name-title">メールアドレス</div>
                    <div class="text-area">
                        <input type="mailaddress" id="mailaddress" name="email" placeholder="sample@sample.com">
                        <span id="mailaddress_error" class="error_m"></span>
                    </div>
                </div>

                <div class="clearfix">
                    <div class="name-title any">ドロップダウンメニュー</div>
                    <div class="text-area">
                        <select class="box" name="subject" id="subject">
                            <option value="">---</option>
                            <option value=ご注文手続きについて>お見積もりのご相談</option>
                            <option value=キャンセル、返品について>量産のご相談</option>
                            <option value=商品について>サンプルのご相談</option>
                            <option value=その他>その他</option>
                        </select>
                        <span id="subject_error" class="error_m"></span>
                    </div>
                </div>

                <div class="clearfix">
                    <div class="name-title any">お問い合わせ内容<p class="note_text">※500文字以内で入力してださい</p></div>
                    <div class="text-area">
                        <textarea name="remarks" id="remarks" rows="4" cols="50" maxlength="500" style="overflow: hidden; word-wrap: break-word; resize: horizontal; height: 170px;"></textarea>
                        <span id="remarks_error" class="error_m"></span>
                    </div>
                </div>

            </div>
            <div class="transmission">
                <input class="btn_submit" id="btn_submit" type="submit" value="確認" onclick="return check();">
                <span id="result_error" class="error_m result_error"></span>
            </div>
            <div id="send_status"></div>
        </form>
    </div>

</div>
<footer>
    <div class="footer-menu wrapper">
        <div class="footer-logo">
            <img src="./img/logo_wh.png" alt="KaaO">
            <p>KaaO Co., Ltd</p>
        </div>
        <nav>
            <ul class="footer-nav">
                <li><a href="home.html#about">About</a></li>
                <li><a href="home.html#ourworks">Our works</a></li>
                <li><a href="home.html#orderflow">Order flow</a></li>
            </ul>
            <ul class="footer-nav">
                <li><a href="company.html">Company</a></li>
                <li><a href="http://green-beppu-3004.sadist.jp/KaaO_project/contact.html">Contact us</a></li>
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