import { Log } from './Log.js';
import { State } from './State.js';

export class SignoutRequestPost {
    constructor({url, id_token_hint, post_logout_redirect_uri, data, extraQueryParams, request_type}) {
        if (!url) {
            Log.error("SignoutRequestPost.ctor: No url passed");
            throw new Error("url");
        }

        if (id_token_hint) {
            this.id_token_hint = id_token_hint;
        }

        if (post_logout_redirect_uri) {
            this.post_logout_redirect_uri = post_logout_redirect_uri;

            if (data) {
                this.state = new State({ data, request_type });
                this.state_id = this.state.id;
            }
        }

        // todo: extraQueryParams
        if(extraQueryParams){
            this.extraQueryParams=extraQueryParams;
        }

        this.url = url;
    }
}
