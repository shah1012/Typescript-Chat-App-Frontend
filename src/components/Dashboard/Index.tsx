import React from "react";
import dashboardOptions from "../../misc/DashBoardOptions";
import DashBoardOption from "./DashBoardOption";

const Index: React.FC = () => {
  return (
    <section className="dashboard">
      <h1>Dashboard</h1>
      <main>
        {dashboardOptions.map((option) => (
          <DashBoardOption key={option.id} option={option} />
        ))}
      </main>
    </section>
  );
};

export default Index;
