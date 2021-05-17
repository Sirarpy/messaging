import "./searchItem.css";
import searchAvatar from "./activeUserAvatar.png";

function SearchItem({ massagedUser, handleClick }) {
  
  return (
    <div className="searchItem">
      <div className="searchItemAvatar">
        <img
          src={searchAvatar}
          id={massagedUser.id}
          onClick={handleClick}
          alt="chtaUserAvatar"
        />
      </div>
      <div style={{ flexGrow: 1 }}>
        <p id={massagedUser.id} onClick={handleClick}>
          {massagedUser.firstName} {massagedUser.lastName}
        </p>
        {/* <p className="searchItemStatus">ID {massagedUser.id}</p> */}
        
      </div>
    </div>
  );
}

export default SearchItem;
