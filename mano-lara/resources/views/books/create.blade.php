@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header"><h1>Create Book</h1></div>
                <div class="card-body">
                    <form action="{{ route('books-store') }}" method="POST">
                        @csrf
                        <div class="mb-3">
                            <label for="title" class="form-label">Title</label>
                            <input type="text" class="form-control" id="title" name="title">
                        </div>
                        <div class="mb-3">
                            <label for="author_id" class="form-label">Author</label>
                            <select class="form-control" id="author_id" name="author_id">
                                @foreach($authors as $author)
                                    <option value="{{ $author->id }}">{{ $author->name }} {{ $author->lastname }}</option>
                                @endforeach
                            </select>
                        </div>
                        <div class="mb-3">
                            <label for="pages" class="form-label">Pages</label>
                            <input type="number" class="form-control" id="pages" name="pages">
                        </div>
                        <div class="mb-3">
                            <label for="description" class="form-label">Description</label>
                            <textarea class="form-control" id="description" name="description" rows="3"></textarea>
                        </div>
                        <button type="submit" class="btn btn-primary">Create</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection