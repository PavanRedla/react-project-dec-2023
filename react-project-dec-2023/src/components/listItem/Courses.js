import React from 'react';
import { useQuery, gql } from "@apollo/client";

const courses_query = gql`{
    countries {
      code
      name
      emoji
    }
  }`;


export default function Courses() {
    const { data, loading, error } = useQuery(courses_query);

    if (loading) return "Loading...";
    if (error) return <pre>{error.message}</pre>

    return <>
        <h2 className='text-center'>Course List using GraphQL + ApolloClient</h2>
        <hr />
        <table className='table table-bordered table-striped'>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Title</th>
                    <th>Topic</th>
                    <th>Author</th>
                </tr>
            </thead>
            <tbody>
                {data.courses.map(course => {
                    return <tr key={course.id}>
                        <td>{course.id}</td>
                        <td>{course.title}</td>
                        <td>{course.topic}</td>
                        <td>{course.author}</td>
                    </tr>
                })}
            </tbody>
        </table>
    </>
}
