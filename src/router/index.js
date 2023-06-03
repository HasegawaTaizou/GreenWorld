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
import Teste from "@/pages/Teste.vue";
import Firebase from "@/pages/Firebase.vue";

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
    path: "/teste",
    name: "Teste",
    component: Teste
  },
  {
    path: "/firebase",
    name: "Firebase",
    component: Firebase
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
