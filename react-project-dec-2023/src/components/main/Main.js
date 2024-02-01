import React from 'react';
import { FaBeer, FaTrash, FaTrashAlt, FaTrashRestore } from "react-icons/fa";
import Increment from '../increment/Increment';
import EvenOdd from '../EvenOdd/EvenOdd';
import ConditionalDemo1 from '../conditional/ConditionalDemo1';
import ConditionalDemo2 from '../conditional/ConditionalDemo2';
import ConditionalDemo3 from '../conditional/ConditionalDemo3';
import DatabindingDemo1 from '../demo/DatabindingDemo1';
import ListDemo1 from '../listItem/ListDemo1';
import ListDemo2 from '../listItem/ListDemo2';
import ListDemo3 from '../listItem/ListDemo3';
import Courses from '../listItem/Courses';
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import UserList from '../listItem/UserList';
import CountryList from '../listItem/CountryList';

const client = new ApolloClient({
    // uri: "http://localhost:5000/courses",
    uri: "https://studio.apollographql.com/public/countries/variant/current/explorer",
    cache: new InMemoryCache()
});



export default function Main() {
    return <div style={{ 'minHeight': '400px' }}>
        {/* <Increment/> */}
        {/* <EvenOdd /> */}
        {/* <ConditionalDemo1 /> */}
        {/* <ConditionalDemo2 /> */}
        {/* <ConditionalDemo3 /> */}
        {/* <DatabindingDemo1 /> */}
        {/* <ListDemo1 /> */}
        <ListDemo2 />
        {/* <ListDemo3 /> */}
        {/* <ApolloProvider client={client}>
            <Courses />
        </ApolloProvider> */}
        {/* <UserList /> */}
        {/* <CountryList /> */}
    </div>
}
