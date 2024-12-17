import { Text, StyleSheet } from "react-native";
import { COLORS } from '../../constants/colors'

function InstructionText(props) {
  return (
		<Text style={styles.text}>{props.children}</Text>
  );
}
export default InstructionText;

const styles = StyleSheet.create({
	text: {
		color: COLORS.YELLOW300,
		fontSize: 24
	}
});
