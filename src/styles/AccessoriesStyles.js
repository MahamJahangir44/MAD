import { StyleSheet } from 'react-native';
import { COLORS } from '../colors';

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.light, padding: 16 },
  heading: { fontFamily: 'Poppins_700Bold', fontSize: 20, color: COLORS.text, marginVertical: 10 },
  row: { backgroundColor: '#fff', borderRadius: 16, padding: 12, flexDirection: 'row', alignItems: 'center', marginBottom: 14, elevation: 4, shadowColor: '#000', shadowOpacity: 0.15, shadowRadius: 6, shadowOffset: { width: 0, height: 3 } },
  image: { width: 80, height: 70, borderRadius: 14 },
  label: { flex: 1, fontFamily: 'Poppins_700Bold', fontSize: 16, color: COLORS.text, marginLeft: 18 },
});

export default styles;
