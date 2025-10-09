import { PageContentWrapper, Banner, PageTextWrapper } from "../styles";
import { DaigoroTile } from "../../assets/images";

export default function Home() {
  return (
    <PageContentWrapper>
      <Banner image={DaigoroTile}>
        <span>Home</span>
      </Banner>
      <PageTextWrapper>Home</PageTextWrapper>
    </PageContentWrapper>
  );
}
