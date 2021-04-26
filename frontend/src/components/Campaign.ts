import CampaignJSON from '../contracts/Campaign.json';
import { Campaign as CampaignType } from '../../../backend/typechain';
import { ethers } from 'ethers';
import provider from '../utils/Provider';

export const Campaign = (address: string) =>
  new ethers.Contract(address, CampaignJSON.abi, provider) as CampaignType;
