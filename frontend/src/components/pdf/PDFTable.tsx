/* eslint-disable @typescript-eslint/no-explicit-any */
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

interface PDFTableProps {
    headers: string[];
    data: Record<string, string | number>[]; 
}

const PDFTable = ({ headers, data }: PDFTableProps) => (
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
