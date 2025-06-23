import { messageType } from '../types/messagetype';
import {
  MessageReturnType,
  ReceivedMessageTotaisType,
  ReceivedMessageType,
} from '../types/recevedmessagetype';

export const decodeMessage = (message: ReceivedMessageType): messageType => {
  const textMessage =
    `<b>Item:</b> ${message.item}<br />` +
    `<b>Natureza:</b> ${
      message.natureza == 'entrada' ? 'Entrada' : 'Saída'
    }<br />` +
    `<b>Parcela:</b> ${message.parcela_atual}<br />` +
    `<b>Parcelado:</b> ${message.parcelado ? 'Sim' : 'Não'}<br />` +
    `<b>Total de Parcelas:</b> ${message.parcelas}<br />` +
    `<b>Quantidade:</b> ${message.qtd}<br />` +
    `<b>Total:</b> ${message.total.toFixed(2)}<br />` +
    `<b>Valor da Parcela:</b> ${message.valor_parcela_atual.toFixed(2)}<br />` +
    `<b>Data da Parcela:</b> ${new Date(message.date_create).toLocaleString()}`;
  return {
    text: textMessage,
    status: 'delivered', // Assuming the status is 'delivered' for received messages
  };
};

export const decodeTotaisMessage = (
  message: ReceivedMessageTotaisType
): messageType => {
  const textMessage =
    `<b>Despesas Totais:</b> ${Number(message.despesas).toFixed(2)}<br />` +
    `<b>Receitas Totais:</b> ${Number(message.receitas).toFixed(2)}<br />` +
    `<b> Referente ao período: </b> ${message.month}` +
    `/${message.year}`;
  return {
    text: textMessage,
    status: 'delivered', // Assuming the status is 'delivered' for received messages
  };
};

export const decodeMessages = (
  messages: ReceivedMessageType[]
): messageType[] => {
  return messages.map(decodeMessage);
};

export const decodeTypeMessage = (
  message: MessageReturnType
): messageType[] => {
  if (message?.items?.length > 0) {
    return decodeMessages(message.items);
  }
  if (message?.totais) {
    return [decodeTotaisMessage(message.totais)];
  }
  if (message?.error) {
    return [
      {
        text: `${message.error}`,
        status: 'delivered', // Assuming the status is 'delivered' for error messages
      },
    ];
  }

  return [];
};
