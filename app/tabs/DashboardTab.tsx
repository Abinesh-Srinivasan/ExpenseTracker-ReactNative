import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import DashboardHeader from "../components/DashboardHeader";
import { useState } from "react";

  type Expense = {
    id: number;
    category: string;
    amount: number;
    date: string;
    description: string;
  };

  interface DashboardProps{
  expenses:Expense[]
}

const DashboardTab = ({expenses}:DashboardProps) => {
    const [dashboardContent, setDashboardContent] = useState("This Month");
  
  return (
    <SafeAreaView className=" h-full bg-white">
      <DashboardHeader dashboardContent={dashboardContent} setDashboardContent={setDashboardContent} />
    </SafeAreaView>
  );
};
export default DashboardTab;
