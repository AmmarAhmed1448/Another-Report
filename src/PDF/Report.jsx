import {
    Font,
    Page,
    Text,
    View,
    Document,
    StyleSheet,
    Image,
    Svg,
    Line,
    PDFViewer,
    Link,
} from "@react-pdf/renderer";


import styles from "./styles";


const Report = () => {

    return (
        <Document producer='Interactive Technologies Gateway' creator='Progression International' author='Progression International'>
            <Page style={styles.body} size="A4" orientation='portrait'>

            <View style={[{border: 0.5, height: "98%", padding: 3}]}>
                {/* <View style={styles.pageBorder}> */}

                {/* Invoice box */}

                <View style={[styles.borderBlack, styles.flex, { height: "10%", paddingVertical: 5, paddingHorizontal: 10}]}>
                    <Text style={[styles.text8, {alignSelf: "center"}]}>Austria</Text>
                    <Text style={[styles.text10,styles.bold,{ fontSize: 10, marginHorizontal: "auto", alignSelf: "flex-end" }]}>INVOICE</Text>
                </View>


                {/* Line Below invoice */}

                <View style={[styles.flex]}>

                    {/* Left Side content */}
                    <View style={[styles.flex, { width: "60%", marginVertical: 3, marginLeft: 10 }]}>
                        <View style={[styles.flex, { width: "50%" }]}>
                            <Text style={[styles.text8]}>Invoice #</Text>
                            <Text style={[styles.text8]}>MI/975/20</Text>
                        </View>

                        <View style={[styles.flex, { width: "50%" }]}>
                            <Text style={[styles.text8]}>Date: </Text>
                            <Text style={[styles.text8]}>09-18-2020</Text>
                        </View>
                    </View>


                    {/* Right Side content */}
                    <View style={[{ width: "40%" }]}>
                        <View style={[styles.flex, { flexDirection: "column", alignItems: "flex-end" }]}>
                            <Text style={[styles.text8]}>Monday, August 26, 2024</Text>
                            <Text style={[styles.text8]}>16:07:38</Text>
                        </View>
                    </View>



                </View>



                {/* The two boxes below the invoice box */}

                <View style={styles.flexbox}>

                    {/* Box 1 */}
                    <View style={[styles.borderBlack, { padding: 5, width: "40%" }]}>
                        <View>
                            <Text style={[styles.text8, { paddingVertical: 3 }]}>Bill To:</Text>

                        </View>

                        <View>
                            <Text style={[styles.text9, styles.bold, { paddingVertical: 3, paddingLeft: 5 }]}>ANA APPAREL INC</Text>
                        </View>

                        <View>
                            <Text style={[styles.text8, { paddingVertical: 3 }]}>ANA APPAREL INC</Text>
                        </View>

                        <View>
                            <Text style={[styles.text8, { paddingVertical: 3 }]}>PCX, 61 willet st. passaic, NJ 07055</Text>
                        </View>

                        <View style={[styles.flexbox, { width: "50%" }]}>
                            <Text style={[styles.text8, { paddingVertical: 3 }]}>NJ</Text>
                            <Text style={[styles.text8, { paddingVertical: 3 }]}>USA</Text>
                        </View>
                    </View>

                    {/* Box 2 */}
                    {/* Box 1 */}
                    <View style={[styles.borderBlack, { padding: 5, width: "40%" }]}>
                        <View>
                            <Text style={[styles.text8, { paddingVertical: 3 }]}>Bill To:</Text>

                        </View>

                        <View>
                            <Text style={[styles.text9, styles.bold, { paddingVertical: 3, paddingLeft: 5 }]}>ANA APPAREL INC</Text>
                        </View>

                        <View>
                            <Text style={[styles.text8, { paddingVertical: 3 }]}>ANA APPAREL INC</Text>
                        </View>

                        <View>
                            <Text style={[styles.text8, { paddingVertical: 3 }]}>PCX, 61 willet st. passaic, NJ 07055</Text>
                        </View>

                        <View style={[styles.flexbox, { width: "50%" }]}>
                            <Text style={[styles.text8, { paddingVertical: 3 }]}>NJ</Text>
                            <Text style={[styles.text8, { paddingVertical: 3 }]}>USA</Text>
                        </View>
                    </View>


                </View>



                {/* Text written below the two boxes */}
                <View style={{ padding: 5 }}>

                    {/* Row 1 */}
                    <View>
                        <Text style={[styles.text8, styles.bold]}>Shipping Information</Text>
                    </View>

                    {/* Row 2 */}
                    <View style={[styles.flex, { paddingVertical: 3 }]}>

                        <View style={[styles.flex, { width: "40%" }]}>
                            <Text style={[styles.text8, { width: "50%" }]}>Payment Terms</Text>
                            <Text style={[styles.text8, { width: "50%" }]}>FOB</Text>
                        </View>

                        <View style={[styles.flex, { width: "60%" }]}>
                            <Text style={[styles.text8, { width: "20%" }]}>BL - AWBL:</Text>
                            <Text style={[styles.text8, { width: "80%" }]}>,-,01654513815,0209521,0209530,0210023,0210032 </Text>
                        </View>
                    </View>

                    {/* Row 3 */}
                    <View style={[styles.flex, { paddingVertical: 3 }]}>

                        <View style={[styles.flex, { width: "40%" }]}>
                            <Text style={[styles.text8, { width: "50%" }]}>Shipment Mode</Text>
                            <Text style={[styles.text8, { width: "50%" }]}>BY SEA</Text>
                        </View>

                        <View style={[styles.flex, { width: "60%" }]}>
                            <Text style={[styles.text8, { width: "20%" }]}>Container #:</Text>
                            <Text style={[styles.text8, { width: "80%" }]}>TEMU2236665</Text>
                        </View>
                    </View>

                    {/* Row 4 */}
                    <View style={[styles.flex, { paddingVertical: 3 }]}>

                        <View style={[styles.flex, { width: "40%" }]}>
                            <Text style={[styles.text8, { width: "50%" }]}>ETD - Karachi: </Text>
                            <Text style={[styles.text8, { width: "50%" }]}>09-18-2020</Text>
                        </View>

                        <View style={[styles.flex, { width: "60%" }]}>
                            <Text style={[styles.text8, { paddingLeft: "50%" }]}>Marks & Nos</Text>
                        </View>
                    </View>


                    {/* Row 5 */}
                    <View style={[styles.flex, { paddingVertical: 3 }]}>

                        <View style={[styles.flex, { width: "40%" }]}>
                            <Text style={[styles.text8, { width: "50%" }]}>ETA - Destination: </Text>
                            <Text style={[styles.text8, { width: "50%" }]}>10-14-2020</Text>
                        </View>

                        <View style={[styles.flex, { width: "60%" }]}>
                            <Text style={[styles.text8, { width: "20%" }]}>Destination:</Text>
                            <Text style={[styles.text8, { width: "80%" }]}>NEW YORK</Text>
                        </View>
                    </View>


                </View>


                {/* The 3rd box row */}

                <View style={[styles.borderBlack, styles.flex, { alignItems: "flex-end", textAlign: "center", padding: 5 }]}>

                    <View style={{ width: "30%" }}>

                        <View>
                            <Text style={[styles.text7, { textAlign: "left" }]}>Production and Quantity Information</Text>
                        </View>

                        <View style={[styles.flex, { paddingVertical: 5 }]}>
                            <View style={{ width: "20%" }}>
                                <Text style={[styles.text7]}>P.O #</Text>
                            </View>
                            <View style={{ width: "20%" }}>
                                <Text style={[styles.text7]}>Style #</Text>
                            </View>
                            <View style={{ width: "60%" }}>
                                <Text style={[styles.text7]}>Item</Text>
                            </View>
                        </View>
                    </View>

                    <View style={{ width: "5%", paddingHorizontal: 5 }}>
                        <Text style={[styles.text7]}>Size Range</Text>
                    </View>

                    <View style={{ width: "10%", paddingHorizontal: 5 }}>
                        <Text style={[styles.text7]}>LDP Unit</Text>
                    </View>
                    <View style={{ width: "5%", paddingHorizontal: 5 }}>
                        <Text style={[styles.text7]}>Shipped Qty in Pcs</Text>
                    </View>
                    <View style={{ width: "10%", paddingHorizontal: 5 }}>
                        <Text style={[styles.text7]}>SHPD # of Cartons</Text>
                    </View>
                    <View style={{ width: "10%", paddingHorizontal: 5 }}>
                        <Text style={[styles.text7]}>LDP Value</Text>
                    </View>
                    <View style={{ width: "10%", paddingHorizontal: 5 }}>
                        <Text style={[styles.text7]}>Deduction Amount (if Any)</Text>
                    </View>
                    <View style={{ width: "10%", paddingHorizontal: 5 }}>
                        <Text style={[styles.text7]}>Adjusted Amount (if Any)</Text>
                    </View>
                    <View style={{ width: "10%", paddingHorizontal: 5 }}>
                        <Text style={[styles.text7]}>Invoice Amount Due</Text>
                    </View>
                </View>



                {/* Table */}
                <View style={[ styles.flex, {borderBottom: 0.5}]}>

                    <View style={{ width: "30%" }}>


                        <View style={[styles.flex]}>
                            <View style={{ width: "20%", paddingHorizontal: 5 }}>
                                <Text style={[styles.text7]}>2268</Text>
                            </View>
                            <View style={[styles.bgGreen, { width: "20%", paddingHorizontal: 5 }]}>
                                <Text style={[styles.text7]}>XMBS-99109</Text>
                            </View>
                            <View style={{ width: "60%", paddingHorizontal: 5 }}>
                                <Text style={[styles.text7]}>Men 100% COTTON
                                    DENIM PANT Men 100% COTTON
                                    DENIM PANT</Text>
                            </View>
                        </View>
                    </View>

                    <View style={{ width: "5%", }}>
                        <Text style={[styles.text7, styles.bgGreen]}>30-42/32</Text>
                    </View>

                    <View style={{ width: "10%", paddingHorizontal: 5 }}>
                        <Text style={[styles.text7, styles.bgGreen]}> 7.1500</Text>
                    </View>
                    <View style={{ width: "5%", paddingHorizontal: 5 }}>
                        <Text style={[styles.text7]}>103,630</Text>
                    </View>
                    <View style={{ width: "10%", paddingHorizontal: 5 }}>
                        <Text style={[styles.text7]}>14,956</Text>
                    </View>
                    <View style={{ width: "10%", paddingHorizontal: 5 }}>
                        <Text style={[styles.text7]}>31,35034</Text>
                    </View>
                    <View style={{ width: "10%", paddingHorizontal: 5 }}>
                        <Text style={[styles.text7]}>31,35043</Text>
                    </View>
                    <View style={{ width: "10%", paddingHorizontal: 5 }}>
                        <Text style={[styles.text7]}>31,35054</Text>
                    </View>
                    <View style={{ width: "10%", paddingHorizontal: 5 }}>
                        <Text style={[styles.text7]}>31,35043</Text>
                    </View>
                </View>

                </View>

                {/* Footer */}
                {/* <View style={[styles.flex, {justifyContent: "space-between", paddingHorizontal: 50, position: "absolute", bottom: 30, right: 50}]} fixed > */}
                <View style={[styles.bordertopblack, { width: 100, textAlign: "center", position: "absolute", bottom: 30, left: 50 }]} fixed>
                    <Text style={[styles.text8]} fixed>President</Text>
                </View>
                <Text style={[styles.text8, { position: "absolute", bottom: 30, right: 50 }]} render={({ pageNumber }) => (`Page #: ${pageNumber}`)} fixed />
                



            </Page>






            <Page style={styles.body} size="A4" orientation='portrait'>
            {/* <View style={[{border: 0.5, height: "98%", padding: 3}]}> */}
    
<View style={[styles.borderBlack, styles.flex, { alignItems: "flex-end", textAlign: "center", padding: 5, width: "97%", alignSelf: "center" }]} fixed>

<View style={{ width: "30%" }}>

    <View>
        <Text style={[styles.text7, { textAlign: "left" }]}>Production and Quantity Information</Text>
    </View>

    <View style={[styles.flex, { paddingVertical: 5 }]}>
        <View style={{ width: "20%" }}>
            <Text style={[styles.text7]}>P.O #</Text>
        </View>
        <View style={{ width: "20%" }}>
            <Text style={[styles.text7]}>Style #</Text>
        </View>
        <View style={{ width: "60%" }}>
            <Text style={[styles.text7]}>Item</Text>
        </View>
    </View>
</View>

<View style={{ width: "5%", paddingHorizontal: 5 }}>
    <Text style={[styles.text7]}>Size Range</Text>
</View>

<View style={{ width: "10%", paddingHorizontal: 5 }}>
    <Text style={[styles.text7]}>LDP Unit</Text>
</View>
<View style={{ width: "5%", paddingHorizontal: 5 }}>
    <Text style={[styles.text7]}>Shipped Qty in Pcs</Text>
</View>
<View style={{ width: "10%", paddingHorizontal: 5 }}>
    <Text style={[styles.text7]}>SHPD # of Cartons</Text>
</View>
<View style={{ width: "10%", paddingHorizontal: 5 }}>
    <Text style={[styles.text7]}>LDP Value</Text>
</View>
<View style={{ width: "10%", paddingHorizontal: 5 }}>
    <Text style={[styles.text7]}>Deduction Amount (if Any)</Text>
</View>
<View style={{ width: "10%", paddingHorizontal: 5 }}>
    <Text style={[styles.text7]}>Adjusted Amount (if Any)</Text>
</View>
<View style={{ width: "10%", paddingHorizontal: 5 }}>
    <Text style={[styles.text7]}>Invoice Amount Due</Text>
</View>
</View>



<View style={[styles.flex, { flexDirection: "column", alignItems: "flex-end", border: 0.5 }]}>
<View style={[styles.flex, { width: "70%", paddingVertical: 5 }]}>
    <View style={{ width: "20%" }}>
        <Text style={[styles.text8]}>Shipment Total:-</Text>
    </View>
    <View style={{ width: "30%" }}>
        <Text style={[styles.text8]}>24,28,43,42,54,333 Pcs</Text>
    </View>
    <View style={{ width: "30%" }}>
        <Text style={[styles.text8]}>24,28,43,42,54,333 Ctns</Text>
    </View>
    <View style={{ width: "30%" }}>
        <Text style={[styles.text8]}>24,28,43,42,54,333</Text>
    </View>
</View>



<View style={[styles.flex, { width: "70%", paddingVertical: 5 }]}>

    <View style={{ width: "20%" }}>

    </View>
    <View style={{ width: "30%" }}>
        <Text style={[styles.text8]}>0</Text>
    </View>
    <View style={{ width: "30%" }}>
    </View>
    <View style={{ width: "30%" }}>
        <Text style={[styles.text8]}>0</Text>
    </View>
</View>



<View style={[styles.flex, { width: "70%", paddingVertical: 5 }]}>

    <View style={{ width: "20%" }}>

    </View>
    <View style={{ width: "30%" }}>
        <Text style={[styles.text8]}>0</Text>
    </View>
    <View style={{ width: "30%" }}>
    </View>
    <View style={{ width: "30%" }}>
        <Text style={[styles.text8]}>0</Text>
    </View>
</View>


<View style={[styles.flex, { width: "70%", paddingVertical: 5 }]}>

    <View style={{ width: "20%" }}>

    </View>
    <View style={{ width: "30%" }}>
        <Text style={[styles.text8]}>0</Text>
    </View>
    <View style={{ width: "30%" }}>
    </View>
    <View style={{ width: "30%" }}>
        <Text style={[styles.text8]}>0</Text>
    </View>
</View>
</View>




<View style={[{paddingHorizontal: 10, paddingVertical: 5, border: 0.5 }]}>

<View style={[styles.flex, {justifyContent: "flex-end"}]}>
<View style={[styles.borderBlack, styles.flex, { justifyContent: "space-around", paddingVertical: 5, width: "40%", marginTop: 15, marginBottom: 5 }]}>
    <Text style={[styles.text8, styles.bold]}>Net Recievable: </Text>
    <Text style={[styles.text8]}>9823748247843</Text>
</View>
</View>


<View style={[styles.borderBlack, { marginVertical: 5, paddingVertical: 10, paddingHorizontal: 5, width: "80%" }]}>
    <Text style={[styles.text8, styles.bold]}>Remarks</Text>
</View>



<View style={[styles.flex, {width: "80%", marginVertical: 5}]}>
    <View style={{paddingVertical: 5, marginLeft: 20,  width: "30%"}}>
        <Text style={[styles.text8, styles.bold]}>Invoice Amount in Words : </Text>
    </View>
    <View style={[styles.borderBlack, {paddingVertical: 5, paddingHorizontal: 5, width: "70%" }]}>
        <Text style={[styles.text8]}>THREE MILLION EIGHT HUNDRED TEN THOUSAND THIRTY-FIVE</Text>
    </View>
</View>


</View>



<View style={[styles.flexbox, { margin: 5}]}>
<View style={[styles.borderBlack, {width: "30%", paddingVertical: 10, paddingHorizontal: 5}]}>
    <View>
    <Text style={[styles.text8, styles.bold]}>For Wire Transfer Benefciary </Text>
    </View>
    <View style={{paddingTop: 30}}>
    <Text style={[styles.text8]}>Austria</Text>
    </View>
</View>




<View style={[styles.borderBlack, {width: "30%", paddingHorizontal: 5, paddingTop: 10, paddingBottom: 20}]}>
<View>
    <Text style={[styles.text8, styles.bold]}>Benefciary's Bank :</Text>
    </View>
    <View style={{paddingVertical: 5}}>
    <Text style={[styles.text8]}>N / A</Text>
    </View>
    <View>
    <Text style={[styles.text8]}>Account No. : </Text>
    </View>
    <View style={{paddingVertical: 5}}>
    <Text style={[styles.text8]}>Routing No. : </Text>
    </View>
</View>
</View>
{/* </View> */}
            </Page>




        </Document>

    );
};


Font.register({
    family: "Roboto",
    src: "/Roboto-Regular.ttf",
});

Font.register({
    family: 'Roboto-Bold',
    src: "/Roboto-Bold.ttf",
});




export default Report;
