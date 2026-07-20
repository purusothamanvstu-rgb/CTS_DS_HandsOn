import React from 'react';
import './App.css';

// 1. Exported data array for Books (from the lab hint)
export const books = [
  { id: 101, bname: 'Master React', price: 670 },
  { id: 102, bname: 'Deep Dive into Angular 11 ', price: 800 },
  { id: 103, bname: 'Mongo Essentials', price: 450 },
];

// 2. Data arrays for Courses and Blogs (based on the screenshot)
const courses = [
  { id: 1, name: 'Angular', date: '4/5/2021' },
  { id: 2, name: 'React', date: '6/3/20201' } // Included the typo from the screenshot
];

const blogs = [
  { id: 1, title: 'React Learning', author: 'Stephen Biz', desc: 'Welcome to learning React!' },
  { id: 2, title: 'Installation', author: 'Schewzdenier', desc: 'You can install React from npm.' }
];

// Main Component
function App() {
  
  // Mapping the Book Details (from the lab hint)
  const bookdet = (
    <ul style={{ listStyleType: 'none', padding: 0 }}>
      {books.map((book) =>
        <div key={book.id} style={{ marginBottom: '20px' }}>
          <h3>{book.bname}</h3>
          <h4>{book.price}</h4>
        </div>
      )}
    </ul>
  );

  // Mapping the Blog Details (content)
  const content = (
    <ul style={{ listStyleType: 'none', padding: 0 }}>
      {blogs.map((blog) =>
        <div key={blog.id} style={{ marginBottom: '20px' }}>
          <h2>{blog.title}</h2>
          <h4 style={{ margin: '5px 0' }}>{blog.author}</h4>
          <p style={{ color: 'gray' }}>{blog.desc}</p>
        </div>
      )}
    </ul>
  );

  // Mapping the Course Details (coursedet)
  const coursedet = (
    <ul style={{ listStyleType: 'none', padding: 0 }}>
      {courses.map((course) =>
        <div key={course.id} style={{ marginBottom: '20px' }}>
          <h2>{course.name}</h2>
          <h4>{course.date}</h4>
        </div>
      )}
    </ul>
  );

  // Final Render Block (from the lab hint)
  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px', fontFamily: 'sans-serif' }}>
      
      {/* Course Details Column */}
      <div className="mystyle1" style={{ padding: '0 40px' }}>
        <h1>Course Details</h1>
        {coursedet}
      </div>

      {/* Book Details Column with Green Borders */}
      <div className="st2" style={{ padding: '0 40px', borderLeft: '4px solid green', borderRight: '4px solid green' }}>
        <h1>Book Details</h1>
        {bookdet}
      </div>

      {/* Blog Details Column */}
      <div className="v1" style={{ padding: '0 40px' }}>
        <h1>Blog Details</h1>
        {content}
      </div>

    </div>
  );
}

export default App;