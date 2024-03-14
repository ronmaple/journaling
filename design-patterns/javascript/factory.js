// functional way to create instances of an object
// useful for configurable objects
// cons would be in some cases, new class object instances might be more memory efficient

const createUser = ({ name, age, dateOfBirth }) => {
  return {
    name,
    age,
    dateOfBirth,
  };
};

// another way:

const createObjectFromArray = ([key, value]) => ({
  [key]: value,
});

createObjectFromArray(["name", "John"]); // { name: "John" }
