import instagramText from "./assets/Instagram_text.png"; 


function Sidebar() {
  return (
    <div className="m-3 position-fixed">
      <div className="d-flex flex-column gap-3">
        <img className="logo-text" src={instagramText} alt="Instagram logo" />
        <div><i className="bi bi-house-heart"></i> Home</div>
        <div><i className="bi bi-search-heart"></i> Search</div>
        <div><i className="bi bi-compass"></i> Explore</div>
        <div><i className="bi bi-collection-play"></i> Reels</div>
        <div><i className="bi bi-chat-right-text"></i> Message</div>
        <div><i className="bi bi-bell"></i> Notification</div>
        <div><i className="bi bi-plus-square"></i> Create</div>
        <div><i className="bi bi-person-circle"></i> Profile</div>
      </div>
      <div className="position-fixed bottom-0 d-flex flex-column gap-3 mb-3">
        <div><i className="bi bi-threads"></i> Threads</div>
        <div><i className="bi bi-list"></i> More</div>
      </div>
    </div>
  );
}

export default Sidebar;

