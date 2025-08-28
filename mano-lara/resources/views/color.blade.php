@extends('body')

@section('turinys')
<div style="background-color: {{ $color }}; height: 100px; display: flex; align-items: center; justify-content: center; color: white;">
    <h1>{{ $color }}</h1>
</div>
@endsection

@section('spalva')
{{ $color }}
@endsection
