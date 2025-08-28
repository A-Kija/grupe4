@extends('body')

@section('turinys')
<div style="background-color: {{ $color }};" class="color-box" data-color="{{ $color }}">
    <h1>{{ $color }}</h1>
</div>
<a href="{{ route('atsitiktine-spalva') }}">Gauti atsitiktinę spalvą</a>

@endsection

@section('spalva')
{{ $color }}
@endsection
