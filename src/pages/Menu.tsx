import MenuHero from "@/components/Menu/MenuHero";
import MenuList from "@/components/Menu/MenuList";
import OrderOnline from "@/components/OrderOnline";

const MenuPage = () => {
  return (
    <main className="pt-20">
      <MenuHero />
      <MenuList />
      <OrderOnline />
    </main>
  );
};

export default MenuPage;
