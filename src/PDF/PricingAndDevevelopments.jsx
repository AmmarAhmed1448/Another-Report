import { Page, Text, View, Document, Image } from "@react-pdf/renderer";
import styles from "./styles";

const PricingAndDevelopment = () => {
    const columnHeaders = [
        "Date",
        "VPN",
        "Model",
        "BYER",
        "Fabric",
        "Construction",
        "GSM",
        "Pantone",
        "Finishing",
        "Gender",
        "INTEK",
        "Target Price",
        "AL AWWAL",
        "IG-1",
        "IG-2",
        "MFT",
        "RAZZAK",
        "AM",
        "UNIQUE",
        "Smart wear",
        "Amna Apparel",
        "SEAM",
        "KARSAZ",
        "Price Quote",
        "Order Done",
    ];

    return (
        <Document
            title="Pricing and Development Report"
            producer="Interactive Technologies Gateway"
            creator="Progression International"
            author="Progression International"
        >
            <Page style={styles.body} size="A4" orientation="landscape">

                {/* Table Start */}
                <View>

                    {/* Column Headers */}
                    <View style={[styles.borderBlack, styles.flex]}>
                        {columnHeaders.map((header, index) => (
                            <View
                                style={[styles.borderrightblack, styles.bgGrey, { width: "4%" }]}
                                key={index}
                                
                            >
                                <Text style={[styles.text7, styles.center, styles.bold, {marginVertical:"auto"}]}>{header}</Text>
                            </View>
                        ))}
                    </View>


                    {/* Table data */}

                    <View style={[styles.borderrightblack, styles.borderleftblack, styles.borderbottomblack, styles.flex]}>

                        
                    

                        <View style={[styles.borderrightblack, { width: "4%" }]}>
                            <Text style={[styles.text7, styles.center, {marginVertical: "auto"}]}></Text>
                        </View>

                        <View style={[styles.borderrightblack, { width: "4%" }]}>
                            <Image src="./toy car.jpg" />
                        </View>

                        <View style={[styles.borderrightblack, { width: "4%" }]}>
                            <Text style={[styles.text7, styles.center, {marginVertical:"auto"}]}>115 AC</Text>
                        </View>

                        <View style={[styles.borderrightblack, { width: "4%" }]}>
                            <Text style={[styles.text7, styles.center, {marginVertical:"auto"}]}>SINSEY</Text>
                        </View>

                        <View style={[styles.borderrightblack, { width: "4%" }]}>
                            <Text style={[styles.text7, styles.center, {marginVertical:"auto"}]}>French Terry</Text>
                        </View>

                        <View style={[styles.borderrightblack, { width: "6%" }]}>
                            <Text style={[styles.text7, styles.center, {marginVertical: "auto"}]}>80% Cotton 20% Polyester</Text>
                        </View>

                        <View style={[styles.borderrightblack, { width: "3%" }]}>
                            <Text style={[styles.text7, styles.center, {marginVertical: "auto"}]}>275</Text>
                        </View>

                        <View style={[styles.borderrightblack, { width: "4%" }]}>
                            <Text style={[styles.text7, styles.center, {marginVertical: "auto"}]}></Text>
                        </View>
                        <View style={[styles.borderrightblack, { width: "4%" }]}>
                            <Text style={[styles.text7, styles.center, {marginVertical: "auto"}]}>Dyed</Text>
                        </View>

                        <View style={[styles.borderrightblack, { width: "4%" }]}>
                            <Text style={[styles.text7, styles.center, {marginVertical: "auto"}]}>Ladies</Text>
                        </View>

                        <View style={[styles.borderrightblack, { width: "3%" }]}>
                            <Text style={[styles.text7, styles.center, {marginVertical: "auto"}]}>1</Text>
                        </View>

                        <View style={[styles.borderrightblack, { width: "4%" }]}>
                            <Text style={[styles.text7, styles.center, {marginVertical: "auto"}]}>$0,95</Text>
                        </View>

                        <View style={[styles.borderrightblack, { width: "4%" }]}>
                            <Text style={[styles.text7, styles.center, {marginVertical: "auto"}]}>$0,95</Text>
                        </View>

                        <View style={[styles.borderrightblack, { width: "4%" }]}>
                            <Text style={[styles.text7, styles.center, {marginVertical: "auto"}]}>$0,95</Text>
                        </View>

                        <View style={[styles.borderrightblack, { width: "4%" }]}>
                            <Text style={[styles.text7, styles.center, {marginVertical: "auto"}]}>$0,95</Text>
                        </View>

                        <View style={[styles.borderrightblack, { width: "4%" }]}>
                            <Text style={[styles.text7, styles.center, {marginVertical: "auto"}]}>$0,95</Text>
                        </View>

                        <View style={[styles.borderrightblack, { width: "4%" }]}>
                            <Text style={[styles.text7, styles.center, {marginVertical: "auto"}]}>$0,95</Text>
                        </View>

                        <View style={[styles.borderrightblack, { width: "4%" }]}>
                            <Text style={[styles.text7, styles.center, {marginVertical: "auto"}]}>$0,95</Text>
                        </View>

                        <View style={[styles.borderrightblack, { width: "4%" }]}>
                            <Text style={[styles.text7, styles.center, {marginVertical: "auto"}]}>$0,95</Text>
                        </View>

                        <View style={[styles.borderrightblack, { width: "4%" }]}>
                            <Text style={[styles.text7, styles.center, {marginVertical: "auto"}]}>$0,95</Text>
                        </View>

                        <View style={[styles.borderrightblack, { width: "4%" }]}>
                            <Text style={[styles.text7, styles.center, {marginVertical: "auto"}]}>$0,95</Text>
                        </View>

                        <View style={[styles.borderrightblack, { width: "4%" }]}>
                            <Text style={[styles.text7, styles.center, {marginVertical: "auto"}]}>$0,95</Text>
                        </View>

                        <View style={[styles.borderrightblack, { width: "4%" }]}>
                            <Text style={[styles.text7, styles.center, {marginVertical: "auto"}]}>$0,95</Text>
                        </View>

                        <View style={[styles.borderrightblack, { width: "4%" }]}>
                            <Text style={[styles.text7, styles.center, {marginVertical: "auto"}]}>$0,95</Text>
                        </View>

                        <View style={[styles.borderrightblack, { width: "4%" }]}>
                            <Text style={[styles.text7, styles.center, {marginVertical: "auto"}]}>$0,95</Text>
                        </View>




                    </View>

                    <View style={[styles.borderrightblack, styles.borderleftblack, styles.borderbottomblack, styles.flex]}>


                 

                     

                      

                        <View style={[styles.borderrightblack, { width: "4%" }]}>
                            <Text style={[styles.text7, styles.center, {marginVertical: "auto"}]}></Text>
                        </View>

                        <View style={[styles.borderrightblack, { width: "4%" }]}>
                        <Image src="./images.jpeg" />
                        </View>

                        <View style={[styles.borderrightblack, { width: "4%" }]}>
                            <Text style={[styles.text7, styles.center, {marginVertical: "auto"}]}>115 AC</Text>
                        </View>

                        <View style={[styles.borderrightblack, { width: "4%" }]}>
                            <Text style={[styles.text7, styles.center, {marginVertical: "auto"}]}>SINSEY</Text>
                        </View>

                        <View style={[styles.borderrightblack, { width: "4%" }]}>
                            <Text style={[styles.text7, styles.center, {marginVertical: "auto"}]}>French Terry</Text>
                        </View>

                        <View style={[styles.borderrightblack, { width: "4%" }]}>
                            <Text style={[styles.text7, styles.center, {marginVertical: "auto"}]}>80% Cotton 20% Polyester</Text>
                        </View>

                        <View style={[styles.borderrightblack, { width: "4%" }]}>
                            <Text style={[styles.text7, styles.center, {marginVertical: "auto"}]}>275</Text>
                        </View>

                        <View style={[styles.borderrightblack, { width: "4%" }]}>
                            <Text style={[styles.text7, styles.center, {marginVertical: "auto"}]}></Text>
                        </View>
                        <View style={[styles.borderrightblack, { width: "4%" }]}>
                            <Text style={[styles.text7, styles.center, {marginVertical: "auto"}]}>Dyed</Text>
                        </View>

                        <View style={[styles.borderrightblack, { width: "4%" }]}>
                            <Text style={[styles.text7, styles.center, {marginVertical: "auto"}]}>Ladies</Text>
                        </View>

                        <View style={[styles.borderrightblack, { width: "4%" }]}>
                            <Text style={[styles.text7, styles.center, {marginVertical: "auto"}]}>1</Text>
                        </View>

                        <View style={[styles.borderrightblack, { width: "4%" }]}>
                            <Text style={[styles.text7, styles.center, {marginVertical: "auto"}]}>$0,95</Text>
                        </View>

                        <View style={[styles.borderrightblack, { width: "4%" }]}>
                            <Text style={[styles.text7, styles.center, {marginVertical: "auto"}]}>$0,95</Text>
                        </View>

                        <View style={[styles.borderrightblack, { width: "4%" }]}>
                            <Text style={[styles.text7, styles.center, {marginVertical: "auto"}]}>$0,95</Text>
                        </View>

                        <View style={[styles.borderrightblack, { width: "4%" }]}>
                            <Text style={[styles.text7, styles.center, {marginVertical: "auto"}]}>$0,95</Text>
                        </View>

                        <View style={[styles.borderrightblack, { width: "4%" }]}>
                            <Text style={[styles.text7, styles.center, {marginVertical: "auto"}]}>$0,95</Text>
                        </View>

                        <View style={[styles.borderrightblack, { width: "4%" }]}>
                            <Text style={[styles.text7, styles.center, {marginVertical: "auto"}]}>$0,95</Text>
                        </View>

                        <View style={[styles.borderrightblack, { width: "4%" }]}>
                            <Text style={[styles.text7, styles.center, {marginVertical: "auto"}]}>$0,95</Text>
                        </View>

                        <View style={[styles.borderrightblack, { width: "4%" }]}>
                            <Text style={[styles.text7, styles.center, {marginVertical: "auto"}]}>$0,95</Text>
                        </View>

                        <View style={[styles.borderrightblack, { width: "4%" }]}>
                            <Text style={[styles.text7, styles.center, {marginVertical: "auto"}]}>$0,95</Text>
                        </View>

                        <View style={[styles.borderrightblack, { width: "4%" }]}>
                            <Text style={[styles.text7, styles.center, {marginVertical: "auto"}]}>$0,95</Text>
                        </View>

                        <View style={[styles.borderrightblack, { width: "4%" }]}>
                            <Text style={[styles.text7, styles.center, {marginVertical: "auto"}]}>$0,95</Text>
                        </View>

                        <View style={[styles.borderrightblack, { width: "4%" }]}>
                            <Text style={[styles.text7, styles.center, {marginVertical: "auto"}]}>$0,95</Text>
                        </View>

                        <View style={[styles.borderrightblack, { width: "4%" }]}>
                            <Text style={[styles.text7, styles.center, {marginVertical: "auto"}]}>$0,95</Text>
                        </View>

                        <View style={[styles.borderrightblack, { width: "4%" }]}>
                            <Text style={[styles.text7, styles.center, {marginVertical: "auto"}]}>$0,95</Text>
                        </View>




                    </View>

                    <View style={[styles.borderrightblack, styles.borderleftblack, styles.borderbottomblack, styles.flex]}>


                     

                        <View style={[styles.borderrightblack, { width: "4%" }]}>
                            <Text style={[styles.text7, styles.center, {marginVertical: "auto"}]}></Text>
                        </View>

                        <View style={[styles.borderrightblack, { width: "4%" }]}>
                        <Image src="./toy car.jpg" />
                        </View>

                        <View style={[styles.borderrightblack, { width: "4%" }]}>
                            <Text style={[styles.text7, styles.center, {marginVertical: "auto"}]}>115 AC</Text>
                        </View>

                        <View style={[styles.borderrightblack, { width: "4%" }]}>
                            <Text style={[styles.text7, styles.center, {marginVertical: "auto"}]}>SINSEY</Text>
                        </View>

                        <View style={[styles.borderrightblack, { width: "4%" }]}>
                            <Text style={[styles.text7, styles.center, {marginVertical: "auto"}]}>French Terry</Text>
                        </View>

                        <View style={[styles.borderrightblack, { width: "4%" }]}>
                            <Text style={[styles.text7, styles.center, {marginVertical: "auto"}]}>80% Cotton 20% Polyester</Text>
                        </View>

                        <View style={[styles.borderrightblack, { width: "4%" }]}>
                            <Text style={[styles.text7, styles.center, {marginVertical: "auto"}]}>275</Text>
                        </View>

                        <View style={[styles.borderrightblack, { width: "4%" }]}>
                            <Text style={[styles.text7, styles.center, {marginVertical: "auto"}]}></Text>
                        </View>
                        <View style={[styles.borderrightblack, { width: "4%" }]}>
                            <Text style={[styles.text7, styles.center, {marginVertical: "auto"}]}>Dyed</Text>
                        </View>

                        <View style={[styles.borderrightblack, { width: "4%" }]}>
                            <Text style={[styles.text7, styles.center, {marginVertical: "auto"}]}>Ladies</Text>
                        </View>

                        <View style={[styles.borderrightblack, { width: "4%" }]}>
                            <Text style={[styles.text7, styles.center, {marginVertical: "auto"}]}>1</Text>
                        </View>

                        <View style={[styles.borderrightblack, { width: "4%" }]}>
                            <Text style={[styles.text7, styles.center, {marginVertical: "auto"}]}>$0,95</Text>
                        </View>

                        <View style={[styles.borderrightblack, { width: "4%" }]}>
                            <Text style={[styles.text7, styles.center, {marginVertical: "auto"}]}>$0,95</Text>
                        </View>

                        <View style={[styles.borderrightblack, { width: "4%" }]}>
                            <Text style={[styles.text7, styles.center, {marginVertical: "auto"}]}>$0,95</Text>
                        </View>

                        <View style={[styles.borderrightblack, { width: "4%" }]}>
                            <Text style={[styles.text7, styles.center, {marginVertical: "auto"}]}>$0,95</Text>
                        </View>

                        <View style={[styles.borderrightblack, { width: "4%" }]}>
                            <Text style={[styles.text7, styles.center, {marginVertical: "auto"}]}>$0,95</Text>
                        </View>

                        <View style={[styles.borderrightblack, { width: "4%" }]}>
                            <Text style={[styles.text7, styles.center, {marginVertical: "auto"}]}>$0,95</Text>
                        </View>

                        <View style={[styles.borderrightblack, { width: "4%" }]}>
                            <Text style={[styles.text7, styles.center, {marginVertical: "auto"}]}>$0,95</Text>
                        </View>

                        <View style={[styles.borderrightblack, { width: "4%" }]}>
                            <Text style={[styles.text7, styles.center, {marginVertical: "auto"}]}>$0,95</Text>
                        </View>

                        <View style={[styles.borderrightblack, { width: "4%" }]}>
                            <Text style={[styles.text7, styles.center, {marginVertical: "auto"}]}>$0,95</Text>
                        </View>

                        <View style={[styles.borderrightblack, { width: "4%" }]}>
                            <Text style={[styles.text7, styles.center, {marginVertical: "auto"}]}>$0,95</Text>
                        </View>

                        <View style={[styles.borderrightblack, { width: "4%" }]}>
                            <Text style={[styles.text7, styles.center, {marginVertical: "auto"}]}>$0,95</Text>
                        </View>

                        <View style={[styles.borderrightblack, { width: "4%" }]}>
                            <Text style={[styles.text7, styles.center, {marginVertical: "auto"}]}>$0,95</Text>
                        </View>

                        <View style={[styles.borderrightblack, { width: "4%" }]}>
                            <Text style={[styles.text7, styles.center, {marginVertical: "auto"}]}>$0,95</Text>
                        </View>

                        <View style={[styles.borderrightblack, { width: "4%" }]}>
                            <Text style={[styles.text7, styles.center, {marginVertical: "auto"}]}>$0,95</Text>
                        </View>




                    </View>

                    <View style={[styles.borderrightblack, styles.borderleftblack, styles.borderbottomblack, styles.flex]}>


                       

                        <View style={[styles.borderrightblack, { width: "4%" }]}>
                            <Text style={[styles.text7, styles.center, {marginVertical: "auto"}]}></Text>
                        </View>

                        <View style={[styles.borderrightblack, { width: "4%" }]}>
                        <Image src="./images.jpeg" />
                        </View>

                        <View style={[styles.borderrightblack, { width: "4%" }]}>
                            <Text style={[styles.text7, styles.center, {marginVertical: "auto"}]}>115 AC</Text>
                        </View>

                        <View style={[styles.borderrightblack, { width: "4%" }]}>
                            <Text style={[styles.text7, styles.center, {marginVertical: "auto"}]}>SINSEY</Text>
                        </View>

                        <View style={[styles.borderrightblack, { width: "4%" }]}>
                            <Text style={[styles.text7, styles.center, {marginVertical: "auto"}]}>French Terry</Text>
                        </View>

                        <View style={[styles.borderrightblack, { width: "4%" }]}>
                            <Text style={[styles.text7, styles.center, {marginVertical: "auto"}]}>80% Cotton 20% Polyester</Text>
                        </View>

                        <View style={[styles.borderrightblack, { width: "4%" }]}>
                            <Text style={[styles.text7, styles.center, {marginVertical: "auto"}]}>275</Text>
                        </View>

                        <View style={[styles.borderrightblack, { width: "4%" }]}>
                            <Text style={[styles.text7, styles.center, {marginVertical: "auto"}]}></Text>
                        </View>
                        <View style={[styles.borderrightblack, { width: "4%" }]}>
                            <Text style={[styles.text7, styles.center, {marginVertical: "auto"}]}>Dyed</Text>
                        </View>

                        <View style={[styles.borderrightblack, { width: "4%" }]}>
                            <Text style={[styles.text7, styles.center, {marginVertical: "auto"}]}>Ladies</Text>
                        </View>

                        <View style={[styles.borderrightblack, { width: "4%" }]}>
                            <Text style={[styles.text7, styles.center, {marginVertical: "auto"}]}>1</Text>
                        </View>

                        <View style={[styles.borderrightblack, { width: "4%" }]}>
                            <Text style={[styles.text7, styles.center, {marginVertical: "auto"}]}>$0,95</Text>
                        </View>

                        <View style={[styles.borderrightblack, { width: "4%" }]}>
                            <Text style={[styles.text7, styles.center, {marginVertical: "auto"}]}>$0,95</Text>
                        </View>

                        <View style={[styles.borderrightblack, { width: "4%" }]}>
                            <Text style={[styles.text7, styles.center, {marginVertical: "auto"}]}>$0,95</Text>
                        </View>

                        <View style={[styles.borderrightblack, { width: "4%" }]}>
                            <Text style={[styles.text7, styles.center, {marginVertical: "auto"}]}>$0,95</Text>
                        </View>

                        <View style={[styles.borderrightblack, { width: "4%" }]}>
                            <Text style={[styles.text7, styles.center, {marginVertical: "auto"}]}>$0,95</Text>
                        </View>

                        <View style={[styles.borderrightblack, { width: "4%" }]}>
                            <Text style={[styles.text7, styles.center, {marginVertical: "auto"}]}>$0,95</Text>
                        </View>

                        <View style={[styles.borderrightblack, { width: "4%" }]}>
                            <Text style={[styles.text7, styles.center, {marginVertical: "auto"}]}>$0,95</Text>
                        </View>

                        <View style={[styles.borderrightblack, { width: "4%" }]}>
                            <Text style={[styles.text7, styles.center, {marginVertical: "auto"}]}>$0,95</Text>
                        </View>

                        <View style={[styles.borderrightblack, { width: "4%" }]}>
                            <Text style={[styles.text7, styles.center, {marginVertical: "auto"}]}>$0,95</Text>
                        </View>

                        <View style={[styles.borderrightblack, { width: "4%" }]}>
                            <Text style={[styles.text7, styles.center, {marginVertical: "auto"}]}>$0,95</Text>
                        </View>

                        <View style={[styles.borderrightblack, { width: "4%" }]}>
                            <Text style={[styles.text7, styles.center, {marginVertical: "auto"}]}>$0,95</Text>
                        </View>

                        <View style={[styles.borderrightblack, { width: "4%" }]}>
                            <Text style={[styles.text7, styles.center, {marginVertical: "auto"}]}>$0,95</Text>
                        </View>

                        <View style={[styles.borderrightblack, { width: "4%" }]}>
                            <Text style={[styles.text7, styles.center, {marginVertical: "auto"}]}>$0,95</Text>
                        </View>

                        <View style={[styles.borderrightblack, { width: "4%" }]}>
                            <Text style={[styles.text7, styles.center, {marginVertical: "auto"}]}>$0,95</Text>
                        </View>




                    </View>

                    <View style={[styles.borderrightblack, styles.borderleftblack, styles.borderbottomblack, styles.flex]}>



                        <View style={[styles.borderrightblack, { width: "4%" }]}>
                            <Text style={[styles.text7, styles.center, {marginVertical: "auto"}]}></Text>
                        </View>
                        <View style={[styles.borderrightblack, { width: "4%" }]}>
                        <Image src="./toy car.jpg" />
                        </View>

                        <View style={[styles.borderrightblack, { width: "4%" }]}>
                            <Text style={[styles.text7, styles.center, {marginVertical: "auto"}]}>115 AC</Text>
                        </View>

                        <View style={[styles.borderrightblack, { width: "4%" }]}>
                            <Text style={[styles.text7, styles.center, {marginVertical: "auto"}]}>SINSEY</Text>
                        </View>

                        <View style={[styles.borderrightblack, { width: "4%" }]}>
                            <Text style={[styles.text7, styles.center, {marginVertical: "auto"}]}>French Terry</Text>
                        </View>

                        <View style={[styles.borderrightblack, { width: "4%" }]}>
                            <Text style={[styles.text7, styles.center, {marginVertical: "auto"}]}>80% Cotton 20% Polyester</Text>
                        </View>

                        <View style={[styles.borderrightblack, { width: "4%" }]}>
                            <Text style={[styles.text7, styles.center, {marginVertical: "auto"}]}>275</Text>
                        </View>

                        <View style={[styles.borderrightblack, { width: "4%" }]}>
                            <Text style={[styles.text7, styles.center, {marginVertical: "auto"}]}></Text>
                        </View>
                        <View style={[styles.borderrightblack, { width: "4%" }]}>
                            <Text style={[styles.text7, styles.center, {marginVertical: "auto"}]}>Dyed</Text>
                        </View>

                        <View style={[styles.borderrightblack, { width: "4%" }]}>
                            <Text style={[styles.text7, styles.center, {marginVertical: "auto"}]}>Ladies</Text>
                        </View>

                        <View style={[styles.borderrightblack, { width: "4%" }]}>
                            <Text style={[styles.text7, styles.center, {marginVertical: "auto"}]}>1</Text>
                        </View>

                        <View style={[styles.borderrightblack, { width: "4%" }]}>
                            <Text style={[styles.text7, styles.center, {marginVertical: "auto"}]}>$0,95</Text>
                        </View>

                        <View style={[styles.borderrightblack, { width: "4%" }]}>
                            <Text style={[styles.text7, styles.center, {marginVertical: "auto"}]}>$0,95</Text>
                        </View>

                        <View style={[styles.borderrightblack, { width: "4%" }]}>
                            <Text style={[styles.text7, styles.center, {marginVertical: "auto"}]}>$0,95</Text>
                        </View>

                        <View style={[styles.borderrightblack, { width: "4%" }]}>
                            <Text style={[styles.text7, styles.center, {marginVertical: "auto"}]}>$0,95</Text>
                        </View>

                        <View style={[styles.borderrightblack, { width: "4%" }]}>
                            <Text style={[styles.text7, styles.center, {marginVertical: "auto"}]}>$0,95</Text>
                        </View>

                        <View style={[styles.borderrightblack, { width: "4%" }]}>
                            <Text style={[styles.text7, styles.center, {marginVertical: "auto"}]}>$0,95</Text>
                        </View>

                        <View style={[styles.borderrightblack, { width: "4%" }]}>
                            <Text style={[styles.text7, styles.center, {marginVertical: "auto"}]}>$0,95</Text>
                        </View>

                        <View style={[styles.borderrightblack, { width: "4%" }]}>
                            <Text style={[styles.text7, styles.center, {marginVertical: "auto"}]}>$0,95</Text>
                        </View>

                        <View style={[styles.borderrightblack, { width: "4%" }]}>
                            <Text style={[styles.text7, styles.center, {marginVertical: "auto"}]}>$0,95</Text>
                        </View>

                        <View style={[styles.borderrightblack, { width: "4%" }]}>
                            <Text style={[styles.text7, styles.center, {marginVertical: "auto"}]}>$0,95</Text>
                        </View>

                        <View style={[styles.borderrightblack, { width: "4%" }]}>
                            <Text style={[styles.text7, styles.center, {marginVertical: "auto"}]}>$0,95</Text>
                        </View>

                        <View style={[styles.borderrightblack, { width: "4%" }]}>
                            <Text style={[styles.text7, styles.center, {marginVertical: "auto"}]}>$0,95</Text>
                        </View>

                        <View style={[styles.borderrightblack, { width: "4%" }]}>
                            <Text style={[styles.text7, styles.center, {marginVertical: "auto"}]}>$0,95</Text>
                        </View>

                        <View style={[styles.borderrightblack, { width: "4%" }]}>
                            <Text style={[styles.text7, styles.center, {marginVertical: "auto"}]}>$0,95</Text>
                        </View>




                    </View>



                </View>
            </Page>
        </Document>
    );
};

export default PricingAndDevelopment;
