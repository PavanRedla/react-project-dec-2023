import React from "react";
import { FaBeer, FaTrash, FaTrashAlt, FaTrashRestore } from "react-icons/fa";
import Increment from "../increment/Increment";
import EvenOdd from "../EvenOdd/EvenOdd";
import ConditionalDemo1 from "../conditional/ConditionalDemo1";
import ConditionalDemo2 from "../conditional/ConditionalDemo2";
import ConditionalDemo3 from "../conditional/ConditionalDemo3";
import DatabindingDemo1 from "../demo/DatabindingDemo1";
import ListDemo1 from "../listItem/ListDemo1";
import ListDemo2 from "../listItem/ListDemo2";
import ListDemo3 from "../listItem/ListDemo3";
import Courses from "../listItem/Courses";
import UserList from "../listItem/UserList";
import CountryList from "../listItem/CountryList";
import CounterDemo1 from "../state/CounterDemo1";
import CounterDemo2 from "../state/CounterDemo2";
import CounterDemo3 from "../state/CounterDemo3";
import GreetDemo1 from "../props/GreetDemo1";
import Addition from "../demo/Addition";

export default function Main() {
  return (
    <div style={{ minHeight: "400px" }}>
      {/* <Increment/> */}
      {/* <EvenOdd /> */}
      {/* <ConditionalDemo1 /> */}
      {/* <ConditionalDemo2 /> */}
      {/* <ConditionalDemo3 /> */}
      {/* <DatabindingDemo1 /> */}
      {/* <ListDemo1 /> */}
      {/* <ListDemo2 /> */}
      {/* <ListDemo3 /> */}
      {/* <UserList /> */}
      {/* <CountryList /> */}
      {/* <CounterDemo1 /> */}
      {/* <CounterDemo2/> */}
      {/* <CounterDemo3 /> */}
      <GreetDemo1 name="sanjay" msg="Good Morning">
        <div>
          In between the start and end tag of GreetDemo1 tags whatever the HTML
          content is present it will be passed or goes to child component (i.e.,
          GreetDemo1 component where we mention this.props.children). we have
          written HTML code of div tag so this div tag will be passed to line
          number 45.
        </div>
      </GreetDemo1>
      {/* <Addition num1={10} num2={20}/> */}

      {/*  suppose if we have a compoenent and inside that component what HTMl will be shown if that is decided by the parent then props.children will be shown. */}
    </div>
  );
}
