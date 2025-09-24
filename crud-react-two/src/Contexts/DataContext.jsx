import { createContext, useContext } from 'react';
import useBooks from '../Hooks/useBooks';
import useDeleteBook from '../Hooks/useDeleteBook';
import useCreateBook from '../Hooks/useCreateBook';
import MsgContext from './MsgContext';

const DataContext = createContext();


export const DataProvider = ({ children }) => {

    const { msg } = useContext(MsgContext);

    const [books, dispatchBooks] = useBooks();
    const { deleteBook, setDeleteBook, destroyBook, setDestroyBook } = useDeleteBook(dispatchBooks, msg);
    const { setStoreBook } = useCreateBook(msg);




    return (
        <DataContext.Provider value={{
            books, dispatchBooks,
            deleteBook, setDeleteBook, destroyBook, setDestroyBook,
            setStoreBook
        }}>
            {children}
        </DataContext.Provider>
    );

}

export default DataContext;