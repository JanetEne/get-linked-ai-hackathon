import Divider from '@components/Atoms/Divider';
import Layout from '@components/Layouts/Landing';
import Faqs from '@components/Organisms/FAQs';
import HeroSection from '@components/Organisms/Hero';
import Introduction from '@components/Organisms/Introduction';
import JudgingCriteria from '@components/Organisms/JudgingCriteria';
import PartnersAndSponsors from '@components/Organisms/PatnersAndSponsors';
import PricesAndRewards from '@components/Organisms/PricesAndRewards';
import PrivacyPolicy from '@components/Organisms/PrivacyPolicy';
import RulesAndGuidelines from '@components/Organisms/RulesAndGuidelines';
import Timeline from '@components/Organisms/Timeline';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <Layout>
      <HeroSection />
      <Divider />
      <Introduction />
      <Divider />
      <RulesAndGuidelines />
      <Divider />
      <JudgingCriteria />
      <Divider />
      <Faqs />
      <Divider />
      <Timeline />
      <PricesAndRewards />
      <PartnersAndSponsors />
      <Divider />
      <PrivacyPolicy />
    </Layout>
  );
};

export default Home;
