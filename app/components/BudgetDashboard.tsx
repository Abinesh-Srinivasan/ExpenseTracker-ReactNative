import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
const BudgetDashboard = ({
  dashboardContent,
  budgetLimitMonth,
  setBudgetLimitMonth,
  budgetLimitToday,
  setBudgetLimitToday,
  todayExpensesTotal,
  thisMonthExpensesTotal,
  pastExpensesTotal,
}: {
  dashboardContent: string;
  budgetLimitMonth: number;
  setBudgetLimitMonth: (value: number) => void;
  budgetLimitToday: number;
  setBudgetLimitToday: (value: number) => void;
  todayExpensesTotal: number;
  thisMonthExpensesTotal: number;
  pastExpensesTotal: number;
}) => {
  const [budgetLimitEntering, setBudgetLimitEntering] = useState("");

  const handleBudgetSubmit = (field: string) => {
    const parsedValue = parseFloat(budgetLimitEntering);
    if (isNaN(parsedValue) || parsedValue <= 0) {
      Alert.alert("Msg from Nesharo","Please Enter a Valid Budget Limit");
    }
    if (field === "This Month") {
      setBudgetLimitMonth(parseFloat(budgetLimitEntering));
    } else {
      setBudgetLimitToday(parseFloat(budgetLimitEntering));
    }
    setBudgetLimitEntering("");
  };

  const setBudgetLimitCard = (content: string) => (
    <View className=" mt-5 w-3/4 flex flex-col items-center">
      <Text className=" text-center p-4 font-rubik-regular leading-6 text-lg text-sky-700">
        Set your {dashboardContent} Budget to Unlock this Section
      </Text>
      <View className=" flex flex-row items-center gap-4">
        <TextInput
          value={budgetLimitEntering}
          onChangeText={(text) => setBudgetLimitEntering(text)}
          maxLength={10}
          keyboardType="numeric"
          placeholder="Can't Edit later"
          className=" border rounded-lg border-gray-300 w-40 pl-3 font-rubik-regular"
        />
        <TouchableOpacity onPress={() => handleBudgetSubmit(dashboardContent)}>
          <Text className=" bg-green-500 font-rubik-medium text-white w-20 text-center py-3 rounded-lg">
            Set
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  // rendering starts here
  if (dashboardContent === "This Month") {
    return (
      <View className=" flex items-center">
        {budgetLimitMonth > 0 ? (
          <View className=" mt-5 flex flex-col gap-4">
            <Text className=" text-2xl font-rubik-medium tracking-wider text-orange-500">
              Budget Limit: {budgetLimitMonth.toFixed(2)}
            </Text>
            <Text className=" text-2xl font-rubik-medium tracking-wider text-sky-500">
              Expenses: {thisMonthExpensesTotal.toFixed(2)}
            </Text>
            <Text
              className={` text-2xl font-rubik-medium tracking-wider ${
                budgetLimitMonth - thisMonthExpensesTotal > 0
                  ? "text-green-600"
                  : "text-red-600"
              }`}
            >
              Remaining:{" "}
              {(budgetLimitMonth - thisMonthExpensesTotal).toFixed(2)}
            </Text>
          </View>
        ) : (
          setBudgetLimitCard(dashboardContent)
        )}
      </View>
    );
  }
  if (dashboardContent === "Today") {
    return (
      <View className=" flex items-center">
        {budgetLimitToday > 0 ? (
          <View className=" mt-5 flex flex-col gap-4">
            <Text className=" text-2xl font-rubik-medium tracking-wider text-orange-500">
              Budget Limit: ₹.{budgetLimitToday.toFixed(2)}
            </Text>
            <Text className=" text-2xl font-rubik-medium tracking-wider text-sky-500">
              Expenses: ₹.{todayExpensesTotal.toFixed(2)}
            </Text>
            <Text
              className={` text-2xl font-rubik-medium tracking-wider ${
                budgetLimitToday - todayExpensesTotal > 0
                  ? "text-green-600"
                  : "text-red-600"
              }`}
            >
              Remaining: ₹.{(budgetLimitToday - todayExpensesTotal).toFixed(2)}
            </Text>
          </View>
        ) : (
          setBudgetLimitCard(dashboardContent)
        )}
      </View>
    );
  }
  return (
    <View className=" mt-8 mx-10 flex flex-col gap-3">
      <Text className=" text-2xl font-rubik-medium tracking-wider text-slate-600 text-center ">
        Past Expenses: ₹.{pastExpensesTotal.toFixed(2)}
      </Text>
      <Text className=" font-rubik-regular text-slate-800 text-center">
        Clear all the Data atleast once per Year through Developer Tab to reset the Past
        Expenses{" "}
      </Text>
    </View>
  );
};
export default BudgetDashboard;
