import { Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
    table: {
        width: "auto",
        margin: 10,
        border: "1px solid",
    },
    tableRow: {
        flexDirection: "row",
    },
    tableCellHeader: {
        backgroundColor: "#eeeeee",
        padding: 5,
        fontSize: 12,
        fontWeight: "bold",
    },
    tableCell: {
        padding: 5,
        fontSize: 12,
    },
});

const PDFTable = ({ headers, data }: { headers: string[]; data: any[] }) => (
    <View style={styles.table}>
        <View style={styles.tableRow}>
            {headers.map((header) => (
                <Text style={styles.tableCellHeader} key={header}>
                    {header}
                </Text>
            ))}
        </View>
        {data.map((row, index) => (
            <View style={styles.tableRow} key={index}>
                {Object.values(row).map((value, idx) => (
                    <Text style={styles.tableCell} key={idx}>
                        {value}
                    </Text>
                ))}
            </View>
        ))}
    </View>
);

export default PDFTable;
