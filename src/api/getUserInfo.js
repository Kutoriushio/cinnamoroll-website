import axios from "axios";

export async function getUserInfo(userEmail) {
  try {
    const response = await axios.get(
      `http://localhost:8080/user?email=${userEmail}`
    );
    const userInfo = response.data;
    return userInfo;
  } catch (error) {
    console.error("Error fetching user name from the database:", error);
    throw error;
  }
}
