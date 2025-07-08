export default function List({name, image, text, style}){
    return (
        <div style={style}>
        <h1>{name}</h1>
        <img src={image} alt="" />
        <p>{text}</p>
        </div>
    );
}