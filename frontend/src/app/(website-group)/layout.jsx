import Header from "@/components/website/Header";
import Footer from "@/components/website/Footer";
import StoreProvider from "@/redux/StoreProvider";
import { getUser } from "@/api/user";

export default async function WebsiteLayout({ children }) {
  const user = await getUser();

  return (
    <StoreProvider>
      <Header user={user} />
      {children}
      <Footer />
    </StoreProvider>
  );
}
