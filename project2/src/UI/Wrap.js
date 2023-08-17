const Conseps = (props) => {
    const propsId = props.id;
    return <ul id={propsId}>{props.children}</ul>
}
export default Conseps;