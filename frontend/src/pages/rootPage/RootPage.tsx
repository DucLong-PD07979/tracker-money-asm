import { Button } from "@/components/ui";
import { Grid } from "@/components/ui";
import { FooterRoot } from "@/layouts/footer";
import { HeaderRoot } from "@/layouts/header";

interface heroCardDataType {
    image: string;
    title: string;
}

interface shortIntroduceType {
    image: string;
    title: string;
    descriptionShort: string;
    order: number;
}

const RootPage = () => {
    
    const heroCardData: heroCardDataType[] = [
        {
            image: "https://moneylover.me/img/introfeature/1.svg",
            title: "100% Secured data",
        },
        {
            image: "https://moneylover.me/img/introfeature/1.svg",
            title: "100% Secured data",
        },
        {
            image: "https://moneylover.me/img/introfeature/1.svg",
            title: "100% Secured data",
        },
        {
            image: "https://moneylover.me/img/introfeature/1.svg",
            title: "100% Secured data",
        },
    ];

    const shortIntroduce: shortIntroduceType[] = [
        {
            order: 1,
            image: "https://moneylover.me/img/details/Transaction@4x.png",
            title: "Simple money tracker",
            descriptionShort:
                "It takes seconds to record daily transactions. Put them into clear and visualized categories such as Expense: Food, Shopping or Income: Salary, Gift.",
        },
        {
            order: 2,
            image: "https://moneylover.me/img/details/Transaction@4x.png",
            title: "Simple money tracker",
            descriptionShort:
                "It takes seconds to record daily transactions. Put them into clear and visualized categories such as Expense: Food, Shopping or Income: Salary, Gift.",
        },
        {
            order: 3,
            image: "https://moneylover.me/img/details/Transaction@4x.png",
            title: "Simple money tracker",
            descriptionShort:
                "It takes seconds to record daily transactions. Put them into clear and visualized categories such as Expense: Food, Shopping or Income: Salary, Gift.",
        },
    ];

    return (
        <div>
            <HeaderRoot></HeaderRoot>
            <section className="hero-banner">
                <div className="container">
                    <h1 className="hero-banner__title">
                        <span>Simple way</span>
                    </h1>
                    <div className="hero-banner__title-wrapper">
                        <p>to manage</p>
                        <h1 className="hero-banner__title">
                            <span> personal finances</span>
                        </h1>
                    </div>
                    <div className="hero-banner__action">
                        <Button size="xl" rounder="sm">
                            Login
                        </Button>
                        <Button size="xl" rounder="sm">
                            Register
                        </Button>
                    </div>
                </div>
            </section>
            <section>
                <div className="card-introduce__wrapper">
                    <div className="container">
                        <Grid
                            gap="26px"
                            rowNumber={1}
                            columnNumber={4}
                            ariaLabel="Grid"
                        >
                            {heroCardData.map((card, index) => {
                                return (
                                    <div
                                        className="card-introduce__box"
                                        key={card.title + index}
                                    >
                                        <img
                                            src={card.image}
                                            alt={card.title}
                                        />
                                        <h3>{card.title}</h3>
                                    </div>
                                );
                            })}
                        </Grid>
                    </div>
                </div>
            </section>
            {shortIntroduce.map((introduce, index) => {
                const { order, title, image, descriptionShort } = introduce;
                return (
                    <section className="introduce-section" key={index}>
                        <div className="container">
                            <Grid
                                classNames="introduce-section__gird"
                                gap="40px"
                                columnNumber={2}
                                rowNumber={1}
                            >
                                {order % 2 !== 0 && (
                                    <>
                                        <img src={image} alt={title} />
                                        <div className="introduce-section__short">
                                            <h3>{title}</h3>
                                            <p>{descriptionShort}</p>
                                        </div>
                                    </>
                                )}

                                {order % 2 === 0 && (
                                    <>
                                        <div className="introduce-section__short">
                                            <h3>{title}</h3>
                                            <p>{descriptionShort}</p>
                                        </div>
                                        <img src={image} alt={title} />
                                    </>
                                )}
                            </Grid>
                        </div>
                    </section>
                );
            })}
            <FooterRoot></FooterRoot>
        </div>
    );
};

export default RootPage;
