import { Campaign } from '../../components/Campaign';
import { useEffect, useState } from 'react';
import { Layout } from '../../templates/Layout';
import { Meta } from '../../layout/Meta';

type PageProps = { address: string };

const CampaignPage = ({ address }: PageProps) => {
  const [state, setState] = useState({ data: undefined as any });

  async function createCampaign() {
    const c = await Campaign(address as string);
    const [minContribution, balance, requests, approversCount, manager] = await c.getSummary();
    setState({
      ...state,
      data: { minContribution, balance, requests, approversCount, manager },
    });
  }

  useEffect(() => {
    createCampaign();
  }, []);

  return (
    <Layout
      meta={
        <Meta
          title="Next.js Boilerplate Presentation"
          description="Next js Boilerplate is the perfect starer code for your project. Build your React application with Next.js framework."
        />
      }
    >
      <div className="flex items-center justify-between">
        <h1 className="font-bold text-2xl">Campaign Details</h1>
      </div>
      <div>
        <h2>Manager: {state.data?.manager} </h2>
      </div>
    </Layout>
  );
};

export default CampaignPage;

CampaignPage.getInitialProps = async ({ query }: any) => {
  const { campaign: address } = query;
  return { address };
};
