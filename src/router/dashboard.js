import { createRouter, createWebHistory } from "vue-router";

// DASHBOARD
import Dashboard from "@/pages/dashboard/Dashboard.vue";
// import Seeds from "@/pages/dashboard/Seeds.vue";
import Seeds from '../pages/dashboard/Seeds.vue';
import Seed from "@/pages/dashboard/Seed.vue";
import AllHelp from "@/pages/dashboard/AllHelp.vue";
import AllVolunteers from "@/pages/dashboard/AllVolunteers.vue";
import Volunteer from "@/pages/dashboard/Volunteer.vue";
import VolunteerRequests from "@/pages/dashboard/VolunteerRequests.vue";
import DataVolunteerRequest from "@/pages/dashboard/DataVolunteerRequest.vue";
import AllBeneficiaries from "@/pages/dashboard/AllBeneficiaries.vue";
import BeneficiarieRequests from "@/pages/dashboard/BeneficiarieRequests.vue";
import DataBeneficiarieRequest from "@/pages/dashboard/DataBeneficiarieRequest.vue";
import Beneficiarie from "@/pages/dashboard/Beneficiarie.vue";
import Administrator from "@/pages/dashboard/Administrator.vue";
import UpdateAdministrator from "@/pages/dashboard/UpdateAdministrator.vue";
import UpdateBeneficiarie from "@/pages/dashboard/UpdateBeneficiarie.vue";
import UpdateVolunteer from "@/pages/dashboard/UpdateVolunteer.vue";
import UpdateHelp from "@/pages/dashboard/UpdateHelp.vue";
import Help from "@/pages/dashboard/Help.vue";
import CreateHelp from "@/pages/dashboard/CreateHelp.vue";

const dashboardRoutes = [
  // PÁGINAS DO DASHBOARD
  {
    path: "",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: "/all-help",
    name: "AllHelp",
    component: AllHelp,
  },
  {
    path: "/dashboard/seeds",
    name: "Seeds",
    component: Seeds,
  },
  {
    path: "/dashboard/seed",
    name: "Seed",
    component: Seed,
  },
  {
    path: "/dashboard/all-volunteers",
    name: "AllVolunteers",
    component: AllVolunteers,
  },
  {
    path: "/dashboard/volunteer-requests",
    name: "VolunteerRequests",
    component: VolunteerRequests,
  },
  {
    path: "/dashboard/data-volunteer-request",
    name: "DataVolunteerRequest",
    component: DataVolunteerRequest,
  },
  {
    path: "/dashboard/volunteer",
    name: "Volunteer",
    component: Volunteer,
  },
  {
    path: "/dashboard/all-beneficiaries",
    name: "AllBeneficiaries",
    component: AllBeneficiaries,
  },
  {
    path: "/dashboard/beneficiarie-requests",
    name: "BeneficiarieRequests",
    component: BeneficiarieRequests,
  },
  {
    path: "/dashboard/data-beneficiarie-request",
    name: "DataBeneficiarieRequest",
    component: DataBeneficiarieRequest,
  },
  {
    path: "/dashboard/beneficiarie",
    name: "Beneficiarie",
    component: Beneficiarie,
  },
  {
    path: "/dashboard/administrator",
    name: "Administrator",
    component: Administrator,
  },
  {
    path: "/dashboard/update-administrator",
    name: "UpdateAdministrator",
    component: UpdateAdministrator,
  },
  {
    path: "/dashboard/update-beneficiarie",
    name: "UpdateBeneficiarie",
    component: UpdateBeneficiarie,
  },
  {
    path: "/dashboard/update-volunteer",
    name: "UpdateVolunteer",
    component: UpdateVolunteer,
  },
  {
    path: "/dashboard/update-help",
    name: "UpdateHelp",
    component: UpdateHelp,
  },
  {
    path: "/dashboard/help",
    name: "Help",
    component: Help,
  },
  {
    path: "/dashboard/create-help",
    name: "CreateHelp",
    component: CreateHelp,
  },
];

const dashboardRouter = createRouter({
  history: createWebHistory(),
  routes: dashboardRoutes,
});

export default dashboardRouter;
