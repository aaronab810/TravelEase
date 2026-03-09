import { createBrowserRouter } from "react-router";
import OnboardingScreen from "./screens/OnboardingScreen";

// FAMILY flow (Sarah)
import HomeScreen from "./screens/HomeScreen";
import StayScreen from "./screens/StayScreen";
import NavigateScreen from "./screens/NavigateScreen";
import TranslateScreen from "./screens/TranslateScreen";
import FamilyDocVaultScreen from "./screens/FamilyDocVaultScreen";
import BudgetPlannerScreen from "./screens/BudgetPlannerScreen";
import KidsZoneScreen from "./screens/KidsZoneScreen";
import BaggageTrackerScreen from "./screens/BaggageTrackerScreen";
import ProfileScreen from "./screens/ProfileScreen";

// STUDENT flow (Ayaan)
import StudentHomeScreen from "./screens/StudentHomeScreen";
import StudentNavigateScreen from "./screens/StudentNavigateScreen";
import DocVaultScreen from "./screens/DocVaultScreen";
import PackingListScreen from "./screens/PackingListScreen";
import StudentServicesScreen from "./screens/StudentServicesScreen";
import ArrivalStepsScreen from "./screens/ArrivalStepsScreen";
import StudentProfileScreen from "./screens/StudentProfileScreen";

// SENIOR flow (Meena)
import SeniorHomeScreen from "./screens/SeniorHomeScreen";
import AirportGuidanceScreen from "./screens/AirportGuidanceScreen";
import SeniorNavigateScreen from "./screens/SeniorNavigateScreen";
import SeniorDocsScreen from "./screens/SeniorDocsScreen";
import SeniorProfileScreen from "./screens/SeniorProfileScreen";
import SeniorInFlightScreen from "./screens/SeniorInFlightScreen";
import SeniorArrivalScreen from "./screens/SeniorArrivalScreen";

export const router = createBrowserRouter([
  { path: "/", Component: OnboardingScreen },

  // --- FAMILY ---
  { path: "/home", Component: HomeScreen },
  { path: "/stay", Component: StayScreen },
  { path: "/navigate", Component: NavigateScreen },
  { path: "/translate", Component: TranslateScreen },
  { path: "/family-docs", Component: FamilyDocVaultScreen },
  { path: "/budget", Component: BudgetPlannerScreen },
  { path: "/kids-zone", Component: KidsZoneScreen },
  { path: "/baggage", Component: BaggageTrackerScreen },
  { path: "/profile", Component: ProfileScreen },

  // --- STUDENT ---
  { path: "/student-home", Component: StudentHomeScreen },
  { path: "/student-navigate", Component: StudentNavigateScreen },
  { path: "/docs", Component: DocVaultScreen },
  { path: "/packing-list", Component: PackingListScreen },
  { path: "/student-services", Component: StudentServicesScreen },
  { path: "/arrival-steps", Component: ArrivalStepsScreen },
  { path: "/student-profile", Component: StudentProfileScreen },

  // --- SENIOR ---
  { path: "/senior-home", Component: SeniorHomeScreen },
  { path: "/airport-guidance", Component: AirportGuidanceScreen },
  { path: "/senior-navigate", Component: SeniorNavigateScreen },
  { path: "/senior-docs", Component: SeniorDocsScreen },
  { path: "/senior-profile", Component: SeniorProfileScreen },
  { path: "/senior-inflight", Component: SeniorInFlightScreen },
  { path: "/senior-arrival", Component: SeniorArrivalScreen },
]);
