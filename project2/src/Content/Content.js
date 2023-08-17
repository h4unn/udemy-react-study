const Content = (props) => {
    const title = props.concepts.title;
    const image = props.concepts.image;
    const description = props.concepts.description;
    return (
        <li className="concept">
            <img src={image} alt={title} />
            <h2>{title}</h2>
            <p>{description}</p>
        </li>
    );
}
export default Content;