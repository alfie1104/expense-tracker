import axios from "axios";

const baseUrl = "https://react-native-course-ba22d-default-rtdb.firebaseio.com";
export function storeExpnese(expenseData) {
  axios.post(`${baseUrl}/expenses.json`, expenseData);
}
