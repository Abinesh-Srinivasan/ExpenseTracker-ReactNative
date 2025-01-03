import { View, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import DashboardHeader from "../components/DashboardHeader";
import BudgetDashboard from "../components/BudgetDashboard";
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
    setThisMonthExpensesTotal(thisMonthExpensesTotal);
    setPastExpensesTotal(pastExpensesTotal);
  }, [todayExpenses, thisMonthExpenses, pastExpenses]);

  return (
    <SafeAreaView className=" h-full bg-white">
      <DashboardHeader
        dashboardContent={dashboardContent}
        setDashboardContent={setDashboardContent}
      />
      <ScrollView>
        <Text className=" ml-5 mt-14 font-rubik-bold text-3xl text-blue-600 tracking-wide ">
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
      </ScrollView>
    </SafeAreaView>
  );
};
export default DashboardTab;
