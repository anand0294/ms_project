import React from "react";
import { Tabs } from "antd";
import PageTitle from "../../components/PageTitle";
import TheatresList from "./TheatresList";

function Profile() {
  return (
    <div>
      <PageTitle title="Profile" />

      <Tabs defaultActiveKey="1">
        <Tabs.TabPane tab="Bookings" key="1">
          <h1>This is Bookings</h1>
        </Tabs.TabPane>
        <Tabs.TabPane tab="Apply for Theatre" key="2">
          <TheatresList />
        </Tabs.TabPane>
      </Tabs>
    </div>
  );
}

export default Profile;
