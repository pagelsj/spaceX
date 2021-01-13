export interface LaunchModel {
  readonly mission_name: string;
  readonly launch_date: string;
  readonly rocket_name: string;
  readonly rocket_type: string;
  readonly landed_success: boolean;
  readonly customers: Array<string>;
  readonly mission_patch: string;
}
