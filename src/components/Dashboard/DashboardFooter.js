import CardBuyMore from "./CardBuyMore";
import CardFAQ from "./CardFAQ";
import CardTrainer from "./CardTrainer";
import { InfoCardsWrapper } from "./DashboardFooter.styled";

const DashboardFooter = () => {
  return (
    <InfoCardsWrapper>
      <CardBuyMore />
      <CardTrainer />
      <CardFAQ />
    </InfoCardsWrapper>
  );
};

export default DashboardFooter;
