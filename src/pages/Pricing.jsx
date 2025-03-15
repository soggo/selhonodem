const pricingPlans = [
    {
        title: "Design Advice",
        price: "$29",
        period: "/month",
        features: [
            "General living space advices",
            "Renovation advices",
            "Interior design advices",
            "Furniture reorganization",
            "Up to 5 hours meeting"
        ]
    },
    {
        title: "Complete Design",
        price: "$39",
        period: "/month",
        features: [
            'Complete home redesign',
            'Interior and exterior works',
           ' Modular interior planning',
          '  Kitchen design',
        '    Garages organization'
        ]
    },
    {
        title: "Premium Package",
        price: "$59",
        period: "/month",
        features: [
            'Furniture for living room',
            'Furniture refurbishment',
            'Sofas and amchairs',
          '  Tables and chairs',
            'Kitchens'
        ]
    }
];

const Pricing = () => {
    return (
        <>
            <div className="banner" style={{ backgroundImage: "url(/public/Rectangle20.png)" }}>
                <h1>Pricing & Plan</h1>
            </div>

            <div className="pricing-container">
                {pricingPlans.map((plan, index) => (
                    <div className="pricing-card" key={index}>
                        <div className="price-header">
                            <h3>{plan.title}</h3>
                            <h1>{plan.price}</h1>
                            <p>{plan.period}</p>
                        </div>
                        {plan.features.map((feature, i) => (
                            <p key={i}>{feature}</p>
                        ))}
                        <button>Get Started</button>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Pricing;
