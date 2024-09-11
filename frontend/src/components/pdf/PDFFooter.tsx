import { Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
    footer: {
        padding: 10,
        textAlign: "center",
        position: "absolute",
        bottom: 0,
        width: "100%",
        borderTop: '1px soild #555'
    },
    text: {
        fontSize: 10,
    },
});

const PDFFooter = ({ text }: { text: string }) => (
    <View style={styles.footer}>
        <Text style={styles.text}>{text}</Text>
    </View>
);

export default PDFFooter;
