import '../Styles.css';
function LibraryFilters(props) {
  
    return (
      <div className='noJumpDiv'>
        {props.isVisible ? (
          <ul className='dropdown'>
            <li>Option 1</li>
            <li>Option 2</li>   
            <li>Option 3</li>
          </ul>
        ) : null}
      </div>
    );
  }
  
  export default LibraryFilters;