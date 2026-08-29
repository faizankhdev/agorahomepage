import {
  ChartNoAxesColumnIncreasing,
  Compass,
  GalleryVerticalEnd,
  Headphones,
  Heart,
} from "lucide-react";
import { AllStoresIcon, DeveloperToolIcon, DiscoverIcon, SearchIcon, StoreManagerIcon } from "./svg";

export const navigation = [
  {
    label: "Recommendations for you",
    href: "/",
    icon: Compass,
  },
  {
    label: "All stores",
    href: "/stores",
    icon: AllStoresIcon,
  },
  {
    label: "Search history",
    href: "/history",
    icon: SearchIcon,
  },
];

export const collections = [
  {
    label: "Discover",
    href: "/explore",
    icon: DiscoverIcon,
  },
  {
    label: "My collections",
    href: "/collections",
    icon: Heart,
  },
];

export const build = [
  {
    label: "Store manager",
    href: "/store-manager",
    icon: StoreManagerIcon,
    protected: true,
  },
  {
    label: "Developer tools",
    icon: DeveloperToolIcon,
    href: "/developer-tools",
    protected: true,
  },
];
