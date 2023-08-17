function Card(props) {
    const classes = 'card ' + props.className; 
    // card는 남겨두고 props.className, 즉 대상의 className을 가져와서 추가한다
    return <div className={classes}>{props.children}</div>
}
export default Card;