import { useContext, useState } from 'react';
import DataContext from '../../Contexts/DataContext';
import InputError from '../InputError';
import { basicValidator } from '../../Validators/basicValidator';

export default function Create() {

    const { setStoreBook } = useContext(DataContext);

    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [published_year, setPublished_year] = useState('');

    const [errors, setErrors] = useState({});

    const handleTitle = e => {
        let error;
        setTitle(e.target.value);
        
        error = basicValidator('Title', e.target, 'max', 5);
        setErrors(prev => ({ ...prev, title: error }));

        
    }

    const handleAuthor = e => {
        setAuthor(e.target.value);
        let error;
        [
            { type: 'noDigits' }, 
            { type: 'max', param: 20 }
        ]
        .forEach(rule => {
            if (error) return;
            error = basicValidator('Author', e.target, rule.type, rule.param);
            setErrors(prev => ({ ...prev, author: error }));
        });
    }

    const handlePublished_year = e => {
        let error;
        setPublished_year(e.target.value);
        error = basicValidator('Year', e.target, 'year');
        setErrors(prev => ({ ...prev, published_year: error }));
    }

    const handleSave = _ => {
        setStoreBook({
            title,
            author,
            published_year
        });
        // reiktu perkelt kitur
        setTitle('');
        setAuthor('');
        setPublished_year('');
    }

    return (
        <div className="card mt-5 mb-5">
            <div className="card-header">
                <h2>Create new Book</h2>
            </div>
            <div className="card-body">
                <p className="card-text">Fill form to add new book.</p>
                <div className="mb-3">
                    <label className="form-label">Title</label>
                    <InputError message={errors.title} />
                    <input type="text" className="form-control" onChange={handleTitle} value={title} />
                    
                </div>
                <div className="mb-3">
                    <label className="form-label">Author</label>
                    <InputError message={errors.author} />
                    <input type="text" className="form-control" onChange={handleAuthor} value={author} />
                    
                </div>
                <div className="mb-3">
                    <label className="form-label">Year</label>
                    <input type="text" className="form-control" onChange={handlePublished_year} value={published_year} />
                </div>

                <button type="button" className="btn btn-outline-primary" onClick={handleSave}>Save</button>
            </div>
        </div>
    );
}