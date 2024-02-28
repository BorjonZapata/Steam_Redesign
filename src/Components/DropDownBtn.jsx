import '../Styles.css';
function DropDownBtn(props) {
    return (
      <button className="HeaderButton" onClick={props.onClick}>
        {props.BtnText}
      </button>
    );
  }
  export default DropDownBtn;