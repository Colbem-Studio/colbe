import { LegalLayout } from "@/components/legal/legal-layout";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <LegalLayout>{children}</LegalLayout>;
}