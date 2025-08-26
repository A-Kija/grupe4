<?php
namespace Bebro\Blogas\Controllers;

use Bebro\Blogas\App;
use Bebro\Blogas\Models\Article;

class ArticleController
{

    public function index(): string
    {
        $articles = Article::all();
        return App::view('articles/index', ['articles' => $articles, 'title' => 'Articles List']);
    }

    public function show(int $id) : string
    {
        
        if (!$id) {
            return App::view('404', ['title' => '404 Not Found']);
        }

        $article = Article::find($id);

        if (!$article) {
            return App::view('404', ['title' => '404 Not Found']);
        }

        return App::view('articles/show', ['article' => $article, 'title' => $article->title]);
    }

    public function create(): string
    {
        return App::view('articles/create', ['title' => 'Create Article']);
    }

    public function store()
    {
        $article = new Article();
        $article->title = $_POST['title'] ?? '';
        $article->content = $_POST['content'] ?? '';
        $article->author = $_POST['author'] ?? '';
        $article->image = $_FILES['image'] ?? null;

        if ($article->image) {
            $article->image = $this->uploadImage($article->image);
        }

        // return print_r($article->image, 1);
        $article->store();

        return App::redirect('', ['message' =>
            [
                'text' => 'Article created successfully!',
                'type' => 'success'
            ]
        ]);
    }

    private function uploadImage(array $image): string
    {
        $targetDir = __DIR__ . '/../../public/images/';

        $fileName = basename($image['name']);
        $targetFilePath = $targetDir . $fileName;


        // Move to folder
        if (move_uploaded_file($image['tmp_name'], $targetFilePath)) {
            return 'images/' . $fileName; // Return relative path for database storage
        }

        return '';
    }
}