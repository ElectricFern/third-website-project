
class LikeButton extends React.Component {
  constructor(props) {
    super(props);
/* starts set to 'like' can later be set to false and 'unlike'*/	
    this.state = { liked: false };
    this.handleClick = this.handleClick.bind(this);

  }
  
 /* ! is a logical not operator. after click detected set new state */
  handleClick(event) {
    this.setState({ liked: !this.state.liked});
  }
  render() {
    let buttonText = this.state.liked? 'Unlike': 'Like';
/* ? : is used for terniary operator. pushes 'unlike' and 'like' text to button depending on state */	
    var buttonStyle = {
      fontSize: "1em",
      width: "75px",
      height: "40px",
      fontFamily: "sans-serif",
      color: "#333",
      fontWeight: "bold",
      lineHeight: "3px",
	  borderWidths: "2px"
    };
	
    return (
      <button onClick={this.handleClick} style={buttonStyle} className="like">
        {buttonText}</button>
     );
  }
}
ReactDOM.render(<LikeButton />, document.getElementById('like'));