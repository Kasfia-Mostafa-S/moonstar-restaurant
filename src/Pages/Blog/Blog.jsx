import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

const Blog = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div>
      <HelmetProvider>
        <Helmet>
          <title>Blog | MSR</title>
        </Helmet>
        <div className="bg-black pt-36 p-20">
          <div
            data-aos="flip-left"
            className="bg-black h-full max-w-7xl mx-auto"
          >
            <h2 className="text-7xl font-DM p-10 text-center font-bold text-white">
              Blog
            </h2>
          </div>
          <div
            data-aos="fade-up"
            className="pt-16 pb-20 font-San text-[#cab2ca] text-base max-w-7xl mx-auto"
          >
            <p className="text-3xl font-semibold text-[#e7e7e7]">
              1. What is One way data binding ?
            </p>
            <p className="text-xl">
              One-way data binding is a technique used in web development to
              bind data from the component to the view or from view to the
              component. It is a unidirectional data flow, meaning that data can
              only be bound from the component to the view or from view to the
              component. In Angular, one-way data binding can be achieved using
              techniques such as interpolation binding, property binding,
              attribute binding, class binding, and style binding. Interpolation
              binding refers to binding expressions into marked-up language.
              Property binding is used to set a property of a view element.
              Attribute binding is used to set an attribute property of a view
              element. Class binding is used to set a class property of a view
              element. Style binding is used to set a style of a view element.
              One-way data binding is useful when you want to display data in a
              view, but you don't want to update the data in the view. It is
              also useful when you want to update the data in the view, but you
              don't want to update the data in the component.
            </p>
            <br />
            <p className="text-3xl font-semibold text-[#e7e7e7]">
              2. What is NPM in node.js ?
            </p>
            <p className="text-xl">
              NPM stands for Node Package Manager. It is a command-line tool
              that comes bundled with Node.js and is used to install, manage,
              and share packages of code written in JavaScript. NPM is the
              world’s largest software registry, with over two million packages
              available for download. You can use NPM to install packages
              locally or globally, and it can also be used to manage
              dependencies for your Node.js projects
            </p>
            <br />
            <p className="text-3xl font-semibold text-[#e7e7e7]">
              2. Different between Mongodb database vs mySQL database.
            </p>
            <p className="text-xl">
              MongoDB and MySQL are two different types of database systems.
              MongoDB is a NoSQL database that stores data in JSON-like
              documents that may vary in structures. On the other hand, MySQL is
              a relational database that stores data in tables and uses SQL to
              access the data. Here are some key differences between the two:{" "}
              <br />- Data Model: MongoDB is document-oriented, while MySQL is
              relational. <br />- Data Representation: MongoDB uses JSON-like
              documents, while MySQL uses tables. <br />- Data Access: MongoDB
              uses a JSON query language, while MySQL uses SQL. In terms of
              performance, MongoDB is faster and more scalable than MySQL,
              especially for large databases. However, MySQL is open source and
              has a fixed schema. Both databases support a rich query language.
              MySQL, like many relational databases, uses structured query
              language (SQL) for access. MongoDB uses the MongoDB Query Language
              (MQL), designed for easy use by developers. The documentation
              compares MQL and SQL syntax for common database operations. MySQL
              and MongoDB use indexing to improve query speeds and performance.
              Indexes are database structures that link to frequently accessed
              data. The index helps find and retrieve data very quickly. Both
              MySQL and MongoDB database platforms use hash indexes, B-tree
              indexes, and several others.
            </p>
          </div>
        </div>
      </HelmetProvider>
    </div>
  );
};

export default Blog;
