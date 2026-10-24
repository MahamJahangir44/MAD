import { StyleSheet } from 'react-native';
import { COLORS } from '../colors';

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.light, padding: 20, paddingTop: 30 },
  title: { fontFamily: 'Poppins_700Bold', fontSize: 24, textAlign: 'center', color: COLORS.text },
  sub: { fontFamily: 'Poppins_400Regular', fontSize: 13, textAlign: 'center', color: COLORS.text, marginBottom: 24 },
  switchRow: { flexDirection: 'row', backgroundColor: COLORS.switchBg, borderRadius: 14, padding: 5, marginBottom: 22 },
  tab: { flex: 1, padding: 12, borderRadius: 10, alignItems: 'center' },
  tabActive: { backgroundColor: '#fff' },
  tabText: { fontFamily: 'Poppins_400Regular', color: COLORS.maroon },
  tabTextActive: { fontFamily: 'Poppins_700Bold', color: COLORS.maroon },
  inputBox: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#fff', borderWidth: 1.5, borderColor: COLORS.border, borderRadius: 14, paddingHorizontal: 14, marginBottom: 14 },
  switchRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 },
  switchText: { fontFamily: 'Poppins_400Regular', fontSize: 14, color: COLORS.text },
  input: { flex: 1, padding: 14, fontFamily: 'Poppins_400Regular', fontSize: 14 },
  button: { backgroundColor: COLORS.button, padding: 16, borderRadius: 14, alignItems: 'center', marginTop: 16 },
  buttonText: { fontFamily: 'Poppins_700Bold', color: '#fff', fontSize: 18 },
});

export default styles;
