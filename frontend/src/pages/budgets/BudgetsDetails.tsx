import { getBudgetDetailsWidthUser } from "@/api/budgetsApi";
import DotSpinner from "@/components/ui/loading/DotSpinner";
import { formatCurrency } from "@/utils/helper/formatHelpler";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

interface IcomesAndExpesesType {
    _id: string;
    totalAmount: number;
}

const BudgetsDetails = () => {
    const { year } = useParams();
    const {
        data: budgetDetails,
        isLoading,
        isError,
        error,
    } = useQuery({
        queryFn: () => getBudgetDetailsWidthUser(parseInt(year!)),
        queryKey: ["budget-details"],
    });

    if (isError) {
        return <div>{error.message}</div>;
    }

    if (isLoading) {
        return <DotSpinner />;
    }

    return (
        <div>
            <div className="budget-details">
                <div className="budget-details__wrapper">
                    <h2 className="budget-details__title">
                        Details budget year {budgetDetails.allYearBudgets.year}
                    </h2>
                    <ul className="budget-details__list">
                        <li className="budget-details__list-item">
                            <span className="budget-details__label">
                                Amount:
                            </span>
                            <span className="budget-details__amount">
                                {formatCurrency(
                                    budgetDetails.allYearBudgets.amount
                                )}
                            </span>
                        </li>
                        <li className="budget-details__list-item">
                            <span className="budget-details__label">
                                Total income:
                            </span>
                            <span className="budget-details__amount">
                                {formatCurrency(
                                    budgetDetails.allYearBudgets.totalIncome
                                )}
                            </span>
                        </li>
                        <li className="budget-details__list-item">
                            <span className="budget-details__label">
                                Total expenese :
                            </span>
                            <span className="budget-details__amount">
                                {formatCurrency(
                                    budgetDetails.allYearBudgets.totalExpense
                                )}
                            </span>
                        </li>
                        <li className="budget-details__list-item">
                            <span className="budget-details__label">
                                Balance :
                            </span>
                            <span className="budget-details__amount">
                                {formatCurrency(
                                    budgetDetails.allYearBudgets.balance
                                )}
                            </span>
                        </li>
                    </ul>
                </div>

                <div className="budget-details__wrapper">
                    <h2 className="budget-details__title">Incomes</h2>
                    <ul className="budget-details__list">
                        {budgetDetails.allYearBudgets.incomes.length === 0 && (
                            <li className="budget-details__list-item">
                                <span className="budget-details__label">
                                    Bạn chưa tạo incomes
                                </span>
                            </li>
                        )}
                        {budgetDetails.allYearBudgets.incomes.length > 0 &&
                            budgetDetails.allYearBudgets.incomes.map(
                                (income: IcomesAndExpesesType) => (
                                    <li
                                        className="budget-details__list-item"
                                        key={income._id}
                                    >
                                        <span className="budget-details__label">
                                            {income._id}
                                        </span>
                                        <span className="budget-details__amount">
                                            {formatCurrency(income.totalAmount)}
                                        </span>
                                    </li>
                                )
                            )}
                    </ul>
                </div>

                <div className="budget-details__wrapper">
                    <h2 className="budget-details__title">Expenses</h2>
                    <ul className="budget-details__list">
                        {budgetDetails.allYearBudgets.expenses.length > 0 &&
                            budgetDetails.allYearBudgets.expenses.map(
                                (expense: IcomesAndExpesesType) => (
                                    <li
                                        className="budget-details__list-item"
                                        key={expense._id}
                                    >
                                        <span className="budget-details__label">
                                            Expense category: {expense._id}
                                        </span>
                                        <span className="budget-details__amount">
                                            {formatCurrency(
                                                expense.totalAmount
                                            )}
                                        </span>
                                    </li>
                                )
                            )}

                        {budgetDetails.allYearBudgets.expenses.length === 0 && (
                            <li className="budget-details__list-item">
                                <span className="budget-details__label">
                                    Bạn chưa tạo expenses
                                </span>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default BudgetsDetails;
