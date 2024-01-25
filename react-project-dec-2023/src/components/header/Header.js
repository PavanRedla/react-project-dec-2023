// import React from "react";

// export default function header() {
//   return (
//     <h1
//       style={{
//         backgroundColor: "blueviolet",
//         color: "white",
//         textAlign: "center",
//         margin: 0,
//       }}
//     >
//       This is My Header
//     </h1>
//   );
// }

// the above is about creating functional component

// if we want to create class component then we have to use rcc shortcut in vscode as shown below

// before react 16 class component is much powerful than functional component because we have state, lifecycle hooks in class component but not present in functional component but after react 16 normal component is as powerful as class component and people started using normal component everywhere.

import React from "react";

export default class Header extends React.Component {
  render() {
    return (
      <h2
        style={{
          backgroundColor: "blueviolet",
          color: "white",
          textAlign: "center",
          margin: 0,
        }}
      >
        This is My Header
      </h2>
    );
  }
}
