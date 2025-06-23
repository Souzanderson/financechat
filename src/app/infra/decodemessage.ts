import { messageType } from '../types/messagetype';
import { ReceivedMessageType } from '../types/recevedmessagetype';

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

export const decodeMessages = (
  messages: ReceivedMessageType[]
): messageType[] => {
  return messages.map(decodeMessage);
};
