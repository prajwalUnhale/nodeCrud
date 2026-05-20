const BASE_URL = "http://localhost:3000/users";

// Create Users
const users = [
  { name: "Prajwal", age: 22 },
  { name: "Rohit", age: 25 },
  { name: "Amit", age: 28 },
  { name: "Sneha", age: 24 },
  { name: "Karan", age: 30 }
];

// CREATE USER
const createUser = async (user) => {
  try {
    const res = await fetch(BASE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    });

    const data = await res.json();

    console.log("Created User:", data);

    return data;
  } catch (error) {
    console.error("Create Error:", error.message);
  }
};

// GET ALL USERS
const getUsers = async () => {
  try {
    const res = await fetch(BASE_URL);

    const data = await res.json();

    console.log("\nAll Users:");
    console.log(data);

    return data;
  } catch (error) {
    console.error("Fetch Error:", error.message);
  }
};

// UPDATE USER
const updateUser = async (id, updatedData) => {
  try {
    const res = await fetch(`${BASE_URL}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(updatedData)
    });

    const data = await res.json();

    console.log("\nUpdated User:");
    console.log(data);

  } catch (error) {
    console.error("Update Error:", error.message);
  }
};

// DELETE USER
const deleteUser = async (id) => {
  try {
    const res = await fetch(`${BASE_URL}/${id}`, {
      method: "DELETE"
    });

    const data = await res.json();

    console.log("\nDeleted User:");
    console.log(data);

  } catch (error) {
    console.error("Delete Error:", error.message);
  }
};

// MAIN FUNCTION
const runCRUD = async () => {

  // Create 5 Users
  const createdUsers = [];

  for (const user of users) {
    const created = await createUser(user);
    createdUsers.push(created);
  }

  // Fetch All Users
  await getUsers();

  // Update First User
  const firstUserId = createdUsers[0]._id;

  await updateUser(firstUserId, {
    name: "Updated Prajwal",
    age: 99
  });

  // Delete Second User
  const secondUserId = createdUsers[1]._id;

  await deleteUser(secondUserId);

  // Final Users List
  await getUsers();
};

// Run
runCRUD();