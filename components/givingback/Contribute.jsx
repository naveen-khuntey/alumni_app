import React from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity, Linking } from 'react-native';
import HomeFooter from '../home/footer/Footer';
import { COLORS } from '../../constants';

const Contribute = () => {
    const openLink = () => {
        Linking.openURL('https://alum.nitrkl.ac.in/docs/Income_Tax_Rebates.pdf');
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.header}>
                    <Image
                        source={require('../../assets/images/goldenjublebg.jpg')}
                        style={styles.headerBackground}
                    />
                    <Text style={styles.headerText}>CONTRIBUTE</Text>
                </View>
                <View style={styles.contentContainer}>
                    <Text style={styles.title}>How To Contribute</Text>
                    <View style={styles.line} /> 
                    <Text style={styles.paragraph}>
                        Your support is solicited in terms sponsoring specific projects. Your support of a particular project will be recognized by way of naming buildings, facilities, Chair Professorships, Scholarships, etc. after you or after someone whose memory you would want to be perpetuated.
                    </Text>

                    <Text style={styles.paragraph}>
                        Individuals, with 100% exemption on donations under section 80G of Indian Income Tax Act. For details please visit "Income Tax Rebates" option. For making your donation, please choose the following options.
                    </Text>

                    <Text style={styles.subHeader}>Wire Transfer:</Text>
                    <Text style={styles.paragraph}>Account Name: NIT Rourkela Alumni Fund</Text>
                    <Text style={styles.paragraph}>Account No: 31446923318</Text>
                    <Text style={styles.paragraph}>Branch: SBI REC Rourkela Branch</Text>
                    <Text style={styles.paragraph}>IFSC Code: SBIN 0002109</Text>

                    <Text style={styles.subHeader}>Payment by Cheque:</Text>
                    <Text style={styles.paragraph}>
                        The cheque should be in favor of "Director, National Institute of Technology Rourkela"
                    </Text>

                    <TouchableOpacity onPress={openLink}>
                        <Text style={styles.linkText}>
                            Policy on Management of Funds created by contributions from Alumni
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.contentContainer}>
                    <Text style={styles.title}>Income Tax Rebate</Text>
                    <View style={styles.line} /> 
                    <TouchableOpacity onPress={openLink}>
                        <Text style={styles.linkText}>
                            Income Tax Rebate Policy.
                        </Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <HomeFooter />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        borderRadius: 10,
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 5,
        elevation: 2,
        margin: 20,
    },
    header: {
        position: 'relative',
        width: '100%',
        height: 120,
    },
    headerBackground: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    headerText: {
        position: 'absolute',
        top: 40,
        left: 0,
        right: 0,
        textAlign: 'center',
        fontSize: 28,
        fontWeight: 'bold',
        color: '#fff',
        zIndex: 10,
    },
    contentContainer: {
        backgroundColor: '#F0F4F8',
        padding: 16,
        margin: 10,
        borderRadius: 8,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#103166',
        marginBottom: 8,
    },
    line: {
        height: 2, // Line height
        backgroundColor: '#103166', // Blue color for the line
        marginBottom: 16, // Space below the line
    },
    paragraph: {
        fontSize: 16,
        color: '#333',
        marginBottom: 8,
    },
    subHeader: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        marginTop: 16,
    },
    linkText: {
        fontSize: 16,
        color: '#1E90FF',
        textDecorationLine: 'underline',
        marginTop: 16,
    },
});

export default Contribute;
