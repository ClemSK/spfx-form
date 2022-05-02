export interface IFormProps {
  description: string;
  isDarkTheme?: boolean;
  environmentMessage?: string;
  hasTeamsContext?: boolean;
  userDisplayName?: string;
  value: string | number;
  handleChange(event: React.FormEvent<HTMLInputElement>): void;
}
