export default function Messages({ messages }) {

    return (
        <ul className="message-bin">
            {
                messages.map(m => <li key={m.id}>
                    <div className={`alert alert-${m.type} alert-dismissible fade show`} role="alert">
                        <strong>{m.title}</strong> {m.text}
                        <button type="button" className="btn-close" aria-label="Close"></button>
                    </div>
                </li>)
            }
        </ul>

    );
}