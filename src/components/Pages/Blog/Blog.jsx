import React from 'react';
import useTitle from '../../../Hooks/useTitle';

const Blog = () => {
    useTitle('Blogs')
    return (
        <div className='grid grid-cols-1 md:grid-cols-4 gap-8 my-20'>
            <div>
                <h1 className='text-4xl font-bold'>What is an access token and refresh token? and How do they work and where should we store them on the client-side</h1>

                <p className='mt-5 text-2xl font-semibold'>Ans : An access token is a credential used by a client application to access protected resources on behalf of a user. It is typically issued by an authorization server after the user authenticates and authorizes the application. The access token is included in each request to the server to authenticate the client and determine the level of access it has.

                    A refresh token is a long-lived credential that can be used to obtain a new access token when the current one expires. It is usually issued alongside the access token and provides a way to maintain a user's session without requiring them to re-authenticate every time the access token expires.

                    On the client-side, access tokens and refresh tokens should be securely stored. Best practice is to store them in a secure storage mechanism, such as an HTTP-only cookie or local storage, depending on the security requirements of your application. It's important to protect tokens from being accessed or tampered with by unauthorized parties to prevent unauthorized access to protected resources.</p>
            </div>
            <div>
                <h1 className='text-4xl font-bold'>Compare SQL and NoSQL databases?
                </h1>

                <p className='mt-5 text-2xl font-semibold'>Ans:SQL databases are relational databases that store data in tables with predefined schemas. They use a structured approach and enforce relationships between tables through foreign key constraints. SQL databases are suitable for applications with complex relationships and require strong data consistency and integrity. They provide a powerful query language for data retrieval and manipulation.

                    NoSQL databases are non-relational databases that offer flexible data models and don't rely on fixed schemas. They are designed to handle large volumes of unstructured or semi-structured data and provide horizontal scalability. NoSQL databases prioritize high availability and partition tolerance over strong consistency. They use various data models like key-value, document, columnar, or graph, depending on the specific NoSQL database.

                    SQL databases are suitable for structured data and applications with complex relationships, while NoSQL databases are a better fit for handling large volumes of unstructured or semi-structured data with high scalability requirements. The choice between SQL and NoSQL databases depends on the specific needs of the application, such as data structure, scalability, consistency, and performance.</p>
            </div>
            <div>
                <h1 className='text-4xl font-bold'>What is express js? What is Nest JS ?</h1>

                <p className='mt-5 text-2xl font-semibold'>Ans: Express.js is a fast, minimal, and flexible web application framework for Node.js. It provides a simple set of features and middleware to build web applications and APIs. Express.js allows developers to handle routes, manage HTTP requests and responses, and implement various middleware for handling tasks like authentication, logging, and error handling. It is known for its simplicity and lightweight nature, making it popular for building small to medium-sized web applications.

                    NestJS is a progressive Node.js framework for building scalable and efficient server-side applications. It leverages TypeScript and follows a modular architecture inspired by Angular, making it well-suited for developing complex and enterprise-grade applications. NestJS provides a built-in dependency injection system, powerful routing capabilities, middleware support, and integrates well with other libraries and frameworks. It emphasizes maintainability, testability, and scalability, making it a popular choice for building server-side applications in the Node.js ecosystem.</p>
            </div>
            <div>
                <h1 className='text-4xl font-bold'>What is MongoDB aggregate and how does it work ?</h1>

                <p className='mt-5 text-2xl font-semibold'>Ans: In MongoDB, the aggregate function is used for performing advanced data processing and analysis on the data stored in collections. It allows you to execute a pipeline of multiple stages to transform and aggregate data.

                    The aggregate function in MongoDB works by applying a sequence of stages to the input documents. Each stage performs a specific operation on the data and passes the result to the next stage in the pipeline. Some common stages include filtering, sorting, grouping, and projecting fields.

                    Each stage in the aggregation pipeline can manipulate the data in various ways, such as grouping documents based on a specific field, calculating aggregations like sums or averages, joining data from multiple collections, or performing complex transformations using expressions and operators.

                    The aggregate function provides powerful capabilities for data aggregation, transformation, and analysis in MongoDB, allowing you to retrieve and process data in a flexible and efficient manner.

                </p>
            </div>
        </div>
    );
};

export default Blog;