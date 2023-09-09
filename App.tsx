import { SafeAreaView, StatusBar } from "react-native";
import Carrinho from "./src/pages/Carrinho/index";
import {
  useFonts,
  Poppins_200ExtraLight_Italic,
  Poppins_300Light,
  Poppins_500Medium,
} from "@expo-google-fonts/poppins";

export default function App() {
  const [fontes] = useFonts({
    PoppinsExli: Poppins_200ExtraLight_Italic,
    PoppinsL: Poppins_300Light,
    PoppinsM: Poppins_500Medium,
  });

  if (!fontes) {
    return null;
  }

  return (
    <SafeAreaView>
      <StatusBar />
      <Carrinho />
    </SafeAreaView>
  );
}
