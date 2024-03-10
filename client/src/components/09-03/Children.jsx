import React from "react";

export default function Children({ students, counter }) {
  console.log(students);
  return (
    <div>
      <h1>Children - {counter}</h1>
      <div>
        {students.map((std, i) => (
          <div>
            <h1>
              {i + 1}. {std}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
}
