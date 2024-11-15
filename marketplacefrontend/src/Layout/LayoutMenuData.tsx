import React, { useEffect, useState } from "react";

const Navdata = () => {
    // State to track the current active section
    const [isCurrentState, setIsCurrentState] = useState("Dashboard");

    function updateIconSidebar(e: any) {
        if (e && e.target && e.target.getAttribute("subitems")) {
            const ul: any = document.getElementById("two-column-menu");
            const iconItems: any = ul.querySelectorAll(".nav-icon.active");
            let activeIconItems = [...iconItems];
            activeIconItems.forEach((item) => {
                item.classList.remove("active");
            });
        }
    }

    useEffect(() => {
        // Remove 'twocolumn-panel' class on component mount
        document.body.classList.remove("twocolumn-panel");

        // Reset specific states based on the current active state
        const sections = [
            "Ecommerce",
            "Orders",
            "Sellers",
            "Invoice",
            "Shipping",
            "Localization",
            "Auth"
        ];
        if (!sections.includes(isCurrentState)) {
            setIsCurrentState("Dashboard");
        }
    }, [isCurrentState]);

    const menuItems = [
        {
            label: "Menu",
            isHeader: true,
        },
        {
            id: "Products",
            label: "Products",
            icon: "bi bi-box-seam",
            link: "/products/List",
            click: (e: React.MouseEvent<HTMLAnchorElement>) => {
                e.preventDefault();
                updateIconSidebar(e);
                setIsCurrentState("Products");
            },
        },
    ];

    return (
        <React.Fragment>
            {menuItems.map((item, index) => (
                <div key={index} className="menu-item">
                    {item.isHeader ? (
                        <h4>{item.label}</h4>
                    ) : (
                        <a href={item.link} onClick={item.click}>
                            <i className={item.icon}></i> {item.label}
                        </a>
                    )}
                </div>
            ))}
        </React.Fragment>
    );
};

export default Navdata;
