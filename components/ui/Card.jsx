import { StyleSheet } from "react-native";
import { COLORS } from '../../constants/colors'
import { View } from "react-native";

function Card({children}) {
  return (
		<View style={styles.container}>{ children }</View>
  );
}
export default Card;

const styles = StyleSheet.create({
	container: {
    marginTop: 36,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: COLORS.PURPLE500,
    borderRadius: 8,
    elevation: 4 /* elevation é uma prop apenas do android*/,
    shadowColor: "black" /* only ios*/,
    shadowOffset: { width: 2, height: 4 } /* only ios*/,
    shadowRadius: 8 /* only ios*/,
    shadowOpacity: 0.3 /* only ios*/,
    alignItems: "center",
	},
});
