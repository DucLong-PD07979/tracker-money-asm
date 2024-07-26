interface ExpensesType {
    id_expense_cate: string;
    amount: number;
    duration: Date;
    is_paid: boolean;
    currency_code: string;
    description: string;
}

export type { ExpensesType };
