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
export default useSlack;
//# sourceMappingURL=useSlack.js.map