import { StyleSheet } from 'react-native';
import { COLORS } from '../colors';

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.primary, alignItems: 'center', justifyContent: 'center' },
  shapeTop: { position: 'absolute', top: 0, right: 0, width: 110, height: 150, borderBottomLeftRadius: 70, backgroundColor: 'rgba(255,255,255,0.2)' },
  shapeBottom: { position: 'absolute', bottom: 0, left: 0, width: 190, height: 170, borderTopRightRadius: 70, backgroundColor: 'rgba(255,255,255,0.2)' },
  logo: { width: 130, height: 120, borderRadius: 24 },
  appName: { fontFamily: 'Poppins_700Bold', fontSize: 36, color: '#fff', marginTop: 18 },
  tagline: { fontFamily: 'Poppins_400Regular', fontSize: 13, color: '#fff', letterSpacing: 1 },
  offerBox: { backgroundColor: '#fff', paddingVertical: 14, paddingHorizontal: 40, borderRadius: 18, alignItems: 'center', marginTop: 45 },
  offerBig: { fontFamily: 'Poppins_700Bold', fontSize: 26, color: COLORS.maroon },
  offerSmall: { fontFamily: 'Poppins_400Regular', fontSize: 14, color: COLORS.maroon },
});

export default styles;
