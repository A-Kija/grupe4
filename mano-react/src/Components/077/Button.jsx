export default function Button() {


    return (
         <button className="yellow" onClick={_ => setColor(randColor())}>Go fancy color</button>
    );

}