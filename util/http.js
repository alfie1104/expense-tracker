import axios from "axios";
import { API_URL } from "@env";

export function storeExpense(expenseData) {
  axios.post(`${API_URL}/expenses.json`, expenseData);
}

export async function fetchExpenses() {
  const response = await axios.get(`${API_URL}/expenses.json`);

  const expenses = [];

  for (const key in response.data) {
    const expenseObj = {
      id: key,
      amount: response.data[key].amount,
      date: new Date(response.data[key].date),
      description: response.data[key].description,
    };
    expenses.push(expenseObj);
  }

  return expenses;
}
