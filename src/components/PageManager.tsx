import React, { createElement, FunctionComponent, useState } from "react";
import { Dfn } from "../globals";
import AttendenceCheckIn from "./maindashboard/AttendenceCheckIn";
import Forms from "./maindashboard/Forms";
import Group from "./maindashboard/Group";
import Interaction from "./maindashboard/InteractionMenu/Interaction";
import MassContact from "./maindashboard/Masscontact";
import MyOutstanding from "./maindashboard/InteractionMenu/MyOutstanding";
import { PageLayout, LocalNavigator } from "../types/InteractionTypes";

const pageMap: PageLayout = {
  interaction: Interaction,
  group: Group,
  myoutstanding: MyOutstanding,
  masscontact: MassContact,
  checkin: AttendenceCheckIn,
  forms: Forms
};

const PageManager: FunctionComponent<LocalNavigator> = ({ activePage }) => {
  const ActiveComponent = pageMap[activePage];
  return ActiveComponent ?  <ActiveComponent activePage={activePage} /> : <></>;
};

export default PageManager;
