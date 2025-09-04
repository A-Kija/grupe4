@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header d-flex align-items-center">
                    <h1 class="mb-0">Books list</h1>
                    <form action="{{ route('books-index') }}" class="ms-auto d-flex align-items-center">
                        <div class="input-group">
                            <label class="input-group-text" for="sort">Sort by</label>
                            <select name="sort" class="form-select">
                                <option value="">Select</option>
                                <option value="title">Title</option>
                                <option value="author">Author</option>
                                <option value="pages">Pages</option>
                            </select>
                        </div>
                        <button class="btn btn-secondary ms-2" type="submit">Sort</button>
                    </form>
                </div>
                <div class="card-body">
                    <table class="table">
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Author</th>
                                <th>Pages</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            @foreach ($books as $book)
                                <tr>
                                    <td>{{ $book->title }}</td>
                                    <td>{{ $book->author }}</td>
                                    <td>{{ $book->pages }}</td>
                                    <td>
                                        @if (auth()->user() && auth()->user()->role === 'Admin')
                                            <a href="{{ route('books-edit', $book->id) }}" class="btn btn-warning me-2">Edit</a>
                                        @endif
                                        <a href="{{ route('books-delete', $book->id) }}" class="btn btn-danger">Delete</a>
                                    </td>
                                </tr>
                            @endforeach
                        </tbody>
                    </table>
                    {{-- {{ $books->links() }} --}}
                </div>
            </div>
        </div>
    </div>
</div>
@endsection