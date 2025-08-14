<?php

class Page {

    protected $url;
    public $siteName = 'Delfis 6';
    public $score = '25';

    public function __construct()
    {
        $this->url = 'http://localhost/grupe4/obj2/page/' . rand(1000, 9999);
        // $this->render();

        $this->score = '100';
    }

    public function render()
    {
        echo '<h2>PAGE rendering...</h2>';
    }

}