import { Text } from "react-native";
import ExpenseDisplay from "../components/ExpenseDisplay";
import { SafeAreaView } from "react-native-safe-area-context";

const ExpensesTab = () => {
  return (
    <SafeAreaView className=" h-full w-full bg-white pt-10 pb-14">
      <Text className=" text-center font-rubik-bold text-2xl tracking-wide">
        YOUR EXPENSES
      </Text>
      <ExpenseDisplay />
    </SafeAreaView>
  );
};

export default ExpensesTab;
