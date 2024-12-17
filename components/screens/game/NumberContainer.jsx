import { Text, View, StyleSheet } from "react-native";
import { COLORS } from "../../../constants/colors";

function NumberContainer(props) {
	return (
		<View style={styles.container}>
			<Text style={styles.numberText}>{props.children}</Text>
		</View>
  );
}
export default NumberContainer;

const styles = StyleSheet.create({
	container: {
		borderWidth: 4,
		borderColor: COLORS.YELLOW300,
		padding: 24,
		borderRadius: 8,
		alignItems: 'center',
		justifyContent: 'center',
		marginHorizontal: 16,
		marginTop: 16
	},
	numberText: {
		color: COLORS.YELLOW300,
		fontSize: 36,
		fontWeight: 'bold',
	}
});
