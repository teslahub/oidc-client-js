import { Log } from './Log.js';

export class EndSessionClient {
    constructor(settings) {
        if (!settings) {
            Log.error("EndSessionClient.ctor: No settings provided");
            throw new Error("No settings provided.");
        }
    }

    signout(signoutRequest) {
        // Create the form element
        var form = document.createElement('form');
        form.setAttribute('method', 'POST');
        form.setAttribute('action', signoutRequest.url);
        // Hide the form from the user
        form.style.display = 'none'; 

        // todo: extraQueryParams
        const postData = {
            id_token_hint: signoutRequest.id_token_hint,
            post_logout_redirect_uri: signoutRequest.post_logout_redirect_uri,
            state: signoutRequest.state_id
        }

        // Add data as hidden input fields
        for (var key in postData) {
            if (postData.hasOwnProperty(key)) {
                if (postData[key]) {
                    var input = document.createElement('input');
                    input.setAttribute('type', 'hidden');
                    input.setAttribute('name', key);
                    input.setAttribute('value', postData[key]);
                    form.appendChild(input);
                }
            }
        }

        // Append the form to the body and submit it
        document.body.appendChild(form);
        return form.submit();
    }
}
