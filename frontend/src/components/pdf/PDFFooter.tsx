import { Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
    footer: {
        padding: 10,
        textAlign: "center",
        position: "absolute",
        bottom: 0,
        width: "100%",
        borderTop: "1px solid #555",
    },
    text: {
        fontSize: 10,
    },
});

interface PDFFooterProps {
    text: string;
}

const PDFFooter = ({ text }: PDFFooterProps) => (
    <View style={styles.footer}>
        <Text style={styles.text}>{text}</Text>
    </View>
);

export default PDFFooter;
