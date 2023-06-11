import { createRouter, createWebHistory } from "vue-router";

// DASHBOARD
import Dashboard from "@/pages/dashboard/Dashboard.vue";
import Seeds from "@/pages/dashboard/Seeds.vue";
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
    path: "/seeds",
    name: "Seeds",
    component: Seeds,
  },
  {
    path: "/seed",
    name: "Seed",
    component: Seed,
  },
  {
    path: "/all-volunteers",
    name: "AllVolunteers",
    component: AllVolunteers,
  },
  {
    path: "/volunteer-requests",
    name: "VolunteerRequests",
    component: VolunteerRequests,
  },
  {
    path: "/data-volunteer-request",
    name: "DataVolunteerRequest",
    component: DataVolunteerRequest,
  },
  {
    path: "/volunteer",
    name: "Volunteer",
    component: Volunteer,
  },
  {
    path: "/all-beneficiaries",
    name: "AllBeneficiaries",
    component: AllBeneficiaries,
  },
  {
    path: "/beneficiarie-requests",
    name: "BeneficiarieRequests",
    component: BeneficiarieRequests,
  },
  {
    path: "/data-beneficiarie-request",
    name: "DataBeneficiarieRequest",
    component: DataBeneficiarieRequest,
  },
  {
    path: "/beneficiarie",
    name: "Beneficiarie",
    component: Beneficiarie,
  },
  {
    path: "/administrator",
    name: "Administrator",
    component: Administrator,
  },
  {
    path: "/update-administrator",
    name: "UpdateAdministrator",
    component: UpdateAdministrator,
  },
  {
    path: "/update-beneficiarie",
    name: "UpdateBeneficiarie",
    component: UpdateBeneficiarie,
  },
  {
    path: "/update-volunteer",
    name: "UpdateVolunteer",
    component: UpdateVolunteer,
  },
  {
    path: "/update-help",
    name: "UpdateHelp",
    component: UpdateHelp,
  },
  {
    path: "/help",
    name: "Help",
    component: Help,
  },
  {
    path: "/create-help",
    name: "CreateHelp",
    component: CreateHelp,
  },
];

const dashboardRouter = createRouter({
  history: createWebHistory(),
  routes: dashboardRoutes,
});

export default dashboardRouter;
