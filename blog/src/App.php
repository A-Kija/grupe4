<?php

namespace Bebro\Blogas;

use Bebro\Blogas\Controllers\AboutController;
use Bebro\Blogas\Controllers\ArticleController;
use Bebro\Blogas\Controllers\RegisterController;

class App
{
    
    const URL = 'http://localhost/grupe4/blog/public/';
    
    public static function run()
    {
        return self::route();
    }




    private static function route()
    {
        $uri = $_SERVER['REQUEST_URI'];
        $serverHome = '/grupe4/blog/public';

        $params = str_replace($serverHome, '', $uri);

        $params = explode('/', $params);
        array_shift($params);

        $method = $_SERVER['REQUEST_METHOD'];

        return match(true) {

            $method == 'GET' && count($params) === 1 && $params[0] === 'register' => (new RegisterController())->show(),
            $method == 'POST' && count($params) === 1 && $params[0] === 'register' => (new RegisterController())->register(),

            count($params) === 1 && $params[0] === '' => (new ArticleController())->index(),
            count($params) === 1 && $params[0] === 'about' => (new AboutController())->index(),
            count($params) === 2 && $params[0] === 'article' => (new ArticleController())->show((int)$params[1]),
            default => self::view('404', ['title' => '404 Not Found'])
        };
    }

    public static function view(string $template, array $data = []): string
    {
        extract($data); // sukuriame kintamuosius iš masyvo data['text'] ==> $text
        $url = self::URL;

        ob_start();
        include __DIR__ . '/views/top.php';
        include __DIR__ . '/views/' . $template . '.php';
        include __DIR__ . '/views/bottom.php';
        return ob_get_clean();
    }





}
