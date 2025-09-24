import { useState, useEffect } from 'react';
import axios from 'axios';
import * as SETTINGS from '../Constants/settings';
import * as A from '../Actions/books';

export default function useCreateBook(msg) {

    const [storeBook, setStoreBook] = useState(null);

    useEffect(() => {
        if (null === storeBook) {
            return;
        }
        const id = 'TMP' + Math.floor(Math.random() * 1000000); // laikinas ID
        setBooks(bs => [{ ...storeBook, id }, ...bs]);
        const msgId = msg({
            title: 'Storing...',
            text: 'Your book is sending to server',
            type: 'info'
        });

        axios.post(URL + 'book', storeBook)
            .then(res => {
                console.log(res.data);
                setBooks(bs => bs.map(b => id === b.id ? { ...b, id: res.data.id } : b));
                msg({
                    title: 'Stored',
                    text: 'Your book was stored',
                    type: 'success'
                }, msgId);
            })
            .catch(error => {
                console.log(error);
                setBooks(bs => bs.filter(b => b.id !== id));
                msg({
                    title: 'Storing Failed',
                    text: 'Your book was rejected',
                    type: 'warning'
                }, msgId);
            });

    }, [storeBook, msg]);

    return { setStoreBook }
}