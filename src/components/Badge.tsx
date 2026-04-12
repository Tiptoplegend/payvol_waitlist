import { type ReactNode } from "react";
import "./Badge.css";

type BadgeProps = {
  label: string;
  icon?: ReactNode;
};

function Badge({ label, icon }: BadgeProps) {
  return (
    <div className="badge">
      {icon && icon}
      <span>{label}</span>
    </div>
  );
}

export default Badge;
