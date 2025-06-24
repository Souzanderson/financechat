export type ReceivedMessageType = {
  date_create: string; // e.g., "2025-06-16T11:16:50.480627"
  id: number | null;
  item: string;
  natureza: string;
  parcela_atual: number;
  parcelado: boolean;
  parcelas: number;
  qtd: number;
  total: number;
  valor_parcela_atual: number;
};

export type ReceivedMessageTotaisType = {
  despesas: number;
  receitas: number;
  deficit: number;
  month: string; // e.g., "06"
  year: number; // e.g., 2025
};

export type MessageReturnType = {
  items: ReceivedMessageType[];
  totais: ReceivedMessageTotaisType;
  error?: string;
};
