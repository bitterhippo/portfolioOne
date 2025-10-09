import { PageContentWrapper, Banner, PageTextWrapper } from "../styles";
import { Daigoro1 } from "../../assets/images";

export default function Home() {
  return (
    <PageContentWrapper>
      <Banner image={Daigoro1} />
      <PageTextWrapper>Home</PageTextWrapper>
    </PageContentWrapper>
  );
}
