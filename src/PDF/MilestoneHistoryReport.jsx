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

const MilestoneHistoryReport = () => {

    return (



        <Document producer='Interactive Technologies Gateway' creator='Progression International' author='Progression International'>
            <Page style={styles.body} size="A4" orientation='portrait'>

                <View>

                    <View>
                        <Image src="/PI-logo.png" style={{ width: '150px', objectFit: 'contain', marginVertical: 10 }} />
                    </View>

                    {/* Line below Logo */}
                    <View style={[styles.flexbox, { marginVertical: 10 }]}>
                        <Text style={[styles.text10, styles.bold, styles.underline]}>Milestone History</Text>
                        <Text style={styles.text7}>Print Date: 28-Aug-2024</Text>
                    </View>



                    <View style={[styles.flex, { marginHorizontal: 5 }]}>

                        <View style={[styles.borderBlack, { width: "50%", borderRadius: "25%", paddingHorizontal: 10, paddingTop: 10, paddingBottom: 20, gap: 2 }]}>
                            <View style={styles.flex}>
                                <Text style={[styles.text8, { width: "40%" }]}>PO Number:</Text>
                                <Text style={[styles.text8, styles.bold, { width: "60%" }]}>45808-W</Text>
                            </View>

                            <View style={styles.flex}>
                                <Text style={[styles.text8, { width: "40%" }]}>Placement Date</Text>
                                <Text style={[styles.text8, { width: "60%" }]}>06-Aug-2024</Text>
                            </View>

                            <View style={styles.flex}>
                                <Text style={[styles.text8, { width: "40%" }]}>Shipment Date</Text>
                                <Text style={[styles.text8, { width: "60%" }]}>26-Aug-2024</Text>
                            </View>

                        </View>


                        <View style={[styles.borderBlack, { width: "50%", borderRadius: "25%", paddingHorizontal: 10, paddingTop: 10, paddingBottom: 20,gap: 2 }]}>
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

                        </View>

                        {/* Table start */}

                    </View>

                    <View>
                        <View style={[styles.borderBlack, { paddingHorizontal: 10, paddingVertical: 5, marginHorizontal: 5 }]}>
                            <Text style={[styles.text8, styles.bold]}>Yarn Dip / Lab Dip</Text>
                        </View>
                        <View style={[styles.borderbottomblack, styles.flex,  { width: "80%", marginHorizontal: 15, paddingTop: 3, paddingBottom: 1 }]}>
                            <View style={[{ width: "16.67%" }]}>
                                <Text style={[styles.text8, styles.bold]}>Target Date</Text>
                            </View>
                            <View style={[{ width: "16.67%" }]}>
                                <Text style={[styles.text8, styles.bold]}>Estimated Date</Text>
                            </View>
                            <View style={{ width: "16.67%" }}>
                                <Text style={[styles.text8, styles.bold]}>Last Activity</Text>
                            </View>
                            <View style={{ width: "16.67%" }}>
                                <Text style={[styles.text8, styles.bold]}>Quantity</Text>
                            </View>
                            <View style={[{ width: "16.67%" }]}>
                                <Text style={[styles.text8, styles.bold]}>Status</Text>
                            </View>
                            <View style={[{ width: "16.67%" }]}>
                                <Text style={[styles.text8, styles.bold]}>Remarks</Text>
                            </View>
                        </View>
                    
                    

{/* <View> */}
                        
<View style={[styles.borderbottomblack, styles.flex, { width: "80%", marginHorizontal: 15, paddingTop: 4, paddingBottom: 1 }]}>
                            <View style={[{ width: "16.67%" }]}>
                                <Text style={styles.text8}>19 Aug 2024</Text>
                            </View>
                            <View style={[{ width: "16.67%" }]}>
                                <Text style={styles.text8}>19 Aug 2024</Text>
                            </View>
                            <View style={[{ width: "16.67%" }]}>
                                <Text style={styles.text8}></Text>
                            </View>
                            <View style={[{ width: "16.67%" }]}>
                                <Text style={styles.text8}>0</Text>
                            </View>
                            <View style={[{ width: "16.67%" }]}>
                                <Text style={styles.text8}>No Activity</Text>
                            </View>
                            <View style={[{ width: "16.67%" }]}>
                                <Text style={styles.text8}></Text>
                            </View>
                        </View>
                    {/* </View> */}



                    
                    </View>






                </View>
                    
                    {/* <Text style={[styles.text7, styles.bold, {position: "absolute", bottom: "10", textAlign: "center"}]}>Powered by: Interactive Technologies Gateway</Text> */}
                    
                    <Text style={[styles.text7, styles.bold, { textAlign: "center", position: "absolute", bottom: "10", width: "100%" }]}>Powered by: INTERACTIVE TECHNOLOGIES GATEWAY</Text>
            </Page>
        </Document>



    )
};




export default MilestoneHistoryReport;