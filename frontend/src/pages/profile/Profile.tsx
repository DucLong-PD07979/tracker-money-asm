import { SectionWrapper } from "@/components/section";
import NewTransactionProvider from "./components/NewTransactionContext";
import NewTransactions from "./components/NewTransactions";

const Profile = () => {
    return (
        <div className="profile-wrapper">
            <div className="profile-inner-container">
                <SectionWrapper title="new transactions">
                    <NewTransactionProvider>
                        <NewTransactions />
                    </NewTransactionProvider>
                </SectionWrapper>
            </div>
        </div>
    );
};

export default Profile;
