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
  const [billing_type, setBillingType] = useState<"Monthly" | "Annually">(
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
  }, [billing_type, type]);

  const platformFeatures: Feature[] = [
    {
      description:
        "Categorise books using genre tags, limited to the creation of 5 book genres.",
      plan: "Free",
    },
    {
      description: "Reading metrics and insights.",
      plan: "Free",
    },
    {
      description: "Share highlights as images.",
      plan: "Free",
    },
    {
      description:
        "Annotate, favourite and tag highlights. Limited to the creation of 5 tags.",
      plan: "Free",
    },
    {
      description: "Limited to 100 highlights per book.",
      plan: "Free",
    },
    {
      description: "Add custom book covers.",
      plan: "Free",
    },
    {
      description: "Export highlights to Notion.",
      plan: "Premium",
    },
    {
      description: "Export highlights as CSV.",
      plan: "Premium",
    },
    {
      description: "Unlimited creation of highlight tags.",
      plan: "Premium",
    },
    {
      description: "Unlimited creation of book genres.",
      plan: "Premium",
    },
    {
      description: "No image watermarks when sharing.",
      plan: "Premium",
    },
    {
      description: "Unlimited highlights per book.",
      plan: "Premium",
    },
  ];

  // Modify feature descriptions for the Premium card
  const modifiedFeatures = platformFeatures
    .map((feature) => {
      if (type === "Premium") {
        feature.description = feature.description
          .replace(/, limited to the creation of \d+ book genres/, "")
          .replace(/. Limited to the creation of \d+ tags/, "");
      }
      return feature;
    })
    .filter((new_f) => {
      if (type === "Premium") {
        return new_f.description !== "Limited to 100 highlights per book.";
      } else {
        return new_f;
      }
    });

  return (
    <div className={`${styles.membershipCard}`}>
      <div className={styles.membershipCardHeader}>
        <h2>{type}</h2>
        {type === "Premium" && (
          <p
            onClick={(e) => {
              e.stopPropagation();
              if (billing_type === "Monthly") {
                setBillingType("Annually");
              } else {
                setBillingType("Monthly");
              }
            }}
          >
            Prefer to pay {billing_type === "Annually" ? "monthly" : "annually"}
            ? <span>Click here</span>
          </p>
        )}
      </div>
      <div className={styles.membershipCardPrice}>
        <h1>${price}</h1>
        <h2>/{billing_type}</h2>
      </div>
      <div className={styles.membershipCardFeatures}>
        {modifiedFeatures.map(({ description, plan }, index) => {
          const isNotFreeTier = type === "Free" && plan !== "Free";
          return (
            <div key={index} className={styles.featureItem}>
              <h3
                style={
                  isNotFreeTier
                    ? {
                        color: "grey",
                        textDecoration: "line-through",
                        textDecorationThickness: "0.5px",
                      }
                    : { color: "white" }
                }
              >
                <span
                  style={
                    isNotFreeTier ? { color: "grey" } : { color: "#3fcdfc" }
                  }
                >
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
