import { StyleSheet } from 'react-native';
import { COLORS } from '../colors';

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.light },
  center: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: COLORS.light, padding: 20 },
  message: { fontFamily: 'Poppins_400Regular', fontSize: 14, marginTop: 10, color: COLORS.text, textAlign: 'center' },
});

export default styles;
