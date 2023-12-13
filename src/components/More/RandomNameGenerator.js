import React, { useState } from 'react';

const nameData = {
  India: {
    male: [
      'Aarav', 'Rahul', 'Vikram', 'Ravi', 'Aditya', 'Arjun', 'Akshay', 'Rohan', 'Karan', 'Aryan',
      'Dev', 'Raj', 'Amit', 'Vishal', 'Arun', 'Rajesh', 'Kunal', 'Pranav', 'Ramesh', 'Ashwin',
      'Surya', 'Vivek', 'Siddharth', 'Vijay', 'Gautam', 'Rajat', 'Shyam', 'Harsh', 'Nikhil', 'Abhinav',
      'Yash', 'Pradeep', 'Manoj', 'Hari', 'Sanjay', 'Shiv', 'Vijay', 'Anand', 'Mukesh', 'Sandeep',
      'Vinay', 'Rahul', 'Avinash', 'Rajiv', 'Karthik', 'Gopal', 'Rajesh', 'Rajendra', 'Rajiv', 'Rajnish',
      'Ashish', 'Vikas', 'Anil', 'Ankit', 'Akash', 'Alok', 'Nitin', 'Rakesh', 'Rajesh', 'Ram',
      'Vishnu', 'Raman', 'Abhay', 'Vikrant', 'Ashok', 'Rajendra', 'Rajkishore', 'Raghav', 'Vikram', 'Anurag',
      'Arvind', 'Rajeev', 'Prakash', 'Ajeet', 'Rupesh', 'Arvind', 'Ranjit', 'Praveen', 'Naveen', 'Arman',
      'Saurav', 'Rajnish', 'Rajkumar', 'Praveen', 'Rajat', 'Raju', 'Vikram', 'Rishi', 'Arvind', 'Raman',
    ],
    female: [
      'Diya', 'Neha', 'Kiran', 'Pooja', 'Sonia', 'Ananya', 'Meera', 'Priya', 'Deepika', 'Jyoti',
      'Riya', 'Sanjana', 'Anjali', 'Aarti', 'Asha', 'Shreya', 'Madhu', 'Preeti', 'Mona', 'Suman',
      'Renu', 'Rani', 'Kavita', 'Geeta', 'Anita', 'Sarita', 'Neeta', 'Alka', 'Komal', 'Nisha',
      'Pallavi', 'Sangeeta', 'Kusum', 'Kajal', 'Rita', 'Manju', 'Savita', 'Roshni', 'Sonali', 'Sapna',
      'Rashmi', 'Rekha', 'Kiran', 'Rajni', 'Ritika', 'Shilpa', 'Sunita', 'Babita', 'Swati', 'Uma',
      'Vandana', 'Veena', 'Nitu', 'Nidhi', 'Anushka', 'Mamta', 'Manisha', 'Poonam', 'Radha', 'Rajeshwari',
      'Ranjeeta', 'Kirti', 'Anamika', 'Aradhana', 'Nandini', 'Rinku', 'Rani', 'Rashmi', 'Varsha', 'Sangeeta',
      'Shweta', 'Tanuja', 'Nagma', 'Pooja', 'Madhuri', 'Monika', 'Reena', 'Sheetal', 'Sadhana', 'Ankita',
      'Shivani', 'Vidya', 'Sweta', 'Sneha', 'Bhawna', 'Jaya', 'Juhi', 'Harshita', 'Komal', 'Vaishali',
    ],
  },
  USA: {
    male: [
      'Jackson', 'Noah', 'Liam', 'Mason', 'Ethan', 'Logan', 'Lucas', 'Carter', 'Aiden', 'James',
      'Alexander', 'Michael', 'William', 'Jacob', 'Daniel', 'Matthew', 'Henry', 'David', 'Joseph', 'Owen',
      'Samuel', 'Benjamin', 'Dylan', 'Nathan', 'Luke', 'Andrew', 'Gabriel', 'Anthony', 'Joshua', 'Christopher',
      'Isaac', 'Ryan', 'Christian', 'Elijah', 'Jonathan', 'Caleb', 'Sebastian', 'Jason', 'Jack', 'Kevin',
      'Justin', 'Brandon', 'Austin', 'Chase', 'Evan', 'Gavin', 'Tyler', 'Thomas', 'Aaron', 'Zachary',
      'Adam', 'Jaxon', 'Adrian', 'Ian', 'Nathaniel', 'Connor', 'Asher', 'Wyatt', 'Levi', 'Jordan',
      'Julian', 'Charles', 'Colton', 'Dominic', 'Parker', 'Maxwell', 'Hudson', 'Miles', 'Nolan', 'Alex',
      'Tristan', 'Cole', 'Cooper', 'Carson', 'Brody', 'Blake', 'Eric', 'Elliot', 'Colin', 'Bentley',
      'Corbin', 'Brayden', 'Kaden', 'Kyle', 'Landon', 'Gage', 'Peter', 'Paul', 'Philip', 'Raymond',
    ],
    female: [
      'Olivia', 'Emma', 'Ava', 'Sophia', 'Isabella', 'Mia', 'Amelia', 'Harper', 'Evelyn', 'Abigail',
      'Emily', 'Elizabeth', 'Sofia', 'Ella', 'Madison', 'Scarlett', 'Victoria', 'Aria', 'Grace', 'Chloe',
      'Camila', 'Luna', 'Penelope', 'Layla', 'Riley', 'Zoey', 'Nora', 'Lily', 'Hannah', 'Avery',
      'Eleanor', 'Hazel', 'Violet', 'Aurora', 'Audrey', 'Bella', 'Claire', 'Stella', 'Lucy', 'Anna',
      'Samantha', 'Caroline', 'Genesis', 'Aaliyah', 'Kennedy', 'Kinsley', 'Allison', 'Maya', 'Sarah', 'Madelyn',
      'Adeline', 'Alexa', 'Gabriella', 'Ariana', 'Elena', 'Mackenzie', 'Kylie', 'Alice', 'Paisley', 'Faith',
      'Katherine', 'Madeline', 'Natalie', 'Eva', 'Maria', 'Brooklyn', 'Leah', 'Zoe', 'Payton', 'Audrina',
      'Skylar', 'Brielle', 'Elise', 'Mila', 'Eliana', 'Marley', 'Margaret', 'Lila', 'Rylee', 'Nicole',
      'Jayla', 'Sadie', 'Juliana', 'Daisy', 'Vanessa', 'Quinn', 'Gabrielle', 'Ellie', 'Laura', 'Lindsay',
    ],
  },
  // Add more countries and their respective names here
};

