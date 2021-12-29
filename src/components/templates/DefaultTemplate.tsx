import { StatusBar } from "../ui/pages-components/status-bar/StatusBar";
import { MainMenu } from "../ui/pages-components/main-menu/MainMenu";
import { SungkaBanner } from "../ui/pages-components/sungka-banner/SungkaBanner";
import { Footer } from "../ui/pages-components/footer/Footer";

export const DefaultTemplate = (props: any) => {
  return (
    <div className={"page " + props.className}>
      <StatusBar />
      <MainMenu />
      <SungkaBanner />
      <div className="container">{props.page}</div>
      <Footer />
    </div>
  );
};
