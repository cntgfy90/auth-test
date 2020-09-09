export interface LoginViewProps {
  login(data?: unknown): void;
  isLoading: boolean;
  error: string;
  moveToRegister(): void;
}
