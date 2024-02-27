import '../Styles.css';
function LibraryFilters(props) {
  
    return (
      <div className='noJumpDiv'>
        {props.isVisible ? (
          <dl className='dropdown'>
            <div className='dropdwnDiv'>
              <dt>Type</dt>
                <dd>Games</dd>
                <dd>Software</dd>
                <dd>Tools</dd>
                <dd>Videos</dd>
                <dd>Soundtracks</dd>
              <dt>Palyers</dt>  
                <dd>Single Player</dd> 
                <dd>Multiplayer</dd>
                <dd>Cooperative</dd>
              <dt>Play State</dt>
                <dd>Ready to Play</dd>
                <dd>Instaled Locally</dd>
                <dd>Played</dd>
                <dd>Unplayed</dd>
            </div>
            <div className='dropdwnDiv'>
              <dt>Hardware Support</dt>
                <dd>Controllers (Full)</dd>
                <dd>Controllers (Partial)</dd>
                <dd>VR</dd>
              <dt>Features</dt>
                <dd>Trading cards</dd>
                <dd>Workshop</dd>
                <dd>Achievements</dd>
                <dd>Remote play Together</dd>
              <dt>Friends</dt>
              <dd><input type="text" placeholder="Enter Friend's Name"></input></dd>
              <dt>Store Tags</dt>
                <dd><input type="text" placeholder="Search for a tag"></input></dd>
            </div>
            <div className='dropdwnDiv'>
              <dt>Genre</dt>
                <dd>Action</dd>
                <dd>Adventure</dd>
                <dd>Casual</dd>
                <dd>Massively Multiplayer</dd>
                <dd>Racing</dd>
                <dd>RPG</dd>
                <dd>Simulation</dd>
                <dd>Sports</dd>
                <dd>Strategy</dd>
              </div>
          </dl>
        ) : null}
      </div>
    );
  }
  
  export default LibraryFilters;