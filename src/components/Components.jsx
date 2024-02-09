import React from "react";

const Components = () => {
  const userData = [
    { id: "1", name: "Joe", user_type: "Developer", age: 31, years: 11 },
    { id: "2", name: "Hill", user_type: "Designer", age: 26, years: 4 },
    { id: "3", name: "John", user_type: "Teacher", age: 24, years: 2 },
    { id: "4", name: "Sam", user_type: "Entreprenuer", age: 58, years: 25 },
    { id: "5", name: "Jack", user_type: "Designer", age: 43, years: 18 },
  ];

  const renderAllItems = (data) => {
    return data.map((item) => (
      <React.Fragment key={item.id}>
        <li>
          <span>Id: {item.id}</span>
          <span>Name : {item.name}</span>
          <span>User Type: {item.user_type}</span>
          <span>Age:{item.age}</span>
          <span>Experience:{item.years}</span>
        </li>
      </React.Fragment>
    ));
  };

  const renderBasedOnUserType = (data) => {
    const filteredUsers = data.filter((item) => item.user_type === "Designer");
    return renderAllItems(filteredUsers);
  };

  const renderBasedOnName = (data) => {
    const filteredUsers = data.filter((item) => item.name[0] === "J");
    return renderAllItems(filteredUsers);
  };

  const renderBasedOnAge = (data) => {
    const filteredUsers = data.filter((item) => item.age > 28 && item.age <= 51);
    return renderAllItems(filteredUsers);
  };

  const renderTotalExp = (data) => {
    const totalExperienceOfDesigners = data
      .filter((user) => user.user_type === "Designer")
      .map((designer) => designer.years)
      .reduce((total, years) => total + years, 0);
    return totalExperienceOfDesigners;
  };

  return (
    <>
      <h1>LIST ALL ITEMS</h1>
      <div>
        <ul>{renderAllItems(userData)}</ul>
      </div>

      <h1>LIST ALL DATA BASED ON USERTYPE</h1>
      <div>
        <ul>{renderBasedOnUserType(userData)}</ul>
      </div>

      <h1>FILTER ALL DATA STARTING WITH THE LETTER J</h1>
      <div>
        <ul>{renderBasedOnName(userData)}</ul>
      </div>

      <h1>FILTER DATA BASED ON AGE</h1>
      <div>
        <ul>{renderBasedOnAge(userData)}</ul>
      </div>

      <h1>FIND THE TOTAL EXPERIENCE OF THE DESIGNERS</h1>
      <div>
        <h2>Total Experience: {renderTotalExp(userData)}</h2>
      </div>
    </>
  );
};

export default Components;
