import { createRouter, createWebHistory } from "vue-router";

import Home from "@/pages/Home.vue";
import Volunteers from "@/pages/Volunteers.vue";
import EveryDropCounts from "@/pages/EveryDropCounts.vue";
import SeedOfLove from "@/pages/SeedOfLove.vue";
import FoodBasketDistribution from "@/pages/FoodBasketDistribution.vue";
import FeedbackBeneficiaries from "@/pages/FeedbackBeneficiaries.vue";
import OurPartners from "@/pages/OurPartners.vue";
import Login from "@/pages/Login.vue";
import VolunteerRegistrationPartOne from "@/pages/VolunteerRegistrationPartOne.vue";
import VolunteerRegistrationPartTwo from "@/pages/VolunteerRegistrationPartTwo.vue";
import VolunteerRegistrationPartThree from "@/pages/VolunteerRegistrationPartThree.vue";
import BeneficiaryRegistrationPartOne from "@/pages/BeneficiaryRegistrationPartOne.vue";
import BeneficiaryRegistrationPartTwo from "@/pages/BeneficiaryRegistrationPartTwo.vue";
import BeneficiaryRegistrationPartThree from "@/pages/BeneficiaryRegistrationPartThree.vue";
import CheckYourEmail from "@/pages/CheckYourEmail.vue";
import RedefinePassword from "@/pages/RedefinePassword.vue";
import RedefinePasswordConfirmation from "@/pages/RedefinePasswordConfirmation.vue";
import PrivacyPolicy from "@/pages/PrivacyPolicy.vue";
import Faq from "@/pages/Faq.vue";
//DASHBOARD
import Dashboard from "@/pages/dashboard/Dashboard.vue";
import Seeds from '@/pages/dashboard/Seeds.vue';
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
// TELAS DE TESTE
import Requisicoes from "@/pages/Requisicoes.vue";
import Firebase from "@/pages/Firebase.vue";
import Criptografia from "@/pages/Criptografia.vue";
import Menu from "@/pages/Menu.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/volunteers",
    name: "Volunteers",
    component: Volunteers,
  },
  {
    path: "/every-drop-counts",
    name: "EveryDropCounts",
    component: EveryDropCounts,
  },
  {
    path: "/seed-of-love",
    name: "SeedOfLove",
    component: SeedOfLove,
  },
  {
    path: "/food-basket-distribution",
    name: "FoodBasketDistribution",
    component: FoodBasketDistribution,
  },
  {
    path: "/feedback-beneficiaries",
    name: "FeedbackBeneficiaries",
    component: FeedbackBeneficiaries,
  },
  {
    path: "/our-partners",
    name: "OurPartners",
    component: OurPartners,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/volunteer-registration-part-one",
    name: "VolunteerRegistrationPartOne",
    component: VolunteerRegistrationPartOne,
  },
  {
    path: "/volunteer-registration-part-two",
    name: "VolunteerRegistrationPartTwo",
    component: VolunteerRegistrationPartTwo,
  },
  {
    path: "/volunteer-registration-part-three",
    name: "VolunteerRegistrationPartThree",
    component: VolunteerRegistrationPartThree,
  },
  {
    path: "/beneficiary-registration-part-one",
    name: "BeneficiaryRegistrationPartOne",
    component: BeneficiaryRegistrationPartOne,
  },
  {
    path: "/beneficiary-registration-part-two",
    name: "BeneficiaryRegistrationPartTwo",
    component: BeneficiaryRegistrationPartTwo,
  },
  {
    path: "/beneficiary-registration-part-three",
    name: "BeneficiaryRegistrationPartThree",
    component: BeneficiaryRegistrationPartThree,
  },
  {
    path: "/check-your-email",
    name: "CheckYourEmail",
    component: CheckYourEmail,
  },
  {
    path: "/redefine-password",
    name: "RedefinePassword",
    component: RedefinePassword,
  },
  {
    path: "/redefine-password-confirmation",
    name: "RedefinePasswordConfirmation",
    component: RedefinePasswordConfirmation,
  },
  {
    path: "/faq",
    name: "Faq",
    component: Faq,
  },
  {
    path: "/privacy-policy",
    name: "PrivacyPolicy",
    component: PrivacyPolicy,
  },

  //DASHBOARD
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
    children: [
      {
        path: "/dashboard/all-help",
        name: "AllHelp",
        component: AllHelp,
      },
      {
        path: "/dashboard/seeds",
        name: "Seeds",
        component: Seeds,
      },
      {
        path: "/dashboard/seeds/seed",
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
        path: "/dashboard/volunteer-requests/volunteer-request",
        name: "DataVolunteerRequest",
        component: DataVolunteerRequest,
      },
      {
        path: "/dashboard/all-volunteers/volunteer",
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
        path: "/dashboard/all-volunteers/volunteer/update-volunteer",
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
    ],
  },

  // TESTES DE FUNCIONALIDADES
  {
    path: "/requisicoes",
    name: "Requisicoes",
    component: Requisicoes,
  },
  {
    path: "/firebase",
    name: "Firebase",
    component: Firebase,
  },
  {
    path: "/criptografia",
    name: "Criptografia",
    component: Criptografia,
  },
  {
    path: "/menu",
    name: "Menu",
    component: Menu,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
