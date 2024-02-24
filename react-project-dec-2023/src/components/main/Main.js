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
import MyModal from "../demo/MyModal";
import StateDemo1 from "../state/StateDemo1";
import ToggleDemo1 from "../state/ToggleDemo1";
import ToggleDemo2 from "../state/ToggleDemo2";
import PasswordDemo1 from "../state/PasswordDemo1";
import RemainingCharacter from "../state/RemainingCharacter";
import StateDropDown from "../state/StateDropDown";
import Folder from "../FolderExplorer/Folder";
import folderData from "../FolderExplorer/folderData.json";
import SweetAlertDemo from "../demo/SweetAlertDemo";
import ReactModalDemo from "../demo/ReactModalDemo";
import ProductList from "../listItem/ProductList";
import SumDemo from "../state/SumDemo";
import ToDoCRUD from "../ToDoCRUD/ToDoCRUD";
import EventDemo1 from "../Event/EventDemo1";
import EventDemo2 from "../Event/EventDemo2";
import EventDemo3 from "../Event/EventDemo3";
import EventDemo4 from "../Event/EventDemo4";
import EventDemo5 from "../Event/EventDemo5";
import EmployeeCrud from "../EmployeeCRUD/EmployeeCrud";
import PureDemo1 from "../state/PureDemo1";
import PureDemo2 from "../state/PureDemo2";
import MemoParent from "../memo/MemoParent";
import LifeCycleDemo1 from "../LifeCycle/LifeCycleDemo1";
import LifeCycleDemo2 from "../LifeCycle/LifeCycleDemo2";
import LifeCycleDemo3 from "../LifeCycle/LifeCycleDemo3";
import LifeCycleDemo4 from "../LifeCycle/LifeCycleDemo4";
import RefDemo1 from "../Form/RefDemo1";
import RefDemo2 from "../Form/RefDemo2";
import FormDemo1 from "../Form/FormDemo1";
import FormDemo2 from "../Form/FormDemo2";
import FormDemo3 from "../Form/FormDemo3";
import RefForward from "../Form/RefForward";
import PrevNewRef from "../Form/PrevNewRef";
import FormDemo4 from "../Form/FormDemo4";
import Multipleinputs from "../Form/Multipleinput";
import FormDataObj from "../Form/FormDataObj";
import ProductFetch from "../HTTP/ProductFetch";
import HttpDemo1 from "../HTTP/HttpDemo1";
import HttpDemo2 from "../HTTP/HttpDemo2";
import HttpDemo3 from "../HTTP/HttpDemo3";
import HttpDemo4 from "../HTTP/HttpDemo4";
import HttpDemo5 from "../HTTP/HttpDemo5";
import ClickCounter from "../HOC/ClickCounter";
import HoverCounter from "../HOC/HoverCounter";
import CounterHOC from "../HOC/CounterHOC";
import LoggerHOC from "../HOC/LoggerHOC";
import AxiosEmployeeCrud from "../EmployeeCRUDAxios/AxiosEmployeeCrud";

export default function Main(props) {
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
      {/* <GreetDemo1 name="sanjay" msg="Good Morning">
        <div>
          In between the start and end tag of GreetDemo1 tags whatever the HTML
          content is present it will be passed or goes to child component (i.e.,
          GreetDemo1 component where we mention this.props.children). we have
          written HTML code of div tag so this div tag will be passed to line
          number 45.
        </div>
      </GreetDemo1> */}

      {/*  suppose if we have a compoenent and inside that component what HTMl will be shown is should be decided by theparent then props.children will be shown. */}

      {/* <Addition num1={10} num2={20}/> */}
      {/* <MyModal>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
            </div>
            <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
        </MyModal> */}

      {/* <MyModal modalTitle={"This is My Title"}  name={props.name}>
        <>
          <table className="table table-bordered">
            <tbody>
              <tr>
                <td>sdfjk</td>
                <td>sdfjk</td>
                <td>sdfjk</td>
              </tr>
              <tr>
                <td>sdfjk</td>
                <td>sdfjk</td>
                <td>sdfjk</td>
              </tr>
              <tr>
                <td>sdfjk</td>
                <td>sdfjk</td>
                <td>sdfjk</td>
              </tr>
            </tbody>
          </table>
          <p>dsafkhjhj</p>
        </>
      </MyModal> */}
      {/* <StateDemo1 /> */}
      {/* <ToggleDemo1 /> */}
      {/* <ToggleDemo2 /> */}
      {/* <PasswordDemo1 /> */}
      {/* <RemainingCharacter /> */}
      {/* <StateDropDown /> */}
      {/* <SumDemo /> */}
      {/* <Folder folderInfo={folderData} /> */}
      {/* <SweetAlertDemo /> */}
      {/* <ReactModalDemo /> */}
      {/* <ProductList /> */}
      {/* <ToDoCRUD /> */}
      {/* <EventDemo1 /> */}
      {/* <EventDemo2 /> */}
      {/* <EventDemo3 /> */}
      {/* <EventDemo4 /> */}
      {/* <EventDemo5 /> */}
      {/* <EmployeeCrud /> */}
      {/* <PureDemo1 /> */}
      {/* <PureDemo2 /> */}
      {/* <MemoParent /> */}
      {/* <LifeCycleDemo1 counter={5} /> */}
      {/* <LifeCycleDemo1 /> */}
      {/* <LifeCycleDemo2 /> */}
      {/* <LifeCycleDemo3 /> */}
      {/* <LifeCycleDemo4 /> */}
      {/* <RefDemo1 /> */}
      {/* <RefDemo2 /> */}
      {/* <FormDemo1 /> */}
      {/* <FormDemo2 /> */}
      {/* <FormDemo3 /> */}
      {/* <FormDemo4 /> */}
      {/* <RefForward /> */}
      {/* <PrevNewRef /> */}
      {/* <Multipleinputs/> */}
      {/* <FormDataObj /> */}
      {/* <ProductFetch /> */}
      {/* <HttpDemo1 /> */}
      {/* <HttpDemo2 /> */}
      {/* <HttpDemo3 /> */}
      {/* <HttpDemo4 /> */}
      {/* <HttpDemo5 /> */}
      {/* <ClickCounter /> */}
      {/* <HoverCounter /> */}
      {/* <CounterHOC/> */}
      {/* <LoggerHOC /> */}
      {/* <AxiosEmployeeCrud /> */}
    </div>
  );
}
