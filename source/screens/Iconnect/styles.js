import {Dimensions, StyleSheet} from 'react-native';

import {nh, nw} from '../../utils/scaling';
import {themeColors} from '../../utils/theme';

const STICKY_HEADER_HEIGHT = nh(48);
const {width, fontScale} = Dimensions.get('screen');

const styles = StyleSheet.create({
  header: {
    height: nh(137),
    width: '100%',
    backgroundColor: '#F33A6A',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-around',
  },
  container: {
    flex: 1,
    // height:'100%',
    backgroundColor: 'white',
   
  },
  stickySectionText: {
    color: 'white',
    fontSize: 16,
    margin: 10,
  },
  stickySection: {
    height: STICKY_HEADER_HEIGHT,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
   
  },
  aboutUserImage: {
    position: 'absolute',
    alignSelf: 'center',
    top: 80,
    backgroundColor: 'white',
    flexDirection:'row',
    padding:20,
    borderRadius:5,
    justifyContent:'space-evenly',
    shadowColor:'#7B7A72',
    shadowOpacity:0.5,
    borderWidth:0.2,
    shadowOffset: {width: -2, height: 4},
    borderColor:'#7B7A72',
    width: '90%'
  },
  profileView: {
    marginTop: 8,
  },
  userDetailView: {
    alignItems: 'center',
  },
  headerImage: {
    height: nh(137),
    width: nw(85),
    alignSelf: 'flex-end',
    paddingTop: 60,
    
  },
  warningBtn: {
  
    backgroundColor: '#fff',
    borderWidth: 1,
    marginBottom: nh(32),
    width: nw(343),
    height: nh(45),
  },
 
  warningTextDisable: {
    color: '#95969B',
  },
});

export default styles;