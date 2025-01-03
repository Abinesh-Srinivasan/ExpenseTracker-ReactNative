import { View, Text, ScrollView, Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import DashboardHeader from "../components/DashboardHeader";
import BudgetDashboard from "../components/BudgetDashboard";
import BarchartComponent from "../components/BarchartComponent";
import { useEffect, useState } from "react";

type Expense = {
  id: number;
  category: string;
  amount: number;
  date: string;
  description: string;
};

interface DashboardProps {
  todayExpenses: Expense[];
  thisMonthExpenses: Expense[];
  pastExpenses: Expense[];
}

const DashboardTab = ({
  todayExpenses,
  thisMonthExpenses,
  pastExpenses,
}: DashboardProps) => {
  const [dashboardContent, setDashboardContent] = useState("This Month");
  const [budgetLimitMonth, setBudgetLimitMonth] = useState(0);
  const [budgetLimitToday, setBudgetLimitToday] = useState(0);

  const [todayExpensesTotal, setTodayExpensesTotal] = useState(0);
  const [thisMonthExpensesTotal, setThisMonthExpensesTotal] = useState(0);
  const [pastExpensesTotal, setPastExpensesTotal] = useState(0);
  // hooks for barchart component
  const [dailyExpenses, setDailyExpenses] = useState<number[]>([]);

  useEffect(() => {
    const todayExpensesTotal = todayExpenses.reduce(
      (total, expense) => total + expense.amount,
      0
    );
    const thisMonthExpensesTotal = thisMonthExpenses.reduce(
      (total, expense) => total + expense.amount,
      0
    );
    const pastExpensesTotal = pastExpenses.reduce(
      (total, expense) => total + expense.amount,
      0
    );

    setTodayExpensesTotal(todayExpensesTotal);
    setThisMonthExpensesTotal(thisMonthExpensesTotal + todayExpensesTotal);
    setPastExpensesTotal(pastExpensesTotal);
  }, [todayExpenses, thisMonthExpenses, pastExpenses]);

  // functions for Barchart component
  useEffect(() => {
    const dailyExpenses = Array.from({ length: 31 }, () => 0);

    const parseDate = (dateString: string) => {
      const [day, month, year] = dateString.split("-").map(Number);
      return new Date(year, month - 1, day); // Month is zero-based
    };

    thisMonthExpenses.forEach((expense) => {
      const date = parseDate(expense.date).getDate();
      dailyExpenses[date - 1] += expense.amount;
    });
    todayExpenses.forEach((expense) => {
      const date = parseDate(expense.date).getDate();
      dailyExpenses[date - 1] += expense.amount;
    });
    setDailyExpenses(dailyExpenses);
  }, [thisMonthExpenses]);

  return (
    <SafeAreaView className=" h-full bg-white">
      <DashboardHeader
        dashboardContent={dashboardContent}
        setDashboardContent={setDashboardContent}
      />
      <ScrollView>
        <Text className=" ml-5 mt-8 font-rubik-bold text-3xl text-blue-600 tracking-wide ">
          Expense Computation
        </Text>
        <BudgetDashboard
          dashboardContent={dashboardContent}
          budgetLimitMonth={budgetLimitMonth}
          setBudgetLimitMonth={setBudgetLimitMonth}
          budgetLimitToday={budgetLimitToday}
          setBudgetLimitToday={setBudgetLimitToday}
          todayExpensesTotal={todayExpensesTotal}
          thisMonthExpensesTotal={thisMonthExpensesTotal}
          pastExpensesTotal={pastExpensesTotal}
        />
        {dashboardContent === "This Month" && (
          <BarchartComponent data={dailyExpenses} />
        )}
      </ScrollView>
    </SafeAreaView>
  );
};
export default DashboardTab;
