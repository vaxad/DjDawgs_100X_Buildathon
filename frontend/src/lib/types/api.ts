/* eslint-disable @typescript-eslint/no-explicit-any */
export type KeywordsResponse = {
    keywords: string[]
}

export type CompetitorMappingApiResponse = {
    short_description?: string;
    title?: string;
    key_employee_change_list?: any[] | null;
    current_employees_summary?: any | null;
    funds_summary?: any | null;
    current_advisors_image_list?: any[] | null;
    org_funding_total?: any | null;
    org_num_investors?: number | null;
    org_similarity_list?: any[] | null;
    company_financials_highlights?: any | null;
    investors_list?: any[] | null;
}

export type CoordinateData = {
    coordinates: {
      lat: number;
      lng: number;
    };
    extracted_value: number;
    location: string;
    max_value_index: number;
    value: string;
  };
  
export type CoordinateDataApiResponse = CoordinateData[];

export type CompanyData = {
    _id: string;
    name: string;
    description: string;
    vision: string;
    mission: string;
    valuation: number;
    domain: string;
    createdAt: string;
    props: {
      short_description: string;
      title: string;
      key_employee_change_list: {
        identifier: {
          uuid: string;
          entity_def_id: string;
        };
        press_reference_publisher: string;
        press_reference_link: {
          label: string;
          value: string;
        };
        key_event_date: string;
      }[];
      current_employees_summary: {
        identifier: {
          uuid: string;
          value: string;
          image_id: string;
          permalink: string;
          entity_def_id: string;
        };
        num_current_positions: number;
      };
      funds_summary: {
        funds_total: {
          value: number;
          currency: string;
          value_usd: number;
        };
        identifier: {
          uuid: string;
          value: string;
          image_id: string;
          permalink: string;
          entity_def_id: string;
        };
        num_funds: number;
      };
      current_advisors_image_list: {
        identifier: {
          uuid: string;
          value: string;
          permalink: string;
          entity_def_id: string;
        };
        person_identifier: {
          uuid: string;
          value: string;
          image_id: string;
          permalink: string;
          entity_def_id: string;
        };
        job_type: string;
        started_on: {
          value: string;
          precision: string;
        };
      }[];
      org_funding_total: null;
      org_num_investors: null;
      company_financials_highlights: {
        num_investments: number;
        num_investors: number;
        num_lead_investors: number;
        listed_stock_symbol: string;
        num_exits: number;
        num_lead_investments: number;
        num_funds: number;
        funding_total: {
          value: number;
          currency: string;
          value_usd: number;
        };
        num_funding_rounds: number;
      };
      investors_list: {
        is_lead_investor: boolean;
        identifier: {
          uuid: string;
          value: string;
          permalink: string;
          entity_def_id: string;
        };
        funding_round_identifier: {
          uuid: string;
          value: string;
          image_id: string;
          permalink: string;
          entity_def_id: string;
        };
        investor_identifier: {
          uuid: string;
          value: string;
          permalink: string;
          entity_def_id: string;
        };
        partner_identifiers?: {
          uuid: string;
          value: string;
          image_id: string;
          permalink: string;
          entity_def_id: string;
        }[];
      }[];
    };
    keywords: string[];
  };
  