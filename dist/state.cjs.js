
  /**
   * @license
   * utilhooks.js v1.0.1
   * Released under the MIT License.
   */

'use strict';

const useSlack = (slackUrl) => {
    // NOTE messageObj https://api.slack.com/block-kit/building
    const postMessage = async (messageObj) => {
        await fetch(slackUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
            },
            body: JSON.stringify(messageObj)
        });
    };
    return {
        postMessage
    };
};

var index = {
    useSlack
};

module.exports = index;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGUuY2pzLmpzIiwic291cmNlcyI6WyIuLi9zcmMvdXNlU2xhY2svdXNlU2xhY2sudHMiLCIuLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnkgKi9cbnR5cGUgTWVzc2FnZU9iaiA9IGFueTtcblxuaW50ZXJmYWNlIFVzZVNsYWNrIHtcbiAgcG9zdE1lc3NhZ2U6IChtZXNzYWdlT2JqOiBNZXNzYWdlT2JqKSA9PiBQcm9taXNlPHZvaWQ+XG59XG5cbmNvbnN0IHVzZVNsYWNrID0gKHNsYWNrVXJsOiBzdHJpbmcpOiBVc2VTbGFjayA9PiB7XG5cbiAgLy8gTk9URSBtZXNzYWdlT2JqIGh0dHBzOi8vYXBpLnNsYWNrLmNvbS9ibG9jay1raXQvYnVpbGRpbmdcbiAgY29uc3QgcG9zdE1lc3NhZ2UgPSBhc3luYyAobWVzc2FnZU9iajogTWVzc2FnZU9iaikgPT4ge1xuICAgIGF3YWl0IGZldGNoKHNsYWNrVXJsLCB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQ7Y2hhcnNldD1VVEYtOCdcbiAgICAgIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShtZXNzYWdlT2JqKVxuICAgIH0pXG4gIH1cblxuICByZXR1cm4ge1xuICAgIHBvc3RNZXNzYWdlXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgdXNlU2xhY2tcbiIsImltcG9ydCB1c2VTbGFjayBmcm9tICcuL3VzZVNsYWNrL3VzZVNsYWNrJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICB1c2VTbGFja1xufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQU9BLE1BQU0sUUFBUSxHQUFHLENBQUMsUUFBZ0I7O0lBR2hDLE1BQU0sV0FBVyxHQUFHLE9BQU8sVUFBc0I7UUFDL0MsTUFBTSxLQUFLLENBQUMsUUFBUSxFQUFFO1lBQ3BCLE1BQU0sRUFBRSxNQUFNO1lBQ2QsT0FBTyxFQUFFO2dCQUNQLGNBQWMsRUFBRSxpREFBaUQ7YUFDbEU7WUFDRCxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUM7U0FDakMsQ0FBQyxDQUFBO0tBQ0gsQ0FBQTtJQUVELE9BQU87UUFDTCxXQUFXO0tBQ1osQ0FBQTtBQUNILENBQUM7O0FDckJELFlBQWU7SUFDYixRQUFRO0NBQ1Q7Ozs7In0=
