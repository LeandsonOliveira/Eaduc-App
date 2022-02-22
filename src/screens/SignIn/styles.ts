import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor : theme.colors.background
  },
  image: {
    width: 332,
    height: 209,
    marginBottom: 50,
    marginTop: 300,
  },
  content: {
    marginTop: 100,
    paddingHorizontal: 50,
  },
  title: {
    color: theme.colors.heading,
    textAlign: 'center',
    fontSize: 30,
    marginBottom: 16,
  }

});