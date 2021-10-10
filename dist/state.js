
  /**
   * @license
   * utilhooks.js v1.0.1
   * Released under the MIT License.
   */

var utilhooks = (function () {
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

    return index;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGUuanMiLCJzb3VyY2VzIjpbIi4uL3NyYy91c2VTbGFjay91c2VTbGFjay50cyIsIi4uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSAgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueSAqL1xudHlwZSBNZXNzYWdlT2JqID0gYW55O1xuXG5pbnRlcmZhY2UgVXNlU2xhY2sge1xuICBwb3N0TWVzc2FnZTogKG1lc3NhZ2VPYmo6IE1lc3NhZ2VPYmopID0+IFByb21pc2U8dm9pZD5cbn1cblxuY29uc3QgdXNlU2xhY2sgPSAoc2xhY2tVcmw6IHN0cmluZyk6IFVzZVNsYWNrID0+IHtcblxuICAvLyBOT1RFIG1lc3NhZ2VPYmogaHR0cHM6Ly9hcGkuc2xhY2suY29tL2Jsb2NrLWtpdC9idWlsZGluZ1xuICBjb25zdCBwb3N0TWVzc2FnZSA9IGFzeW5jIChtZXNzYWdlT2JqOiBNZXNzYWdlT2JqKSA9PiB7XG4gICAgYXdhaXQgZmV0Y2goc2xhY2tVcmwsIHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZDtjaGFyc2V0PVVURi04J1xuICAgICAgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KG1lc3NhZ2VPYmopXG4gICAgfSlcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgcG9zdE1lc3NhZ2VcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB1c2VTbGFja1xuIiwiaW1wb3J0IHVzZVNsYWNrIGZyb20gJy4vdXNlU2xhY2svdXNlU2xhY2snO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHVzZVNsYWNrXG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQU9BLE1BQU0sUUFBUSxHQUFHLENBQUMsUUFBZ0I7O1FBR2hDLE1BQU0sV0FBVyxHQUFHLE9BQU8sVUFBc0I7WUFDL0MsTUFBTSxLQUFLLENBQUMsUUFBUSxFQUFFO2dCQUNwQixNQUFNLEVBQUUsTUFBTTtnQkFDZCxPQUFPLEVBQUU7b0JBQ1AsY0FBYyxFQUFFLGlEQUFpRDtpQkFDbEU7Z0JBQ0QsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDO2FBQ2pDLENBQUMsQ0FBQTtTQUNILENBQUE7UUFFRCxPQUFPO1lBQ0wsV0FBVztTQUNaLENBQUE7SUFDSCxDQUFDOztBQ3JCRCxnQkFBZTtRQUNiLFFBQVE7S0FDVDs7Ozs7Ozs7In0=
