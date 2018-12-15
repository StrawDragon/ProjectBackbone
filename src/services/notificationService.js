import { socketConnect, generateSignChannel } from 'sources/socket';
import WebSocketService from 'services/webSockets';
import { URL_OFD_WEBSOCKET } from 'constants/urls';
import { requestHasUserActions } from 'actions';


/**
 * Установка связи по WebSocket
 */
//ToDo когда будет готов бек, добавить обработку ошибок


export default class NotificationService {
  authData = null;
  webSocketService = new WebSocketService(URL_OFD_WEBSOCKET);

  constructor(apiKey, userId, hasActions) {
    this.apiKey = apiKey;
    this.userId = userId;
    this.hasActions = hasActions;
    /**
     * Обработчик сообщений от сервера
     */
    this.resolveMessage = event => {
      const data = JSON.parse(event.data);
      if(data.body.data.action === 'applications'){
        requestHasUserActions(this.hasActions);
      }
    };
    /**
     * Обработчик ошибок
     */
    this.rejectMessage = error => console.error(error);
    this.authService();
  }

  async authService() {
    try {
      const socketResponse = await socketConnect();
      if (socketResponse.data.ok) {
        try {
          this.authData = await this.webSocketService.request({
            uid: '1',
            method: 'connect',
            params: {
              ...socketResponse.data.result,
              timestamp: socketResponse.data.result.timestamp.toString(),
              user: `ID${this.userId}`,
            },
          });
          this.authPrivateChannel();
        } catch (e) {
          console.error(e.message);
        }
      } else {
        throw new Error(socketResponse.description);
      }
    } catch (e) {
      console.error(e.message);
    }
  }

  async authPrivateChannel(){
    try{
      const responseChannel = await generateSignChannel(this.authData.body.client);
      if(responseChannel.data.ok){
        try{
          await this.webSocketService.request({
            uid: '1',
            method: 'subscribe',
            params: {
              channel: `$CHANNEL${this.userId}`,
              client: this.authData.body.client,
              info: this.apiKey,
              sign: responseChannel.data.result.sign,
            },
          });
          this.webSocketService.receiveMessage(this.resolveMessage, this.rejectMessage);
        }catch(e){
          console.error(e.message);
        }
      }else{
        throw new Error(responseChannel.data.description);
      }
    }catch(e){
      console.error(e.message);
    }
  }
}
