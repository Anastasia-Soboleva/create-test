<?php
require_once("option.php");
//enter your hostname, username, password and DB
 $mysqli = new mysqli("HOSTNAME", "USERNAME", "PASSWORD", "DB"); 
 $mysqli->set_charset("utf8");
class test {
    public $id;
    protected $t_c;
    protected $name;
    protected $mixture;
    protected $questions = array(); /* айди вопросов*/
    protected $option = array(); /* айди вопросов в варианте (важен порядок)*/
    protected $res_criteria = array();
    protected $res_text = array();
    public function __construct() {}
    public function set_res_criteria($criteria) {
        $this->res_criteria = $criteria;
    }
    public function get_res_criteria() {
        return $this->res_criteria;
    }
    public function get_res_text() {
        return $this->res_text;
    }
    public function set_res_text($txt) {
        $this->res_text = $txt;
    }
    public function set_c($c) {
        $this->t_c = $c;
    }
    public function get_c() {
        return $this->t_c;
    }
    public function set_name($name) {
        $this->name = $name;
    }
    public function get_name() {
        return $this->name;
    }
    public function set_mixture($mixture) {
        $this->mixture = $mixture;
    }
    public function get_mixture() {
        return $this->mixture;
    }
    public function add_q($id) {
        $this->questions[] = $id;
    }
    public function generate_o() {
        if(!$this->mixture) {
            $this->option = $this->questions;
        }
        else if ($this->mixture) {
            $this->option = shuffle($this->questions);
        }
    }
    public function c_to_db($t_id) {
        global $mysqli;
        @$crit = array_merge($this->res_criteria, $this->res_text);
        $crit = serialize($crit);
        $mysqli->query("UPDATE tests SET criteria='{$crit}' WHERE t_id='{$t_id}');");
    }
    public function to_db() {
        global $mysqli;
        $c = $this->t_c;
        $name = $this->name;
        if ($this->mixture) { $mixture = 1;}
        else {$mixture = 0;}
        $mysqli->query("INSERT INTO tests (cathegory, name, mixture) VALUES ('{$c}', '{$name}', '{$mixture}');");
        $this->id = $mysqli->insert_id;
    }
}

abstract class question {
    protected $id;
    protected $q;
    protected $type;
    public function __construct() {}
    public function get_id() {
        return $this -> $id;
    }
    public function set_q($q) {
        $this->q = $q;
    }
    public function get_q() {
        return $this->q;
    }
    public function get_type() {
        return $this->type;
    }
    public function set_type($type) {
        $this->type = $type;
    }
    abstract public function to_db($t_id);
}

class one_true_answer_q extends question {
    protected $options = array();
    protected $true_option;
    public function add_option($option) {
        $this->options[] = $option;
    }
    public function get_options() {
        return $this->options;
    }
    public function to_db($t_id) {
        global $mysqli;
        $question = $this->q;
        $type = $this->type;
        $opt = serialize($this->options);
        $t_opt = serialize($this->true_option);
        $mysqli->query("INSERT INTO questions (t_id, q_type, q_text, options, t_options) VALUES ('{$t_id}', '{$type}', '{$question}', '{$opt}', '{$t_opt}');");
        $this->id = $mysqli->insert_id;
    }
    public function set_true_option($option) {
        $this->true_option = $option;
    }
    public function get_true_option() {
        return $this->true_option;
    }
}

class many_true_answers_q extends question {
    protected $options = array();
    protected $true_options = array();
    public function to_db($t_id) {
        global $mysqli;
        $question = $this->q;
        $type = $this->type;
        $opt = serialize($this->options);
        $t_opt = serialize($this->true_options);
        $mysqli->query("INSERT INTO questions (t_id, q_type, q_text, options, t_options) VALUES ('{$t_id}', '{$type}', '{$question}', '{$opt}', '{$t_opt}');");
        $this->id = $mysqli->insert_id;
    }
    public function add_option($option) {
        $this->options[] = $option;
    }
    public function set_true_option($option) {
        $this->true_options[] = $option;
    }
}

class no_answer_options_q extends question {
    protected $points;
    public function to_db($t_id) {
        global $mysqli;
        $question = $this->q;
        $type = $this->type;
        $points = $this->points;
        $mysqli->query("INSERT INTO questions (t_id, q_type, q_text, points) VALUES ('{$t_id}', '{$type}', '{$question}', '{$points}');");
        $this->id = $mysqli->insert_id;
    }
    public function set_points($points) {
        $this->points = $points;
    }
    public function get_points() {
        return $this->points;
    }
}
?>
