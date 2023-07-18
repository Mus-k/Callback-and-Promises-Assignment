// 1. Double using callback.
console.log("question 1. Double using callback. ");
function doubleArray(array, callback) {
  let arrayData = [];
  for (let i = 0; i < array.length; i++) {
    const element = callback(array[i]);
    arrayData.push(element);
  }
  return arrayData;
}

const array = [1, 2, 3, 4, 10];
function double(num) {
  return num * 2;
}
const newArray = doubleArray(array, double);
console.log(newArray);

// 2. String Manipulation.
console.log("question 2. String Manipulation.");
function manipulateString(str, callback) {
  return callback(str);
}
const str = "Hello, world!";
function ConvertToUpperCase(convertStr) {
  return `manipulated string is: ${convertStr.toUpperCase()}`;
}
const capilizeStr = manipulateString(str, ConvertToUpperCase);
console.log(capilizeStr);

// 3. Age in Days.
console.log("question 3. Age in Days.");

function ageInDays(person, logResult) {
  const fullName = person.firstName + "" + person.lastName;
  const ageInDays = person.age * 365;
  return logResult(fullName, ageInDays);
}
const person = {
  firstName: "Mithun",
  lastName: "Sun",
  age: 20,
};
function logResult(fullName, ageInDays) {
  console.log(
    `The person's full name is ${fullName}, and their age in days is ${ageInDays}`
  );
}
ageInDays(person, logResult);

// 4. Arrange in alphabetical order.
console.log("question 4. Arrange in alphabetical order.");

function booksInAlphabeticalOrder(books, callback) {
  const bookTitle = books.map((book) => book.title);
  callback(bookTitle.sort());
}

const books = [
  {
    title: "The Hunger Games",
    author: "Suzanne Collins",
    year: 2010,
  },

  {
    title: "Becoming",
    author: "Michelle Obama",
    year: 2018,
  },
  {
    title: "Where the Crawdads Sing",
    author: "Delia Owens",
    year: 2018,
  },
  {
    title: "The Silent Patient",
    author: "Alex Michaelides",
    year: 2019,
  },
];

function sortedResult(sortedTitle) {
  sortedTitle.forEach((element) => {
    console.log(element);
  });
}
booksInAlphabeticalOrder(books, sortedResult);

// 5. Greeting Promise.
console.log("question 5. Greeting Promise.");
function greet(name) {
  return new Promise((resolve) => {
    const greeting = "Hello, " + name + "!";
    resolve(greeting);
  });
}

const Name = "Mithun";

greet(Name)
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.log(error);
  });

//   6. Fetch results asynchronously.
console.log("question  6. Fetch results asynchronously.");
const getApi = async () => {
  const response = await fetch("https:/jsonplaceholder.typicode.com/todos/1");
  if (response.ok) {
    const data = await response.json();
    console.log("Api data:", data);
  } else {
    console.log("data not found or fetching error");
  }
};

getApi();

//7. Multiple requests.
console.log("question 7. Multiple requests.");
const fetchData = async () => {
  try {
    const todoPromise = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    const postPromise = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1"
    );

    const [todoResponse, postResponse] = await Promise.all([
      todoPromise,
      postPromise,
    ]);

    const todoData = await todoResponse.json();
    const postData = await postResponse.json();

    const combinedData = {
      todo: todoData,
      post: postData,
    };

    console.log("All", combinedData);
  } catch (error) {
    console.error("Error:", error.message);
  }
};

fetchData();

//8. Get Data from API and Display it on the browser console.
console.log(
  " question 8. Get Data from API and Display it on the browser console."
);

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((data) => {
    console.log("question 8.", data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

//   9. Error Handling
console.log("9. Error Handling");
fetch("https://jsonplaceholder.typicode.com/posts/123456789")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    return response.json();
  })
  .then((data) => {
    console.log("9. Error Handling", data);
  })
  .catch((error) => {
    console.error("Error:", error);
    // Display error message on the webpage
    const errorMessage = document.createElement("p");
    errorMessage.textContent = "An error occurred while fetching data.";
    document.body.appendChild(errorMessage);
  });
