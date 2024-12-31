import {
  View,
  Text,
  FlatList,
  Button,
  TouchableOpacity,
  Image,
} from "react-native";

const editIcon = require("@/assets/images/ExpenseCardIcons/edit.png");
const deleteIcon = require("@/assets/images/ExpenseCardIcons/delete.png");

const ExpenseDisplay = () => {
  const exampleExpenses = [
    { id: 1, category: "Food", amount: 150, date: "2024-12-30" },
    { id: 2, category: "Travel", amount: 500, date: "2024-12-28" },
    { id: 3, category: "Shopping", amount: 200, date: "2024-12-25" },
    { id: 4, category: "Shopping", amount: 200, date: "2024-12-25" },
    { id: 5, category: "Shopping", amount: 200, date: "2024-12-25" },
    { id: 6, category: "Shopping", amount: 200, date: "2024-12-25" },
    { id: 7, category: "Shopping", amount: 200, date: "2024-12-25" },
    { id: 8, category: "Shopping", amount: 200, date: "2024-12-25" },
    { id: 9, category: "Shopping", amount: 200, date: "2024-12-25" },
  ];

  type Expense = {
    id: number;
    category: string;
    amount: number;
    date: string;
  };

  const renderExpenseCard = ({ item }: { item: Expense }) => {
    let date = item.date;
    item.date = date.split("-").reverse().join("-");
    return (
      <View className=" flex flex-row mt-5 border border-gray-300 rounded-2xl px-6 py-4 items-center justify-between">
        {/* Category,Amount,Date */}
        <View className=" flex flex-col">
          <Text className=" font-rubik-bold text-2xl text-red-500 tracking-wide">
            {item.category}
          </Text>
          <Text className=" text-blue-500 text-lg font-rubik-semibold">
            ₹.{item.amount}
          </Text>
          <Text className=" tracking-wider font-rubik-semibold">
            {item.date}
          </Text>
        </View>
        {/* Buttons */}
        <View className=" flex flex-row items-center gap-3">
          <TouchableOpacity className="border border-white px-3 py-1 rounded-lg bg-green-500">
            <Text className=" font-rubik-regular tracking-wide text-white">
              Read
            </Text>
          </TouchableOpacity>
          <TouchableOpacity className="border border-white px-3 py-1 rounded-lg bg-orange-500">
            <Image source={editIcon} className=" size-6" />
          </TouchableOpacity>
          <TouchableOpacity className="border border-white px-3 py-1 rounded-lg bg-red-500">
            <Image source={deleteIcon} className=" size-6" />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View className=" px-6 mt-3">
      <FlatList
        showsVerticalScrollIndicator={false}
        data={exampleExpenses}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderExpenseCard}
      />
    </View>
  );
};
export default ExpenseDisplay;
