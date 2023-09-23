export interface IRegister {
  email: string;
  phone_number: string;
  team_name: string;
  group_size: number;
  project_topic: string;
  category: any;
  privacy_poclicy_accepted: boolean;
}

export interface IContact {
  email: string;
  phone_number: string;
  first_name: string;
  message: string;
}
