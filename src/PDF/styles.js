import { StyleSheet, Font } from "@react-pdf/renderer";



const styles = StyleSheet.create({
  view: {
    width: "100%",
    height: "800px",
  },
  body: {
    // marginTop: 15,
    // marginBottom: 30,
    // marginHorizontal: 15,
    paddingTop: 15,
    paddingBottom: 30,
    paddingHorizontal: 15,
    // border: 1,
  },
  pageBorder: {
    marginTop: 15,
    marginBottom: 30,
    marginHorizontal: 15,
    border: 1,
  },
  pageNumber: {
    position: 'absolute',
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: 'center',
  },
  positionReletive: {
    position: "relative",
  },
  positionAbsolute: {
    position: "absolute",
  },
  image: {
    maxHeight: "110px",
  },
  checkbox: {
    height: "15px",
    width: "15px",
  },
  checkbox2: {
    height: "10px",
    width: "10px",
  },
  flexbox: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  box: {
    paddingHorizontal: 5,
  },
  box10: {
    width: "10%",
  },
  box20: {
    width: "20%",
  },
  box30: {
    width: "30%",
  },
  box40: {
    width: "40%",
  },
  box50: {
    width: "50%",
  },
  box60: {
    width: "60%",
  },
  box70: {
    width: "70%",
  },
  box80: {
    width: "80%",
  },
  box90: {
    width: "90%",
  },
  box100: {
    width: "100%",
  },
  box5: {
    width: "5%",
  },
  box15: {
    width: "15%",
  },
  box25: {
    width: "25%",
  },
  box35: {
    width: "35%",
  },
  box45: {
    width: "45%",
  },
  box55: {
    width: "55%",
  },
  box65: {
    width: "65%",
  },
  box75: {
    width: "75%",
  },
  box85: {
    width: "85%",
  },
  box95: {
    width: "95%",
  },
  box33: {
    width: "33.33%",
  },
  box13: {
    width: "13.33%",
  },
  box26: {
    width: "26.66%",
  },
  box36: {
    width: "36.66%",
  },
  box53: {
    width: "53.34%",
  },
  box83: {
    width: "83.34%",
  },
  box16: {
    width: "16.66%",
  },
  box22: {
    width: "22%",
  },
  box48: {
    width: "48%",
  },
  borderright: {
    borderRight: "1px solid #e1e1e1",
  },
  borderleft: {
    borderLeft: " 1px solid #e1e1e1",
  },
  bordertop: {
    borderTop: " 1px solid #e1e1e1",
  },
  borderbottom: {
    borderBottom: " 1px solid #e1e1e1",
  },
  borderrightblack: {
    borderRight: "1px solid #000",
  },
  borderleftblack: {
    borderLeft: " 1px solid #000",
  },
  bordertopblack: {
    borderTop: " 1px solid #000",
  },
  borderbottomblack: {
    borderBottom: " 1px solid #000",
  },
  borderright2black: {
    borderRight: "1px solid #000",
  },
  borderleft2black: {
    borderLeft: " 1px solid #000",
  },
  bordertop2black: {
    borderTop: " 1px solid #000",
  },
  borderbottom2black: {
    borderBottom: " 1px solid #000",
  },
  border: {
    border: "1px solid #e1e1e1",
  },
  border2: {
    border: "2px solid #e1e1e1",
  },
  borderBlack: {
    border: "1px solid #000",
  },
  border2Black: {
    border: "2px solid #000",
  },
  borderRadius: {
    borderRadius: "50%",
  },
  bold: {
    fontWeight: "bold",
    fontFamily: "Roboto-Bold",
  },
  text6: {
    fontSize: 6,
    lineHeight: 1.2,
    fontFamily: "Roboto",
  },
  text7: {
    fontSize: 7,
    lineHeight: 1.2,
    fontFamily: "Roboto",
  },
  text8: {
    fontSize: 8,
    lineHeight: 1.2,
    fontFamily: "Roboto",
  },
  text9: {
    fontSize: 9,
    lineHeight: 1.2,
    fontFamily: "Roboto",
  },
  text10: {
    fontSize: 10,
    lineHeight: 1.2,
    fontFamily: "Roboto",
  },
  text11: {
    fontSize: 11,
    lineHeight: 1.2,
    fontFamily: "Roboto",
    paddingLeft: 3,
  },
  text12: {
    fontSize: 12,
    lineHeight: 1.2,
    fontFamily: "Roboto",
  },
  text13: {
    fontSize: 13,
    lineHeight: 1.2,
    fontFamily: "Roboto",
  },
  text14: {
    fontSize: 14,
    lineHeight: 1.2,
    fontFamily: "Roboto",
  },
  text15: {
    fontSize: 15,
    lineHeight: 1.2,
    fontFamily: "Roboto",
  },
  text16: {
    fontSize: 16,
    lineHeight: 1.2,
    fontFamily: "Roboto",
  },
  uppercase: {
    textTransform: "uppercase",
  },
  padding1: {
    padding: 1,
  },
  padding2: {
    padding: 2,
  },
  padding3: {
    padding: 3,
  },
  padding4: {
    padding: 4,
  },
  padding5: {
    padding: 5,
  },
  padding6: {
    padding: 6,
  },
  paddingtop: {
    paddingTop: 0,
  },
  paddingbottom: {
    paddingBottom: 0,
  },
  paddingleft: {
    paddingLeft: 0,
  },
  paddingright: {
    paddingRight: 0,
  },
  gridContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "10px",
    padding: "10px",
  },
  center: {
    textAlign: "center",
  },
  justify: {
    textAlign: "justify",
  },
  flex: {
    display: "flex",
    flexDirection: "row",
  },
  flexwrap: {
    flexWrap: "wrap",
  },
  aligncenter: {
    alignItems: "center",
  },
  justifycenter: {
    justifyContent: "center",
  },
  bgGrey: {
    backgroundColor: "#e1e1e1",
  },
  title: {
    fontSize: 22,
    textAlign: "center",
    fontFamily: "Roboto-Bold",
  },
  title2: {
    fontSize: 16,
    textAlign: "center",
    fontFamily: "Roboto-Bold",
  },
  title3: {
    fontSize: 14,
    textAlign: "center",
    fontFamily: "Roboto-Bold",
  },
  paddingY: {
    paddingVertical: 2,
  },
  paddingY5: {
    paddingVertical: 5,
  },
  paddingY3: {
    paddingVertical: 3,
  },
  marginY: {
    marginVertical: 2,
  },
  marginY5: {
    marginVertical: 5,
  },
  marginY10: {
    marginVertical: 10,
  },
  bgGreen: {
    backgroundColor: "#D6F1E8",
  },
  textWhite: {
    color: "#fff",
  },
  square: {
    width: "80px",
    height: "80px",
  },
  rectangle: {
    width: "120px",
    height: "20px",
  },
  underline: {
    textDecoration: "underline",
  },
  wrapNumbers: {
    width: '100%',
    wordBreak: 'break-word',
    overflowWrap: 'break-word',
    hyphens: 'none',
  },
});


export default styles;
