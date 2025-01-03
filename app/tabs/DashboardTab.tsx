import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import DashboardHeader from "../components/DashboardHeader";
import BudgetDashboard from "../components/BudgetDashboard";
import { useState } from "react";

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

  return (
    <SafeAreaView className=" h-full bg-white">
      <DashboardHeader
        dashboardContent={dashboardContent}
        setDashboardContent={setDashboardContent}
      />
      <BudgetDashboard
        dashboardContent={dashboardContent}
        budgetLimitMonth={budgetLimitMonth}
        setBudgetLimitMonth={setBudgetLimitMonth}
        budgetLimitToday={budgetLimitToday}
        setBudgetLimitToday={setBudgetLimitToday}
      />
    </SafeAreaView>
  );
};
export default DashboardTab;
