import { View, Text } from "react-native";
const BudgetDashboard = ({
  dashboardContent,
  budgetLimitMonth,
  setBudgetLimitMonth,
  budgetLimitToday,
  setBudgetLimitToday,
}: {
  dashboardContent: string;
  budgetLimitMonth: number;
  setBudgetLimitMonth: (value: number) => void;
  budgetLimitToday: number;
  setBudgetLimitToday: (value: number) => void;
}) => {
  const setBudgetLimitCard = (content: string) => <View></View>;

  if (dashboardContent === "This Month") {
    return (
      <View>
        {budgetLimitMonth > 0 ? (
          <View></View>
        ) : (
          setBudgetLimitCard(dashboardContent)
        )}
      </View>
    );
  }
  if (dashboardContent === "Today") {
    return (
      <View>
        {budgetLimitToday > 0 ? (
          <View></View>
        ) : (
          setBudgetLimitCard(dashboardContent)
        )}
      </View>
    );
  }
};
export default BudgetDashboard;
