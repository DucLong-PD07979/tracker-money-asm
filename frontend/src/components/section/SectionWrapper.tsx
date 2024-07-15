import { FC, ReactNode } from "react";

interface SectionWrapperProps {
    children: ReactNode;
    title: string | ReactNode;
    classNames?: string;
}

const SectionWrapper: FC<SectionWrapperProps> = ({
    classNames = "",
    children,
    title,
}) => {
    return (
        <section>
            <div className={`section-inner ${classNames}`}>
                <h2 className="section-title">{title}</h2>
                <div>{children}</div>
            </div>
        </section>
    );
};

export default SectionWrapper;
