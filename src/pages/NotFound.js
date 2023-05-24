import React from "react";

import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <h2>Page Not Found</h2>

      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid illo iste mollitia nostrum ipsum quo, officia ducimus, iusto reprehenderit consequatur consequuntur consectetur eius porro sint quasi quas facilis, sit laboriosam.</p>

      <p>Go to the <Link to="/" >Homepage</Link>.</p>
    </div>
  );
};

export default NotFound;
