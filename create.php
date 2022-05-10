<!DOCTYPE html><html><head><title>Тест</title><meta charset=\"utf-8\"></head><body>
<?php
require_once("class.php");
require_once("option.php");

$test = new test;
if (isset($_POST["cathegory"]) && isset($_POST["name"])){

    $test->set_c(trim($_POST["cathegory"]));
    if ($_POST["mix"] == "no") {
        $test->set_mixture(false);
    } else if ($_POST["mix"] == "yes") {
        $test->set_mixture(true);
    }
    $test->set_name(htmlspecialchars(trim($_POST["name"])));
    $test->to_db();
    $test_id = $test->id;

    for ($j = 1; $j <= 30; $j++) {
        if (isset($_POST["res" . $j])) {
            $test->set_res_criteria($_POST["v" . $j]);
            $test->set_res_text(htmlspecialchars(trim($_POST["res" . $j])));
            
        }
    }
    $test->c_to_db($test_id);

    for($i = 1; $i <= 60; $i++) { //i - question
        if(isset($_POST["ota_question".$i])) {
            $question = new one_true_answer_q();
            $question->set_q(trim($_POST["ota_question".$i]));
            $question->set_type(1);

            for ($k = 1; $k <=20; $k++) { //option
                if(isset($_POST["the_question".$i.$k])) {
                    $o = new  option();
                    $o->set_o_text(htmlspecialchars(trim($_POST["the_question".$i.$k])));
                    $o->set_o_value($_POST["p".$i.$k]);
                    $question->add_option($o);

                    if($_POST["is_true".$i] == $k) {
                        $question->set_true_option($o);
                    }
                }
            }
            $question->to_db($test_id);
        }
        else if(isset($_POST["mta_question".$i])) {
            $question = new many_true_answers_q();
            $question->set_q(trim($_POST["mta_question".$i]));
            $question->set_type(2);

            for ($k = 1; $k <=20; $k++) { //option
                if(isset($_POST["the_question".$i.$k])) {
                    $o = new option();
                    $o->set_o_text(htmlspecialchars(trim($_POST["the_question".$i.$k])));
                    $o->set_o_value($_POST["p".$i.$k]);
                    $question->add_option($o);

                    if(!empty($_POST["is_true_answ".$i])) {
                        foreach($_POST["is_true_answ".$i] as $val) {
                            if($val == $k) {
                                $question->set_true_option($o);
                            }
                        }
                    }

                }
            }
            $question->to_db($test_id);
        }
        else if(isset($_POST["nta_question".$i])) {
            $question = new no_answer_options_q();
            $question->set_q(trim($_POST["nta_question".$i]));
            $question->set_type(3);
            $question->set_points($_POST["p".$i]);
            $question->to_db($test_id);
        }
    }
    echo "Тест и вопросы были успешно добавлены в базу данных!";
}
?>
</body></html>
