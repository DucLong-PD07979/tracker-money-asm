import { SectionWrapper } from "@/components/section";
import { useQuery } from "@tanstack/react-query";
import { getBudgetWithUserId } from "@/api/budgetsApi";
import DotSpinner from "@/components/ui/loading/DotSpinner";
import { Grid } from "@/components/ui";
import CardBudget from "./components/CardBudget";

const Budgets = () => {
    const {
        data: budgetYear,
        isLoading,
        isError,
        error,
    } = useQuery({
        queryKey: ["budget"],
        queryFn: getBudgetWithUserId,
    });

    if (isError) {
        return <div>{error.message}</div>;
    }

    if (isLoading) {
        return <DotSpinner />;
    }

    return (
        <div>
            <div className="budgets-inner">
                <SectionWrapper title="Your budget list">
                    <div className="section-inner">
                        <Grid classNames="gird-cols-1 md:grid-cols-2 lg:grid-cols-4">
                            {budgetYear.length > 0 &&
                                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                                budgetYear.map((budget: any) => {
                                    return (
                                        <CardBudget
                                            {...budget}
                                            key={budget._id}
                                        />
                                    );
                                })}
                        </Grid>
                    </div>
                </SectionWrapper>
            </div>
        </div>
    );
};

export default Budgets;
