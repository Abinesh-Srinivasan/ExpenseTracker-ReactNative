import { Text } from "react-native";
import ExpenseDisplay from "../components/ExpenseDisplay";
import { SafeAreaView } from "react-native-safe-area-context";

const ExpensesTab = () => {
  return (
    <SafeAreaView className=" h-full w-full bg-white pt-10 pb-14">
      <ExpenseDisplay />
    </SafeAreaView>
  );
};

export default ExpensesTab;
