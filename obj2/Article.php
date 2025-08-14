<?php

class Article extends Page {

    public $title;
    public $score = '5';

    public function __construct($title = 'Nėra pavadinimo')
    {
        parent::__construct();
        
        $this->title = $title;

        $this->render();
        // parent::render();

    }

    public function render()
    {
        echo '<h2>Article rendering...'. $this->url.'</h2>';
    }

}