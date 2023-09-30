import styles from "../styles/MembershipCard.module.scss";
import { useRouter } from "next/router";
import React, { useState, useEffect, useContext } from "react";

interface MembershipCardProps {
  type: "Free" | "Premium";
}

const MembershipCard = ({ type }: MembershipCardProps) => {
  const router = useRouter();

  const [billing_type, setBillingType] = useState<"Monthly" | "Anually">(
    "Monthly"
  );
  const [price, setPrice] = useState(0);

  useEffect(() => {
    if (type === "Premium") {
      if (billing_type === "Monthly") {
        setPrice(3);
      } else {
        setPrice(30);
      }
    }
  }, [billing_type]);

  const freeFeatures = [
    "Everything in preview plan, without book or highlight limits",
    "Categorise books using genre tags",
    "Organise your highlights by favouriting, tagging & adding notes",
    "Add custom book covers",
  ];

  const premiumFeatures = [
    "Everything in free plan",
    "No image watermarks",
    "Various integrations including Notion & Anki",
    "Detailed analytics & insights in the form of charts & graphs",
  ];

  const features = type === "Free" ? freeFeatures : premiumFeatures;

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
            Prefer to pay {billing_type === "Anually" ? "monthly" : "anually"}?{" "}
            <span>Click here</span>
          </p>
        )}
      </div>
      <div className={styles.membershipCardPrice}>
        <h1>${price}</h1>
        <h2>/{billing_type}</h2>
      </div>
      <div className={styles.membershipCardFeatures}>
        {features.map((feature, index) => (
          <div key={index} className={styles.featureItem}>
            <h3>✅ {feature}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MembershipCard;
