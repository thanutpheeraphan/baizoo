import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  paper: {
    padding: '10px', display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '100px',
  },
  mapContainer: {
    height: '85vh', width: '100%',
  },
  markerContainer: {
    position: 'absolute', transform: 'translate(-50%, -50%)', zIndex: 1, '&:hover': { zIndex: 2 },
  },
  pointer: {
    cursor: 'pointer',
  },

  buttonCallout: {
	position: 'absolute',
	bottom: '8px',
	right: '66px',
	
    // flex: 1,
    // flexDirection:'row',
    // position:'fixed',
    // // bottom:10,
    // alignSelf: "center",
    // justifyContent: "space-between",
    // // backgroundColor: "transparent",
    // borderWidth: 0.5,
    // borderRadius: 20,
	// minHeight: 50 
  },
}));