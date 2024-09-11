interface IncomeType {
    amount: number;
    date: Date;
    category: string;
    description: string;
}

interface IncomeUpdateType extends IncomeType {
    id: string;
    newData: Partial<IncomeType>;
}

export type { IncomeType, IncomeUpdateType };
