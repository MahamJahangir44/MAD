import { StyleSheet } from 'react-native';
import { COLORS } from '../colors';

// width of the banner text 
export const TEXT_WIDTH = 620;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.light, paddingTop: 50, paddingHorizontal: 16 },

  // top bar
  topBar: { flexDirection: 'row', alignItems: 'center', marginBottom: 14 },
  topBarText: { flex: 1 },
  welcome: { fontFamily: 'Poppins_400Regular', fontSize: 13, color: COLORS.gray },
  title: { fontFamily: 'Poppins_700Bold', fontSize: 28, color: COLORS.text },
  iconBtn: { width: 46, height: 46, borderRadius: 12, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center', marginLeft: 10, elevation: 4 },

  // moving banner
  banner: { backgroundColor: COLORS.button, height: 42, borderRadius: 12, overflow: 'hidden', justifyContent: 'center' },
  bannerText: { fontFamily: 'Poppins_700Bold', color: COLORS.maroon, fontSize: 13, width: TEXT_WIDTH },

  // categories
  heading: { fontFamily: 'Poppins_700Bold', fontSize: 20, color: COLORS.text, marginTop: 18, marginBottom: 10 },
  catCard: { height: 120, borderRadius: 18, backgroundColor: '#fff', marginBottom: 14, flexDirection: 'row', overflow: 'hidden', elevation: 4 },
  catTextBox: { flex: 1, justifyContent: 'center', paddingLeft: 18 },
  catName: { fontFamily: 'Poppins_700Bold', fontSize: 24, color: COLORS.text },
  catSub: { fontFamily: 'Poppins_400Regular', fontSize: 12, color: COLORS.maroon },
  catImage: { width: 150, height: '100%' },
});

export default styles;
