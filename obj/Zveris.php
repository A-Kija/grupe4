<?php

class Zveris
{
    public $kasTu = 'Žvėris';
    private $realiaiKasTu1 = 'MI6';
    private $realiaiKasTu2 = 'SIA';
    private $realiaiKasTu3 = 'Turkų žvalgyba';
    public $uodega;

    public function __construct($uodega) // kai panaudojam new
    {
        $this->uodega = $uodega;
    }

    public function __get($prop) // kai bandom paimti savybe kurios nera
    {
        if ($prop == 'realiaiKasTu2') {
            return 'Žvėriukas su uodega';
        }

        return $this->$prop;
    }

    public function __set($prop, $value) // kai bandom irasyti i savybe kurios nera
    {
        if ($prop == 'realiaiKasTu2') {
            return;
        }

        $this->$prop = $value;
    }

}
