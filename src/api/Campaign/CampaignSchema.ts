import { CampaignStatusEnum } from '../../utils/enums/campaignStatus';
import { CampaignTypeEnum } from '../../utils/enums/campaignType';

export type Campaign = {
  __typename: 'Campaign';
  brandid: string;
  campaignName: string;
  numConversationsListenedInLastThreeMonths: string | null;
  campaignId: string | null;
  startDateAtUTC: string | null;
  endDateAtUTC: string | null;
  createdAtUTC: string | null;
  updatedAtUTC: string | null;
  status: CampaignStatusEnum | null;
  type: CampaignTypeEnum | null;
  details: string | null;
  brief: string | null;
  objective: string | null;
  keywords: Array<string | null> | null;
  proposalEmails: Array<string | null> | null;
  brandName: string | null;
  keywordBrand: string | null;
  keywordCategory: string | null;
  keywordSubCategories?: Array<string | null> | null;
  campaignSummary: string | null;
  cmcReportName: string | null;
  groupIds: Array<string | null> | null;
  s3ReportUrl?: string | null;
  campaignPeriod: string | null;
  taskTitle: string | null;
  defaultTaskDate: string | null;
  KPIs: Array<string | null> | null;
  primaryObjective: string | null;
  secondaryObjective: string | null;
  cmcType: Array<string | null> | null;
  timezoneName: string | null;
  s3CoverImageUrl: string | null;
  cmcReportVersion: string | null;
  defaultPostContentType: string | null;
  typeformId: string | null;
  productPurchaseInfo: string | null;
  productPurchaseRequired: boolean | null;
  trainingLinkMessage: string | null;
};
