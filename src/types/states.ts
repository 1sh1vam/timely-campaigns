export type StatesT = {
  status: 'init' | 'pending' | 'success' | 'failed';
  msg?: string;
}