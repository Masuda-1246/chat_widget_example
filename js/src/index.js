import ChatUx from './chat-ux.js';

const chatux = new ChatUx();
const initParam =
        {
            renderMode: 'auto',
            api: {
                endpoint: 'http://0.0.0.0:80',
                method: 'GET',
                dataType: 'jsonp'
            },
            bot: {
                botPhoto: 'https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/rkgkbhsyildogpvvwcxf',
                humanPhoto: null,
                widget: {
                    sendLabel: '送信',
                    placeHolder: '何か話しかけてみてください'
                }
            },
            window: {
                title: 'Chat AI Pro',
                infoUrl: 'https://chat-aipro.80and.co/'
            }
        };
chatux.init(initParam);
chatux.start(true);