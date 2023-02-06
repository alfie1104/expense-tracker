import axios from "axios";
import { API_URL } from "@env";

export function storeExpense(expenseData) {
  console.log(API_URL);
  axios.post(`${API_URL}/expenses.json`, expenseData);
}
