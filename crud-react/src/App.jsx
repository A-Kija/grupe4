import Create from './Components/Create';
import List from './Components/List';
import './index.scss';

export default function App() {


    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <Create/>
                    </div>
                    <div className="col-8">
                        <List/>
                    </div>
                </div>
            </div>
        </>
    );
}