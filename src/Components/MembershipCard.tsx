import styles from "../styles/MembershipCard.module.scss";
import React, { useState, useEffect, useContext } from "react";

interface MembershipCardProps {
	type: "Free" | "Premium";
}

type Feature = {
	description: string;
	plan: MembershipCardProps["type"];
};

const MembershipCard = ({ type }: MembershipCardProps) => {
	const [billing_type, setBillingType] = useState<"Monthly" | "Anually">("Monthly");
	const [price, setPrice] = useState(0);

	useEffect(() => {
		if (type === "Premium") {
			if (billing_type === "Monthly") {
				setPrice(3);
			} else {
				setPrice(30);
			}
		}
	}, [billing_type, type]);

	const platformFeatures: Feature[] = [
		{
			description: "Categorise books using genre tags",
			plan: "Free",
		},
		{
			description: "Reading metrics and insights",
			plan: "Free",
		},
		{
			description: "Annotate, favourite and tag highlights",
			plan: "Free",
		},
		{
			description: "Share highlights as images",
			plan: "Free",
		},
		{
			description: "Add custom book covers",
			plan: "Free",
		},
		{
			description: "Export highlights to Notion",
			plan: "Premium",
		},
		{
			description: "Export highlights as CSV",
			plan: "Premium",
		},
		{
			description: "No image watermarks when sharing",
			plan: "Premium",
		},
	];

	return (
		<div className={`${styles.membershipCard}`}>
			<div className={styles.membershipCardHeader}>
				<h2>{type}</h2>
				{type === "Premium" && (
					<p
						onClick={(e) => {
							e.stopPropagation();
							if (billing_type === "Monthly") {
								setBillingType("Anually");
							} else {
								setBillingType("Monthly");
							}
						}}
					>
						Prefer to pay {billing_type === "Anually" ? "monthly" : "anually"}? <span>Click here</span>
					</p>
				)}
			</div>
			<div className={styles.membershipCardPrice}>
				<h1>${price}</h1>
				<h2>/{billing_type}</h2>
			</div>
			<div className={styles.membershipCardFeatures}>
				{platformFeatures.map(({ description, plan }, index) => {
					const isNotFreeTier = type === "Free" && plan !== "Free";
					return (
						<div key={index} className={styles.featureItem}>
							<h3
								style={
									isNotFreeTier
										? { color: "grey", textDecoration: "line-through", textDecorationThickness: "0.5px" }
										: { color: "white" }
								}
							>
								<span style={isNotFreeTier ? { color: "grey" } : { color: "#3fcdfc" }}>
									{isNotFreeTier ? "✗ " : "✓ "}
								</span>
								{description}
							</h3>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default MembershipCard;
