// import React, { useState, useEffect } from 'react';

// const Greetings = () => {
//     const [greeting, setGreeting] = useState('');
//     const [name, setName] = useState('');
//     const [department, setDepartment] = useState('');

//     useEffect(() => {
//         // Simulate fetching data from an API endpoint (replace with actual API call)
//         fetch('https://api.example.com/greetings') // Replace URL with your API endpoint
//             .then(response => response.json())
//             .then(data => {
//                 // Extract data from the response
//                 const { greeting, name, department } = data;

//                 // Update state with fetched data
//                 setGreeting(greeting);
//                 setName(name);
//                 setDepartment(department);
//             })
//             .catch(error => {
//                 console.error('Error fetching data:', error);
//             });
//     }, []); // Empty dependency array to run effect only once on component mount

//     return (
//         <div>
//             <h1>{greeting}</h1>
//             <p>Your name: {name}</p>
//             <p>Department: {department}</p>
//         </div>
//     );
// };

// export default Greetings;
// ///////////////////////////////////
// import './Data_on_img.css';
// import './img.css'
// import React, { useState, useEffect } from 'react';
// const Data_on_img = () => {
//     // Initialize state with mock data
//     const [greeting, setGreeting] = useState('Good morning');
//     const [name, setName] = useState('John Doe');
//     const [department, setDepartment] = useState('Engineering');

//     // Use useEffect to simulate API data fetching (for demonstration)
//     useEffect(() => {
//         // Simulate API request delay (mock asynchronous behavior)
//         const delay = setTimeout(() => {
//             // Update state with mock data
//             setGreeting('Good morning');
//             setName('John Doe');
//             setDepartment('Engineering');
//         }, 1000); // Simulate delay of 1 second (1000 milliseconds)

//         // Clean up timeout on component unmount (optional)
//         return () => clearTimeout(delay);
//     }, []); // Empty dependency array to run effect only once on component mount

//     return (
//         <>

//             <div>
//                 <h1>{greeting}</h1>
//                 <p>Your name: {name}</p>
//                 <p>Department: {department}</p>
//             </div>
//         </>
//     );
// };

// export default Data_on_img;
// ////////////////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////////////////
////////// CORRECT code ///////////////////////////////
// import React, { useState, useEffect } from 'react';
// import './Data_on_img.css'; // Import CSS for component-specific styles
// import './img.css'; // Import CSS for image-specific styles
// import sampleImage from './awkum_administraion_pic.jpg';
// // import { Button } from './Bootstrap'; // Corrected import for Button component
// const Data_on_img = () => {
//     // Initialize state with mock data
//     const [greeting, setGreeting] = useState('Good morning');
//     const [name, setName] = useState('John Doe');
//     const [department, setDepartment] = useState('Engineering');

//     // Use useEffect to simulate API data fetching (for demonstration)
//     useEffect(() => {
//         // Simulate API request delay (mock asynchronous behavior)
//         const delay = setTimeout(() => {
//             // Update state with mock data
//             setGreeting('Good morning');
//             setName('John Doe');
//             setDepartment('Engineering');
//         }, 1000); // Simulate delay of 1 second (1000 milliseconds)

//         // Clean up timeout on component unmount (optional)
//         return () => clearTimeout(delay);
//     }, []); // Empty dependency array to run effect only once on component mount

//     return (
//         <>
//             <div className="image-container">
//                 <div className="sami">
//                     {/* Render the image inside the div */}
//                     <img src={sampleImage} alt="Sample Image" className="img-content" />
//                 </div>
//             </div>
//             <div className="data-container">
//                 <h1>{greeting}</h1>
//                 <p>Your name: {name}</p>
//                 <p>Department: {department}</p>
//                 <div className="btn">
//                     <button type="button" className="btn btn-success">View Profile</button>
//                     {/* <Button className="btn btn-sm btn-outline-danger " type="button">View Profile</Button> */}
//                 </div>
//             </div>
//         </>
//     );
// };

// export default Data_on_img;

// ////////////////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////////////////
import React, { useState, useEffect } from 'react';
import './Data_on_img.css'; // Import CSS for component-specific styles
import './img.css'; // Import CSS for image-specific styles
import sampleImage from './awkum_administraion_pic.jpg';
import ScrollerCard from './scrollercard'; // Import the ScrollerCard component

const Data_on_img = () => {
    // Initialize state with mock data
    const [greeting, setGreeting] = useState('Good morning');
    const [name, setName] = useState('John Doe');
    const [department, setDepartment] = useState('Engineering');

    // Use useEffect to simulate API data fetching (for demonstration)
    useEffect(() => {
        // Simulate API request delay (mock asynchronous behavior)
        const delay = setTimeout(() => {
            // Update state with mock data
            setGreeting('Good morning');
            setName('John Doe');
            setDepartment('Engineering');
        }, 1000); // Simulate delay of 1 second (1000 milliseconds)

        // Clean up timeout on component unmount (optional)
        return () => clearTimeout(delay);
    }, []); // Empty dependency array to run effect only once on component mount

    return (
        <>
            <div className="container-fluid">
                <div className="image-container">
                    <div className="sami">
                        {/* Render the image inside the div */}
                        <img src={sampleImage} alt="Sample Image" className="img-content" />
                    </div>
                </div>
                <div className="data-container">
                    <h1>{greeting}</h1>
                    <p>Your name: {name}</p>
                    <p>Department: {department}</p>
                    <div className="btn">
                        <button type="button" className="btn btn-success">View Profile</button>
                    </div>
                </div>
                {/* Include the ScrollerCard component */}
                <div className="cards">

                    <ScrollerCard />
                    <ScrollerCard />
                </div>
            </div>
        </>
    );
};

export default Data_on_img;
