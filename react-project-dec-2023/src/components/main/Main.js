import React from "react";
import {
  FaBeer,
  FaTrash,
  FaTrashAlt,
  FaTrashRestore,
  FaTrashRestoreAlt,
} from "react-icons/fa";

export default function Main() {
  return (
    <div style={{ "min-height": "400px" }}>
      <div>This is Main Component</div>

      <i className="bi-alarm"></i>
      <i
        className="bi-airplane"
        style={{ fontSize: "2rem", color: "cornflowerblue" }}
      ></i>
      <i className="bi-android2"></i>

      <h2>
        Hey, Would you like to go for a <FaBeer color="red" /> ?
      </h2>
      <h2>
        I am a Delete Button <FaTrash />
        <FaTrashAlt />
        <FaTrashRestore />?
      </h2>
    </div>
  );
}

// import React from "react";

// export default function Main() {
//   return (
//     <div style={{ "min-height": "400px" }}>
//       <div>This is Main component</div>
//       <i className="bi-alarm"></i>
//       <i
//         className="bi-airplane"
//         style={{ fontSize: "2rem", color: "cornflowerblue" }}
//       ></i>
//     </div>
//   );
// }
