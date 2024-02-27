import '../Styles.css';
function DropDownBtn(props) {
    return (
      <button onClick={props.onClick}>
        {props.BtnText}
      </button>
    );
  }
  
  export default DropDownBtn;