function RandomNameGenerator() {
    const [selectedCountry, setSelectedCountry] = useState('India');
    const [selectedGender, setSelectedGender] = useState('male');
    const [generatedName, setGeneratedName] = useState('');
  
    const generateRandomName = () => {
      const names = nameData[selectedCountry][selectedGender];
      const newName = names[Math.floor(Math.random() * names.length)];
      setGeneratedName(newName);
    };
  
    const handleCountryChange = (e) => {
      setSelectedCountry(e.target.value);
      // Reset gender selection when country changes
      setSelectedGender('male');
    };
  
    const resetFields = () => {
      setGeneratedName('');
    };
  
    return (
      <div className="container mt-5">
        <div className="card shadow">
          <h1 className="card-header text-center">Random Name Generator</h1>
          <div className="card-body">
            <p>A random name generator produce names without any specific pattern or predetermined sequence. It typically utilizes predefined data sets to generate names based
                 on certain criteria, such as country of origin, gende or any other specified parameters.</p>
            <div className="form-group mt-3">
              <label htmlFor="country"><b>Select Country:</b></label>
              <select
                className="form-control"
                id="country"
                value={selectedCountry}
                onChange={handleCountryChange}
              >
                {Object.keys(nameData).map((country) => (
                  <option key={country} value={country}>
                    {country}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group mt-3">
              <label htmlFor="gender"><b>Select Gender:</b></label>
              <select
                className="form-control"
                id="gender"
                value={selectedGender}
                onChange={(e) => setSelectedGender(e.target.value)}
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
                {/* Add more gender options if required */}
              </select>
            </div>
            <button
              type="button"
              className="btn btn-dark btn-block mt-3"
              onClick={generateRandomName}
            >
              Generate Name
            </button>
            {generatedName && (
              <div className="mt-3 text-center">
                <h3>Generated Name: {generatedName}</h3>
                {/* Add more details or formatting for the generated name here */}
              </div>
            )}
            {generatedName && (
              <div className="mt-3 text-center">
                <button
                  type="button"
                  className="btn btn-dark btn-block"
                  onClick={resetFields}
                >
                  Reset
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
  
  export default RandomNameGenerator;