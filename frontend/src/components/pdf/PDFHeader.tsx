import { Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
    header: {
        padding: 10,
        borderBottom: `1px soild #3f72af`,
        color: "#3f72af",
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
    },
});

const PDFHeader = ({ title }: { title: string }) => (
    <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
    </View>
);

export default PDFHeader;
