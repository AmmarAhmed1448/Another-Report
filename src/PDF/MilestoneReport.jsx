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

const MilestoneReport = () => {

    return (


        
        <Document producer='Interactive Technologies Gateway' creator='Progression International' author='Progression International'>
            <Page style={styles.body} size="A4" orientation='portrait'>

                <View>

                    <View>
                        <Image src="/PI-logo.png" style={{ width: '150px', objectFit: 'contain', marginVertical: 10}}/>
                    </View>

                    {/* Line below Logo */}
                    <View style={[styles.flexbox, {marginVertical: 10}]}>
                        <Text style={[styles.text10, styles.bold, styles.underline]}>Milestone</Text>
                        <Text style={styles.text7}>Print Date: 28-Aug-2024</Text>
                    </View>



                    <View style={[styles.flex, {marginHorizontal: 5}]}>

                        <View style={[styles.borderBlack, { width: "50%", borderRadius: "25%", paddingHorizontal: 10, paddingVertical: 10 }]}>
                            <View style={styles.flex}>
                                <Text style={[styles.text8, { width: "40%" }]}>PO Number:</Text>
                                <Text style={[styles.text8, styles.bold, { width: "60%" }]}>45808-W</Text>
                            </View>

                            <View style={styles.flex}>
                                <Text style={[styles.text8, { width: "40%" }]}>Placement Date</Text>
                                <Text style={[styles.text8, { width: "60%" }]}></Text>
                            </View>

                            <View>
                                <Text style={[styles.text8, { width: "40%" }]}>Shipment Date</Text>
                                <Text style={[styles.text8, { width: "60%" }]}></Text>
                            </View>

                            <View style={styles.flex}>
                                <Text style={[styles.text8, { width: "40%" }]}>Lead Time </Text>
                                <Text style={[styles.text8, { width: "60%" }]}>41 days</Text>
                            </View>
                        </View>
                        <View style={[styles.borderBlack, { width: "50%", borderRadius: "25%", paddingHorizontal: 10, paddingVertical: 10 }]}>
                            <View style={styles.flex}>
                                <Text style={[styles.text8, { width: "40%" }]}>Buyer:</Text>
                                <Text style={[styles.text8, styles.bold, { width: "60%" }]}> ITX TRADING S.A (PULL & BEAR WOMENS)</Text>
                            </View>

                            <View style={styles.flex}>
                                <Text style={[styles.text8, { width: "40%" }]}>Vendor</Text>
                                <Text style={[styles.text8, { width: "60%" }]}>GUL AHMED TEXTILE MIL PVT</Text>
                            </View>

                            <View style={styles.flex}>
                                <Text style={[styles.text8, { width: "40%" }]}>Total Quantity</Text>
                                <Text style={[styles.text8, { width: "60%" }]}>1000</Text>
                            </View>

                            <View style={styles.flex}>
                                <Text style={[styles.text8, { width: "40%" }]}>Lead Time</Text>
                                <Text style={[styles.text8, { width: "60%" }]}>41 days</Text>
                            </View>
                        </View>
                    </View>

                    {/* The table */}
                    <View style={{ marginVertical: 10 }}>

                        <View style={[styles.flex, styles.borderBlack, { height: 20, alignItems: "center", paddingHorizontal: 5 }]} fixed>
                            <Text style={[styles.text7, styles.bold, { width: "25%" }]}>Process</Text>
                            <Text style={[styles.text7, styles.bold, { width: "15%" }]}>Target Date</Text>
                            <Text style={[styles.text7, styles.bold, { width: "15%" }]}>Estimated Date</Text>
                            <Text style={[styles.text7, styles.bold, { width: "15%" }]}>Last Activity</Text>
                            <Text style={[styles.text7, styles.bold, { width: "15%" }]}>Quantity</Text>
                            <Text style={[styles.text7, styles.bold, { width: "15%" }]}>Status</Text>
                        </View>


                        <View style={[styles.flex, styles.borderbottomblack, { height: 20, alignItems: "center", paddingHorizontal: 5 }]}>
                            <Text style={[styles.text7, { width: "25%" }]}>Print Mockup / Strike </Text>
                            <Text style={[styles.text7, { width: "15%" }]}>19 Aug 2024</Text>
                            <Text style={[styles.text7, { width: "15%" }]}>19 Aug 2024</Text>
                            <Text style={[styles.text7, { width: "15%" }]}></Text>
                            <Text style={[styles.text7, { width: "15%" }]}>0</Text>
                            <Text style={[styles.text7, { width: "15%" }]}>No Activity</Text>
                        </View>

                        <View style={[styles.flex, styles.borderbottomblack, { height: 20, alignItems: "center", paddingHorizontal: 5 }]}>
                            <Text style={[styles.text7, { width: "25%" }]}>Print Mockup / Strike </Text>
                            <Text style={[styles.text7, { width: "15%" }]}>19 Aug 2024</Text>
                            <Text style={[styles.text7, { width: "15%" }]}>19 Aug 2024</Text>
                            <Text style={[styles.text7, { width: "15%" }]}></Text>
                            <Text style={[styles.text7, { width: "15%" }]}>0</Text>
                            <Text style={[styles.text7, { width: "15%" }]}>No Activity</Text>
                        </View>

                        <View style={[styles.flex, styles.borderbottomblack, { height: 20, alignItems: "center", paddingHorizontal: 5 }]}>
                            <Text style={[styles.text7, { width: "25%" }]}>Print Mockup / Strike </Text>
                            <Text style={[styles.text7, { width: "15%" }]}>19 Aug 2024</Text>
                            <Text style={[styles.text7, { width: "15%" }]}>19 Aug 2024</Text>
                            <Text style={[styles.text7, { width: "15%" }]}></Text>
                            <Text style={[styles.text7, { width: "15%" }]}>0</Text>
                            <Text style={[styles.text7, { width: "15%" }]}>No Activity</Text>
                        </View>

                        <View style={[styles.flex, styles.borderbottomblack, { height: 20, alignItems: "center", paddingHorizontal: 5 }]}>
                            <Text style={[styles.text7, { width: "25%" }]}>Print Mockup / Strike </Text>
                            <Text style={[styles.text7, { width: "15%" }]}>19 Aug 2024</Text>
                            <Text style={[styles.text7, { width: "15%" }]}>19 Aug 2024</Text>
                            <Text style={[styles.text7, { width: "15%" }]}></Text>
                            <Text style={[styles.text7, { width: "15%" }]}>0</Text>
                            <Text style={[styles.text7, { width: "15%" }]}>No Activity</Text>
                        </View>



                    </View>




                </View>
                {/* <View style={[{position: "absolute", bottom: "10"}]} fixed> */}
                <Text style={[styles.text7, styles.bold, { textAlign: "center", position: "absolute", bottom: "10", width: "100%" }]}>Powered by: INTERACTIVE TECHNOLOGIES GATEWAY</Text>
                {/* </View> */}

            </Page>


        </Document>
    )
}




export default MilestoneReport;