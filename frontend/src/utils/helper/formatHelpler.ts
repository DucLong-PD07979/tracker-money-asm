export const formatCurrency = (
    amount: number = 0,
    codeContry: string = "vi-VN",
    codeMoney: string = "VND"
): string => {
    return new Intl.NumberFormat(codeContry, {
        style: "currency",
        currency: codeMoney,
    }).format(amount);
};
