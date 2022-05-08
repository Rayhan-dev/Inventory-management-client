import React from 'react';
import { Accordion } from 'react-bootstrap';

const Blogs = () => {
    return (
        <div className="container text-start mt-5 py-5 vh-100">
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header >Difference between javascript and nodeJs.</Accordion.Header>
                    <Accordion.Body className='text-black'>
                        <b>Javascript</b> is a programming language user in browser for writting script . It can run in any enginer .It is the upgraded version of ECMA script that uses Chrome's V8 engine written in C++. <br />
                        <b>NodeJs</b> is a runtime environment for javascript which can be run outside javascript.V8 is the Javascript engine inside of node.js that parses and runs Javascript. Nodejs is written in C, C++ and Javascript.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>When we should use nodejs , when we should use mongoDB</Accordion.Header>
                    <Accordion.Body className='text-black'>
                        <b>NodeJs</b> is used for developing applications that make use of the ability to run JavaScript both on the client as well as on the server side.
                        <b>MongoDb</b> is used as a database . It's a NOSQL database.

                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>Difference between sql and nosql</Accordion.Header>
                    <Accordion.Body className='text-black'>
                        <li>SQL databases are relational, NoSQL databases are non-relational.</li>
                        <li>SQL databases use structured query language and have a predefined schema. NoSQL databases have dynamic schemas for unstructured data.</li>
                        <li>SQL databases are vertically scalable, while NoSQL databases are horizontally scalable.</li>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default Blogs;