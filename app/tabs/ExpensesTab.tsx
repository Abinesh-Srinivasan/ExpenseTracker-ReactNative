import { Text } from "react-native";
import ExpenseDisplay from "../components/ExpenseDisplay";
import ExpenseAdd from "../components/ExpenseAdd";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";

const ExpensesTab = () => {
  type Expense = {
    id: number;
    category: string;
    amount: number;
    date: string;
    description: string;
  };
  const [expenses, setExpenses] = useState<Expense[]>([
    {
      id: 0,
      category: "Food",
      amount: 150,
      date: "02-01-2025",
      description: "Hi, this is Nesharo",
    },
    {
      id: 10,
      category: "Food",
      amount: 150,
      date: "02-01-2025",
      description: "Hi, this is Nesharo",
    },
    {
      id: 100,
      category: "Food",
      amount: 150,
      date: "02-01-2025",
      description: "Hi, this is Nesharo",
    },
    {
      id: 2,
      category: "Travel",
      amount: 500,
      date: "01-01-2025",
      description: "Hi, this is Nesharo",
    },
    {
      id: 20,
      category: "Travel",
      amount: 500,
      date: "01-01-2025",
      description: "Hi, this is Nesharo",
    },
    {
      id: 200,
      category: "Travel",
      amount: 500,
      date: "01-01-2025",
      description: "Hi, this is Nesharo",
    },
    {
      id: 3,
      category: "Shopping",
      amount: 200,
      date: "13-10-2024",
      description:
        "Hi, this is Nesharo, hello, how are youshflsh, farith suresh ganesh raja diljaz abhimanyu, Hi, this is Nesharo, hello, how are youshflsh, Hi, this is Nesharo",
    },
    {
      id: 30,
      category: "Shopping",
      amount: 200,
      date: "13-10-2024",
      description:
        "Hi, this is Nesharo, hello, how are youshflsh, farith suresh ganesh raja diljaz abhimanyu, Hi, this is Nesharo, hello, how are youshflsh, Hi, this is Nesharo",
    },
    {
      id: 300,
      category: "Shopping",
      amount: 200,
      date: "13-10-2024",
      description:
        "Hi, this is Nesharo, hello, how are youshflsh, farith suresh ganesh raja diljaz abhimanyu, Hi, this is Nesharo, hello, how are youshflsh, Hi, this is Nesharo",
    },
  ]);

  const addExpense = (newExpense: Expense) => {
    setExpenses((prevExpenses) => [...prevExpenses, newExpense]);
  };

  return (
    <SafeAreaView className=" h-full w-full bg-white pt-5 pb-14">
      <ExpenseAdd onAddExpense={addExpense} />
      <ExpenseDisplay expenses={expenses} setExpenses={setExpenses} />
    </SafeAreaView>
  );
};

export default ExpensesTab;
