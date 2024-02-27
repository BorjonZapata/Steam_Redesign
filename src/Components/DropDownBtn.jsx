import '../Styles.css';
function DropDownBtn(props) {
    return (
      <button className=".DropdownButton" onClick={props.onClick}>
        {props.BtnText}
      </button>
    );
  }
  
  export default DropDownBtn;