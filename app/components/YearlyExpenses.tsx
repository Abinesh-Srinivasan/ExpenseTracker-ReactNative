import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
const YearlyExpenses = ({
  setDashboardContent,
}: {
  setDashboardContent: (value: string) => void;
}) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const [monthlyExpenses, setMonthlyExpenses] = useState(
    new Array(12).fill("")
  );
  const [totalYearlyExpenses, setTotalYearlyExpenses] = useState("0");

  const handleInputChange = (index: number, value: string) => {
    const newMonthlyExpenses = [...monthlyExpenses];
    newMonthlyExpenses[index] = value;
    setMonthlyExpenses(newMonthlyExpenses);
  };

  const calculateTotal = () => {
    const total = monthlyExpenses.reduce(
      (sum, expense) => sum + (parseFloat(expense) || 0),
      0
    );
    setTotalYearlyExpenses(total);
  };

  const clearYearlyExpenses = () => {
    Alert.alert(
      "Confirmation",
      "Do you want to reset all the Monthly Expenses?",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Reset",
          style: "destructive",
          onPress: () => {
            setMonthlyExpenses(new Array(12).fill(""));
            setTotalYearlyExpenses("0");
          },
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <View className=" mx-5 mt-10 mb-10">
      <Text className=" font-rubik-bold text-3xl text-violet-500">
        Yearly Expenses
      </Text>
      <View className=" mt-5 flex flex-col gap-2">
        <Text className=" text-center font-rubik-medium px-6 leading-6 text-slate-800">
          Nesharo created this Yearly Expenses Tracker entirely for User
          Purposes
        </Text>
        <Text className=" text-center font-rubik-medium px-6 leading-6 text-slate-800">
          Data can be retained once the user fills it out
        </Text>
        <Text className=" text-center font-rubik-medium px-6 leading-6 text-slate-800">
          You can view the Total Monthly Expenses in the{" "}
          <Text
            className=" text-fuchsia-500"
            onPress={() => setDashboardContent("This Month")}
          >
            This Month
          </Text>{" "}
          section at month end
        </Text>
      </View>
      {/* yearly tracker */}
      <View className=" mx-10 mt-8 flex flex-col gap-4">
        {months.map((month, index) => (
          <View
            key={index}
            className=" flex flex-row justify-between items-center"
          >
            <Text className=" font-rubik-medium tracking-wide text-2xl text-slate-800">
              {month}
            </Text>
            <TextInput
              keyboardType="numeric"
              value={monthlyExpenses[index]}
              onChangeText={(text) => handleInputChange(index, text)}
              placeholder="Enter Amount"
              className=" border border-gray-400 px-4 py-1 w-44 rounded-md font-rubik-regular"
            />
          </View>
        ))}
      </View>
      <View className=" mt-10 flex flex-col justify-center items-center w-full">
        <View className=" mx-20 flex flex-row gap-5 items-center">
          <Text className="font-rubik-medium tracking-wide text-3xl">
            Total:
          </Text>
          <Text className="font-rubik-medium tracking-wide text-3xl">
            ₹.{totalYearlyExpenses}
          </Text>
        </View>
        <View className=" flex flex-row gap-10 items-center">
          <TouchableOpacity className=" mt-5" onPress={calculateTotal}>
            <Text className="font-rubik-semibold text-xl text-white bg-green-500 px-6 py-3 rounded-lg">
              Calculate
            </Text>
          </TouchableOpacity>
          <TouchableOpacity className=" mt-5" onPress={clearYearlyExpenses}>
            <Text className="font-rubik-semibold text-xl text-white bg-red-500 px-6 py-3 rounded-lg">
              Reset
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
export default YearlyExpenses;
