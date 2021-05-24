<?php


class Form
{
    public $err_check = true;
    public $flug = array(
        '名前' => true,
        '電話番号' => true,
        'メールアドレス' => true
    );

    public function data_set($postData)
    {
        $data = array(
            '名前' => $postData['name'],
            '電話番号' => $postData['tel'],
            'メールアドレス' => $postData['email'],
            'お問い合わせ内容' => $postData['subject'],
            'お問い合わせ内容の詳細' => $postData['remarks']
        );
        return $data;
    }





    //受け取った値のバリデーション
    public function formValidation($postData)
    {
        //エラーメッセージ初期化
        $validateErrors = array(
            '名前' => '',
            '電話番号' => '',
            'メールアドレス' => '',
            'お問い合わせ内容' => '',
            'お問い合わせ内容の詳細' => ''
        );

        //必須項目チェック対象指定
        $requiredCheck = array(
            '名前' => $postData['name'],
            '電話番号' => $postData['tel'],
            'メールアドレス' => $postData['email'],
        );
        $nameFormCheck = array(
            '名前' => $postData['name']
        );
        //電話番号フォーマットチェック
        $telFormCheck = array(
            '電話番号' => str_replace(array('-', 'ー', '−', '―', '‐'), '', $postData['tel'])
        );
        //メールアドレスフォーマットチェック
        $emailFormCheck = array(
            'メールアドレス' => $postData['email']
        );

        //必須項目バリデーションチェック
        foreach ($requiredCheck as $key => $value) {
            if (empty($value)) {
                $validateErrors[$key] = $key . 'の項目は必須入力です';
                $this->flug[$key] = false;
                $this->err_check = false;
            }
        }

        if($this->flug['名前']){
            foreach ($nameFormCheck as $key => $value) {
                if (25 < mb_strlen($value)) {
                    $validateErrors['名前'] = $key . 'は25文字以内で入力してください';
                    $this->err_check = false;
                }
            }
        }


        if($this->flug['電話番号']){
            foreach ($telFormCheck as $key => $value) {
                if (!preg_match('/^(0[5-9]0[0-9]{8}|0[1-9][1-9][0-9]{7})$/', $value)) {
                    $validateErrors['電話番号'] = $key . 'を正しく入力してください';
                    $this->err_check = false;
                }
            }
        }


        if($this->flug['メールアドレス']){
            foreach ($emailFormCheck as $key => $value) {
                    if (!preg_match('/^([a-zA-Z0-9])+([a-zA-Z0-9._-])*@([a-zA-Z0-9_-])+([a-zA-Z0-9._-]+)+$/', $value)) {
                        $validateErrors['メールアドレス'] = $key . 'を正しく入力してください';
                        $this->err_check = false;
                    } else if (mb_strlen($value) > 255) {
                        $validateErrors['メールアドレス'] = $key . 'を正しく入力してください';
                        $this->err_check = false;
                    }
            }
        }
        return $validateErrors;
    }


    public function html_buf($item_data, $validateErrors)
    {

        $html_buf = '';
        foreach ($item_data as $key => $value) {
            if ($key === 'お問い合わせ内容の詳細') {
                $html_buf = $html_buf . '<div class="clearfix">
            <div class="receive-item">' . $key . '</div>
                <div class="text-area">
                    <p class="text receive-textarea">' . $value . '</p>
                    <span id="name_error" class="error_m">'.$validateErrors[$key].'</span>
                </div>
            </div>';
            } else {
                $html_buf = $html_buf . '<div class="clearfix">
            <div class="receive-item">' . $key . '</div>
                <div class="text-area">
                    <p class="text">' . $value . '</p>
                    <span id="name_error" class="error_m">'.$validateErrors[$key].'</span>
                </div>
            </div>';
            }

        }

        //バリデーションエラーが起きていない場合送信ボタンを表示
        if ($this->err_check === false) {
            $html_buf = $html_buf . '<div class="transmission">
            <input type="button" class="btn_submit" id="btn_submit" type="submit" value="入力画面へ戻る">
            <span id="result_error" class="error_m result_error">※入力内容に問題があります。確認して再度お試しください。</span>';
        }else if($this->err_check === true){
            $html_buf = $html_buf . '<div class="transmission">
            <input type="submit" class="btn_submit" id="btn_submit" type="submit" value="送信">
            <input type="button" class="btn_submit" id="btn_submit" type="submit" onclick="history.back()" value="入力画面へ戻る">';
        }
        $html_buf = $html_buf .'</div>';
        echo $html_buf;
    }



}


?>