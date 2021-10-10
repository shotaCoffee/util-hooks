declare type MessageObj = any;
interface UseSlack {
    postMessage: (messageObj: MessageObj) => Promise<void>;
}
declare const useSlack: (slackUrl: string) => UseSlack;
export default useSlack;
