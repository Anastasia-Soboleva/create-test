<?php
class option {
    protected $id;
    protected $o_text;
    protected $o_value;
    protected $is_true;

    public function __construct() {}

    public function set_o_text($text) {
        $this->o_text = $text;
    }
    public function get_o_text() {
        return $this->o_text;
    }
    public function set_o_value($value) {
        $this->o_value = $value;
    }
    public function get_o_value() {
        return $this->o_value;
    }
    public function set_true($bool) {
        $this->is_true = $bool;
    }
    public function is_true() {
        return $this->is_true;
    }
    public function  __serialize(): array {
        return ['id' => $this->id,
        'text' => $this->o_text,
        'value' => $this->o_value,
        'is_true' => $this->is_true,];
    }
    public function __unserialize(array $data): void {
        $this->id = $data['id'];
        $this->o_text = $data['text'];
        $this->o_value = $data['value'];
        $this->is_true = $data['is_true'];
    }
}
?>
