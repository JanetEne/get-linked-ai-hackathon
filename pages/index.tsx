import Divider from '@components/Atoms/Divider';
import Layout from '@components/Layouts/Landing';
import Faqs from '@components/Organisms/FAQs';
import Introduction from '@components/Organisms/Introduction';
import JudgingCriteria from '@components/Organisms/JudgingCriteria';
import PartnersAndSponsors from '@components/Organisms/PatnersAndSponsors';
import PricesAndRewards from '@components/Organisms/PricesAndRewards';
import PrivacyPolicy from '@components/Organisms/PrivacyPolicy';
import RulesAndGuidelines from '@components/Organisms/RulesAndGuidelines';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <Layout>
      <Introduction />
      <Divider />
      <RulesAndGuidelines />
      <Divider />
      <JudgingCriteria />
      <Divider />
      <Faqs />
      <Divider />
      <PricesAndRewards />
      <Divider />
      <PartnersAndSponsors />
      <Divider />
      <PrivacyPolicy />
    </Layout>
  );
};

export default Home;
