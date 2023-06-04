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
import Requisicoes from "@/pages/Requisicoes.vue";
import Firebase from "@/pages/Firebase.vue";
import Criptografia from "@/pages/Criptografia.vue";

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
    component: VolunteerRegistrationPartOne
  },
  {
    path: "/volunteer-registration-part-two",
    name: "VolunteerRegistrationPartTwo",
    component: VolunteerRegistrationPartTwo
  },
  {
    path: "/volunteer-registration-part-three",
    name: "VolunteerRegistrationPartThree",
    component: VolunteerRegistrationPartThree
  },
  {
    path: "/beneficiary-registration-part-one",
    name: "BeneficiaryRegistrationPartOne",
    component: BeneficiaryRegistrationPartOne
  },
  {
    path: "/beneficiary-registration-part-two",
    name: "BeneficiaryRegistrationPartTwo",
    component: BeneficiaryRegistrationPartTwo
  },
  {
    path: "/beneficiary-registration-part-three",
    name: "BeneficiaryRegistrationPartThree",
    component: BeneficiaryRegistrationPartThree
  },
  {
    path: "/check-your-email",
    name: "CheckYourEmail",
    component: CheckYourEmail
  },
  {
    path: "/redefine-password",
    name: "RedefinePassword",
    component: RedefinePassword
  },
  {
    path: "/redefine-password-confirmation",
    name: "RedefinePasswordConfirmation",
    component: RedefinePasswordConfirmation
  },
  {
    path: "/faq",
    name: "Faq",
    component: Faq
  },
  {
    path: "/privacy-policy",
    name: "PrivacyPolicy",
    component: PrivacyPolicy
  },
  {
    path: "/requisicoes",
    name: "Requisicoes",
    component: Requisicoes
  },
  {
    path: "/firebase",
    name: "Firebase",
    component: Firebase
  },
  {
    path: "/criptografia",
    name: "Criptografia",
    component: Criptografia
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
