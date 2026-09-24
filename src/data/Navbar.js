import { title } from "motion/react-client"
import BillingIcon from "../assets/icons/billing.png"
import CardIcon from "../assets/icons/contactless.png"
import WalletIcon from "../assets/icons/wallet.png"
import GiftVoucherIcon from "../assets/icons/gift-voucher.png"

export const navLinks = [
  {
    title: "Home",
    path: "/"
  },
  {
    title: "Products",
    path: "/"
  },
  {
    title: "About Us",
    path: "/about-us"
  },
  {
    title: "FAQs",
    path: "/#faqs"
  },
  {
    title: "Support",
    path: "/contact-us"
  },
]


export const quickLinksFooterNavLinks = [
  { title: "Features", path: "/" },
  { title: "About Us", path: "/" },
  { title: "Blog", path: "/" },
  { title: "Contact Us", path: "/" },
]

export const featuresFooterNavLinks = [
  { title: "Giftcards", path: "/" },
  { title: "Virtual Card", path: "/" },
  { title: "Bill Payments", path: "/" },
  { title: "Wallet Top Up", path: "/" },
]

export const legalFooterNavLinks = [
  { title: "Terms & Conditions", path: "/" },
  { title: "AML policy", path: "/" },
  { title: "Privacy Policy", path: "/" },
]

export const socialsFooterNavLinks = [
  { title: "Instagram", path: "/" },
  { title: "X", path: "/" },
]

export const featuresNavLinks = [
  {
    featureHeaderText: "Sell Gift Card",
    featureBriefText: "Turn you unused giftcards into cash instantly at unbeatable rates",
    path: "/features/sell-giftcards",
    icon: GiftVoucherIcon
  },
  {
    featureHeaderText: "Virtual Dollar Card",
    featureBriefText: "Shop effortlessly online with our Virtual visa and Mastercard",
    path: "/features/vdc",
    icon: CardIcon

  },
  {
    featureHeaderText: "Bill Payments",
    featureBriefText: "Manage and pay all you essential bills in one place",
    path: "/features/pay-bills",
    icon: BillingIcon

  },
  {
    featureHeaderText: "Virtual Bank Account",
    featureBriefText: "Top up your FinQard wallet easily whne you create a virtual bank account",
    path: "/features/top-up",
    icon: WalletIcon

  },
]