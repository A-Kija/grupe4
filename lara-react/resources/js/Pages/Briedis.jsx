import { Link } from '@inertiajs/react';
import Main from '@/Layouts/Main';

export default function Briedis({ kasTu, laraUrl, labas }) {

    return (
        <Main>
            <div className="p-6 bg-white border-b border-gray-200">
                {kasTu}
                <div className="mt-2 text-sm text-gray-500">
                    {labas}
                </div>
            </div>
            
            <div className="mt-2 text-sm text-gray-500">
                <Link href={laraUrl}>Go to Lara</Link>
            </div>
        </Main>
    );
}