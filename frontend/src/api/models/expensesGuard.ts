interface ExpensesType {
    id_expense_cate: string;
    amount: number;
    duration: Date;
    is_paid: string;
    description: string;
}

interface ExpensesTypeUpdate extends ExpensesType {
    _id: string;
}

export type { ExpensesType, ExpensesTypeUpdate };
