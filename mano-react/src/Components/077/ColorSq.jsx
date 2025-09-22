export default function ColorSq({color}) {

    return (
        <div className="sq" style={{
            borderColor: color,
            backgroundColor: color + '70'
        }}></div>
    );
}