<div class="card">
    <div class="card-header">
        <h1>Authors list</h1>
    </div>
    <div class="card-body">
        <table class="table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Lastname</th>
                    <th>Birth Year</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                @foreach ($authors as $author)
                <tr>
                    <td>{{ $author->name }}</td>
                    <td>{{ $author->lastname }}</td>
                    <td>{{ $author->birth_year }}</td>
                    <td>
                        <a href="{{ route('authors-edit', $author->id) }}" class="btn btn-warning me-2">Edit</a>
                        <a href="{{ route('authors-delete', $author->id) }}" class="btn btn-danger">Delete</a>
                    </td>
                </tr>
                @endforeach
            </tbody>
        </table>
    </div>
</div>