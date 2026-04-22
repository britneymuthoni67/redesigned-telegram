import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <h2>CommunityHub</h2>
      <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/posts">Posts</Link>
        <Link to="/create">Create</Link>
      </div>
    </nav>
  );
}

export default Navbar;
